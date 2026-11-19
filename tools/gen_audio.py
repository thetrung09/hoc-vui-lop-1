"""Tạo file mp3 giọng đọc tiếng Việt (giọng HoaiMy của Microsoft Edge) cho mọi câu trong
app/public/audio/phrases.json, rồi ghi app/public/audio/manifest.json { "câu": "tên file.mp3" }.

Cần mạng và gói edge-tts:  python -m pip install edge-tts
Chạy:  python tools/gen_audio.py        (bỏ qua câu đã có file; thêm --force để tạo lại hết)
"""
import asyncio
import hashlib
import json
import pathlib
import sys
import unicodedata

import edge_tts

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "app" / "public" / "audio"
VOICE = "vi-VN-HoaiMyNeural"
RATE = "-12%"  # đọc chậm hơn một chút cho trẻ nhỏ
FORCE = "--force" in sys.argv


def fname(text: str) -> str:
    return hashlib.sha1(text.encode("utf-8")).hexdigest()[:12] + ".mp3"


async def make(text: str, sem: asyncio.Semaphore) -> tuple[str, bool]:
    path = OUT / fname(text)
    if path.exists() and path.stat().st_size > 0 and not FORCE:
        return text, True
    async with sem:
        for attempt in range(3):
            try:
                await edge_tts.Communicate(text, VOICE, rate=RATE).save(str(path))
                return text, True
            except Exception as e:  # mạng chập chờn: thử lại
                err = e
                await asyncio.sleep(1 + attempt)
    print(f"  LỖI: {text!r}: {err}", file=sys.stderr)
    return text, False


async def main():
    phrases = json.loads((OUT / "phrases.json").read_text(encoding="utf-8"))
    phrases = [unicodedata.normalize("NFC", p).strip() for p in phrases]
    sem = asyncio.Semaphore(6)
    results = await asyncio.gather(*(make(p, sem) for p in phrases))
    manifest = {t: fname(t) for t, ok in results if ok}
    (OUT / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=1), encoding="utf-8")
    bad = len(phrases) - len(manifest)
    print(f"Xong: {len(manifest)}/{len(phrases)} câu có file mp3" + (f", {bad} câu lỗi" if bad else ""))


asyncio.run(main())
