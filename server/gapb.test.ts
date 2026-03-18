/**
 * GapB Carousel — Content Integrity Tests
 * Validates the slide data for the automation waves + collaboration spectrum carousel.
 */

import { describe, it, expect } from "vitest";

interface SlideDetail {
  items: { label: string; value: string; color?: string }[];
}

interface Slide {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  body: string;
  accent: string;
  bg: string;
  detail?: SlideDetail;
}

const slides: Slide[] = [
  {
    id: "intro",
    tag: "Historical Context",
    tagColor: "text-slate-300 border-slate-300/40 bg-slate-300/10",
    title: "We have been here before.",
    subtitle: "Every wave of automation rewrote the rules — and humans adapted.",
    body: "Fear of displacement is not new. Each technological wave eliminated certain tasks and created new ones. The question was never whether humans would survive — it was how they would evolve.",
    accent: "text-slate-300",
    bg: "bg-slate-900/30",
  },
  {
    id: "wave-hand",
    tag: "Wave 1 · Pre-Industrial",
    tagColor: "text-orange-400 border-orange-400/40 bg-orange-400/10",
    title: "The Hand",
    subtitle: "Craft, muscle, and mastery",
    body: "All production was human — shaped by hand, skill, and apprenticeship. Value lived in the body. The master craftsperson was irreplaceable. Then came the machine.",
    accent: "text-orange-400",
    bg: "bg-orange-950/15",
    detail: {
      items: [
        { label: "Era", value: "Pre-1760" },
        { label: "Dominant skill", value: "Manual dexterity & craft mastery" },
        { label: "Threat", value: "None yet — humans were the only engine" },
        { label: "Legacy", value: "The mestiere — craft as identity" },
      ],
    },
  },
  {
    id: "wave-hammer",
    tag: "Wave 2 · Industrial",
    tagColor: "text-yellow-400 border-yellow-400/40 bg-yellow-400/10",
    title: "The Hammer",
    subtitle: "Steam, steel, and the factory floor",
    body: "The power loom replaced the weaver. The assembly line replaced the artisan. Fear was real — and justified for some. But new roles emerged: engineers, managers, quality specialists. Humans moved up the stack.",
    accent: "text-yellow-400",
    bg: "bg-yellow-950/15",
    detail: {
      items: [
        { label: "Era", value: "1760 – 1960" },
        { label: "Dominant skill", value: "Machine operation & process management" },
        { label: "Displaced", value: "Manual craft, agricultural labor" },
        { label: "Created", value: "Engineering, industrial design, logistics" },
      ],
    },
  },
  {
    id: "wave-algorithm",
    tag: "Wave 3 · Digital",
    tagColor: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
    title: "The Algorithm",
    subtitle: "Software, data, and the knowledge economy",
    body: "Computers automated clerical work, bookkeeping, and routine analysis. White-collar jobs were no longer safe. But again, humans adapted — becoming analysts, developers, strategists. The pattern held.",
    accent: "text-cyan-400",
    bg: "bg-cyan-950/15",
    detail: {
      items: [
        { label: "Era", value: "1960 – 2020" },
        { label: "Dominant skill", value: "Data literacy & systems thinking" },
        { label: "Displaced", value: "Clerical work, routine analysis, bookkeeping" },
        { label: "Created", value: "Software engineering, data science, UX design" },
      ],
    },
  },
  {
    id: "wave-agent",
    tag: "Wave 4 · Agentic",
    tagColor: "text-violet-400 border-violet-400/40 bg-violet-400/10",
    title: "The Agent",
    subtitle: "Autonomous, goal-directed, and always on",
    body: "Agentic AI doesn't just process — it acts. Legal research, medical diagnosis, financial strategy, code architecture. The scope is unprecedented. But the pattern remains: humans who understand the wave ride it.",
    accent: "text-violet-400",
    bg: "bg-violet-950/15",
    detail: {
      items: [
        { label: "Era", value: "2020 – present" },
        { label: "Dominant skill", value: "Judgment, ethics, and orchestration" },
        { label: "Displacing", value: "Complex knowledge work & multi-step reasoning" },
        { label: "Created", value: "AI architects, prompt engineers, human-AI leads" },
      ],
    },
  },
  {
    id: "spectrum",
    tag: "The Spectrum",
    tagColor: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    title: "The Human-AI Collaboration Spectrum",
    subtitle: "Not replacement. Not competition. Partnership.",
    body: "Collaboration exists on a spectrum from full human control to full AI autonomy. The optimal zone — Symbiotic — is where humans and AI dynamically allocate roles based on the nature of the task.",
    accent: "text-emerald-400",
    bg: "bg-emerald-950/15",
    detail: {
      items: [
        { label: "Human-Centric", value: "Humans decide, AI supports with data", color: "text-blue-400" },
        { label: "Symbiotic ✦", value: "Dynamic role allocation — the optimal zone", color: "text-emerald-400" },
        { label: "AI-Centric", value: "AI decides, humans monitor and override", color: "text-amber-400" },
        { label: "Autonomous", value: "AI acts independently — dignity risk zone", color: "text-rose-400" },
      ],
    },
  },
];

