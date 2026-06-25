# Gallery images

The homepage gallery loads these files directly from `/gallery/...`. They are
optimized WebP (converted from the originals — ~11 MB of PNG/JPG down to under
1 MB total). Referenced in `src/routes/index.tsx`.

| File | Used for |
| --- | --- |
| `booth.webp` | ProjectKix donation booth at LA Fitness |
| `champions.webp` | NWBA wheelchair basketball championship team |
| `lafitness.webp` | ProjectKix team with LA Fitness staff |
| `warriors.webp` | Wounded Warrior athletes |
| `certificate.webp` | Certificate of appreciation presentation |

To replace an image, drop in a new file with the same name (WebP recommended;
keep widths around 1200px for the gallery). The hero banner image lives at
`public/hero.webp`.
