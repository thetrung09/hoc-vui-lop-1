import { useEffect, useMemo, useState } from 'react';
import { img, shuffle, wait } from '../lib/util.js';
import { sfx } from '../lib/audio.js';
import { UI } from '../data/phrases.js';
import { NextButton, useOnce } from './common.jsx';

/** Nghe kể chuyện theo từng tranh. */
export function Story({ act, api }) {
  const [i, setI] = useState(0);
  const [seen, setSeen] = useState(0);
  const s = act.slides[i];
  useEffect(() => {
    api.prompt(s.text);
    setSeen((n) => Math.max(n, i));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  return (
    <div className="game story">
      <div className="story-frame">
        <img src={img(s.img)} alt="" />
        <div className="story-num">{i + 1}</div>
      </div>
      <div className="story-q">{s.question}</div>
      <div className="story-nav">
        <button className="btn-round" disabled={i === 0} onClick={() => setI(i - 1)}>
          ◀
        </button>
        <button className="btn-round" onClick={() => api.say(s.text)}>
          🔊
        </button>
        {i < act.slides.length - 1 ? (
          <button className="btn-round pulse" onClick={() => setI(i + 1)}>
            ▶
          </button>
        ) : (
          seen >= act.slides.length - 1 && <NextButton onClick={api.done} />
        )}
      </div>
    </div>
  );
}

/** Xếp tranh theo đúng thứ tự câu chuyện. */
export function StoryOrder({ act, api }) {
  const order = useMemo(() => shuffle(act.imgs), [act]);
  const [placed, setPlaced] = useState([]);
  const [shake, setShake] = useState(null);
  useOnce(() => api.prompt(UI.order));

  async function tap(id) {
    if (placed.includes(id)) return;
    if (id === act.imgs[placed.length]) {
      sfx.tick();
      const next = [...placed, id];
      setPlaced(next);
      if (next.length === act.imgs.length) {
        await api.good();
        await wait(500);
        api.done();
      }
    } else {
      setShake(id);
      setTimeout(() => setShake(null), 500);
      api.bad();
    }
  }

  return (
    <div className="game story-order">
      <div className="pic-grid four">
        {order.map((id) => {
          const n = placed.indexOf(id);
          return (
            <button key={id} className={`pic-card ${n >= 0 ? 'ok' : ''} ${shake === id ? 'shake' : ''}`} onClick={() => tap(id)}>
              <img src={img(id)} alt="" />
              {n >= 0 && <span className="order-num">{n + 1}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
