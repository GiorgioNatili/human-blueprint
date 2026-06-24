# The Human Blueprint

Reclaiming Digital Dignity in the Age of Agentic AI.

By [Giorgio Natili](https://www.linkedin.com/in/giorgionatili/)

**Live site**: [human-blueprint.ai](https://human-blueprint.ai/)

---

## About

The Human Blueprint is a research-driven, scroll-based interactive website exploring the future of human-AI collaboration. It introduces Digital Dignity as a foundational concept and proposes practical frameworks for building AI systems that serve human interests.

The site presents the research across five narrative "Acts", each with immersive scroll-driven animations, interactive carousels, and deep-dive content sections.

## Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS 4** for styling
- **GSAP** (ScrollTrigger) for scroll-driven animations and horizontal carousels
- **Three.js** (@react-three/fiber + @react-three/drei) for 3D particle backgrounds
- **Framer Motion** for component transitions
- **Lenis** for smooth scrolling
- **GitHub Pages** for deployment (via GitHub Actions)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` in your browser.

### Build for GitHub Pages

```bash
pnpm build:pages
```

Output goes to `dist/public/`. See `docs/GITHUB_PAGES.md` for deployment setup.

## Project Structure

```
client/
  index.html              # HTML shell with meta tags, JSON-LD, GA
  public/
    images/               # Static images (hero, iceberg, etc.)
    assets/               # Downloadable PDFs and presentations
    favicon.svg           # SVG favicon
    manifest.json         # PWA web app manifest
    robots.txt            # Crawler directives
    sitemap.xml           # Sitemap with section anchors
    llms.txt              # LLM discovery summary
    llms-full.txt         # LLM discovery full content
    .well-known/          # security.txt
  src/
    pages/Home.tsx        # Main page — renders all sections in sequence
    components/
      acts/               # Section components (Act0–Act5, carousels, etc.)
      canvas/             # Three.js 3D backgrounds
      ui/                 # Shared UI components (Section, Button, etc.)
      TopNav.tsx          # Top navigation bar
      SectionNav.tsx      # Right-side dot navigation
      AboutOverlay.tsx    # Author info overlay
```

## Content Sections

| Section | Component | Description |
|---------|-----------|-------------|
| Prologue | Act0 | Evolution of tools through history |
| Act I | Act1 | The Intuition Gap — Fear vs Reality |
| Act II | Act2 | The Iceberg — depth of human expertise |
| Act III | Act3 | 4-Pillar Framework (horizontal carousel) |
| Act IV | Act4 | System Loyalty — Loyalty by Design |
| Act V | Act5 | The Future of Work |
| Research | ResearchDeepDive | Academic foundation with citations |
| Neural Q&A | NeuralQA | FAQ addressing common objections |

Additional sections include: AgenticAIDefinitions, AutomationWaves, CognitiveImpact, AdversarialCollab, EthicsGuardrails, UseCases, FairnessCorruption, LoyalAgentContrast, LeadershipStrategies, Scenarios, ParadoxExplorer, LoyaltyQuiz, and ProvocativeQuestions.

## SEO & Discoverability

The site includes comprehensive SEO and LLM discoverability features:

- **Meta tags**: Title, description, keywords, canonical URL, robots
- **Open Graph + Twitter Cards**: Full social sharing metadata with image
- **JSON-LD structured data**: WebSite, Person, Article (with SpeakableSpecification), FAQPage, BreadcrumbList, and 5 CreativeWork entries
- **Hidden crawlable content**: Key concepts and download links in a `<div hidden>` for SPA indexing
- **llms.txt + llms-full.txt**: Machine-readable content summaries for LLM discovery
- **Expanded sitemap**: Root URL plus 6 section anchor URLs
- **robots.txt**: Allows all crawlers, references sitemap
- **security.txt**: Contact information in `.well-known/`
- **Favicon + PWA manifest**: SVG favicon, apple-touch-icon, web app manifest
- **Hero image preload**: LCP optimization via `<link rel="preload">`
- **Accessibility**: Skip-to-content link, ARIA labels on carousels, proper heading hierarchy, image alt text

## Improvement History

### Phase 9: SEO & Discoverability (June 2026)
- Added favicon (SVG), web app manifest, and apple-touch-icon
- Added hero image preload for faster Largest Contentful Paint
- Fixed Google Analytics tag mismatch
- Enhanced JSON-LD: Article image, BreadcrumbList, SpeakableSpecification
- Expanded sitemap from 1 to 7 URLs
- Updated llms.txt contact info; created llms-full.txt
- Added security.txt
- Added skip-to-content link and ARIA carousel labels

### Phase 8: Bug Fixes & File Renames (March 2026)
- Fixed SectionNav fade during horizontal scroll
- Fixed Act2 iceberg sizing and depth marker animations
- Fixed Act2/CognitiveImpact overlap
- Fixed LeadershipStrategies carousel scroll speed
- Added download functionality for research resources
- Fixed contact email
- Renamed all Gap files to meaningful names (GapA-F to descriptive names)

### Phases 1-7: Initial Build
- Full site architecture with 5 Acts + supporting sections
- GSAP scroll-driven animations and horizontal carousels
- Three.js particle background
- Digital Dignity definition, Ethics & Guardrails, Use Cases sections
- Provocative act openers
- Research deep dive with academic citations
- Neural Q&A FAQ module
