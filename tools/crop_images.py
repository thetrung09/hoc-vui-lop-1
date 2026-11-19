"""Cắt tranh từ trang sách → app/public/img/<id>.jpg.

Toạ độ lấy từ tools/crops.json và tools/crops/*.json (mỗi file một đợt bài).
  python tools/crop_images.py                  # cắt tất cả
  python tools/crop_images.py tv1-06-15        # chỉ cắt file tools/crops/tv1-06-15.json
Mỗi lần chạy tạo tools/_contact.png để kiểm tra nhanh các ảnh vừa cắt.
"""
import json
import pathlib
import sys

import pymupdf

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "app" / "public" / "img"
OUT.mkdir(parents=True, exist_ok=True)
OUT_DPI = 200
BOOKS = {
    "tv1": "Tiếng Việt 1 Tập 1 - Cánh diều.pdf",
    "tv2": "Tiếng Việt 1 Tập 2 Cánh diều.pdf",
    "toan": "Toán 1 Cánh diều.pdf",
}

if len(sys.argv) > 1:
    files = [ROOT / "tools" / "crops" / f"{sys.argv[1]}.json"]
else:
    files = [ROOT / "tools" / "crops.json", *sorted((ROOT / "tools" / "crops").glob("*.json"))]

docs = {}
made = []
seen = set()
for f in files:
    spec = json.loads(f.read_text(encoding="utf-8"))
    for group in spec["crops"]:
        book = group["book"]
        if book not in docs:
            docs[book] = pymupdf.open(ROOT / "sach-pdf" / BOOKS[book])
        page = docs[book][group["page"] - 1]
        s = 72 / group.get("refDpi", 70)
        for cid, (x0, y0, x1, y1) in group["items"].items():
            if cid in seen:
                print(f"  CẢNH BÁO: trùng tên ảnh {cid}")
            seen.add(cid)
            clip = pymupdf.Rect(x0 * s, y0 * s, x1 * s, y1 * s) & page.rect
            pix = page.get_pixmap(dpi=OUT_DPI, clip=clip)
            path = OUT / f"{cid}.jpg"
            pix.save(path, jpg_quality=80)
            made.append((cid, path))

cols, cw, ch = 8, 170, 150
rows = (len(made) + cols - 1) // cols
sheet = pymupdf.open()
pg = sheet.new_page(width=cols * cw, height=max(rows, 1) * ch)
for i, (cid, path) in enumerate(made):
    x, y = (i % cols) * cw, (i // cols) * ch
    pg.insert_image(pymupdf.Rect(x + 5, y + 5, x + cw - 5, y + ch - 20), filename=str(path), keep_proportion=True)
    pg.insert_text((x + 5, y + ch - 6), cid, fontsize=10)
pg.get_pixmap(dpi=60).save(ROOT / "tools" / "_contact.png")
print(f"Đã cắt {len(made)} ảnh")
