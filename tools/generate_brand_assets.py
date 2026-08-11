from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONT_BOLD = Path(r"C:\Windows\Fonts\segoeuib.ttf")
FONT_REGULAR = Path(r"C:\Windows\Fonts\segoeui.ttf")
BG = "#090d0f"
PANEL = "#12191b"
TEXT = "#edf1ef"
MUTED = "#a7b2ae"
SAGE = "#8db1a4"
BRASS = "#c4a56f"


def font(path: Path, size: int):
    return ImageFont.truetype(str(path), size)


def app_icon(size: int):
    scale = size / 512
    image = Image.new("RGB", (size, size), BG)
    draw = ImageDraw.Draw(image)
    pad = int(24 * scale)
    draw.rounded_rectangle((pad, pad, size - pad, size - pad), radius=int(78 * scale), fill=BG)
    center = size // 2
    outer = int(142 * scale)
    width = max(4, int(18 * scale))
    draw.ellipse((center - outer, center - outer, center + outer, center + outer), fill=PANEL, outline=SAGE, width=width)
    inner = int(42 * scale)
    draw.ellipse((center - inner, center - inner, center + inner, center + inner), outline=BRASS, width=max(3, int(13 * scale)))
    gap_start, gap_end = int(89 * scale), int(180 * scale)
    for line in [
        (center, center - gap_end, center, center - gap_start),
        (center, center + gap_start, center, center + gap_end),
        (center - gap_end, center, center - gap_start, center),
        (center + gap_start, center, center + gap_end, center),
    ]:
        draw.line(line, fill=SAGE, width=width)
    label_font = font(FONT_BOLD, max(24, int(70 * scale)))
    box = draw.textbbox((0, 0), "S&D", font=label_font)
    draw.text((center - (box[2] - box[0]) / 2, center - (box[3] - box[1]) / 2 - box[1]), "S&D", font=label_font, fill=TEXT)
    return image


def social_card():
    image = Image.new("RGB", (1200, 630), BG)
    draw = ImageDraw.Draw(image)
    for x in range(0, 1200, 42):
        draw.line((x, 0, x, 630), fill="#101719", width=1)
    for y in range(0, 630, 42):
        draw.line((0, y, 1200, y), fill="#101719", width=1)
    draw.rectangle((0, 0, 14, 630), fill=SAGE)
    draw.rounded_rectangle((72, 64, 1128, 566), radius=36, fill=PANEL, outline="#354546", width=2)

    icon = app_icon(260)
    image.paste(icon, (824, 185))

    draw.text((118, 106), "SEARCH & DESTROY", font=font(FONT_BOLD, 32), fill=SAGE)
    draw.text((118, 160), "COMPANION", font=font(FONT_BOLD, 68), fill=TEXT)
    draw.text((118, 268), "Learn COD Mobile S&D", font=font(FONT_BOLD, 38), fill=TEXT)
    draw.text((118, 318), "without learning it the hard way.", font=font(FONT_BOLD, 38), fill=TEXT)
    draw.text((118, 410), "Starter lessons  •  settings  •  HUD layouts", font=font(FONT_REGULAR, 25), fill=MUTED)
    draw.text((118, 492), "UNDERSTAND FIRST. COPY NEVER.", font=font(FONT_BOLD, 21), fill=BRASS)
    return image


def main():
    for size in (192, 512):
        image = app_icon(size)
        image.save(ROOT / f"icon-{size}.png", optimize=True)
        image.save(ROOT / "full" / f"icon-{size}.png", optimize=True)
    social_card().save(ROOT / "social-card.png", optimize=True)


if __name__ == "__main__":
    main()
