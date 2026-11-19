import { useMemo, useState } from 'react';
import { img, shuffle, wait } from '../lib/util.js';
import { sfx } from '../lib/audio.js';
import { RoundDots, Speaker, useOnce } from './common.jsx';

/** Xem/nghe một tiếng hoặc câu hỏi, chọn đúng tranh. */
export default function PickPicture({ act, api }) {
  const [r, setR] = useState(0);
  return (
    <Round
      key={r}
      round={act.rounds[r]}
      api={api}
      total={act.rounds.length}
      index={r}
      onNext={() => (r + 1 < act.rounds.length ? setR(r + 1) : api.done())}
    />
  );
}

function Round({ round, api, total, index, onNext }) {
  const options = useMemo(() => shuffle(round.options), [round]);
  const [wrong, setWrong] = useState(() => new Set());
  const [right, setRight] = useState(false);
  useOnce(() => api.prompt(round.say));

  async function tap(id) {
    if (right) return;
    if (id === round.answer) {
      setRight(true);
      sfx.good();
      await api.good();
      await wait(300);
      onNext();
    } else {
      setWrong((w) => new Set(w).add(id));
      api.bad();
    }
  }

  return (
    <div className="game pick-picture">
      <RoundDots total={total} current={index} />
      <div className="ask">
        {round.show ? <span className="show-word">{round.show}</span> : <span className="ask-text">{round.say}</span>}
        <Speaker text={round.say} api={api} small />
      </div>
      <div className={options.length > 4 ? 'pic-grid many' : options.length > 3 ? 'pic-grid four' : 'card-row'}>
        {options.map((id) => (
          <button
            key={id}
            className={`pic-card ${wrong.has(id) ? 'tried' : ''} ${right && id === round.answer ? 'ok' : ''}`}
            onClick={() => tap(id)}
          >
            <img src={img(id)} alt="" />
            {right && id === round.answer && <span className="badge ok">✔</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
