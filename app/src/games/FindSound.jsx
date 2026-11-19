import { useMemo, useState } from 'react';
import { img, shuffle, wait } from '../lib/util.js';
import { sfx } from '../lib/audio.js';
import { NextButton, Speaker, useOnce } from './common.jsx';

/** Chạm vào những tranh có âm / thanh cho trước. Mỗi tranh có nút 🔊 để nghe trước khi chọn. */
export default function FindSound({ act, api }) {
  const items = useMemo(() => shuffle(act.items.map((it, i) => ({ ...it, id: i }))), [act]);
  const [state, setState] = useState({}); // id -> 'ok' | 'no'
  const [finished, setFinished] = useState(false);
  const need = items.filter((x) => x.ok).length;
  useOnce(() => api.prompt(act.prompt));

  async function tap(it) {
    if (finished || state[it.id] === 'ok') return;
    if (it.ok) {
      sfx.good();
      const next = { ...state, [it.id]: 'ok' };
      setState(next);
      await api.say(it.say);
      if (Object.values(next).filter((v) => v === 'ok').length === need) {
        setFinished(true);
        await api.good();
      }
    } else {
      setState((s) => ({ ...s, [it.id]: 'no' }));
      await api.say(it.say);
      api.bad();
      setTimeout(() => setState((s) => ({ ...s, [it.id]: s[it.id] === 'no' ? 'tried' : s[it.id] })), 900);
    }
  }

  return (
    <div className="game find-sound">
      <div className="pic-grid">
        {items.map((it) => (
          <button key={it.id} className={`pic-card ${state[it.id] || ''}`} onClick={() => tap(it)}>
            <img src={img(it.img)} alt="" />
            {(act.showWords || state[it.id] === 'ok') && <div className="word">{it.word}</div>}
            {state[it.id] === 'ok' && <span className="badge ok">✔</span>}
            {state[it.id] === 'no' && <span className="badge no">✖</span>}
            <Speaker text={it.say} api={api} small />
          </button>
        ))}
      </div>
      {finished && <NextButton onClick={api.done} />}
    </div>
  );
}
