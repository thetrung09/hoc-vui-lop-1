# Học Vui Lớp 1

Web app cho bé tự học **Tiếng Việt 1** và **Toán 1** (sách Cánh Diều) qua các trò chơi.

## Mở app
Bấm đúp **`MoApp.bat`**. App mở toàn màn hình trong Microsoft Edge. Đóng cửa sổ đen để tắt app.
(Lần đầu cần có mạng để cài thư viện.)

## Thư mục
| Thư mục | Nội dung |
|---|---|
| `sach-pdf/` | PDF sách gốc (bản scan ảnh) |
| `app/` | Mã nguồn app (React + Vite) |
| `app/src/data/tiengviet.js` | Nội dung các bài Tiếng Việt (nhập từ sách) |
| `app/src/data/toan.js` | Các bài Toán (đề sinh ngẫu nhiên theo phạm vi bài) |
| `app/public/img/` | Tranh cắt từ sách |
| `app/public/audio/` | File giọng đọc mp3 (giọng HoaiMy) |
| `tools/` | Script hỗ trợ: render trang, cắt tranh, tạo giọng đọc |
| `docs/de-xuat-bai-hoc.md` | Đề xuất danh sách bài và loại game |

## Nội dung hiện có
- **Tiếng Việt:** bài 1–137 (học vần tập 1 và tập 2) + ôn tập giữa và cuối học kì I
  + *Luyện tập tổng hợp* (8 chủ điểm × 4 bài: 3 bài tập đọc kèm chính tả, tô chữ hoa; 1 bài kể chuyện)
  + *Ôn tập cuối năm* (5 bài). Phần góc sáng tạo và tự đọc sách báo là hoạt động ngoài sách nên không làm thành game.
- **Toán:** 76 bài của cả 4 chương (đề sinh ngẫu nhiên theo từng bài).

Dữ liệu: `app/src/data/tv1.js`, `tv2.js`, `tv3.js` (luyện tập + ôn cuối năm), `toan.js`. Toạ độ cắt tranh từng đợt: `tools/crops/*.json`.
Lời kể chuyện trong các bài kể chuyện do app viết lại theo tranh (sách chỉ có tranh và câu hỏi).

## Mở khoá bài
Mặc định bài sau mở khi bài trước có ít nhất 1 sao. Muốn bé học ngay bài đang học trên lớp:
**Trang bố mẹ → mục từng môn → "Mở sẵn cho bé đến bài:"** chọn bài cần mở.

Kiểm tra dữ liệu: `node tools/check-data.mjs` · Kiểm tra phép tính: `node tools/test-arith.mjs`

## Thêm bài mới
1. Xem trang sách: `python tools/render_pages.py "<tên file pdf>" <trang đầu> <trang cuối> 80` → ảnh trong `pages/`.
2. Thêm toạ độ tranh vào `tools/crops.json`, chạy `python tools/crop_images.py` (xem `tools/_contact.png` để kiểm tra).
3. Thêm bài vào `app/src/data/tiengviet.js` (hoặc `toan.js`).
4. Tạo giọng đọc cho câu mới (cần mạng):
   ```
   cd app
   npm run phrases
   cd ..
   python tools/gen_audio.py
   ```
   Câu nào chưa có file mp3 thì app tự dùng giọng đọc của trình duyệt.

## Tiến độ học
Lưu ngay trên máy (trong trình duyệt). Xem ở **Trang bố mẹ** (nút 👨‍👩‍👧, khoá bằng một phép tính).
