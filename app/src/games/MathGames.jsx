import { useMemo, useState } from 'react';
import { pick, rand, shuffle, wait } from '../lib/util.js';
import { sfx } from '../lib/audio.js';
import {
  COUNT_OBJECTS, MIDDLE_SAY, MISSING_SAY, NUM_WORDS, POS_ANIMALS, POS_DIRS, SHAPES, SHAPES3D, makeCountSay, shapeSay,
} from '../data/toan.js';
import { numWord } from '../lib/numbers.js';
import { NextButton, RoundDots, Speaker, useOnce } from './common.jsx';

/** Bộ khung nhiều vòng: mỗi vòng sinh đề mới. */
function useRounds(act, api) {
  const [r, setR] = useState(0);
  const next = () => (r + 1 < act.rounds ? setR(r + 1) : api.done());
  return [r, next];
}

function numberChoices(n, lo, hi, count = 3) {
  const pool = [];
  for (let x = Math.max(0, lo); x <= hi; x++) if (x !== n) pool.push(x);
  const near = shuffle(pool).sort((a, b) => Math.abs(a - n) - Math.abs(b - n)).slice(0, count + 1);
  return shuffle([n, ...shuffle(near).slice(0, count - 1)]);
}

function NumberButtons({ choices, answer, onRight, api }) {
  const [wrong, setWrong] = useState(() => new Set());
  const [done, setDone] = useState(false);
  return (
    <div className="num-buttons">
      {choices.map((n) => (
        <button
          key={n}
          className={`num-btn ${wrong.has(n) ? 'tried shake' : ''} ${done && n === answer ? 'ok' : ''}`}
          onClick={async () => {
            if (done) return;
            if (n === answer) {
              setDone(true);
              sfx.good();
              api.say(numWord(n));
              await wait(700);
              await api.good();
              onRight();
            } else {
              setWrong((w) => new Set(w).add(n));
              api.bad();
            }
          }}
        >
          {n}
        </button>
      ))}
    </div>
  );
}

