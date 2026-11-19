// Kiểm tra dữ liệu bài học: tranh có tồn tại, đáp án hợp lệ, loại hoạt động đúng tên.
// Chạy: node tools/check-data.mjs
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'app');
const imp = (p) => import(pathToFileURL(join(root, 'src', p)));
const { tiengViet } = await imp('data/tiengviet.js');
const { toan } = await imp('data/toan.js');

const TYPES = new Set('intro spell findSound findLetter pickPicture trace story storyOrder reading chooseText sort count makeCount sequence position shapes compareGroups compareNumbers arith split countTens readNumber tensUnits lengthCompare measure weekday clock'.split(' '));
const errs = [];
const imgOk = (id, where) => existsSync(join(root, 'public', 'img', `${id}.jpg`)) || errs.push(`${where}: thiếu ảnh ${id}`);
const ids = new Set();

for (const l of [...tiengViet, ...toan]) {
  const w = l.id;
  if (ids.has(w)) errs.push(`trùng id bài ${w}`);
  ids.add(w);
  if (!l.activities?.length) errs.push(`${w}: không có hoạt động`);
  for (const a of l.activities) {
    const at = `${w}/${a.type}`;
    if (!TYPES.has(a.type)) errs.push(`${at}: loại hoạt động lạ`);
    (a.cards || []).forEach((c) => imgOk(c.img, at));
    (a.items || []).forEach((it) => {
      if (it.img) imgOk(it.img, at);
      if (a.type === 'sort' && !a.keys.includes(it.key)) errs.push(`${at}: ${it.word} có key ${it.key} không thuộc ${a.keys}`);
      if (a.type === 'spell' && it.parts.join('') !== it.word.normalize('NFC') && !it.allowMismatch) {
        // ghép không khớp chữ: có thể do dấu thanh đặt riêng, chỉ cảnh báo
        if (it.parts.join('').normalize('NFD').replace(/[̀-ͯ]/g, '') !== it.word.normalize('NFD').replace(/[̀-ͯ]/g, ''))
          errs.push(`${at}: ghép ${it.parts.join('+')} ≠ ${it.word}`);
      }
    });
    if (a.type === 'findSound' && !a.items.some((x) => x.ok)) errs.push(`${at}: không có tranh đúng`);
    if (a.type === 'pickPicture')
      a.rounds.forEach((r) => {
        if (!r.options.includes(r.answer)) errs.push(`${at}: đáp án ${r.answer} không có trong lựa chọn`);
        r.options.forEach((o) => imgOk(o, at));
      });
    if (a.type === 'chooseText') a.rounds.forEach((r) => (r.answer >= r.options.length ? errs.push(`${at}: đáp án ngoài phạm vi`) : null));
    (a.slides || []).forEach((s) => imgOk(s.img, at));
    (a.imgs || []).forEach((i) => imgOk(i, at));
    if (a.img) imgOk(a.img, at);
    if (a.type === 'reading' && !a.sentences?.length) errs.push(`${at}: không có câu`);
  }
}
console.log(`Tiếng Việt: ${tiengViet.length} bài, Toán: ${toan.length} bài`);
if (errs.length) {
  console.log(`${errs.length} lỗi:`);
  errs.slice(0, 60).forEach((e) => console.log('  ✗ ' + e));
  process.exit(1);
}
console.log('✓ Dữ liệu hợp lệ');
