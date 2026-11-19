import { useEffect, useMemo, useRef, useState } from 'react';
import { say, sfx, stop } from '../lib/audio.js';
import { pick, wait } from '../lib/util.js';
import { BAD, GOOD, STARS_SAY } from '../data/phrases.js';
import { GAMES } from '../games/index.js';
import { mascotFor, useStore } from '../lib/store.js';

/** Số sao theo số lần sai trong cả bài. */
export function starsFor(mistakes) {
  if (mistakes <= 1) return 3;
  if (mistakes <= 4) return 2;
  return 1;
}

export default function LessonPlayer({ lesson, onExit }) {
  const { recordLesson, totalStars, myProgress } = useStore();
  // ?hd=N (chỉ để kiểm tra): bắt đầu từ hoạt động thứ N
  const [idx, setIdx] = useState(() => Math.min(Number(new URLSearchParams(location.search).get('hd')) || 0, lesson.activities.length - 1));
  const [prompt, setPrompt] = useState('');
  const [mood, setMood] = useState('idle'); // idle | happy | sad
  const [result, setResult] = useState(null);
  const mistakes = useRef(0);
  const act = lesson.activities[idx];
  const Game = GAMES[act.type];
  const mascot = mascotFor(totalStars);

  // Đọc tên bài ngay khi vào bài (trước khi trò chơi đầu tiên đọc lời hướng dẫn).
  const intro = useRef(null);
  if (!intro.current) intro.current = lesson.sayTitle ? say(lesson.sayTitle) : Promise.resolve();

  useEffect(() => () => stop(), []);

  const api = useMemo(
    () => ({
      say,
      async prompt(text) {
        setPrompt(text);
        await intro.current; // chờ đọc xong tên bài rồi mới hướng dẫn, không đè tiếng
        return say(text);
      },
      async good() {
        setMood('happy');
        setTimeout(() => setMood('idle'), 1200);
        await say(pick(GOOD));
      },
      async bad(opts = {}) {
        mistakes.current += 1;
        setMood('sad');
        setTimeout(() => setMood('idle'), 1000);
        sfx.bad();
        if (!opts.silent) await say(pick(BAD));
      },
      done() {
        if (idx + 1 < lesson.activities.length) {
          setIdx(idx + 1);
        } else {
          finish();
        }
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [idx, lesson],
  );

  async function finish() {
    const stars = starsFor(mistakes.current);
    const before = mascotFor(totalStars);
    const old = myProgress[lesson.id]?.stars || 0;
    const after = mascotFor(totalStars + Math.max(0, stars - old));
    recordLesson(lesson.id, stars, mistakes.current);
    setResult({ stars, grew: after.index > before.index ? after : null });
    sfx.win();
    await wait(400);
    await say(STARS_SAY[stars]);
  }

  if (result) {
    return (
      <div className="screen result">
        <div className="result-stars">
          {[1, 2, 3].map((i) => (
            <span key={i} className={i <= result.stars ? 'star on' : 'star'} style={{ animationDelay: `${i * 0.3}s` }}>
              ★
            </span>
          ))}
        </div>
        <div className="result-mascot bounce">{(result.grew || mascot).icon}</div>
        {result.grew && <div className="grew">Linh vật đã lớn lên: {result.grew.name}!</div>}
        <div className="result-actions">
          <button className="btn-big" onClick={() => onExit(false)}>
            🗺️ Bản đồ
          </button>
          <button className="btn-big green" onClick={() => onExit(true)}>
            🔁 Chơi lại
          </button>
        </div>
        <Confetti />
      </div>
    );
  }

  return (
    <div className="screen lesson">
      <header className="lesson-bar">
        <button className="btn-round" onClick={() => onExit(false)} aria-label="Về bản đồ">
          🏠
        </button>
        <div className="lesson-progress">
          {lesson.activities.map((_, i) => (
            <span key={i} className={i < idx ? 'seg done' : i === idx ? 'seg now' : 'seg'} />
          ))}
        </div>
        <button className="btn-round" onClick={() => say(prompt)} aria-label="Nghe lại">
          🔊
        </button>
      </header>
      <div className="act-title">
        <span className={`mascot mini ${mood}`}>{mascot.icon}</span>
        {act.name}
      </div>
      <main className="stage">
        <Game key={`${lesson.id}-${idx}`} act={act} api={api} />
      </main>
    </div>
  );
}

function Confetti() {
  const bits = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 1.5,
        color: ['#ff5252', '#ffd740', '#69f0ae', '#40c4ff', '#e040fb'][i % 5],
      })),
    [],
  );
  return (
    <div className="confetti">
      {bits.map((b, i) => (
        <i key={i} style={{ left: `${b.left}%`, animationDelay: `${b.delay}s`, background: b.color }} />
      ))}
    </div>
  );
}
