// Câu đọc dùng trong game Toán (có file mp3 tạo sẵn).
import { ASK_EQ, OP_WORD, numWord } from '../lib/numbers.js';

const WEEK = ['thứ Hai', 'thứ Ba', 'thứ Tư', 'thứ Năm', 'thứ Sáu', 'thứ Bảy', 'Chủ nhật'];

export const M = {
  groupsMore: 'Hàng nào nhiều hơn? Nếu bằng nhau, bé chạm vào nút bằng nhau.',
  groupsLess: 'Hàng nào ít hơn? Nếu bằng nhau, bé chạm vào nút bằng nhau.',
  signs: 'Bé chọn dấu lớn hơn, bé hơn hay dấu bằng?',
  gt: 'lớn hơn',
  lt: 'bé hơn',
  eq: 'bằng',
  whatNumber: 'mấy',
  equals: 'bằng',
  consistsOf: 'gồm',
  andWhat: 'và mấy?',
  howManyCubes: 'Có tất cả bao nhiêu khối lập phương?',
  findNumber: 'Bé tìm số',
  howManyTensUnits: 'gồm mấy chục và mấy đơn vị?',
  longer: 'Bút chì nào dài hơn?',
  longest: 'Bút chì nào dài nhất?',
  shorter: 'Bút chì nào ngắn hơn?',
  shortest: 'Bút chì nào ngắn nhất?',
  howManyCm: 'Bút chì dài mấy xăng-ti-mét?',
  howManySticks: 'Bút chì dài bằng mấy que tính?',
  whatTime: 'Đồng hồ chỉ mấy giờ?',
  hour: (h) => `${numWord(h)} giờ`,
  weekQ: (day, kind) => `Hôm nay là ${day}. ${kind === 'mai' ? 'Ngày mai' : 'Hôm qua'} là thứ mấy?`,
};

export function toanExtraPhrases() {
  const out = new Set([ASK_EQ, ...Object.values(OP_WORD)]);
  for (let n = 0; n <= 100; n++) out.add(numWord(n));
  Object.values(M).forEach((v) => typeof v === 'string' && out.add(v));
  for (let h = 1; h <= 12; h++) out.add(M.hour(h));
  WEEK.forEach((d) => {
    out.add(d);
    out.add(M.weekQ(d, 'mai'));
    out.add(M.weekQ(d, 'qua'));
  });
  return [...out];
}
