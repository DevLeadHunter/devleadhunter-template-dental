# devleadhunter-template-dental

Nuxt 4 layer template for **Family Dental Care** — a one-page dental clinic landing
(El Messiri + Nunito, red/beige palette) consumed by `demo-host` via `extends`.

> Architecture reference: `TEMPLATES_ARCHITECTURE.md` in the main `devleadhunter` repo.
> Content is driven by flat **`SiteContent`** (`@devleadhunter/website-content`).
> Storyblok uses the shared `site_content` blok family (no per-template schemas).

## Local development

```bash
npm install
npm run dev        # http://localhost:3000 — .playground with mockSiteContent
npm run lint       # prettier + eslint + vue-tsc
npm run build      # builds the .playground in isolation
```

Edit `content.ts` to simulate prospect/enrichment data.

## Structure

```
app/
├── assets/css/template.css
├── components/
│   ├── DentalRoot.vue            # Layer root (:content SiteContent) — demo-host entry
│   ├── layout/                   # SiteHeader, SiteFooter (relative imports only)
│   └── sections/                 # Hero, Featured, Services, About, Team, Brand, CTA
├── types/
│   ├── SiteContent.ts            # Re-export from @devleadhunter/website-content
│   └── dental.ts                 # buildDentalContent() + page types
└── data/site.ts                  # Legacy Pencil snapshot (unused by root)
content.ts                        # Playground mock SiteContent
public/                           # Images + Pencil exports (merged into demo-host)
.playground/                      # Local preview
```

## demo-host / API

- `template_id`: `dental`
- Root: `DentalRoot`
- API module: `api/services/templates/dental.py`
- Preview: `http://localhost:3001/preview-layers?t=dental`
