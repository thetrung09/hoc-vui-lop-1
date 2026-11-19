import { useMemo, useState } from 'react';
import { pick, rand, shuffle, wait } from '../lib/util.js';
import { sfx } from '../lib/audio.js';
import { letterFindSay } from '../data/tiengviet.js';
import { RoundDots, Speaker, useOnce } from './common.jsx';

const COLORS = ['#ff8a80', '#ffd54f', '#81d4fa', '#a5d6a7', '#ce93d8', '#ffab91', '#80cbc4'];

/** Bắt chữ: các bóng bay mang chữ, chạm vào bóng có chữ đang được đọc. */
export default function FindLetter({ act, api }) {
  const [r, setR] = useState(0);
  const target = act.letters[r % act.letters.length];
  return <Round key={r} target={target} act={act} api={api} index={r} onNext={() => (r + 1 < act.rounds ? setR(r + 1) : api.done())} />;
}

function Round({ target, act, api, index, onNext }) {
  const balloons = useMemo(() => {
    const others = shuffle(act.pool.concat(act.letters.filter((l) => l !== target))).slice(0, 6);
    const targets = Array.from({ length: rand(2, 3) }, () => target);
    return shuffle([...targets, ...others]).map((t, i) => ({
      t,
      id: i,
      color: pick(COLORS),
      delay: Math.random() * 2,
      dur: 2.5 + Math.random() * 2,
    }));
  }, [act, target]);
  const need = balloons.filter((b) => b.t === target).length;
  const [popped, setPopped] = useState(() => new Set());
  const [shake, setShake] = useState(null);
  const say = letterFindSay(target);
  useOnce(() => api.prompt(say));

  async function tap(b) {
    if (popped.has(b.id)) return;
    if (b.t === target) {
      sfx.pop();
      const next = new Set(popped).add(b.id);
      setPopped(next);
      if (next.size === need) {
        await api.good();
        await wait(300);
        onNext();
      }
    } else {
      setShake(b.id);
      setTimeout(() => setShake(null), 500);
      api.bad();
    }
  }

  return (
    <div className="game find-letter">
      <RoundDots total={act.rounds} current={index} />
      <div className="letter-ask">
        Tìm chữ <b>{target}</b> <Speaker text={say} api={api} small />
      </div>
      <div className="balloons">
        {balloons.map((b) => (
          <button
            key={b.id}
            className={`balloon ${popped.has(b.id) ? 'popped' : ''} ${shake === b.id ? 'shake' : ''}`}
            style={{ '--c': b.color, animationDelay: `${b.delay}s`, animationDuration: `${b.dur}s` }}
            onClick={() => tap(b)}
          >
            {b.t}
          </button>
        ))}
      </div>
    </div>
  );
}
