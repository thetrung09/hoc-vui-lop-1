// Đọc số tiếng Việt (0–100) cho trẻ lớp 1.
const U = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];

export function numWord(n) {
  if (n < 10) return U[n];
  if (n === 10) return 'mười';
  if (n === 100) return 'một trăm';
  const t = Math.floor(n / 10);
  const u = n % 10;
  const head = t === 1 ? 'mười' : `${U[t]} mươi`;
  if (u === 0) return head;
  const unit = u === 5 ? 'lăm' : u === 1 && t > 1 ? 'mốt' : U[u];
  return `${head} ${unit}`;
}

export const OP_WORD = { '+': 'cộng', '-': 'trừ' };
export const ASK_EQ = 'bằng mấy?';
