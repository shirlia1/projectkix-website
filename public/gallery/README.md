# Gallery images

The homepage gallery loads these files directly from `/gallery/...`. Upload the
five images into **this folder** with these **exact, case-sensitive** names:

| File name (must match exactly) | Used for |
| --- | --- |
| `booth.jpg` | ProjectKix donation booth at LA Fitness |
| `champions.png` | NWBA wheelchair basketball championship team |
| `lafitness.png` | ProjectKix team with LA Fitness staff |
| `warriors.png` | Wounded Warrior athletes |
| `certificate.png` | Certificate of appreciation presentation |

Notes:
- Keep the extensions exactly as shown (`.jpg` vs `.png`) — Linux/Vercel are
  case- and extension-sensitive.
- No spaces or renaming. Once these files exist here, the gallery works on
  Vercel with no further changes.
- These files are referenced in `src/routes/index.tsx`.
