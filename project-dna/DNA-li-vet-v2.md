# DNA — Li-Vet veterinární ordinace (v2 redesign)

## Vizuální archetype
**`warm-organic`** — přívětivé, teplé, organické. Odlišuje od klinické anonymity.

## Vizuální směr
**`duotone`** — hluboká burgundy/plum + teplá terracotta/copper

## Barevná paleta

| Proměnná | Hex | Použití |
|----------|-----|---------|
| `--plum-dark` | `#251020` | Nav, footer, tmavé sekce |
| `--plum` | `#4A1F40` | Trust bar, buttons |
| `--plum-mid` | `#6B3060` | Hover states |
| `--copper` | `#C07040` | CTA, akcenty, section labels, em |
| `--copper-hover` | `#A85C30` | Hover copper |
| `--copper-light` | `#F0D8C0` | Light akcenty, border |
| `--copper-pale` | `#FBF0E8` | Featured card bg |
| `--sand` | `#FAF4EE` | Hlavní bg |
| `--sand-alt` | `#F2E8DF` | Alt sekce bg |
| `--text-dark` | `#18080F` | Hlavní text |
| `--text-mid` | `#5A3A50` | Sekundární text |
| `--text-light` | `#997080` | Popisky, labels |
| `--border` | `#E0CEC8` | Bordery karet |

## Typografie

| Role | Font | Weight |
|------|------|--------|
| Nadpisy h1–h3 | **Instrument Serif** | 400 (italic pro em) |
| Tělo textu | **Outfit** | 300, 400, 500, 600, 700 |

## Sekce (pořadí)

1. Nav — transparent → plum-dark při scrollu; gap: clamp(1rem,3vw,2.5rem); CTA jako outlined border
2. Statement — plum-dark bg, h1 max-width:16ch text-wrap:balance; hero visual = paw-print SVG v kruhu (rgba copper)
3. Trust bar — plum bg, 4 fakta: "8 specializací / Pes·Kočka / Osobní přístup / Rodinná ordinace"
4. Naše služby — featured pattern: Preventivní program (shield-check 48px, btn "Zjistit více") + 7 karet uniform grid
5. Vybavení — plum-dark bg, 2→3→5 col grid; všechny ikony inline Lucide SVG 22px
6. Ordinační doba + Kontakt — split; Po–Pá sloučeno do 1 řádku "9:00–11:00 & 15:00–17:00"
7. Mapa — OpenStreetMap embed
8. Footer — plum-dark, 3 sloupce

## Ikony
- Servisy (32px): scissors, eye, smile, sparkles, activity, package, heart-pulse, shield-check
- Vybavení (22px): eye, waves, droplet, microscope, scale, flame, scan-line, zap, monitor, scan
- Všechny inline Lucide SVG — zero dependency

## GitHub
https://github.com/supercigan/li-vet-
