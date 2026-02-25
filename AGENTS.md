# AGENTS.md

## Cursor Cloud specific instructions

### Overview

"The Human Blueprint" is a single-package React (Vite) application — a scroll-driven interactive editorial about AI and human collaboration. There is no database, no Docker, and no external service dependencies.

- **Client**: `client/` — React 19 + Vite 7, Three.js/R3F for 3D, GSAP for scroll animations, Tailwind CSS v4
- **Server**: `server/` — minimal Express static-file server (production only; not used in dev)
- **Shared**: `shared/` — shared constants

### Dev commands (see `package.json` scripts)

| Task | Command |
|------|---------|
| Dev server (port 3000) | `pnpm dev` |
| TypeScript check | `pnpm check` |
| Format (Prettier) | `pnpm format` |
| Build | `pnpm build` |
| Preview built output | `pnpm preview` |

### Non-obvious notes

- The lockfile may drift from `package.json`; use `pnpm install` (not `--frozen-lockfile`) during development.
- `pnpm.onlyBuiltDependencies` in `package.json` must list `@tailwindcss/oxide` and `esbuild` so their postinstall scripts run. Without this, Tailwind and esbuild will not work.
- The `@builder.io/vite-plugin-jsx-loc` package has an unmet peer dep on vite (`^4.0.0 || ^5.0.0`); this is harmless with Vite 7.
- `VITE_ANALYTICS_ENDPOINT` and `VITE_ANALYTICS_WEBSITE_ID` env vars (Umami analytics) are referenced in `client/index.html` but are optional — build warnings about them are safe to ignore.
- No automated test files exist yet; `vitest` is a devDependency but no `*.test.*` or `*.spec.*` files are present.
- The Vite dev server uses `strictPort: false`, so if port 3000 is busy it will pick the next available port.
