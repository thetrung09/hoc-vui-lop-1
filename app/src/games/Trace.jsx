import { useEffect, useRef, useState } from 'react';
import { wait } from '../lib/util.js';
import { sfx } from '../lib/audio.js';
import { traceSay } from '../data/tiengviet.js';
import { UI } from '../data/phrases.js';
import { RoundDots, useOnce } from './common.jsx';

const W = 1000;
const H = 420;
const FAMILY = 'Andika, "Segoe UI", sans-serif';
const FONT = `400 340px ${FAMILY}`;
let measureCtx;
/** Cỡ chữ vừa khung: cụm từ dài thì thu nhỏ lại. */
function fontFor(text) {
  measureCtx = measureCtx || document.createElement('canvas').getContext('2d');
  measureCtx.font = FONT;
  const w = measureCtx.measureText(text).width;
  const size = Math.min(340, Math.floor((340 * 940) / Math.max(w, 1)));
  return `400 ${size}px ${FAMILY}`;
}
const BASELINE = 330;
const BRUSH = 30;

/** Tô chữ bằng ngón tay / chuột theo chữ mẫu. */
export default function Trace({ act, api }) {
  const [k, setK] = useState(0);
  return (
    <TraceOne
      key={k}
      text={act.texts[k]}
      api={api}
      total={act.texts.length}
      index={k}
      onNext={() => (k + 1 < act.texts.length ? setK(k + 1) : api.done())}
    />
  );
}

function drawGuide(ctx, text) {
  ctx.clearRect(0, 0, W, H);
  // Dòng kẻ ô li
  ctx.strokeStyle = '#cfe3f5';
  ctx.lineWidth = 2;
  for (let y = BASELINE - 200; y < H; y += 50) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }
  ctx.strokeStyle = '#9cc3e6';
  ctx.beginPath();
  ctx.moveTo(0, BASELINE);
  ctx.lineTo(W, BASELINE);
  ctx.stroke();
  // Chữ mẫu: nền nhạt + viền chấm
  ctx.font = fontFor(text);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#eef1f6';
  ctx.fillText(text, W / 2, BASELINE);
  ctx.setLineDash([6, 10]);
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#8e9aaf';
  ctx.strokeText(text, W / 2, BASELINE);
  ctx.setLineDash([]);
}

function mask(text, extra) {
  const c = document.createElement('canvas');
  c.width = W / 4;
  c.height = H / 4;
  const x = c.getContext('2d');
  x.scale(0.25, 0.25);
  x.font = fontFor(text);
  x.textAlign = 'center';
  x.fillStyle = '#000';
  x.fillText(text, W / 2, BASELINE);
  if (extra) {
    x.lineWidth = extra;
    x.lineJoin = 'round';
    x.strokeStyle = '#000';
    x.strokeText(text, W / 2, BASELINE);
  }
  return x.getImageData(0, 0, c.width, c.height).data;
}

function TraceOne({ text, api, total, index, onNext }) {
  const guideRef = useRef(null);
  const drawRef = useRef(null);
  const strokes = useRef([]);
  const drawing = useRef(false);
  const [tries, setTries] = useState(0);
  const [passed, setPassed] = useState(false);
  useOnce(() => api.prompt(traceSay(text)));

  useEffect(() => {
    const ready = document.fonts?.load ? document.fonts.load(FONT, text).then(() => (measureCtx = null)) : Promise.resolve();
    ready.finally(() => drawGuide(guideRef.current.getContext('2d'), text));
  }, [text]);

  function pos(e) {
    const r = drawRef.current.getBoundingClientRect();
    return [((e.clientX - r.left) / r.width) * W, ((e.clientY - r.top) / r.height) * H];
  }
  function redraw() {
    const ctx = drawRef.current.getContext('2d');
    ctx.clearRect(0, 0, W, H);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = BRUSH;
    ctx.strokeStyle = passed ? '#43a047' : '#1e88e5';
    for (const s of strokes.current) {
      ctx.beginPath();
      s.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      if (s.length === 1) ctx.lineTo(s[0][0] + 0.1, s[0][1]);
      ctx.stroke();
    }
  }
  const down = (e) => {
    if (passed) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drawing.current = true;
    strokes.current.push([pos(e)]);
    redraw();
  };
  const move = (e) => {
    if (!drawing.current) return;
    strokes.current[strokes.current.length - 1].push(pos(e));
    redraw();
  };
  const up = () => (drawing.current = false);

  function clear() {
    strokes.current = [];
    redraw();
  }

  async function check() {
    // So vùng bé tô với chữ mẫu (trên ảnh thu nhỏ 1/4)
    const core = mask(text, 0);
    const tol = mask(text, BRUSH * 2.2);
    const uc = document.createElement('canvas');
    uc.width = W / 4;
    uc.height = H / 4;
    const ux = uc.getContext('2d');
    ux.drawImage(drawRef.current, 0, 0, W / 4, H / 4);
    const user = ux.getImageData(0, 0, uc.width, uc.height).data;
    let coreN = 0, covered = 0, userN = 0, outside = 0;
    for (let i = 3; i < core.length; i += 4) {
      const c = core[i] > 100, u = user[i] > 60, t = tol[i] > 60;
      if (c) coreN++;
      if (c && u) covered++;
      if (u) userN++;
      if (u && !t) outside++;
    }
    const coverage = coreN ? covered / coreN : 0;
    const out = userN ? outside / userN : 1;
    if (coverage >= 0.6 && out <= 0.3) {
      setPassed(true);
      sfx.win();
      await api.say(UI.traceGood);
      await wait(300);
      onNext();
    } else {
      setTries((t) => t + 1);
      if (tries >= 1) api.bad({ silent: true });
      api.say(UI.traceMore);
    }
  }

  useEffect(redraw, [passed]);

  return (
    <div className="game trace">
      <RoundDots total={total} current={index} />
      <div className="trace-box">
        <canvas ref={guideRef} width={W} height={H} />
        <canvas
          ref={drawRef}
          width={W}
          height={H}
          className="draw"
          onPointerDown={down}
          onPointerMove={move}
          onPointerUp={up}
          onPointerCancel={up}
        />
      </div>
      <div className="trace-actions">
        <button className="btn-round" onClick={clear} aria-label="Xoá">
          🧽
        </button>
        <button className="btn-big green" onClick={check} disabled={passed}>
          ✔ Xong
        </button>
        {tries >= 3 && !passed && (
          <button className="btn-round" onClick={onNext} aria-label="Bỏ qua">
            ⏭
          </button>
        )}
      </div>
    </div>
  );
}
