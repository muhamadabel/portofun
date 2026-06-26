# porto-stoopid

Portfolio **Muhammad Abel Abhinaya** (Frontend Developer) — tema **culture biru × cream Y2K / JDM**.
Kertas cream, navy + cobalt + aksen kuning. Motif bintang, groovy flower (Matisse), sparkle,
emblem JDM, katakana. Aksen **bintang 3D glossy** + **integrasi live GitHub**.

## Stack
- **React + Vite**
- **@react-three/fiber** — bintang 3D glossy (ExtrudeGeometry + Environment lightformer, no network), fade pas scroll keluar hero
- **Live GitHub** — fetch repo/profil/stats real-time dari `api.github.com`
- **Lenis** smooth scroll, IntersectionObserver reveal
- Fonts: Anton (poster), Syne (heads), Space Mono

## Jalanin
```bash
npm install
npm run dev      # http://localhost:5180
npm run build
```
Tambah `?nogh` di URL buat matiin fetch GitHub (debug/screenshot tanpa network).

## Ganti konten
- **`src/data.js`** — profile (nama, role, about, focus, facts, socials), stack per-kategori, featured projects
- **`src/github.js`** — username GitHub (`muhamadabel`) & logika fetch
- **`src/index.css`** — palette & font (`--paper`/`--ink`/`--blue`/`--yellow`)

## Struktur
| File | Isi |
|------|-----|
| `src/three/Star3D.jsx` | Bintang 3D glossy (besar + mini orbit), lighting + Environment |
| `src/ui/Decor.jsx` | Motif culture: Star, Sparkle, Flower, Badge (emblem muter), Kata |
| `src/sections/*` | Hero, About(+focus), Stack, Github (live), Marquee, Projects, Contact |
| `src/ui/*` | Nav (culture bar), Loader (bintang muter), Reveal |

## Catatan
- GitHub unauthenticated = 60 req/jam. Gambar github-readme-stats di-load pas section keliatan (IO).
- Riwayat tema: reggae Slightly Stoopid → zine street-art → **biru/cream culture (final)**.
- Hormatin `prefers-reduced-motion`.
