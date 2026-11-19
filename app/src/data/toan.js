// Toán 1 – Cánh Diều, chương 1 (5 bài đầu). Đề được sinh ngẫu nhiên theo phạm vi từng bài.
//
// Loại hoạt động:
//  position  – Trên / dưới / trái / phải / ở giữa
//  shapes    – Tìm hình vuông, tròn, tam giác, chữ nhật
//  count     – Đếm đồ vật, chọn số (Số ?)
//  makeCount – Lấy số hình phù hợp
//  sequence  – Điền số còn thiếu

import { toanExtraPhrases } from './toanPhrases.js';

export const NUM_WORDS =['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín', 'mười'];

export const COUNT_OBJECTS = [
  { icon: '🐱', q: 'Có bao nhiêu con mèo?' },
  { icon: '🐶', q: 'Có bao nhiêu con chó?' },
  { icon: '🐟', q: 'Có bao nhiêu con cá?' },
  { icon: '🦆', q: 'Có bao nhiêu con vịt?' },
  { icon: '🐰', q: 'Có bao nhiêu con thỏ?' },
  { icon: '🍎', q: 'Có bao nhiêu quả táo?' },
  { icon: '🌸', q: 'Có bao nhiêu bông hoa?' },
  { icon: '🚗', q: 'Có bao nhiêu chiếc ô tô?' },
  { icon: '⚽', q: 'Có bao nhiêu quả bóng?' },
  { icon: '🧸', q: 'Có bao nhiêu con gấu bông?' },
  { icon: '⭐', q: 'Có bao nhiêu ngôi sao?' },
  { icon: '🥕', q: 'Có bao nhiêu củ cà rốt?' },
  { icon: '✏️', q: 'Có bao nhiêu cái bút chì?' },
  { icon: '🍆', q: 'Có bao nhiêu quả cà tím?' },
];

export const makeCountSay = (n) => `Bé hãy đặt ${NUM_WORDS[n]} chấm tròn vào ô nhé.`;
export const MISSING_SAY = 'Số nào còn thiếu?';

export const SHAPES = [
  { id: 'vuong', name: 'hình vuông' },
  { id: 'tron', name: 'hình tròn' },
  { id: 'tamgiac', name: 'hình tam giác' },
  { id: 'chunhat', name: 'hình chữ nhật' },
];
export const shapeSay = (s) => `Bé chạm vào tất cả các ${s.name} nhé.`;

export const POS_ANIMALS = [
  { icon: '🐱', name: 'con mèo' },
  { icon: '🐶', name: 'con chó' },
  { icon: '🐰', name: 'con thỏ' },
  { icon: '🐦', name: 'con chim' },
  { icon: '🐸', name: 'con ếch' },
  { icon: '🐻', name: 'con gấu' },
  { icon: '🐵', name: 'con khỉ' },
];
export const POS_DIRS = [
  { id: 'tren', say: 'Con nào ở trên cái cây?' },
  { id: 'duoi', say: 'Con nào ở dưới cái cây?' },
  { id: 'trai', say: 'Con nào ở bên trái cái cây?' },
  { id: 'phai', say: 'Con nào ở bên phải cái cây?' },
];
export const MIDDLE_SAY = 'Con nào ở giữa?';

export const SHAPES3D = [
  { id: 'lapphuong', name: 'khối lập phương' },
  { id: 'hopcn', name: 'khối hộp chữ nhật' },
];

