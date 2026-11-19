// Công cụ chung cho phần Tiếng Việt: cách đọc âm/vần và bộ dựng bài học từ dữ liệu gọn.
import { numWord } from '../lib/numbers.js';

export const SORT_ASK = 'có vần nào?';
export const SORT_ASK_AM = 'có âm nào?';
export const WHICH_RIGHT = 'Chữ nào viết đúng?';
/** Câu hỏi "Chữ nào viết đúng?" từ các cặp [đúng, sai]. */
export const spellingQuiz = (pairs, name = 'Em chọn chữ nào?') => ({ name, q: pairs.map((p) => [WHICH_RIGHT, p, 0]) });
export const READ_PROMPT = 'Bé nghe đọc rồi đọc theo nhé. Chạm vào từng câu để nghe lại.';

/** Tên âm (phụ âm) theo cách đọc lớp 1. */
export const CONS_SAY = {
  b: 'bờ', c: 'cờ', ch: 'chờ', d: 'dờ', đ: 'đờ', g: 'gờ', gh: 'gờ', gi: 'di', h: 'hờ', k: 'ca', kh: 'khờ',
  l: 'lờ', m: 'mờ', n: 'nờ', ng: 'ngờ', ngh: 'ngờ', nh: 'nhờ', p: 'pờ', ph: 'phờ', qu: 'quờ', r: 'rờ',
  s: 'sờ', t: 'tờ', th: 'thờ', tr: 'trờ', v: 'vờ', x: 'xờ',
};
const SAC = { a: 'á', ă: 'ắ', â: 'ấ', e: 'é', ê: 'ế', i: 'í', o: 'ó', ô: 'ố', ơ: 'ớ', u: 'ú', ư: 'ứ', y: 'ý' };
const TONE_NAME = { à: 'a huyền', á: 'a sắc', ả: 'a hỏi', ã: 'a ngã', ạ: 'a nặng' };

/** Đọc một vần: vần tận cùng p, t, c, ch luôn mang thanh sắc (ap → áp). */
export function vanSay(v) {
  if (CONS_SAY[v]) return CONS_SAY[v];
  if (TONE_NAME[v]) return TONE_NAME[v];
  const m = v.match(/^(.*?)([aăâeêioôơuưy])(p|t|c|ch)$/);
  if (m && !/[̣̀́̃̉]/.test(v.normalize('NFD'))) return m[1] + SAC[m[2]] + m[3];
  return v;
}
export const unitSay = (x) => CONS_SAY[x] || vanSay(x);

const DISTRACT = ['a', 'o', 'e', 'm', 'n', 'p', 't', 'c', 'u', 'i', 'ng', 'nh', 'ch', 'ô', 'ơ', 'ê', 'ă', 'â'];
function mkSpell(word, parts, spell, extra) {
  const ex = extra || DISTRACT.filter((d) => !parts.includes(d)).sort(() => 0.5 - Math.random()).slice(0, 2);
  return { word, parts, spell: spell || [...parts.map(unitSay), vanSay(word)].join(', '), extra: ex };
}

