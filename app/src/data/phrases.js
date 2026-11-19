// Câu nói chung của app (khen, động viên, hướng dẫn).
export const GOOD = ['Đúng rồi!', 'Giỏi quá!', 'Tuyệt vời!', 'Bé giỏi lắm!', 'Chính xác!'];
export const BAD = ['Chưa đúng rồi, bé thử lại nhé!', 'Thử lại nào!', 'Gần đúng rồi, bé thử lại nhé!'];
export const DONE_ACTIVITY = ['Xong rồi! Mình làm tiếp nhé.', 'Bé làm tốt lắm! Tiếp nào.'];
export const STARS_SAY = {
  1: 'Bé được một sao! Chơi lại để được thêm sao nhé.',
  2: 'Giỏi quá! Bé được hai sao!',
  3: 'Tuyệt vời! Bé được ba sao!',
};
export const UI = {
  welcome: 'Chào bé! Hôm nay mình học gì nào?',
  whoAreYou: 'Bé là ai nhỉ? Chạm vào tên của bé nhé.',
  tiengViet: 'Tiếng Việt',
  toan: 'Toán',
  locked: 'Bài này chưa mở. Bé học bài trước đã nhé.',
  intro: 'Bé chạm vào tranh để nghe nhé.',
  traceMore: 'Bé tô thêm cho kín chữ nhé.',
  traceGood: 'Bé tô đẹp quá!',
  order: 'Bé chạm vào các tranh theo đúng thứ tự câu chuyện nhé.',
  rest: 'Bé học chăm quá! Mình nghỉ mắt một chút nhé.',
  mascotUp: 'Ôi! Linh vật của bé đã lớn lên rồi!',
};

export function commonPhrases() {
  return [...GOOD, ...BAD, ...DONE_ACTIVITY, ...Object.values(STARS_SAY), ...Object.values(UI)];
}
