# devleadhunter-template-dental

Nuxt 4 layer template for **Family Dental Care** — a one-page dental clinic landing
(El Messiri + Nunito, red/beige palette) consumed by `demo-host` via `extends`.

> Architecture reference: `TEMPLATES_ARCHITECTURE.md` in the main `devleadhunter` repo.
> Content is **hardcoded** in `app/data/site.ts` for now (no SiteContent CMS wiring yet).

## Local development

```bash
npm install
npm run dev        # http://localhost:3000 — .playground one-page preview
npm run lint       # prettier + eslint + vue-tsc
npm run build      # builds the .playground in isolation
```

## Structure

```
app/
├── assets/css/template.css       # Design tokens, container-dental, btn-dental
├── components/
│   ├── DentalRoot.vue            # Layer root (sections only, for demo-host)
│   ├── layout/                   # SiteHeader, SiteFooter
│   └── sections/                 # Hero, Featured, Services, About, Team, Brand, CTA
├── data/site.ts                  # Hardcoded Pencil content
└── types/SiteContent.ts          # Future CMS contract
.playground/                      # Local preview (layout + index page)
```

## Design source

Pencil maquette at 1440px — page fill `#f9f7f4`, brand `#b1040e`, accent `#80060d`,
ink `#2e333e`. Images in `.playground/public/images/`, icon exports in
`.playground/public/exports/`.

## demo-host integration (later)

Rename dispatch target to `DentalRoot`, wire `SiteContent` props, register
`devleadhunter-template-dental` in the API template registry, tag `v1.0.0`.