// Mẫu hoạt động
const A = {
  count: (min, max, x) => ({ type: 'count', name: 'Số?', min, max, rounds: 5, ...x }),
  make: (min, max) => ({ type: 'makeCount', name: 'Lấy số hình phù hợp', min, max, rounds: 3 }),
  seq: (max, x) => ({ type: 'sequence', name: 'Số còn thiếu', max, rounds: 4, ...x }),
  groups: () => ({ type: 'compareGroups', name: 'Nhiều hơn – ít hơn', max: 8, rounds: 5 }),
  cmp: (max, x) => ({ type: 'compareNumbers', name: 'So sánh số', max, rounds: 5, ...x }),
  add: (max, x) => ({ type: 'arith', name: 'Phép cộng', ops: ['+'], max, rounds: 5, ...x }),
  sub: (max, x) => ({ type: 'arith', name: 'Phép trừ', ops: ['-'], max, rounds: 5, ...x }),
  mix: (max, x) => ({ type: 'arith', name: 'Cộng, trừ', ops: ['+', '-'], max, rounds: 6, ...x }),
  split: (min, max) => ({ type: 'split', name: 'Tách số', min, max, rounds: 4 }),
  tens: (min, max, x) => ({ type: 'countTens', name: 'Đếm khối lập phương', min, max, rounds: 4, ...x }),
  read: (min, max, x) => ({ type: 'readNumber', name: 'Nghe và chọn số', min, max, rounds: 5, ...x }),
  tu: (min, max) => ({ type: 'tensUnits', name: 'Chục và đơn vị', min, max, rounds: 4 }),
  len: () => ({ type: 'lengthCompare', name: 'Dài – ngắn', rounds: 5 }),
  measure: (unit) => ({ type: 'measure', name: unit === 'cm' ? 'Đo bằng thước' : 'Đo bằng que tính', unit, rounds: 4 }),
  week: (rounds = 5) => ({ type: 'weekday', name: 'Các ngày trong tuần', rounds }),
  clock: (rounds = 5) => ({ type: 'clock', name: 'Xem đồng hồ', rounds }),
  pos: (rounds = 6) => ({ type: 'position', name: 'Bên nào?', rounds }),
  shapes: (rounds = 4) => ({ type: 'shapes', name: 'Tìm hình', rounds }),
  shapes3d: (rounds = 4) => ({ type: 'shapes', name: 'Tìm khối', mode: '3d', rounds }),
};
const F = (form) => ({ form });

const CH = [
  'Chương 1: Các số đến 10',
  'Chương 2: Phép cộng, phép trừ trong phạm vi 10',
  'Chương 3: Các số trong phạm vi 100',
  'Chương 4: Phép cộng, phép trừ trong phạm vi 100',
];

