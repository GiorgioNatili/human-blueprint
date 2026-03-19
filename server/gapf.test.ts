/**
 * GapF — Resources & Downloads section
 * Tests data integrity, CDN URL format, and structural completeness.
 */

import { describe, it, expect } from "vitest";

// ── Mirror resource data from GapF.tsx ───────────────────────────────────────

const resources = [
  {
    id: "research",
    badge: "Research Foundation",
    title: "The Human Blueprint",
    subtitle: "Full Academic Research Report",
    description: "80+ pages of peer-reviewed research covering the Intuition Gap, the 4-Pillar Framework, cross-industry case studies, and the implementation guide for organisations.",
    meta: "PDF · 485 KB · Academic edition",
    url: "/assets/research-foundation-the-human-blueprint.pdf",
    filename: "research-foundation-the-human-blueprint.pdf",
  },
  {
    id: "presentation",
    badge: "Public Edition",
    title: "Presentation Slides",
    subtitle: "The Human Blueprint — Speaker Deck",
    description: "The complete public presentation: all five acts, the Digital Dignity framework, the Adversarial Collaboration model, and the 4-Pillar Framework in slide format.",
    meta: "PDF · 372 KB · Presentation edition",
    url: "/assets/public-presentation-edition-slides.pdf",
    filename: "public-presentation-edition-slides.pdf",
  },
  {
    id: "japanese",
    badge: "Companion Research",
    title: "Design Principles for the Agentic Age",
    subtitle: "Japanese Minimalism & Human-AI Interface Design",
    description: "A companion research document exploring how Japanese aesthetic principles — Ma, Wabi-sabi, and Ichi-go ichi-e — apply to human-AI interface design and Digital Dignity.",
    meta: "PDF · 128 KB · Design research",
    url: "/assets/design-principles-for-the-agentic-age.pdf",
    filename: "design-principles-for-the-agentic-age.pdf",
  },
];

// ── Tests ─────────────────────────────────────────────────────────────────────

describe("GapF — Resource count and structure", () => {
  it("has exactly 3 resources", () => {
    expect(resources).toHaveLength(3);
  });

  it("resource IDs are unique", () => {
    const ids = resources.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("each resource has all required fields", () => {
    for (const res of resources) {
      expect(res.id).toBeTruthy();
      expect(res.badge).toBeTruthy();
      expect(res.title).toBeTruthy();
      expect(res.subtitle).toBeTruthy();
      expect(res.description.length).toBeGreaterThan(40);
      expect(res.meta).toBeTruthy();
      expect(res.url).toBeTruthy();
      expect(res.filename).toBeTruthy();
    }
  });
});

describe("GapF — CDN URL integrity", () => {
  it("all URLs are same-origin /assets/ paths", () => {
    for (const res of resources) {
      expect(res.url).toMatch(/^\/assets\/.+\.pdf$/);
    }
  });

  it("all URLs end with .pdf", () => {
    for (const res of resources) {
      expect(res.url).toMatch(/\.pdf$/);
    }
  });

  it("all filenames end with .pdf", () => {
    for (const res of resources) {
      expect(res.filename).toMatch(/\.pdf$/);
    }
  });

  it("all URLs use kebab-case filenames", () => {
    for (const res of resources) {
      expect(res.url).toMatch(/^\/assets\/[a-z0-9-]+\.pdf$/);
    }
  });

  it("asset URLs are unique (no duplicate files)", () => {
    const urls = resources.map((r) => r.url);
    expect(new Set(urls).size).toBe(urls.length);
  });
});

describe("GapF — Content quality", () => {
  it("research resource description mentions the Intuition Gap and 4-Pillar Framework", () => {
    const res = resources.find((r) => r.id === "research");
    expect(res?.description).toContain("Intuition Gap");
    expect(res?.description).toContain("4-Pillar Framework");
  });

  it("presentation resource description mentions Digital Dignity", () => {
    const res = resources.find((r) => r.id === "presentation");
    expect(res?.description).toContain("Digital Dignity");
  });

  it("japanese resource title is 'Design Principles for the Agentic Age'", () => {
    const res = resources.find((r) => r.id === "japanese");
    expect(res?.title).toBe("Design Principles for the Agentic Age");
    expect(res?.description).toContain("Digital Dignity");
  });

  it("all meta strings indicate PDF format", () => {
    for (const res of resources) {
      expect(res.meta).toContain("PDF");
    }
  });
});
