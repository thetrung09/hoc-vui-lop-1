// Nội dung Tiếng Việt 1 – Cánh Diều, tập 1. Nhập tay từ ảnh trang sách (sach-pdf/).
// Ảnh tranh: app/public/img/<img>.jpg (cắt bằng tools/crop_images.py theo tools/crops.json).
//
// Các loại hoạt động (type):
//  intro       – Làm quen: tranh + tiếng, chạm để nghe
//  spell       – Đánh vần / ghép chữ: chạm các thẻ chữ theo đúng thứ tự
//  findSound   – Chạm vào những tranh có âm / thanh cho trước
//  findLetter  – Bắt chữ: chạm vào thẻ có chữ đang được đọc
//  pickPicture – Nghe/xem tiếng, chọn tranh đúng
//  story       – Nghe kể chuyện theo tranh
//  storyOrder  – Xếp tranh theo thứ tự câu chuyện
//  trace       – Tô chữ

import { READ_PROMPT, SORT_ASK, SORT_ASK_AM, unitSay } from './vietnamese.js';
import { TV1 } from './tv1.js';
import { TV2 } from './tv2.js';
import { TV3 } from './tv3.js';

/** Cách đọc tên chữ cái / âm cho trẻ lớp 1. */
export const LETTER_SAY = {
  a: 'a', c: 'cờ', o: 'o', ô: 'ô', ơ: 'ơ', e: 'e', ê: 'ê', i: 'i', u: 'u', ư: 'ư',
  b: 'bờ', d: 'dờ', đ: 'đờ', g: 'gờ', h: 'hờ', k: 'ca', l: 'lờ', m: 'mờ', n: 'nờ',
  p: 'pờ', r: 'rờ', s: 'sờ', t: 'tờ', v: 'vờ', x: 'xờ',
  à: 'a huyền', á: 'a sắc', ỏ: 'o hỏi', ọ: 'o nặng',
};

const P = (img, word, ok, say) => ({ img, word, ok, say: say || word });

export const traceSay = (t) => `Bé tô chữ ${LETTER_SAY[t] || t} nhé.`;
export const letterFindSay = (x) => `Tìm chữ ${LETTER_SAY[x] || x}`;
export const spellPrompt = (w) => `Bé ghép chữ để được tiếng ${w} nhé.`;

