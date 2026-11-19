# Đề xuất: danh sách bài và loại game

Nguồn: 3 file PDF trong `sach-pdf/`. **Cả 3 file là ảnh scan, không có chữ** → nội dung từng bài sẽ được đọc từ ảnh trang và nhập thành JSON (không dùng OCR tự động).

Lệch số trang (trang in trong sách → trang PDF):
- Tiếng Việt 1 tập 1: trang in = trang PDF
- Tiếng Việt 1 tập 2: trang in = trang PDF
- Toán 1: trang PDF = trang in + 1

---

## Tiếng Việt 1

### Cấu trúc một bài học vần (ví dụ Bài 1 "a – c", trang 6–7)
1. Làm quen: tranh + tiếng mẫu (cái **ca**)
2. Đánh vần: c + a → ca ("cờ – a – ca")
3. Nói to tiếng có âm **a** (6 tranh: gà, cá, cà, nhà, thỏ, lá)
4. Tìm tiếng có âm **c** (6 tranh: cờ, vịt, cú, cò, dê, cá)
5. Tìm chữ a, chữ c giữa nhiều thẻ chữ
6. Tập viết: c, a, ca

→ Mỗi mục trong sách khớp với một loại game, nên **app sẽ đi đúng theo thứ tự các mục trong sách**.

### Loại bài và game tương ứng

| Loại bài trong sách | Game trong app |
|---|---|
| Bài âm / vần (ví dụ "a – c", "om – op") | 👂 **Làm quen**: tranh + tiếng mẫu, bấm nghe · 🧩 **Ghép vần**: kéo âm đầu + vần (+ dấu thanh) thành tiếng · 🖼️ **Tranh nào có âm…?**: nghe tên tranh, chọn đúng/sai · 🎈 **Bắt chữ**: bấm vào thẻ/bóng có chữ đang được đọc · ✍️ **Tô chữ**: tô theo nét bằng ngón tay |
| Kể chuyện (ví dụ "Hai con dê") | 📖 **Xem tranh nghe kể**: lật 4 tranh, app đọc lời kể ngắn · ❓ 1–2 câu hỏi chọn tranh |
| Ôn tập | 🎲 **Trộn game**: ngẫu nhiên các game của các bài vừa học, có thể được thêm sao thưởng |
| Tập 2 – Luyện tập tổng hợp (tập đọc, chính tả, tô chữ hoa) | 📖 **Đọc karaoke**: app đọc, tô sáng từng chữ · 🔤 **Điền vần còn thiếu** · ✍️ **Tô chữ hoa** — *làm sau, khi bé đã xong phần học vần* |

### Danh sách bài
**Tập 1 (Học vần, bài 1–93):** a–c, cà–cá, o–ô, cỏ–cọ, ơ–d, đ–e, ê–l, b–chữ hoa, g–h, i–ia, gh, gi–k, kh–m, n–nh, ng–ngh, p–ph, qu–r, s–x, t–th, tr–ch, u–ư, ua–ưa, v–y, chữ hoa, am–ap … (đến uông–uôc, ương–ươc); kèm 14 bài kể chuyện và các bài Ôn tập.
**Tập 2 (bài 94–137):** anh–ach, ênh–êch … oai–oay–uây, vần ít gặp; sau đó 8 chủ điểm Luyện tập tổng hợp.

---

## Toán 1

### Cấu trúc một bài (ví dụ "Các số 1, 2, 3", trang 10–11)
- Tranh lớn: đếm con mèo, chim, hoa → khớp với chấm tròn và số
- Bài 1: Số? (đếm con vật) · Bài 2: lấy số hình đúng · Bài 3: số khối lập phương · Bài 4: đếm đồ vật trên bàn

→ Đề Toán sẽ được **app tự sinh** theo phạm vi của bài (không chép từng câu), nên bé luyện bao nhiêu cũng được.

### Chương và game tương ứng

| Chương | Bài chính | Game trong app |
|---|---|---|
| 1. Các số đến 10 | Trên–dưới, phải–trái · Hình vuông/tròn/tam giác/chữ nhật · Số 0–10 · Nhiều hơn/ít hơn · Dấu > < = | 🍎 **Đếm và chọn số** · 🟢 **Thả đúng số chấm/đồ vật** · 🔷 **Tìm hình** · ⬅️ **Bên nào?** (trên/dưới/trái/phải) · ⚖️ **Kéo dấu > < =** |
| 2. Cộng, trừ trong phạm vi 10 | Phép cộng, phép trừ trong phạm vi 6 và 10 · Khối hộp, khối lập phương | 🐥 **Thêm vào – bớt đi** (hình động: 3 con vịt thêm 2 con) · 🔢 **Tách – gộp số** · 🚀 **Đua tính nhẩm** (có thời gian, tùy chọn) |
| 3. Các số trong phạm vi 100 | Số 11–20 · Số tròn chục · Số có hai chữ số · Chục và đơn vị · So sánh · Dài–ngắn · Đo độ dài, xăng-ti-mét | 🧱 **Bó que tính** (chục và đơn vị) · 🔢 **Xếp số theo thứ tự** · 📏 **Đo bằng thước** |
| 4. Cộng, trừ trong phạm vi 100 | 14+3, 17–2, 25+14, 39–15 … · Các ngày trong tuần · Đồng hồ | ➕ **Tính theo cột** (kéo số vào ô) · 📅 **Hôm nay thứ mấy?** · 🕐 **Quay kim đồng hồ** |

---

## Bản thử đầu tiên (MVP)

**Tiếng Việt:** Bài 1 (a–c), 2 (cà–cá), 3 (Kể chuyện Hai con dê), 4 (o–ô), 5 (cỏ–cọ)
**Toán:** Trên–dưới/phải–trái, Các hình, Các số 1–3, Các số 4–6, Các số 7–9

**Có trong bản thử:**
- Màn chọn bé + bản đồ hành trình (2 đảo: Tiếng Việt, Toán)
- Game: Ghép vần, Tranh nào có âm…?, Bắt chữ, Tô chữ · Đếm và chọn số, Thả đúng số, Tìm hình, Bên nào?
- Sao (1–3) mỗi bài, linh vật, lời khen bằng giọng đọc
- Trang bố mẹ xem tiến độ
- Tranh: cắt từ trang sách (dùng trong gia đình)
- Giọng đọc: tạo sẵn file mp3 bằng edge-tts (giọng HoaiMy)

**Công nghệ:** React + Vite, chạy trên Edge/Chrome, lưu tiến độ trên máy, cài được như app (PWA).
