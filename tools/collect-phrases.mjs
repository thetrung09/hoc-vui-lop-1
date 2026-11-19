// Gom mọi câu app cần đọc → app/public/audio/phrases.json (để tools/gen_audio.py tạo mp3).
// Chạy từ thư mục app: npm run phrases
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = (p) => new URL(`file:///${join(root, 'app', 'src', p).replaceAll('\\', '/')}`);

const { tiengVietPhrases, LETTER_SAY } = await import(src('data/tiengviet.js'));
const { toanPhrases } = await import(src('data/toan.js'));
const { commonPhrases } = await import(src('data/phrases.js'));
const { MASCOT_STAGES, mascotSay } = await import(src('lib/mascot.js'));

const all = new Set([
  ...tiengVietPhrases(),
  ...Object.values(LETTER_SAY),
  ...toanPhrases(),
  ...commonPhrases(),
  'Xin chào! Đây là giọng đọc của Học Vui Lớp Một.',
]);
MASCOT_STAGES.forEach((s, i) => all.add(mascotSay({ ...s, next: MASCOT_STAGES[i + 1] || null })));

const list = [...all].map((t) => t.normalize('NFC').trim()).filter(Boolean).sort();
const out = join(root, 'app', 'public', 'audio');
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'phrases.json'), JSON.stringify(list, null, 1), 'utf8');
console.log(`Đã gom ${list.length} câu → app/public/audio/phrases.json`);
