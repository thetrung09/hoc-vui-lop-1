import { useEffect, useRef } from 'react';

export function NextButton({ onClick, label = 'Tiếp' }) {
  return (
    <button className="btn-next pulse" onClick={onClick} aria-label={label}>
      ➜
    </button>
  );
}

export function Speaker({ text, api, small }) {
  return (
    <span
      role="button"
      tabIndex={0}
      className={small ? 'speaker small' : 'speaker'}
      onClick={(e) => {
        e.stopPropagation();
        api.say(text);
      }}
      aria-label="Nghe"
    >
      🔊
    </span>
  );
}

/** Chạy fn một lần khi component hiện lên (bỏ qua lần chạy đôi của StrictMode). */
export function useOnce(fn) {
  const ran = useRef(false);
  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function RoundDots({ total, current }) {
  return (
    <div className="round-dots">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={i < current ? 'dot done' : i === current ? 'dot now' : 'dot'} />
      ))}
    </div>
  );
}