// ---------- Số? (đếm đồ vật) ----------
export function Count({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <CountRound key={r} act={act} api={api} index={r} onNext={next} />;
}
function CountRound({ act, api, index, onNext }) {
  const q = useMemo(() => {
    const n = act.focus && Math.random() < 0.6 ? pick(act.focus) : rand(act.min, act.max);
    const obj = pick(COUNT_OBJECTS);
    const items = Array.from({ length: n }, () => ({ rot: rand(-12, 12), dy: rand(-10, 10) }));
    return { n, obj, items, choices: numberChoices(n, act.min, Math.max(act.max, 4)) };
  }, [act]);
  useOnce(() => api.prompt(q.obj.q));
  return (
    <div className="game count">
      <RoundDots total={act.rounds} current={index} />
      <div className="count-field">
        {q.items.map((it, i) => (
          <span key={i} className="count-obj" style={{ transform: `rotate(${it.rot}deg) translateY(${it.dy}px)`, animationDelay: `${i * 0.08}s` }}>
            {q.obj.icon}
          </span>
        ))}
      </div>
      <NumberButtons choices={q.choices} answer={q.n} onRight={onNext} api={api} />
    </div>
  );
}

// ---------- Lấy số hình phù hợp ----------
export function MakeCount({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <MakeRound key={r} act={act} api={api} index={r} onNext={next} />;
}
function MakeRound({ act, api, index, onNext }) {
  const n = useMemo(() => rand(act.min, act.max), [act]);
  const [dots, setDots] = useState(0);
  const [ok, setOk] = useState(false);
  const say = makeCountSay(n);
  useOnce(() => api.prompt(say));
  async function check() {
    if (dots === n) {
      setOk(true);
      sfx.win();
      await api.good();
      await wait(300);
      onNext();
    } else {
      api.bad();
    }
  }
  return (
    <div className="game make-count">
      <RoundDots total={act.rounds} current={index} />
      <div className="big-number">
        {n} <Speaker text={say} api={api} small />
      </div>
      <button
        className={`dot-box ${ok ? 'ok' : ''}`}
        onClick={() => {
          if (ok || dots >= 10) return;
          sfx.tick();
          setDots(dots + 1);
        }}
      >
        {Array.from({ length: dots }, (_, i) => (
          <span
            key={i}
            className="red-dot"
            onClick={(e) => {
              e.stopPropagation();
              if (ok) return;
              sfx.pop();
              setDots(dots - 1);
            }}
          />
        ))}
        {dots === 0 && <span className="hint">Chạm vào đây để đặt chấm tròn</span>}
      </button>
      <div className="trace-actions">
        <button className="btn-big green" onClick={check} disabled={ok || dots === 0}>
          ✔ Xong
        </button>
      </div>
    </div>
  );
}

// ---------- Số còn thiếu ----------
export function Sequence({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <SeqRound key={r} act={act} api={api} index={r} onNext={next} />;
}
function SeqRound({ act, api, index, onNext }) {
  const q = useMemo(() => {
    const min = act.min ?? 1;
    const step = act.step || 1;
    const len = act.len || Math.min((act.max - min) / step + 1, act.max <= 3 ? 3 : 5);
    const start = min + rand(0, Math.floor((act.max - min) / step) - (len - 1)) * step;
    const nums = Array.from({ length: len }, (_, i) => start + i * step);
    const hole = rand(0, len - 1);
    const ans = nums[hole];
    const choices =
      step === 1
        ? numberChoices(ans, min, Math.max(act.max, 4))
        : shuffle([...new Set([ans, ans + step <= act.max ? ans + step : ans - 2 * step, ans - step >= min ? ans - step : ans + 2 * step])]);
    return { nums, hole, answer: ans, choices };
  }, [act]);
  const [filled, setFilled] = useState(false);
  useOnce(() => api.prompt(MISSING_SAY));
  return (
    <div className="game sequence">
      <RoundDots total={act.rounds} current={index} />
      <div className="seq-row">
        {q.nums.map((n, i) => (
          <div key={i} className={`flower ${i === q.hole ? (filled ? 'ok' : 'hole') : ''}`}>
            {i === q.hole && !filled ? '?' : n}
          </div>
        ))}
      </div>
      <NumberButtons
        choices={q.choices}
        answer={q.answer}
        api={api}
        onRight={async () => {
          setFilled(true);
          await wait(500);
          onNext();
        }}
      />
    </div>
  );
}

// ---------- Trên / dưới / trái / phải / ở giữa ----------
export function Position({ act, api }) {
  const [r, next] = useRounds(act, api);
  return <PosRound key={r} act={act} api={api} index={r} onNext={next} />;
}
function PosRound({ act, api, index, onNext }) {
  const q = useMemo(() => {
    const animals = shuffle(POS_ANIMALS);
    if (index % 4 === 3) {
      const row = animals.slice(0, 3);
      return { kind: 'middle', row, answer: row[1].icon, say: MIDDLE_SAY };
    }
    const place = { tren: animals[0], duoi: animals[1], trai: animals[2], phai: animals[3] };
    const dir = pick(POS_DIRS);
    return { kind: 'tree', place, answer: place[dir.id].icon, say: dir.say };
  }, [index]);
  const [wrong, setWrong] = useState(() => new Set());
  const [ok, setOk] = useState(false);
  useOnce(() => api.prompt(q.say));

  async function tap(a) {
    if (ok) return;
    if (a.icon === q.answer) {
      setOk(true);
      sfx.good();
      await api.say(a.name);
      await api.good();
      onNext();
    } else {
      setWrong((w) => new Set(w).add(a.icon));
      api.bad();
    }
  }
  const btn = (a, cls) => (
    <button key={a.icon} className={`animal ${cls || ''} ${wrong.has(a.icon) ? 'tried shake' : ''} ${ok && a.icon === q.answer ? 'ok' : ''}`} onClick={() => tap(a)}>
      {a.icon}
    </button>
  );

  return (
    <div className="game position">
      <RoundDots total={act.rounds} current={index} />
      <div className="ask">
        <span className="ask-text">{q.say}</span> <Speaker text={q.say} api={api} small />
      </div>
      {q.kind === 'tree' ? (
        <div className="pos-grid">
          <div />
          {btn(q.place.tren)}
          <div />
          {btn(q.place.trai)}
          <div className="tree">🌳</div>
          {btn(q.place.phai)}
          <div />
          {btn(q.place.duoi)}
          <div />
        </div>
      ) : (
        <div className="pos-row">{q.row.map((a) => btn(a))}</div>
      )}
    </div>
  );
}

// ---------- Tìm hình ----------
const PALETTE = ['#e53935', '#1e88e5', '#fdd835', '#43a047', '#fb8c00', '#8e24aa', '#00acc1'];
function shade(hex, k) {
  const n = parseInt(hex.slice(1), 16);
  const f = (v) => Math.max(0, Math.min(255, Math.round(v * k)));
  return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`;
}
function ShapeSvg({ kind, color, rot, size }) {
  const s = size;
  let el;
  if (kind === 'lapphuong' || kind === 'hopcn') {
    // Hình khối vẽ kiểu phối cảnh
    const w = kind === 'hopcn' ? 62 : 46, h = kind === 'hopcn' ? 34 : 46, d = 20;
    const x0 = (100 - w - d) / 2, y0 = (100 - h - d) / 2 + d;
    return (
      <svg viewBox="0 0 100 100" width={s} height={s}>
        <polygon points={`${x0},${y0} ${x0 + d},${y0 - d} ${x0 + w + d},${y0 - d} ${x0 + w},${y0}`} fill={shade(color, 1.25)} />
        <polygon points={`${x0 + w},${y0} ${x0 + w + d},${y0 - d} ${x0 + w + d},${y0 + h - d} ${x0 + w},${y0 + h}`} fill={shade(color, 0.75)} />
        <rect x={x0} y={y0} width={w} height={h} fill={color} />
      </svg>
    );
  }
  if (kind === 'tron') el = <circle cx="50" cy="50" r="40" fill={color} />;
  else if (kind === 'vuong') el = <rect x="12" y="12" width="76" height="76" fill={color} />;
  else if (kind === 'tamgiac') el = <polygon points="50,8 94,88 6,88" fill={color} />;
  else el = <rect x="4" y="26" width="92" height="48" fill={color} />;
  return (
    <svg viewBox="0 0 100 100" width={s} height={s} style={{ transform: `rotate(${rot}deg)` }}>
      {el}
    </svg>
  );
}
export function Shapes({ act, api }) {
  const [r, next] = useRounds(act, api);
  const set = act.mode === '3d' ? SHAPES3D : SHAPES;
  const order = useMemo(() => shuffle(set), [set]);
  return <ShapeRound key={r} target={order[r % order.length]} set={set} act={act} api={api} index={r} onNext={next} />;
}
function ShapeRound({ target, set, act, api, index, onNext }) {
  const items = useMemo(() => {
    const nT = rand(3, 4);
    const others = (act.mode === '3d' ? [...SHAPES3D, SHAPES[0], SHAPES[3]] : SHAPES).filter((s) => s.id !== target.id);
    const list = [
      ...Array.from({ length: nT }, () => target.id),
      ...Array.from({ length: 9 - nT }, () => pick(others).id),
    ];
    return shuffle(list).map((kind, i) => ({
      id: i,
      kind,
      color: pick(PALETTE),
      rot: kind === 'tron' || kind === 'lapphuong' || kind === 'hopcn' ? 0 : pick([0, 0, 15, -20, 45, 90]),
      size: rand(80, 120),
    }));
  }, [target]);
  const need = items.filter((x) => x.kind === target.id).length;
  const [found, setFound] = useState(() => new Set());
  const [wrong, setWrong] = useState(null);
  const say = shapeSay(target);
  useOnce(() => api.prompt(say));

  async function tap(it) {
    if (found.has(it.id)) return;
    if (it.kind === target.id) {
      sfx.good();
      const next = new Set(found).add(it.id);
      setFound(next);
      if (next.size === need) {
        await api.good();
        await wait(300);
        onNext();
      }
    } else {
      setWrong(it.id);
      setTimeout(() => setWrong(null), 500);
      api.bad();
    }
  }

  return (
    <div className="game shapes">
      <RoundDots total={act.rounds} current={index} />
      <div className="ask">
        <span className="ask-text">Tìm {target.name}</span> <Speaker text={say} api={api} small />
        <span className="ask-sample">
          <ShapeSvg kind={target.id} color="#90a4ae" rot={0} size={56} />
        </span>
      </div>
      <div className="shape-field">
        {items.map((it) => (
          <button key={it.id} className={`shape-btn ${found.has(it.id) ? 'ok' : ''} ${wrong === it.id ? 'shake' : ''}`} onClick={() => tap(it)}>
            <ShapeSvg {...it} />
            {found.has(it.id) && <span className="badge ok">✔</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

export { NextButton };
