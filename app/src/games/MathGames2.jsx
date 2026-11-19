// Các game Toán chương 1–4 (phần mở rộng).
import { useMemo, useState } from 'react';
import { pick, rand, shuffle, wait } from '../lib/util.js';
import { sfx } from '../lib/audio.js';
import { ASK_EQ, OP_WORD, numWord } from '../lib/numbers.js';
import { makeArith } from '../lib/arith.js';
import { COUNT_OBJECTS } from '../data/toan.js';
import { M } from '../data/toanPhrases.js';
import { RoundDots, Speaker, useOnce } from './common.jsx';

function useRounds(act, api) {
  const [r, setR] = useState(0);
  return [r, () => (r + 1 < act.rounds ? setR(r + 1) : api.done())];
}

/** Nút lựa chọn chung. options: [{ key, label, say }] */
export function Choices({ options, answer, onRight, api, wide }) {
  const [wrong, setWrong] = useState(() => new Set());
  const [done, setDone] = useState(false);
  return (
    <div className={wide ? 'num-buttons wide' : 'num-buttons'}>
      {options.map((o) => (
        <button
          key={o.key}
          className={`num-btn ${wide ? 'text' : ''} ${wrong.has(o.key) ? 'tried shake' : ''} ${done && o.key === answer ? 'ok' : ''}`}
          onClick={async () => {
            if (done || wrong.has(o.key)) return;
            if (o.key === answer) {
              setDone(true);
              sfx.good();
              if (o.say) await api.say(o.say);
              await api.good();
              onRight();
            } else {
              setWrong((w) => new Set(w).add(o.key));
              api.bad();
            }
          }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

const numOpt = (n) => ({ key: n, label: String(n), say: numWord(n) });
function nearNumbers(n, lo, hi, count = 3) {
  const pool = [];
  for (let x = Math.max(0, lo); x <= hi; x++) if (x !== n) pool.push(x);
  const near = pool.sort((a, b) => Math.abs(a - n) - Math.abs(b - n)).slice(0, 4);
  return shuffle([n, ...shuffle(near).slice(0, count - 1)]);
}

// ---------- Nhiều hơn – ít hơn – bằng nhau ----------
export function CompareGroups({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <CGRound key={r} act={act} api={api} index={r} onNext={next} />;
}
function CGRound({ act, api, index, onNext }) {
  const q = useMemo(() => {
    const [o1, o2] = shuffle(COUNT_OBJECTS).slice(0, 2);
    const a = rand(2, act.max || 8);
    let b = Math.random() < 0.25 ? a : rand(1, act.max || 8);
    const kind = pick(['more', 'less']);
    return { o1, o2, a, b, kind };
  }, [act]);
  const answer = q.a === q.b ? 'eq' : (q.kind === 'more') === q.a > q.b ? 'top' : 'bottom';
  const say = q.kind === 'more' ? M.groupsMore : M.groupsLess;
  useOnce(() => api.prompt(say));
  const [wrong, setWrong] = useState(null);
  const [ok, setOk] = useState(false);
  async function tap(k) {
    if (ok) return;
    if (k === answer) {
      setOk(true);
      sfx.good();
      await api.good();
      onNext();
    } else {
      setWrong(k);
      setTimeout(() => setWrong(null), 500);
      api.bad();
    }
  }
  const row = (o, n, k) => (
    <button className={`group-row ${wrong === k ? 'shake' : ''} ${ok && answer === k ? 'ok' : ''}`} onClick={() => tap(k)}>
      {Array.from({ length: n }, (_, i) => (
        <span key={i}>{o.icon}</span>
      ))}
    </button>
  );
  return (
    <div className="game">
      <RoundDots total={act.rounds} current={index} />
      <div className="ask">
        <span className="ask-text">{q.kind === 'more' ? 'Hàng nào nhiều hơn?' : 'Hàng nào ít hơn?'}</span>
        <Speaker text={say} api={api} small />
      </div>
      <div className="groups">
        {row(q.o1, q.a, 'top')}
        {row(q.o2, q.b, 'bottom')}
      </div>
      <button className={`btn-big ${wrong === 'eq' ? 'shake' : ''} ${ok && answer === 'eq' ? 'green' : ''}`} onClick={() => tap('eq')}>
        = Bằng nhau
      </button>
    </div>
  );
}

// ---------- So sánh số: > < = ----------
export function CompareNumbers({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <CNRound key={r} act={act} api={api} index={r} onNext={next} />;
}
function CNRound({ act, api, index, onNext }) {
  const q = useMemo(() => {
    const max = act.max || 10;
    const a = rand(act.min ?? 0, max);
    let b = Math.random() < 0.2 ? a : rand(act.min ?? 0, max);
    if (max > 20 && Math.random() < 0.5) b = Math.floor(a / 10) * 10 + rand(0, 9); // cùng chục cho khó hơn
    return { a, b: Math.min(b, max), obj: pick(COUNT_OBJECTS) };
  }, [act]);
  const ans = q.a > q.b ? '>' : q.a < q.b ? '<' : '=';
  const [placed, setPlaced] = useState(null);
  useOnce(() => api.prompt(M.signs));
  const opts = [
    { key: '>', label: '>', say: M.gt },
    { key: '<', label: '<', say: M.lt },
    { key: '=', label: '=', say: M.eq },
  ];
  return (
    <div className="game">
      <RoundDots total={act.rounds} current={index} />
      <div className="cmp-row">
        <div className="cmp-num">
          <b>{q.a}</b>
          {act.pics && <div className="mini-objs">{q.obj.icon.repeat(q.a)}</div>}
        </div>
        <div className={`cmp-sign ${placed ? 'ok' : ''}`}>{placed || '?'}</div>
        <div className="cmp-num">
          <b>{q.b}</b>
          {act.pics && <div className="mini-objs">{q.obj.icon.repeat(q.b)}</div>}
        </div>
      </div>
      <Choices
        options={opts}
        answer={ans}
        api={api}
        onRight={async () => {
          setPlaced(ans);
          await wait(500);
          onNext();
        }}
      />
    </div>
  );
}

// ---------- Phép cộng, phép trừ ----------
export function Arith({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <ArithRound key={r} act={act} api={api} index={r} onNext={next} />;
}
function ArithRound({ act, api, index, onNext }) {
  const q = useMemo(() => ({ ...makeArith(act), obj: pick(COUNT_OBJECTS), missing: act.missing && Math.random() < 0.5 }), [act]);
  const [solved, setSolved] = useState(false);
  const parts = q.missing
    ? [numWord(q.a), OP_WORD[q.op], M.whatNumber, M.equals, numWord(q.c)]
    : [numWord(q.a), OP_WORD[q.op], numWord(q.b), ASK_EQ];
  useOnce(() => api.prompt(parts));
  const answer = q.missing ? q.b : q.c;
  const hi = Math.max(10, answer + 3);
  const big = q.c >= 20 || q.a >= 20;
  return (
    <div className="game">
      <RoundDots total={act.rounds} current={index} />
      {act.pic && !big && (
        <div className="arith-pic">
          {q.op === '+' ? (
            <>
              <div className="mini-group">{q.obj.icon.repeat(q.a)}</div>
              <div className="op-big">➕</div>
              <div className="mini-group">{q.obj.icon.repeat(q.b)}</div>
            </>
          ) : (
            <div className="mini-group">
              {Array.from({ length: q.a }, (_, i) => (
                <span key={i} className={i >= q.a - q.b ? 'gone' : ''}>
                  {q.obj.icon}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="expr">
        <span>{q.a}</span>
        <span className="op">{q.op}</span>
        <span className={q.missing ? (solved ? 'ans ok' : 'ans') : ''}>{q.missing ? (solved ? q.b : '?') : q.b}</span>
        <span className="op">=</span>
        <span className={q.missing ? '' : solved ? 'ans ok' : 'ans'}>{q.missing ? q.c : solved ? q.c : '?'}</span>
        <Speaker text={parts} api={api} small />
      </div>
      <Choices
        options={nearNumbers(answer, 0, hi).map(numOpt)}
        answer={answer}
        api={api}
        onRight={async () => {
          setSolved(true);
          await wait(400);
          onNext();
        }}
      />
    </div>
  );
}

// ---------- Tách – gộp số ----------
export function Split({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <SplitRound key={r} act={act} api={api} index={r} onNext={next} />;
}
function SplitRound({ act, api, index, onNext }) {
  const q = useMemo(() => {
    const n = rand(act.min || 2, act.max || 10);
    const a = rand(1, n - 1);
    return { n, a, b: n - a };
  }, [act]);
  const parts = [numWord(q.n), M.consistsOf, numWord(q.a), M.andWhat];
  useOnce(() => api.prompt(parts));
  const [solved, setSolved] = useState(false);
  return (
    <div className="game">
      <RoundDots total={act.rounds} current={index} />
      <div className="split">
        <div className="split-top">{q.n}</div>
        <div className="split-legs">
          <div className="split-cell">
            {q.a}
            <div className="dots-row">{'🔴'.repeat(q.a)}</div>
          </div>
          <div className={`split-cell ${solved ? 'ok' : 'ans'}`}>
            {solved ? q.b : '?'}
            <div className="dots-row">{solved ? '🔵'.repeat(q.b) : ''}</div>
          </div>
        </div>
        <Speaker text={parts} api={api} small />
      </div>
      <Choices
        options={nearNumbers(q.b, 1, Math.max(q.n, 4)).map(numOpt)}
        answer={q.b}
        api={api}
        onRight={async () => {
          setSolved(true);
          await wait(500);
          onNext();
        }}
      />
    </div>
  );
}

// ---------- Đếm theo chục (thanh 10 khối + khối lẻ) ----------
function Blocks({ n }) {
  const tens = Math.floor(n / 10);
  const ones = n % 10;
  return (
    <div className="blocks">
      {Array.from({ length: tens }, (_, i) => (
        <div key={i} className="bar10">
          {Array.from({ length: 10 }, (_, k) => (
            <i key={k} />
          ))}
        </div>
      ))}
      <div className="ones">
        {Array.from({ length: ones }, (_, k) => (
          <i key={k} />
        ))}
      </div>
    </div>
  );
}
export function CountTens({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <CTRound key={r} act={act} api={api} index={r} onNext={next} />;
}
function CTRound({ act, api, index, onNext }) {
  const n = useMemo(() => (act.tensOnly ? rand(Math.ceil(act.min / 10), Math.floor(act.max / 10)) * 10 : rand(act.min, act.max)), [act]);
  useOnce(() => api.prompt(M.howManyCubes));
  const opts = useMemo(() => {
    const swap = (n % 10) * 10 + Math.floor(n / 10);
    const set = new Set([n, n + 10 <= 99 ? n + 10 : n - 10, n + 1 <= 99 ? n + 1 : n - 1]);
    if (swap !== n && swap > 9 && swap < 100) set.add(swap);
    return shuffle([...set].slice(0, 4)).map(numOpt);
  }, [n]);
  return (
    <div className="game">
      <RoundDots total={act.rounds} current={index} />
      <Blocks n={n} />
      <Choices options={opts} answer={n} api={api} onRight={onNext} />
    </div>
  );
}

// ---------- Nghe đọc số, chọn số ----------
export function ReadNumber({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <RNRound key={r} act={act} api={api} index={r} onNext={next} />;
}
function RNRound({ act, api, index, onNext }) {
  const n = useMemo(() => (act.step ? rand(Math.ceil(act.min / act.step), Math.floor(act.max / act.step)) * act.step : rand(act.min, act.max)), [act]);
  const parts = [M.findNumber, numWord(n)];
  useOnce(() => api.prompt(parts));
  const opts = useMemo(() => {
    const swap = (n % 10) * 10 + Math.floor(n / 10);
    const set = new Set([n]);
    if (swap !== n && swap >= act.min && swap <= act.max) set.add(swap);
    nearNumbers(n, act.min, act.max, 4).forEach((x) => set.size < 4 && set.add(x));
    return shuffle([...set]).map(numOpt);
  }, [n, act]);
  return (
    <div className="game">
      <RoundDots total={act.rounds} current={index} />
      <div className="ask">
        <span className="ask-text">Nghe và chọn số</span>
        <Speaker text={parts} api={api} />
      </div>
      <Choices options={opts} answer={n} api={api} onRight={onNext} />
    </div>
  );
}

// ---------- Chục và đơn vị ----------
export function TensUnits({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <TURound key={r} act={act} api={api} index={r} onNext={next} />;
}
function TURound({ act, api, index, onNext }) {
  const n = useMemo(() => rand(act.min || 11, act.max || 99), [act]);
  const t = Math.floor(n / 10), u = n % 10;
  const parts = [numWord(n), M.howManyTensUnits];
  useOnce(() => api.prompt(parts));
  const opts = useMemo(() => {
    const cands = [[t, u], [u, t], [t, (u + 1) % 10], [Math.max(1, t - 1), u]];
    const seen = new Set();
    return shuffle(
      cands
        .filter(([a, b]) => {
          const k = `${a}-${b}`;
          if (seen.has(k) || a === 0) return false;
          seen.add(k);
          return true;
        })
        .map(([a, b]) => ({ key: `${a}-${b}`, label: `${a} chục ${b} đơn vị` })),
    );
  }, [t, u]);
  return (
    <div className="game">
      <RoundDots total={act.rounds} current={index} />
      <div className="big-number">
        {n} <Speaker text={parts} api={api} small />
      </div>
      <Blocks n={n} />
      <Choices options={opts} answer={`${t}-${u}`} api={api} onRight={onNext} wide />
    </div>
  );
}

// ---------- Dài – ngắn ----------
const PENCIL_COLORS = ['#e53935', '#1e88e5', '#43a047', '#fb8c00', '#8e24aa'];
function Pencil({ len, color }) {
  const w = len * 34;
  return (
    <svg width={w + 40} height="44" viewBox={`0 0 ${w + 40} 44`}>
      <rect x="0" y="8" width={w} height="28" rx="4" fill={color} />
      <rect x={w - 14} y="8" width="14" height="28" fill="#f8bbd0" />
      <polygon points={`${w},8 ${w + 34},22 ${w},36`} fill="#ffe0b2" />
      <polygon points={`${w + 24},17 ${w + 34},22 ${w + 24},27`} fill="#333" />
    </svg>
  );
}
export function LengthCompare({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <LCRound key={r} act={act} api={api} index={r} onNext={next} />;
}
function LCRound({ act, api, index, onNext }) {
  const q = useMemo(() => {
    const n = rand(2, 3);
    const lens = shuffle([4, 6, 8, 10, 12, 14, 16]).slice(0, n);
    const colors = shuffle(PENCIL_COLORS);
    const kind = pick(['long', 'short']);
    const target = kind === 'long' ? Math.max(...lens) : Math.min(...lens);
    return { lens, colors, kind, target, n };
  }, []);
  const say = q.kind === 'long' ? (q.n === 2 ? M.longer : M.longest) : q.n === 2 ? M.shorter : M.shortest;
  useOnce(() => api.prompt(say));
  const [wrong, setWrong] = useState(null);
  const [ok, setOk] = useState(false);
  return (
    <div className="game">
      <RoundDots total={act.rounds} current={index} />
      <div className="ask">
        <span className="ask-text">{say}</span>
        <Speaker text={say} api={api} small />
      </div>
      <div className="pencils">
        {q.lens.map((l, i) => (
          <button
            key={l}
            className={`pencil-btn ${wrong === l ? 'shake' : ''} ${ok && l === q.target ? 'ok' : ''}`}
            onClick={async () => {
              if (ok) return;
              if (l === q.target) {
                setOk(true);
                sfx.good();
                await api.good();
                onNext();
              } else {
                setWrong(l);
                setTimeout(() => setWrong(null), 500);
                api.bad();
              }
            }}
          >
            <Pencil len={l} color={q.colors[i]} />
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------- Đo độ dài (que tính / xăng-ti-mét) ----------
export function Measure({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <MeasureRound key={r} act={act} api={api} index={r} onNext={next} />;
}
function MeasureRound({ act, api, index, onNext }) {
  const cm = act.unit === 'cm';
  const n = useMemo(() => rand(2, cm ? 15 : 8), [cm]);
  const say = cm ? M.howManyCm : M.howManySticks;
  useOnce(() => api.prompt(say));
  const UNIT = cm ? 52 : 90;
  const total = cm ? 16 : 9;
  return (
    <div className="game">
      <RoundDots total={act.rounds} current={index} />
      <div className="ask">
        <span className="ask-text">{cm ? 'Bút chì dài mấy xăng-ti-mét?' : 'Bút chì dài bằng mấy que tính?'}</span>
        <Speaker text={say} api={api} small />
      </div>
      <svg className="ruler" viewBox={`-10 0 ${total * UNIT + 30} 150`} width="100%">
        {/* bút chì */}
        <rect x="0" y="10" width={n * UNIT - 30} height="40" rx="5" fill="#fbc02d" />
        <polygon points={`${n * UNIT - 30},10 ${n * UNIT},30 ${n * UNIT - 30},50`} fill="#ffe0b2" />
        <polygon points={`${n * UNIT - 9},25 ${n * UNIT},30 ${n * UNIT - 9},35`} fill="#333" />
        {cm ? (
          <>
            <rect x="-10" y="62" width={total * UNIT + 20} height="70" fill="#e3f2fd" stroke="#90caf9" />
            {Array.from({ length: total + 1 }, (_, i) => (
              <g key={i}>
                <line x1={i * UNIT} y1="62" x2={i * UNIT} y2="92" stroke="#1565c0" strokeWidth="3" />
                <text x={i * UNIT} y="122" fontSize="26" textAnchor="middle" fill="#1565c0">
                  {i}
                </text>
              </g>
            ))}
          </>
        ) : (
          Array.from({ length: n }, (_, i) => (
            <rect key={i} x={i * UNIT + 3} y="70" width={UNIT - 6} height="14" rx="6" fill={i % 2 ? '#ef6c00' : '#43a047'} />
          ))
        )}
      </svg>
      <Choices options={nearNumbers(n, 1, total).map(numOpt)} answer={n} api={api} onRight={onNext} />
    </div>
  );
}

// ---------- Các ngày trong tuần ----------
export const WEEK = ['thứ Hai', 'thứ Ba', 'thứ Tư', 'thứ Năm', 'thứ Sáu', 'thứ Bảy', 'Chủ nhật'];
export function Weekday({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <WDRound key={r} act={act} api={api} index={r} onNext={next} />;
}
function WDRound({ act, api, index, onNext }) {
  const q = useMemo(() => ({ d: rand(0, 6), kind: pick(['mai', 'qua']) }), []);
  const ans = q.kind === 'mai' ? (q.d + 1) % 7 : (q.d + 6) % 7;
  const say = M.weekQ(WEEK[q.d], q.kind);
  useOnce(() => api.prompt(say));
  const opts = useMemo(
    () => shuffle([...new Set([ans, (ans + 1) % 7, (ans + 5) % 7, q.d])]).map((i) => ({ key: i, label: WEEK[i], say: WEEK[i] })),
    [ans, q.d],
  );
  return (
    <div className="game">
      <RoundDots total={act.rounds} current={index} />
      <div className="week-strip">
        {WEEK.map((w, i) => (
          <span key={i} className={i === q.d ? 'day today' : 'day'}>
            {w}
          </span>
        ))}
      </div>
      <div className="ask">
        <span className="ask-text">{say}</span>
        <Speaker text={say} api={api} small />
      </div>
      <Choices options={opts} answer={ans} api={api} onRight={onNext} wide />
    </div>
  );
}

// ---------- Đồng hồ (giờ đúng) ----------
function Clock({ h }) {
  const ang = (h % 12) * 30;
  return (
    <svg viewBox="0 0 200 200" width="230" height="230">
      <circle cx="100" cy="100" r="92" fill="#fff" stroke="#e53935" strokeWidth="8" />
      {Array.from({ length: 12 }, (_, i) => {
        const a = ((i + 1) * 30 * Math.PI) / 180;
        return (
          <text key={i} x={100 + 70 * Math.sin(a)} y={100 - 70 * Math.cos(a) + 8} fontSize="22" textAnchor="middle" fill="#333">
            {i + 1}
          </text>
        );
      })}
      <line x1="100" y1="100" x2="100" y2="28" stroke="#1e88e5" strokeWidth="5" strokeLinecap="round" />
      <line x1="100" y1="100" x2={100 + 45 * Math.sin((ang * Math.PI) / 180)} y2={100 - 45 * Math.cos((ang * Math.PI) / 180)} stroke="#333" strokeWidth="8" strokeLinecap="round" />
      <circle cx="100" cy="100" r="6" fill="#333" />
    </svg>
  );
}
export function ClockGame({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <ClockRound key={r} act={act} api={api} index={r} onNext={next} />;
}
function ClockRound({ act, api, index, onNext }) {
  const h = useMemo(() => rand(1, 12), []);
  useOnce(() => api.prompt(M.whatTime));
  const opts = useMemo(() => {
    const others = shuffle([...new Set([(h % 12) + 1, ((h + 5) % 12) + 1, 12 - h || 12, ((h + 2) % 12) + 1])].filter((x) => x !== h));
    return shuffle([h, ...others.slice(0, 2)]).map((x) => ({ key: x, label: `${x} giờ`, say: M.hour(x) }));
  }, [h]);
  return (
    <div className="game">
      <RoundDots total={act.rounds} current={index} />
      <Clock h={h} />
      <Choices options={shuffle(opts)} answer={h} api={api} onRight={onNext} wide />
    </div>
  );
}
