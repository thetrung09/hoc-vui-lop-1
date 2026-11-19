// Kiểm tra bộ sinh phép tính: chạy 20.000 lần mỗi dạng, báo lỗi nếu sai luật.
// Chạy: node tools/test-arith.mjs
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'app', 'src', 'lib');
const { makeArith } = await import(pathToFileURL(join(root, 'arith.js')));
const { numWord } = await import(pathToFileURL(join(root, 'numbers.js')));

const noCarry = (a, b) => (a % 10) + (b % 10) < 10;
const noBorrow = (a, b) => a % 10 >= b % 10;
const cases = [
  ['le5+', { ops: ['+'], max: 5, noZero: true }, (q) => q.c <= 5 && q.a > 0 && q.b > 0],
  ['le6-', { ops: ['-'], max: 6 }, (q) => q.c >= 0 && q.a <= 6],
  ['le10±', { ops: ['+', '-'], max: 10 }, (q) => q.c >= 0 && q.c <= 10 && q.a <= 10],
  ['14+3', { ops: ['+'], form: '14+3' }, (q) => q.a >= 11 && q.a <= 19 && q.b <= 9 && q.c <= 19 && noCarry(q.a, q.b)],
  ['17-2', { ops: ['-'], form: '14+3' }, (q) => q.a >= 11 && q.b >= 1 && q.b <= 9 && q.c >= 10 && noBorrow(q.a, q.b)],
  ['tens±', { ops: ['+', '-'], form: 'tens' }, (q) => q.a % 10 === 0 && q.b % 10 === 0 && q.c >= 0 && q.c <= 90 && q.b > 0],
  ['25+14', { ops: ['+'], form: '25+14' }, (q) => q.a >= 10 && q.b >= 10 && q.c <= 99 && noCarry(q.a, q.b)],
  ['39-15', { ops: ['-'], form: '25+14' }, (q) => q.b >= 10 && q.c >= 0 && q.a <= 99 && noBorrow(q.a, q.b)],
  ['25+4', { ops: ['+'], form: '25+4' }, (q) => q.a >= 10 && (q.b < 10 || q.b % 10 === 0) && q.c <= 99 && noCarry(q.a, q.b)],
  ['27-4', { ops: ['-'], form: '25+4' }, (q) => (q.b < 10 || q.b % 10 === 0) && q.c >= 10 && q.a <= 99 && noBorrow(q.a, q.b)],
];
let bad = 0;
for (const [name, act, ok] of cases) {
  const seen = new Set();
  let fails = 0;
  for (let i = 0; i < 20000; i++) {
    const q = makeArith(act);
    seen.add(`${q.a}${q.op}${q.b}`);
    if (!ok(q) || q.b < 0 || !Number.isInteger(q.c)) {
      if (fails++ < 3) console.log(`  ${name} SAI: ${q.a} ${q.op} ${q.b} = ${q.c}`);
    }
  }
  bad += fails;
  console.log(`${fails ? '✗' : '✓'} ${name}: ${seen.size} phép khác nhau${fails ? `, ${fails} lỗi` : ''}`);
}
const words = [0, 1, 5, 10, 11, 15, 21, 24, 25, 40, 55, 71, 99, 100].map((n) => `${n}=${numWord(n)}`);
console.log(words.join(' | '));
process.exit(bad ? 1 : 0);
