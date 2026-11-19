"""Trích chữ từ các PDF trong sach-pdf/ ra thư mục extracted/<tên sách>.txt (mỗi trang có tiêu đề ===== Trang N =====)."""
import pathlib
import sys

import pymupdf

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "sach-pdf"
OUT = ROOT / "extracted"
OUT.mkdir(exist_ok=True)

for pdf in sorted(SRC.glob("*.pdf")):
    doc = pymupdf.open(pdf)
    parts = []
    empty = 0
    for i, page in enumerate(doc, start=1):
        text = page.get_text("text").strip()
        if not text:
            empty += 1
        parts.append(f"===== Trang {i} =====\n{text}\n")
    (OUT / f"{pdf.stem}.txt").write_text("\n".join(parts), encoding="utf-8")
    print(f"{pdf.name}: {doc.page_count} trang, {empty} trang không có chữ", file=sys.stderr)
