// Sinh phép cộng / trừ theo dạng bài trong sách Toán 1.
import { pick, rand } from './util.js';

export function makeArith(act) {
  const form = act.form || 'le';
  const max = act.max || 10;
  const ops = act.ops || ['+'];
  const op = pick(ops);
  let a, b;
  const u = () => rand(0, 9);
  switch (form) {
    case '14+3': // số có hai chữ số (11–19) cộng/trừ số có một chữ số, không nhớ
      a = rand(11, 18);
      b = op === '+' ? rand(1, 9 - (a % 10)) : rand(1, a % 10 || 1);
      if (op === '-' && a % 10 === 0) a += 1;
      break;
    case 'tens':
      a = rand(op === '+' ? 1 : 2, op === '+' ? 8 : 9) * 10;
      b = op === '+' ? rand(1, 10 - a / 10) * 10 : rand(1, a / 10) * 10;
      if (op === '+' && a + b > 90) b = 90 - a || 10;
      break;
    case '25+14':
      a = rand(1, 8) * 10 + u();
      b = rand(1, 9 - Math.floor(a / 10)) * 10 + rand(0, 9 - (a % 10));
      if (op === '-') [a, b] = [a + b, b];
      break;
    case '25+4':
      a = rand(1, 9) * 10 + rand(0, 8);
      b = Math.random() < 0.5 ? rand(1, 9 - (a % 10)) : rand(1, 9 - Math.floor(a / 10) || 1) * 10;
      if (a + b > 99) b = 1;
      if (op === '-') [a, b] = [a + b, b];
      break;
    default: {
      // trong phạm vi max
      if (op === '+') {
        a = rand(0, max);
        b = rand(a === 0 ? 1 : 0, max - a);
        if (act.noZero && (a === 0 || b === 0)) {
          a = rand(1, max - 1);
          b = rand(1, max - a);
        }
      } else {
        a = rand(act.noZero ? 2 : 1, max);
        b = rand(act.noZero ? 1 : 0, act.noZero ? a - 1 : a);
        if (act.noZero && b === 0) b = Math.min(1, a);
      }
    }
  }
  const c = op === '+' ? a + b : a - b;
  return { a, b, op, c };
}

