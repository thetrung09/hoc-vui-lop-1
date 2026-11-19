import { useMemo, useRef, useState } from 'react';
import { img, shuffle, wait } from '../lib/util.js';
import { sfx, stop } from '../lib/audio.js';
import { NextButton, RoundDots, Speaker, useOnce } from './common.jsx';
import { SORT_ASK, READ_PROMPT } from '../data/vietnamese.js';

const lenClass = (n) => (n > 330 ? 'xlong' : n > 200 ? 'long' : '');

/** Tập đọc: đoạn văn, chạm câu để nghe; nút "Nghe cả bài" đọc lần lượt và tô sáng từng câu. */
export function Reading({ act, api }) {
  const [hl, setHl] = useState(-1);
  const [heard, setHeard] = useState(() => new Set());
  const playing = useRef(0);
  useOnce(() => api.prompt(READ_PROMPT));

  async function readAll() {
    const my = ++playing.current;
    if (act.title) await api.say(act.title);
    for (let i = 0; i < act.sentences.length; i++) {
      if (my !== playing.current) return;
      setHl(i);
      setHeard((h) => new Set(h).add(i));
      await api.say(act.sentences[i]);
    }
    if (my === playing.current) setHl(-1);
  }
  function readOne(i) {
    playing.current++;
    stop();
    setHl(i);
    setHeard((h) => new Set(h).add(i));
    api.say(act.sentences[i]).then(() => setHl((x) => (x === i ? -1 : x)));
  }

  return (
    <div className="game reading">
      <div className={`reading-wrap ${act.poem ? (act.sentences.length > 8 ? 'poem cols' : 'poem') : lenClass(act.sentences.join(' ').length)}`}>
        {act.img && <img className="reading-pic" src={img(act.img)} alt="" />}
        <div className="reading-text">
          {act.title && <h3 className="reading-title">{act.title}</h3>}
          <p>
            {act.sentences.map((s, i) => (
              <span key={i} className={`sent ${hl === i ? 'hl' : ''}`} onClick={() => readOne(i)}>
                {s}{' '}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="trace-actions">
        <button className="btn-big green" onClick={readAll}>
          🔊 Nghe cả bài
        </button>
      </div>
      {heard.size >= Math.min(act.sentences.length, 2) && <NextButton onClick={api.done} />}
    </div>
  );
}

/** Chọn câu trả lời đúng (có nút nghe cho từng lựa chọn). rounds: [{ q, options, answer }] */
export function ChooseText({ act, api }) {
  const [r, setR] = useState(0);
  return <CTRound key={r} round={act.rounds[r]} api={api} total={act.rounds.length} index={r} onNext={() => (r + 1 < act.rounds.length ? setR(r + 1) : api.done())} />;
}
function CTRound({ round, api, total, index, onNext }) {
  const opts = useMemo(() => shuffle(round.options.map((t, i) => ({ t, i }))), [round]);
  const [wrong, setWrong] = useState(() => new Set());
  const [ok, setOk] = useState(false);
  useOnce(() => api.prompt(round.q));
  return (
    <div className="game">
      <RoundDots total={total} current={index} />
      <div className="ask">
        <span className="ask-text">{round.q}</span>
        <Speaker text={round.q} api={api} small />
      </div>
      <div className="text-options">
        {opts.map(({ t, i }) => (
          <button
            key={i}
            className={`text-opt ${wrong.has(i) ? 'tried shake' : ''} ${ok && i === round.answer ? 'ok' : ''}`}
            onClick={async () => {
              if (ok || wrong.has(i)) return;
              if (i === round.answer) {
                setOk(true);
                sfx.good();
                await api.say(t);
                await api.good();
                await wait(200);
                onNext();
              } else {
                setWrong((w) => new Set(w).add(i));
                api.bad();
              }
            }}
          >
            {t}
            <Speaker text={t} api={api} small />
          </button>
        ))}
      </div>
    </div>
  );
}

/** Phân loại: mỗi tranh thuộc vần nào? */
export function Sort({ act, api }) {
  const items = useMemo(() => shuffle(act.items), [act]);
  const [k, setK] = useState(0);
  const it = items[k];
  return <SortRound key={k} it={it} act={act} api={api} total={items.length} index={k} onNext={() => (k + 1 < items.length ? setK(k + 1) : api.done())} />;
}
function SortRound({ it, act, api, total, index, onNext }) {
  const [wrong, setWrong] = useState(null);
  const [ok, setOk] = useState(false);
  const parts = [it.say || it.word, act.ask || SORT_ASK];
  useOnce(() => api.prompt(parts));
  return (
    <div className="game">
      <RoundDots total={total} current={index} />
      <button className={`pic-card big ${it.img ? '' : 'word-only'}`} onClick={() => api.say(it.say || it.word)}>
        {it.img && <img src={img(it.img)} alt="" />}
        <div className="word">{markVan(it.word, ok ? it.key : null)}</div>
      </button>
      <div className="sort-keys">
        {act.keys.map((key) => (
          <button
            key={key}
            className={`sort-key ${wrong === key ? 'shake tried' : ''} ${ok && key === it.key ? 'ok' : ''}`}
            onClick={async () => {
              if (ok) return;
              if (key === it.key) {
                setOk(true);
                sfx.good();
                await api.good();
                onNext();
              } else {
                setWrong(key);
                setTimeout(() => setWrong(null), 600);
                api.bad();
              }
            }}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Tô đỏ phần vần trong từ (khi đã trả lời đúng). */
function markVan(word, key) {
  if (!key) return word;
  const plain = (s) => s.normalize('NFD').replace(/[̣̀́̃̉]/g, '').normalize('NFC');
  const w = plain(word);
  const i = w.lastIndexOf(key);
  if (i < 0) return word;
  return (
    <>
      {word.slice(0, i)}
      <span className="van">{word.slice(i, i + key.length)}</span>
      {word.slice(i + key.length)}
    </>
  );
}
