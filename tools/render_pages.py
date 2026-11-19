"""Chuyển trang PDF thành ảnh PNG.

Cách dùng: python tools/render_pages.py "<tên file pdf trong sach-pdf>" <trang-bắt-đầu> <trang-kết-thúc> [dpi]
Ảnh ra: pages/<tên sách>/p<số trang>.png
"""
import pathlib
import sys

import pymupdf

ROOT = pathlib.Path(__file__).resolve().parent.parent
name, start, end = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
dpi = int(sys.argv[4]) if len(sys.argv) > 4 else 60

pdf = ROOT / "sach-pdf" / name
out = ROOT / "pages" / pdf.stem
out.mkdir(parents=True, exist_ok=True)
doc = pymupdf.open(pdf)
for n in range(start, min(end, doc.page_count) + 1):
    doc[n - 1].get_pixmap(dpi=dpi).save(out / f"p{n:03d}.png")
print(f"Đã lưu trang {start}-{end} vào {out}")