const TV_FIRST = [
  {
    chapter: 'Tập một: Học vần',
    id: 'tv-b1',
    num: 1,
    short: 'a c',
    title: 'Bài 1: a – c',
    sayTitle: 'Bài một. a, cờ',
    page: 6,
    activities: [
      { type: 'intro', name: 'Làm quen', cards: [{ img: 'b1-ca-coc', word: 'ca', say: 'cái ca. ca' }] },
      { type: 'spell', name: 'Đánh vần', items: [{ word: 'ca', img: 'b1-ca-coc', parts: ['c', 'a'], spell: 'cờ, a, ca', extra: ['o', 'e'] }] },
      {
        type: 'findSound', name: 'Tìm tiếng có âm a', target: 'a', prompt: 'Bé chạm vào những tranh có âm a nhé.',
        items: [P('b1-ga', 'gà', true), P('b1-ca', 'cá', true), P('b1-ca-tim', 'cà', true), P('b1-nha', 'nhà', true), P('b1-tho', 'thỏ', false), P('b1-la', 'lá', true)],
      },
      {
        type: 'findSound', name: 'Tìm tiếng có âm c', target: 'c', prompt: 'Bé chạm vào những tranh có âm cờ nhé.',
        items: [P('b1-co-flag', 'cờ', true), P('b1-vit', 'vịt', false), P('b1-cu', 'cú', true), P('b1-co-bird', 'cò', true), P('b1-de', 'dê', false), P('b1-ca2', 'cá', true)],
      },
      { type: 'findLetter', name: 'Tìm chữ a, chữ c', letters: ['a', 'c'], pool: ['e', 's', 'h', 'i', 'k', 'đ', 'd', 'v', 'n', 't', 'o'], rounds: 4 },
      { type: 'trace', name: 'Tập viết', texts: ['c', 'a', 'ca'] },
    ],
  },
  {
    id: 'tv-b2',
    num: 2,
    short: 'cà cá',
    title: 'Bài 2: cà – cá',
    sayTitle: 'Bài hai. cà, cá',
    page: 8,
    activities: [
      {
        type: 'intro', name: 'Làm quen',
        cards: [
          { img: 'b2-ca-tim', word: 'cà', say: 'quả cà. cà' },
          { img: 'b2-ca', word: 'cá', say: 'con cá. cá' },
        ],
      },
      {
        type: 'spell', name: 'Đánh vần',
        items: [
          { word: 'cà', img: 'b2-ca-tim', parts: ['c', 'à'], spell: 'cờ, a, ca, huyền, cà', extra: ['á', 'o'] },
          { word: 'cá', img: 'b2-ca', parts: ['c', 'á'], spell: 'cờ, a, ca, sắc, cá', extra: ['à', 'a'] },
        ],
      },
      {
        type: 'findSound', name: 'Tiếng nào có thanh huyền?', target: '̀', prompt: 'Tiếng nào có thanh huyền? Bé chạm vào nhé.',
        items: [P('b2-co', 'cò', true), P('b2-bo', 'bò', true), P('b2-nha', 'nhà', true), P('b2-tho', 'thỏ', false), P('b2-nho', 'nho', false), P('b2-ga', 'gà', true)],
      },
      {
        type: 'findSound', name: 'Tiếng nào có thanh sắc?', target: '́', prompt: 'Tiếng nào có thanh sắc? Bé chạm vào nhé.',
        items: [P('b2-be', 'bé', true), P('b2-la', 'lá', true), P('b2-cu', 'cú', true), P('b2-ho', 'hổ', false), P('b2-bong', 'bóng', true), P('b2-cho', 'chó', true)],
      },
      {
        type: 'pickPicture', name: 'Tìm hình ứng với mỗi tiếng',
        rounds: [
          { show: 'cà', say: 'Tìm hình ứng với tiếng cà', answer: 'b2-ca-tim2', options: ['b2-coc', 'b2-ca-vang', 'b2-ca-tim2'] },
          { show: 'cá', say: 'Tìm hình ứng với tiếng cá', answer: 'b2-ca-vang', options: ['b2-coc', 'b2-ca-vang', 'b2-ca-tim2'] },
          { show: 'ca', say: 'Tìm hình ứng với tiếng ca', answer: 'b2-coc', options: ['b2-coc', 'b2-ca-vang', 'b2-ca-tim2'] },
        ],
      },
      { type: 'trace', name: 'Tập viết', texts: ['cà', 'cá'] },
    ],
  },
  {
    id: 'tv-b3',
    num: 3,
    short: 'Hai con dê',
    title: 'Bài 3: Kể chuyện Hai con dê',
    sayTitle: 'Bài ba. Kể chuyện: Hai con dê',
    page: 10,
    story: true,
    activities: [
      {
        type: 'story', name: 'Nghe kể chuyện',
        slides: [
          { img: 'b3-tranh1', question: 'Hai con dê muốn làm gì?', text: 'Có hai con dê, một con dê trắng và một con dê đen. Cả hai đều muốn sang bên kia suối. Trên suối chỉ có một cây cầu nhỏ, hẹp.' },
          { img: 'b3-tranh2', question: 'Trên cầu, hai con dê thế nào?', text: 'Hai con dê cùng bước lên cầu. Cầu hẹp quá, chỉ đủ cho một con đi. Thế mà không con nào chịu nhường con nào.' },
          { img: 'b3-tranh3', question: 'Đến giữa cầu, hai con dê làm gì?', text: 'Đến giữa cầu, hai con dê húc nhau. Con nào cũng muốn con kia phải lùi lại.' },
          { img: 'b3-tranh4', question: 'Kết quả ra sao?', text: 'Thế là cả hai con dê cùng rơi tùm xuống suối. Các bạn nhỏ ơi, phải biết nhường nhịn nhau nhé!' },
        ],
      },
      {
        type: 'pickPicture', name: 'Trả lời câu hỏi',
        rounds: [
          { say: 'Tranh nào hai con dê húc nhau ở giữa cầu?', answer: 'b3-tranh3', options: ['b3-tranh1', 'b3-tranh2', 'b3-tranh3', 'b3-tranh4'] },
          { say: 'Tranh nào hai con dê rơi xuống suối?', answer: 'b3-tranh4', options: ['b3-tranh1', 'b3-tranh2', 'b3-tranh3', 'b3-tranh4'] },
          { say: 'Tranh nào hai con dê mới đứng ở hai bên bờ suối?', answer: 'b3-tranh1', options: ['b3-tranh1', 'b3-tranh2', 'b3-tranh3', 'b3-tranh4'] },
        ],
      },
      { type: 'storyOrder', name: 'Xếp tranh', imgs: ['b3-tranh1', 'b3-tranh2', 'b3-tranh3', 'b3-tranh4'] },
    ],
  },
  {
    id: 'tv-b4',
    num: 4,
    short: 'o ô',
    title: 'Bài 4: o – ô',
    sayTitle: 'Bài bốn. o, ô',
    page: 12,
    activities: [
      {
        type: 'intro', name: 'Làm quen',
        cards: [
          { img: 'b4-keo-co', word: 'co', label: '(kéo) co', say: 'kéo co. co' },
          { img: 'b4-co-giao', word: 'cô', say: 'cô giáo. cô' },
        ],
      },
      {
        type: 'spell', name: 'Ghép chữ',
        items: [
          { word: 'co', img: 'b4-keo-co', parts: ['c', 'o'], spell: 'cờ, o, co', extra: ['ô', 'a'] },
          { word: 'cô', img: 'b4-co-giao', parts: ['c', 'ô'], spell: 'cờ, ô, cô', extra: ['o', 'a'] },
        ],
      },
      {
        type: 'findSound', name: 'Tiếng có âm o', target: 'o', prompt: 'Bé chạm vào những tranh có âm o nhé.',
        items: [P('b4-co', 'cò', true), P('b4-tho', 'thỏ', true), P('b4-de', 'dê', false), P('b4-nho', 'nho', true), P('b4-bo-nong', 'bồ nông', false), P('b4-ga', 'gà', false)],
      },
      {
        type: 'findSound', name: 'Tìm tiếng có âm ô', target: 'ô', prompt: 'Bé chạm vào những tranh có âm ô nhé.',
        items: [P('b4-ho', 'hổ', true), P('b4-to', 'tổ', true, 'tổ chim'), P('b4-ro', 'rổ', true), P('b4-de-con', 'dế', false), P('b4-ho-nuoc', 'hồ', true), P('b4-xo', 'xô', true)],
      },
      { type: 'findLetter', name: 'Tìm chữ o, chữ ô', letters: ['o', 'ô'], pool: ['e', 'd', 'h', 'r', 'k', 'x', 'v', 'n', 't', 's', 'a'], rounds: 4 },
      { type: 'trace', name: 'Tập viết', texts: ['o', 'co', 'ô', 'cô'] },
    ],
  },
  {
    id: 'tv-b5',
    num: 5,
    short: 'cỏ cọ',
    title: 'Bài 5: cỏ – cọ',
    sayTitle: 'Bài năm. cỏ, cọ',
    page: 14,
    activities: [
      {
        type: 'intro', name: 'Làm quen',
        cards: [
          { img: 'b5-co', word: 'cỏ', say: 'bụi cỏ. cỏ' },
          { img: 'b5-co-cay', word: 'cọ', say: 'cây cọ. cọ' },
        ],
      },
      {
        type: 'spell', name: 'Đánh vần',
        items: [
          { word: 'cỏ', img: 'b5-co', parts: ['c', 'ỏ'], spell: 'cờ, o, co, hỏi, cỏ', extra: ['ọ', 'o'] },
          { word: 'cọ', img: 'b5-co-cay', parts: ['c', 'ọ'], spell: 'cờ, o, co, nặng, cọ', extra: ['ỏ', 'a'] },
        ],
      },
      {
        type: 'findSound', name: 'Tiếng nào có thanh hỏi?', target: '̉', prompt: 'Tiếng nào có thanh hỏi? Bé chạm vào nhé.',
        items: [P('b5-ho', 'hổ', true), P('b5-bo-nong', 'bồ nông', false), P('b5-tho', 'thỏ', true), P('b5-bang', 'bảng', true), P('b5-vong', 'võng', false), P('b5-bo', 'bò', false)],
      },
      {
        type: 'findSound', name: 'Tìm tiếng có thanh nặng', target: '̣', prompt: 'Tiếng nào có thanh nặng? Bé chạm vào nhé.',
        items: [P('b5-ngua', 'ngựa', true), P('b5-chuot', 'chuột', true), P('b5-vet', 'vẹt', true), P('b5-quat', 'quạt', true), P('b5-chuoi', 'chuối', false), P('b5-vit', 'vịt', true)],
      },
      {
        type: 'pickPicture', name: 'Tập đọc',
        rounds: [
          { show: 'ò… ó… o…', say: 'Ò ó o', answer: 'b5-doc-ga', options: ['b5-doc-ga', 'b5-doc-co', 'b5-doc-o', 'b5-doc-huou'] },
          { show: 'cò', say: 'cò', answer: 'b5-doc-co', options: ['b5-doc-ga', 'b5-doc-co', 'b5-doc-o', 'b5-doc-huou'] },
          { show: 'ô', say: 'ô', answer: 'b5-doc-o', options: ['b5-doc-ga', 'b5-doc-co', 'b5-doc-o', 'b5-doc-huou'] },
          { show: 'cổ', say: 'cổ', answer: 'b5-doc-huou', options: ['b5-doc-ga', 'b5-doc-co', 'b5-doc-o', 'b5-doc-huou'] },
        ],
      },
      { type: 'trace', name: 'Tập viết', texts: ['cỏ', 'cọ', 'cổ', 'cộ'] },
    ],
  },
];