export function splitSentences(text) {
  return text
    .replace(/\s+/g, ' ')
    .match(/[^.!?…]+[.!?…]*["”»]?/g)
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * Dựng một bài từ dữ liệu gọn.
 * spec: { n, t, p, short?, intro, spell, sort, find, pick, letters, read, trace, story, order }
 */
export function lesson(book, spec) {
  const acts = [];
  const nm = (x, d) => x || d;
  if (spec.story) {
    acts.push({
      type: 'story',
      name: 'Nghe kể chuyện',
      slides: spec.story.map(([img, question, text]) => ({ img, question, text })),
    });
    if (spec.q) acts.push(chooseText(spec.q, 'Trả lời câu hỏi'));
    acts.push({ type: 'storyOrder', name: 'Xếp tranh', imgs: spec.story.map((s) => s[0]) });
  }
  if (spec.intro) acts.push({ type: 'intro', name: 'Làm quen', cards: spec.intro.map(([img, word, say]) => ({ img, word, say: say || word })) });
  if (spec.spell) acts.push({ type: 'spell', name: nm(spec.spellName, 'Đánh vần'), items: spec.spell.map((s) => (Array.isArray(s) ? mkSpell(...s) : s)) });
  [...(spec.sort ? [spec.sort] : []), ...(spec.sorts || [])].forEach((so) => {
    const keys = so.keys;
    acts.push({
      type: 'sort',
      name: nm(so.name, `Tiếng nào có vần ${keys.join(', vần ')}?`),
      keys,
      ask: so.ask === 'âm' ? SORT_ASK_AM : so.ask || SORT_ASK,
      items: so.items.map(([img, word, key, say]) => ({ img, word, key, say })),
    });
  });
  (spec.find || []).forEach((f) =>
    acts.push({
      type: 'findSound',
      name: f.name,
      prompt: f.prompt || f.name,
      items: f.items.map(([img, word, ok, say]) => ({ img, word, ok, say: say || word })),
      showWords: f.showWords,
    }),
  );
  (spec.pick || []).forEach((pk) => {
    const imgs = pk.options || pk.rounds.map((r) => r[1]);
    acts.push({
      type: 'pickPicture',
      name: pk.name || 'Đọc và tìm hình',
      rounds: pk.rounds.map(([show, answer, say]) => ({ show, say: say || show, answer, options: imgs })),
    });
  });
  (spec.choose || []).forEach((c) => acts.push(chooseText(c.q, c.name)));
  if (spec.letters) acts.push({ type: 'findLetter', name: `Tìm chữ ${spec.letters.join(', chữ ')}`, letters: spec.letters, pool: spec.pool || DISTRACT.filter((d) => d.length === 1 && !spec.letters.includes(d)), rounds: 4 });
  const readActs = [];
  [...(spec.read ? [spec.read] : []), ...(spec.reads || [])].forEach((r) => {
    // Thơ: mỗi dòng là một câu (r.poem = các dòng ngăn bởi "/"), văn xuôi: tách theo dấu câu.
    const sentences = r.poem ? r.poem.split('/').map((s) => s.trim()).filter(Boolean) : splitSentences(r.text);
    readActs.push({ type: 'reading', name: r.name || 'Tập đọc', title: r.title, img: r.img, sentences, poem: Boolean(r.poem) });
    if (r.q) readActs.push(chooseText(r.q, 'Trả lời câu hỏi'));
  });
  // readFirst: bài luyện tập đọc trước, rồi mới tới chính tả / phân loại
  if (spec.readFirst) acts.unshift(...readActs);
  else acts.push(...readActs);
  if (spec.order) acts.push({ type: 'storyOrder', name: 'Sắp xếp các tranh theo đúng nội dung truyện', imgs: spec.order });
  if (spec.trace) acts.push({ type: 'trace', name: 'Tập viết', texts: spec.trace });

  const parts = spec.t.split(/\s*[–-]\s*/);
  const isVan = !spec.story && !/Ôn tập|Kể chuyện|Chữ hoa/.test(spec.t);
  return {
    id: spec.id || `${book}-b${spec.n}`,
    num: spec.num ?? spec.n,
    short: spec.short || (spec.story ? spec.t : spec.t.replace(/\s*–\s*/g, ' ')),
    title: spec.title || `Bài ${spec.n}: ${spec.story ? 'Kể chuyện ' : ''}${spec.t}`,
    sayTitle: spec.sayTitle || `Bài ${numWord(spec.n)}. ${spec.story ? 'Kể chuyện: ' : ''}${isVan ? parts.map(vanSay).join(', ') : spec.t}`,
    page: spec.p,
    chapter: spec.chapter,
    story: Boolean(spec.story),
    activities: acts,
  };
}

function chooseText(q, name) {
  return { type: 'chooseText', name, rounds: q.map(([qq, options, answer = 0]) => ({ q: qq, options, answer })) };
}
