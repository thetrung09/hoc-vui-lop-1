// Giọng đọc: ưu tiên file mp3 tạo sẵn (public/audio/manifest.json: { "câu": "file.mp3" }),
// nếu chưa có file thì dùng giọng đọc của trình duyệt (vi-VN).
const BASE = import.meta.env.BASE_URL;
let manifest = {};
let current = null;
let pending = null;

export const norm = (t) => t.normalize('NFC').trim();

export async function loadAudio() {
  try {
    const r = await fetch(`${BASE}audio/manifest.json`, { cache: 'no-cache' });
    if (r.ok) manifest = await r.json();
  } catch {
    manifest = {};
  }
}

export function hasRecorded(text) {
  return Boolean(manifest[norm(text)]);
}

let seq = 0;

/** Đọc nối nhiều đoạn (mỗi đoạn có file mp3 riêng), ví dụ ['ba', 'cộng', 'hai', 'bằng mấy?']. */
export async function sayParts(parts) {
  const my = ++seq;
  for (const p of parts) {
    if (my !== seq) return;
    await say(p, true);
  }
}

/** Dừng mọi giọng đang đọc (kể cả chuỗi sayParts đang chạy). */
export function stop() {
  seq++;
  halt();
}

let playId = 0;

function halt() {
  playId++;
  if (current) {
    current.onended = null;
    current.pause();
    current = null;
  }
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (pending) {
    const r = pending;
    pending = null;
    r();
  }
}

/** Đọc một câu. Trả về Promise xong khi đọc xong (hoặc bị ngắt). */
export function say(text, keepSeq = false) {
  if (!text) return Promise.resolve();
  if (Array.isArray(text)) return sayParts(text);
  if (!keepSeq) seq++;
  halt();
  const my = playId;
  return new Promise((resolve) => {
    pending = resolve;
    const done = () => {
      if (pending === resolve) pending = null;
      resolve();
    };
    // Chỉ chuyển sang giọng trình duyệt khi câu này vẫn là câu đang đọc.
    // (Trước đây: câu bị ngắt giữa chừng làm play() lỗi → giọng trình duyệt đọc chồng lên câu mới.)
    let fellBack = false;
    const fallback = () => {
      if (fellBack || my !== playId) return done();
      fellBack = true;
      if (current === a) current = null;
      tts(text).then(done);
    };
    const file = manifest[norm(text)];
    let a = null;
    if (file) {
      a = new Audio(`${BASE}audio/${file}`);
      current = a;
      a.onended = done;
      a.onerror = fallback;
      a.play().catch((e) => (e?.name === 'AbortError' ? done() : fallback()));
    } else {
      tts(text).then(done);
    }
  });
}

function tts(text) {
  return new Promise((resolve) => {
    const s = window.speechSynthesis;
    if (!s) return resolve();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'vi-VN';
    const v = s.getVoices().find((x) => x.lang?.toLowerCase().startsWith('vi'));
    if (v) u.voice = v;
    u.rate = 0.85;
    u.onend = resolve;
    u.onerror = resolve;
    s.speak(u);
    setTimeout(resolve, 3000 + text.length * 150);
  });
}

// ---- Hiệu ứng âm thanh (tạo bằng WebAudio, không cần file) ----
let ctx;
function tone(freq, start, dur, type = 'sine', vol = 0.18) {
  ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
  const t0 = ctx.currentTime + start;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t0);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol, t0 + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g).connect(ctx.destination);
  o.start(t0);
  o.stop(t0 + dur + 0.05);
}

export const sfx = {
  good() {
    tone(660, 0, 0.15);
    tone(990, 0.12, 0.25);
  },
  bad() {
    tone(220, 0, 0.25, 'triangle', 0.15);
  },
  tick() {
    tone(880, 0, 0.08, 'triangle', 0.1);
  },
  win() {
    [523, 659, 784, 1046].forEach((f, i) => tone(f, i * 0.13, 0.3));
  },
  pop() {
    tone(500, 0, 0.06, 'square', 0.06);
    tone(900, 0.04, 0.08, 'sine', 0.1);
  },
};