TV_FIRST.forEach((l) => (l.chapter = 'Tập một: Học vần'));
export const tiengViet = [...TV_FIRST, ...TV1, ...TV2, ...TV3];

/** Mọi câu cần đọc trong phần Tiếng Việt (dùng để tạo file mp3). */
export function tiengVietPhrases() {
  const out = new Set([SORT_ASK, SORT_ASK_AM, READ_PROMPT]);
  const add = (x) => x && out.add(x);
  for (const l of tiengViet) {
    add(l.sayTitle);
    add(l.chapter);
    for (const a of l.activities) {
      add(a.name);
      add(a.prompt);
      add(a.ask);
      (a.cards || []).forEach((c) => add(c.say));
      (a.items || []).forEach((it) => {
        add(it.say || it.word);
        if (it.spell) {
          add(it.spell);
          add(spellPrompt(it.word));
          add(it.word);
        }
        (it.parts || []).concat(it.extra || []).forEach((p) => add(LETTER_SAY[p] || unitSay(p)));
      });
      (a.letters || []).forEach((x) => add(letterFindSay(x)));
      (Array.isArray(a.rounds) ? a.rounds : []).forEach((r) => {
        add(r.say);
        add(r.q);
      });
      if (a.type === 'chooseText') a.rounds.forEach((r) => r.options.forEach(add));
      (a.slides || []).forEach((s) => {
        add(s.text);
        add(s.question);
      });
      add(a.title);
      (a.sentences || []).forEach(add);
      (a.texts || []).forEach((t) => add(traceSay(t)));
    }
  }
  return [...out];
}