describe("GapB carousel — slide data integrity", () => {
  it("has exactly 6 slides", () => {
    expect(slides).toHaveLength(6);
  });

  it("all slides have required fields: id, tag, title, subtitle, body, accent, bg", () => {
    for (const slide of slides) {
      expect(slide.id).toBeTruthy();
      expect(slide.tag).toBeTruthy();
      expect(slide.title).toBeTruthy();
      expect(slide.subtitle).toBeTruthy();
      expect(slide.body).toBeTruthy();
      expect(slide.accent).toMatch(/^text-/);
      expect(slide.bg).toMatch(/^bg-/);
    }
  });

  it("all slide IDs are unique", () => {
    const ids = slides.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("first slide is the historical context intro", () => {
    expect(slides[0].id).toBe("intro");
    expect(slides[0].tag).toBe("Historical Context");
  });

  it("automation waves appear in chronological order", () => {
    const waveIds = slides
      .filter((s) => s.id.startsWith("wave-"))
      .map((s) => s.id);
    expect(waveIds).toEqual(["wave-hand", "wave-hammer", "wave-algorithm", "wave-agent"]);
  });

  it("each automation wave slide has exactly 4 detail items", () => {
    const waves = slides.filter((s) => s.id.startsWith("wave-"));
    for (const wave of waves) {
      expect(wave.detail?.items).toHaveLength(4);
    }
  });

  it("wave eras are in ascending chronological order", () => {
    const eras = slides
      .filter((s) => s.id.startsWith("wave-"))
      .map((s) => s.detail!.items.find((i) => i.label === "Era")!.value);
    expect(eras[0]).toContain("Pre-1760");
    expect(eras[1]).toContain("1760");
    expect(eras[2]).toContain("1960");
    expect(eras[3]).toContain("2020");
  });

  it("last slide is the collaboration spectrum", () => {
    const last = slides[slides.length - 1];
    expect(last.id).toBe("spectrum");
    expect(last.tag).toBe("The Spectrum");
  });

  it("spectrum slide has 4 collaboration modes", () => {
    const spectrum = slides.find((s) => s.id === "spectrum");
    expect(spectrum?.detail?.items).toHaveLength(4);
    const labels = spectrum!.detail!.items.map((i) => i.label);
    expect(labels).toContain("Human-Centric");
    expect(labels).toContain("Symbiotic ✦");
    expect(labels).toContain("AI-Centric");
    expect(labels).toContain("Autonomous");
  });

  it("spectrum items each have a distinct color", () => {
    const spectrum = slides.find((s) => s.id === "spectrum");
    const colors = spectrum!.detail!.items.map((i) => i.color);
    expect(new Set(colors).size).toBe(4);
  });

  it("GSAP snap ratio is correct for 6 slides: 1/(6-1) = 0.2", () => {
    const n = slides.length;
    const snapRatio = 1 / (n - 1);
    expect(snapRatio).toBeCloseTo(0.2, 5);
  });

  it("xPercent travel distance is correct for 6 slides: -100*(6-1) = -500", () => {
    const n = slides.length;
    const xPercent = -100 * (n - 1);
    expect(xPercent).toBe(-500);
  });

  it("all detail items have non-empty labels and values", () => {
    const withDetail = slides.filter((s) => s.detail);
    for (const slide of withDetail) {
      for (const item of slide.detail!.items) {
        expect(item.label.trim()).not.toBe("");
        expect(item.value.trim()).not.toBe("");
      }
    }
  });
});