// [chương, nhãn ngắn, tên bài, trang sách, hoạt động, (câu đọc tên bài nếu khác)]
const RAW = [
  [0, 'Trên dưới', 'Trên – Dưới. Phải – Trái. Ở giữa', 6, [A.pos(8)], 'Trên, dưới. Phải, trái. Ở giữa'],
  [0, 'Các hình', 'Hình vuông – Hình tròn – Hình tam giác – Hình chữ nhật', 8, [A.shapes()], 'Hình vuông, hình tròn, hình tam giác, hình chữ nhật'],
  [0, '1 2 3', 'Các số 1, 2, 3', 10, [A.count(1, 3), A.make(1, 3), A.seq(3, { rounds: 3 })], 'Các số một, hai, ba'],
  [0, '4 5 6', 'Các số 4, 5, 6', 12, [A.count(1, 6, { focus: [4, 5, 6] }), A.make(4, 6), A.seq(6, { rounds: 3 })], 'Các số bốn, năm, sáu'],
  [0, '7 8 9', 'Các số 7, 8, 9', 14, [A.count(1, 9, { focus: [7, 8, 9] }), A.make(7, 9), A.seq(9, { rounds: 3 })], 'Các số bảy, tám, chín'],
  [0, 'Số 0', 'Số 0', 16, [A.count(0, 5, { focus: [0, 1] }), A.seq(6, { min: 0 })], 'Số không'],
  [0, 'Số 10', 'Số 10', 18, [A.count(1, 10, { focus: [9, 10] }), A.make(8, 10), A.seq(10, { min: 0 })], 'Số mười'],
  [0, 'Luyện tập', 'Luyện tập', 20, [A.count(0, 10), A.seq(10, { min: 0 }), A.make(1, 10)]],
  [0, 'Nhiều ít', 'Nhiều hơn – Ít hơn – Bằng nhau', 22, [A.groups()], 'Nhiều hơn, ít hơn, bằng nhau'],
  [0, '> < =', 'Lớn hơn, dấu >. Bé hơn, dấu <. Bằng nhau, dấu =', 24, [A.cmp(5, { pics: true }), A.cmp(10, { pics: true })], 'Lớn hơn, bé hơn, bằng nhau'],
  [0, 'Luyện tập', 'Luyện tập', 26, [A.cmp(10), A.groups(), A.seq(10, { min: 0 })]],
  [0, 'Ôn lại', 'Em ôn lại những gì đã học', 27, [A.count(0, 10), A.cmp(10), A.shapes(2), A.pos(4)]],
  [0, 'Vui học', 'Em vui học toán', 30, [A.shapes(4), A.pos(4), A.count(1, 10)]],

  [1, 'Làm quen +', 'Làm quen với phép cộng – Dấu cộng', 34, [A.add(5, { pic: true, noZero: true })], 'Làm quen với phép cộng, dấu cộng'],
  [1, 'Phép cộng', 'Làm quen với phép cộng (tiếp theo)', 36, [A.add(5, { pic: true }), A.split(2, 5)], 'Làm quen với phép cộng, tiếp theo'],
  [1, '+ trong 6', 'Phép cộng trong phạm vi 6', 38, [A.add(6, { pic: true }), A.split(2, 6)], 'Phép cộng trong phạm vi sáu'],
  [1, '+ trong 6', 'Phép cộng trong phạm vi 6 (tiếp theo)', 40, [A.add(6), A.split(2, 6)], 'Phép cộng trong phạm vi sáu, tiếp theo'],
  [1, 'Luyện tập', 'Luyện tập', 42, [A.add(6, { missing: true }), A.split(2, 6)]],
  [1, '+ trong 10', 'Phép cộng trong phạm vi 10', 44, [A.add(10, { pic: true }), A.split(5, 10)], 'Phép cộng trong phạm vi mười'],
  [1, 'Luyện tập', 'Luyện tập', 46, [A.add(10), A.cmp(10)]],
  [1, '+ trong 10', 'Phép cộng trong phạm vi 10 (tiếp theo)', 48, [A.add(10, { missing: true }), A.split(5, 10)], 'Phép cộng trong phạm vi mười, tiếp theo'],
  [1, 'Luyện tập', 'Luyện tập', 50, [A.add(10, { missing: true }), A.cmp(10)]],
  [1, 'Khối hộp', 'Khối hộp chữ nhật – Khối lập phương', 52, [A.shapes3d()], 'Khối hộp chữ nhật, khối lập phương'],
  [1, 'Làm quen −', 'Làm quen với phép trừ – Dấu trừ', 54, [A.sub(5, { pic: true, noZero: true })], 'Làm quen với phép trừ, dấu trừ'],
  [1, '− trong 6', 'Phép trừ trong phạm vi 6', 56, [A.sub(6, { pic: true }), A.split(2, 6)], 'Phép trừ trong phạm vi sáu'],
  [1, 'Luyện tập', 'Luyện tập', 58, [A.sub(6), A.add(6)]],
  [1, '− trong 6', 'Phép trừ trong phạm vi 6 (tiếp theo)', 60, [A.sub(6, { missing: true })], 'Phép trừ trong phạm vi sáu, tiếp theo'],
  [1, 'Luyện tập', 'Luyện tập', 62, [A.mix(6), A.split(2, 6)]],
  [1, '− trong 10', 'Phép trừ trong phạm vi 10', 64, [A.sub(10, { pic: true })], 'Phép trừ trong phạm vi mười'],
  [1, 'Luyện tập', 'Luyện tập', 66, [A.sub(10), A.split(5, 10)]],
  [1, '− trong 10', 'Phép trừ trong phạm vi 10 (tiếp theo)', 68, [A.sub(10, { missing: true })], 'Phép trừ trong phạm vi mười, tiếp theo'],
  [1, 'Luyện tập', 'Luyện tập', 70, [A.mix(10)]],
  [1, 'Luyện tập', 'Luyện tập', 72, [A.mix(10, { missing: true }), A.cmp(10)]],
  [1, 'Luyện tập', 'Luyện tập', 74, [A.mix(10), A.split(3, 10)]],
  [1, 'LT chung', 'Luyện tập chung', 76, [A.mix(10, { missing: true }), A.cmp(10), A.groups()]],
  [1, 'Ôn lại', 'Em ôn lại những gì đã học', 78, [A.mix(10), A.split(3, 10), A.shapes3d(2)]],
  [1, 'Vui học', 'Em vui học toán', 80, [A.mix(10, { pic: true }), A.pos(4)]],
  [1, 'Ôn tập', 'Ôn tập', 82, [A.mix(10, { missing: true }), A.split(3, 10), A.count(0, 10)]],

  [2, '11 → 16', 'Các số 11, 12, 13, 14, 15, 16', 86, [A.tens(11, 16), A.read(11, 16)], 'Các số từ mười một đến mười sáu'],
  [2, '17 → 20', 'Các số 17, 18, 19, 20', 89, [A.tens(17, 20), A.read(11, 20), A.seq(20, { min: 10 })], 'Các số mười bảy, mười tám, mười chín, hai mươi'],
  [2, 'Luyện tập', 'Luyện tập', 92, [A.read(10, 20), A.seq(20, { min: 10 }), A.cmp(20, { min: 10 })]],
  [2, 'Tròn chục', 'Các số 10, 20, 30, 40, 50, 60, 70, 80, 90', 94, [A.tens(10, 90, { tensOnly: true }), A.read(10, 90, { step: 10 }), A.seq(90, { min: 10, step: 10 })], 'Các số tròn chục'],
  [2, '21 → 40', 'Các số có hai chữ số (từ 21 đến 40)', 96, [A.tens(21, 40), A.read(21, 40)], 'Các số có hai chữ số, từ hai mươi mốt đến bốn mươi'],
  [2, '41 → 70', 'Các số có hai chữ số (từ 41 đến 70)', 98, [A.tens(41, 70), A.read(41, 70)], 'Các số có hai chữ số, từ bốn mươi mốt đến bảy mươi'],
  [2, '71 → 99', 'Các số có hai chữ số (từ 71 đến 99)', 100, [A.tens(71, 99), A.read(71, 99)], 'Các số có hai chữ số, từ bảy mươi mốt đến chín mươi chín'],
  [2, 'Đến 100', 'Các số đến 100', 102, [A.seq(100, { min: 1, len: 5 }), A.read(1, 100)], 'Các số đến một trăm'],
  [2, 'Chục, đơn vị', 'Chục và đơn vị', 104, [A.tu(11, 99), A.tens(11, 99)]],
  [2, 'Luyện tập', 'Luyện tập', 107, [A.tu(11, 99), A.read(10, 99), A.seq(99, { min: 10 })]],
  [2, 'So sánh', 'So sánh các số trong phạm vi 100', 109, [A.cmp(99, { min: 10 })], 'So sánh các số trong phạm vi một trăm'],
  [2, 'Luyện tập', 'Luyện tập', 111, [A.cmp(99, { min: 10 }), A.seq(99, { min: 10 }), A.tu(11, 99)]],
  [2, 'Dài ngắn', 'Dài hơn – Ngắn hơn', 113, [A.len()], 'Dài hơn, ngắn hơn'],
  [2, 'Đo độ dài', 'Đo độ dài', 115, [A.measure('que')]],
  [2, 'Xăng-ti-mét', 'Xăng-ti-mét', 117, [A.measure('cm')]],
  [2, 'Ôn lại', 'Em ôn lại những gì đã học', 119, [A.read(10, 99), A.cmp(99, { min: 10 }), A.measure('cm')]],
  [2, 'Vui học', 'Em vui học toán', 122, [A.tens(11, 99), A.len()]],

  [3, '14 + 3', 'Phép cộng dạng 14 + 3', 126, [A.add(0, F('14+3'))], 'Phép cộng dạng mười bốn cộng ba'],
  [3, '17 − 2', 'Phép trừ dạng 17 − 2', 128, [A.sub(0, F('14+3'))], 'Phép trừ dạng mười bảy trừ hai'],
  [3, 'Luyện tập', 'Luyện tập', 130, [A.mix(0, F('14+3'))]],
  [3, 'Tròn chục', 'Cộng, trừ các số tròn chục', 132, [A.mix(0, F('tens'))]],
  [3, '25 + 14', 'Phép cộng dạng 25 + 14', 134, [A.add(0, F('25+14'))], 'Phép cộng dạng hai mươi lăm cộng mười bốn'],
  [3, '25 + 4', 'Phép cộng dạng 25 + 4, 25 + 40', 136, [A.add(0, F('25+4'))], 'Phép cộng dạng hai mươi lăm cộng bốn, hai mươi lăm cộng bốn mươi'],
  [3, 'Luyện tập', 'Luyện tập', 138, [A.add(0, F('25+14')), A.add(0, F('25+4'))]],
  [3, '39 − 15', 'Phép trừ dạng 39 − 15', 140, [A.sub(0, F('25+14'))], 'Phép trừ dạng ba mươi chín trừ mười lăm'],
  [3, '27 − 4', 'Phép trừ dạng 27 − 4, 63 − 40', 142, [A.sub(0, F('25+4'))], 'Phép trừ dạng hai mươi bảy trừ bốn, sáu mươi ba trừ bốn mươi'],
  [3, 'Luyện tập', 'Luyện tập', 144, [A.sub(0, F('25+14')), A.sub(0, F('25+4'))]],
  [3, 'LT chung', 'Luyện tập chung', 146, [A.mix(0, F('25+14')), A.mix(0, F('tens'))]],
  [3, 'Ngày trong tuần', 'Các ngày trong tuần lễ', 148, [A.week()]],
  [3, 'Đồng hồ', 'Đồng hồ – Thời gian', 150, [A.clock()], 'Đồng hồ, thời gian'],
  [3, 'Ôn lại', 'Em ôn lại những gì đã học', 153, [A.mix(0, F('25+4')), A.clock(3), A.week(3)]],
  [3, 'Vui học', 'Em vui học toán', 156, [A.mix(0, F('14+3')), A.len()]],
  [3, 'Ôn số ≤ 10', 'Ôn tập các số trong phạm vi 10', 158, [A.count(0, 10), A.cmp(10), A.seq(10, { min: 0 })], 'Ôn tập các số trong phạm vi mười'],
  [3, 'Ôn +− ≤ 10', 'Ôn tập phép cộng, phép trừ trong phạm vi 10', 160, [A.mix(10, { missing: true }), A.split(3, 10)], 'Ôn tập phép cộng, phép trừ trong phạm vi mười'],
  [3, 'Ôn số ≤ 100', 'Ôn tập các số trong phạm vi 100', 162, [A.read(10, 99), A.tu(11, 99), A.cmp(99, { min: 10 })], 'Ôn tập các số trong phạm vi một trăm'],
  [3, 'Ôn +− ≤ 100', 'Ôn tập phép cộng, phép trừ trong phạm vi 100', 164, [A.mix(0, F('25+14')), A.mix(0, F('tens'))], 'Ôn tập phép cộng, phép trừ trong phạm vi một trăm'],
  [3, 'Ôn thời gian', 'Ôn tập về thời gian', 166, [A.clock(4), A.week(4)]],
  [3, 'Ôn tập', 'Ôn tập', 168, [A.mix(10), A.mix(0, F('25+4')), A.clock(3), A.cmp(99, { min: 10 })]],
];

export const toan = RAW.map(([ch, short, title, page, activities, sayTitle], i) => ({
  id: `toan-${i + 1}`,
  num: i + 1,
  chapter: CH[ch],
  short,
  title,
  sayTitle: sayTitle || title,
  page,
  activities,
}));

export function toanPhrases() {
  const out = new Set([MISSING_SAY, MIDDLE_SAY, ...toanExtraPhrases(), ...CH]);
  SHAPES3D.forEach((s) => {
    out.add(shapeSay(s));
    out.add(s.name);
  });
  toan.forEach((l) => {
    out.add(l.sayTitle);
    l.activities.forEach((a) => out.add(a.name));
  });
  NUM_WORDS.forEach((w, n) => {
    out.add(w);
    out.add(makeCountSay(n));
  });
  COUNT_OBJECTS.forEach((o) => out.add(o.q));
  SHAPES.forEach((s) => {
    out.add(shapeSay(s));
    out.add(s.name);
  });
  POS_ANIMALS.forEach((a) => out.add(a.name));
  POS_DIRS.forEach((d) => out.add(d.say));
  return [...out];
}
