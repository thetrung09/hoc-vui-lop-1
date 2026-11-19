/** Linh vật lớn dần theo tổng số sao. */
export const MASCOT_STAGES = [
  { min: 0, icon: '🥚', name: 'Quả trứng' },
  { min: 3, icon: '🐣', name: 'Gà con mới nở' },
  { min: 10, icon: '🐥', name: 'Gà con' },
  { min: 22, icon: '🐤', name: 'Gà con biết bay' },
  { min: 40, icon: '🐔', name: 'Gà mái' },
  { min: 65, icon: '🦚', name: 'Chim công' },
];

export const mascotSay = (m) =>
  m.next ? `Tớ là ${m.name}. Bé học thêm để tớ lớn lên nhé!` : `Tớ là ${m.name}. Cảm ơn bé đã chăm học!`;

export function mascotFor(stars) {
  let i = 0;
  MASCOT_STAGES.forEach((s, k) => {
    if (stars >= s.min) i = k;
  });
  return { ...MASCOT_STAGES[i], index: i, next: MASCOT_STAGES[i + 1] || null };
}
