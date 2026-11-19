import { Fragment, useEffect, useRef, useState } from 'react';
import { mascotFor, mascotSay, useStore } from '../lib/store.js';
import { say } from '../lib/audio.js';
import { UI } from '../data/phrases.js';
import { SUBJECTS } from '../data/index.js';
import { useOnce } from '../games/common.jsx';

/** Bài thứ i mở khi bài trước đã có ít nhất 1 sao, hoặc bố mẹ đã mở sẵn đến bài upTo. */
export function isUnlocked(lessons, i, progress, upTo = -1) {
  return i === 0 || i <= upTo || (progress[lessons[i - 1].id]?.stars || 0) > 0;
}

export default function MapScreen({ subject, setSubject, onPlay, onOpenParent, onSwitchProfile }) {
  const { profile, myProgress, myUnlocks, totalStars } = useStore();
  const mascot = mascotFor(totalStars);
  const [poke, setPoke] = useState(false);
  const sub = SUBJECTS.find((s) => s.id === subject);
  useOnce(() => say(UI.welcome));
  const currentRef = useRef(null);
  useEffect(() => {
    currentRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [subject]);

  // Bài "đang học": bài mở xa nhất mà chưa có sao.
  let curIdx = -1;
  sub.lessons.forEach((l, i) => {
    if (isUnlocked(sub.lessons, i, myProgress, myUnlocks[sub.id]) && !myProgress[l.id]?.stars) curIdx = i;
  });

  const toNext =mascot.next ? `Còn ${mascot.next.min - totalStars} ⭐ nữa để lớn lên` : 'Linh vật đã lớn nhất rồi!';

  return (
    <div className={`screen map theme-${subject}`}>
      <header className="map-bar">
        <button className="who" onClick={onSwitchProfile}>
          <span className="avatar sm">{profile.avatar}</span> {profile.name}
        </button>
        <div className="star-count">⭐ {totalStars}</div>
        <div className="bar-right">
          <button
            className="btn-round"
            aria-label="Toàn màn hình"
            onClick={() => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.())}
          >
            ⛶
          </button>
          <button className="btn-round" aria-label="Bố mẹ" onClick={onOpenParent}>
            👨‍👩‍👧
          </button>
        </div>
      </header>

      <div className="subject-tabs">
        {SUBJECTS.map((s) => (
          <button
            key={s.id}
            className={s.id === subject ? 'subject on' : 'subject'}
            onClick={() => {
              setSubject(s.id);
              say(s.name);
            }}
          >
            <span className="subject-icon">{s.icon}</span> {s.name}
          </button>
        ))}
      </div>

      <div className="map-body">
        <div className="mascot-corner">
          <button
            className={`mascot big ${poke ? 'happy' : 'float'}`}
            onClick={() => {
              setPoke(true);
              setTimeout(() => setPoke(false), 800);
              say(mascotSay(mascot));
            }}
          >
            {mascot.icon}
          </button>
          <div className="mascot-name">{mascot.name}</div>
          <div className="mascot-next">{toNext}</div>
        </div>

        <div className="path">
          {sub.lessons.map((l, i) => {
            const open = isUnlocked(sub.lessons, i, myProgress, myUnlocks[sub.id]);
            const stars = myProgress[l.id]?.stars || 0;
            const current = i === curIdx;
            const banner = l.chapter && l.chapter !== sub.lessons[i - 1]?.chapter;
            return (
              <Fragment key={l.id}>
              {banner && <div className="chapter-banner">{l.chapter}</div>}
              <div className={`node-wrap ${i % 2 ? 'right' : 'left'}`} ref={current ? currentRef : null}>
                <button
                  className={`node ${open ? '' : 'locked'} ${current ? 'current' : ''} ${stars ? 'done' : ''}`}
                  onClick={() => {
                    if (!open) return say(UI.locked);
                    onPlay(l); // tên bài do LessonPlayer đọc, rồi mới tới lời hướng dẫn
                  }}
                >
                  <span className="node-num">{open ? l.num : '🔒'}</span>
                  <span className="node-label">{l.short}</span>
                </button>
                <div className="node-stars">
                  {[1, 2, 3].map((k) => (
                    <span key={k} className={k <= stars ? 'on' : ''}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
              </Fragment>
            );
          })}
          <div className="path-end">🏁 Còn nhiều bài nữa sắp ra!</div>
        </div>
      </div>
    </div>
  );
}
