# GitHub Pages Setup & Troubleshooting

This project deploys to GitHub Pages via GitHub Actions. If you see a 404, follow these steps.

## 1. Enable GitHub Pages (Required)

**This is the most common cause of 404.** GitHub Pages must be explicitly enabled:

1. Go to your repo: **https://github.com/GiorgioNatili/human-blueprint**
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment** → **Source**, select **GitHub Actions**
4. Save (no need to pick a branch or folder)

Until this is set, the deploy workflow runs but nothing is served at the Pages URL.

## 2. Correct URL

The site is a **project site**, not a user site. Use:

- **https://giorgionatili.github.io/human-blueprint/**

Important:
- Include the trailing slash
- Use `/human-blueprint/` (the repo name), not just the root domain

## 3. Verify Deployment

1. Go to **Actions** → **Deploy to GitHub Pages**
2. Confirm the latest run completed successfully (green check)
3. If it failed, open the run and check the **build** or **deploy** job logs

## 4. Common Issues

| Issue | Solution |
|-------|----------|
| 404 on all URLs | Enable Pages: Settings → Pages → Source: **GitHub Actions** |
| 404 on refresh / deep links | Already fixed: `404.html` copies `index.html` for SPA routing |
| Wrong URL | Use `https://giorgionatili.github.io/human-blueprint/` |
| Build fails | Check Actions logs; often `pnpm install` or Vite build errors |
| Private repo | GitHub Pages for private repos needs GitHub Pro/Team, or make the repo public |

## 5. Manual Deploy

To trigger a deploy without pushing:

1. Go to **Actions** → **Deploy to GitHub Pages**
2. Click **Run workflow** → **Run workflow**
