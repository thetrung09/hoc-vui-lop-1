import { useState } from 'react';
import { img } from '../lib/util.js';
import { UI } from '../data/phrases.js';
import { NextButton, useOnce } from './common.jsx';

/** Làm quen: chạm vào từng tranh để nghe tiếng. */
export default function Intro({ act, api }) {
  const [heard, setHeard] = useState(() => new Set());
  useOnce(() => api.prompt(UI.intro));

  return (
    <div className="game intro">
      <div className={`card-row ${act.cards.length > 2 ? 'small' : ''} ${act.cards.length > 3 ? 'six' : ''}`}>
        {act.cards.map((c, i) => (
          <button
            key={i}
            className={heard.has(i) ? 'pic-card big heard' : 'pic-card big wiggle'}
            onClick={() => {
              api.say(c.say || c.word);
              setHeard((h) => new Set(h).add(i));
            }}
          >
            <img src={img(c.img)} alt={c.word} />
            <div className="word">{c.label || c.word}</div>
          </button>
        ))}
      </div>
      {heard.size === act.cards.length && <NextButton onClick={api.done} />}
    </div>
  );
}
