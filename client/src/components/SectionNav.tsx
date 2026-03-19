import { useEffect, useRef, useState } from "react";

// ─── Section map ──────────────────────────────────────────────────────────────
// Ordered to match the render sequence in Home.tsx

export const NAV_SECTIONS = [
  { id: "section-hero",              label: "The Human Blueprint",        group: "intro" },
  { id: "section-gap-a",             label: "Agentic AI",                 group: "intro" },
  { id: "section-act0",              label: "Act 0 · The Thesis",         group: "intro" },
  { id: "section-gap-b",             label: "Automation Waves",           group: "intro" },
  { id: "section-act1",              label: "Act 1 · The Shift",          group: "acts" },
  { id: "section-act2",              label: "Act 2 · The Stakes",         group: "acts" },
  { id: "section-cognitive-impact",  label: "Cognitive Impact",           group: "acts" },
  { id: "section-adversarial",       label: "Adversarial Collaboration",  group: "acts" },
  { id: "section-gap-c",             label: "Fairness Corruption",        group: "acts" },
  { id: "section-act3",              label: "Act 3 · 4 Pillars",          group: "framework" },
  { id: "section-deep-pillars",      label: "Deep Pillars",               group: "framework" },
  { id: "section-use-cases",         label: "Use Cases",                  group: "framework" },
  { id: "section-ethics",            label: "Ethics & Guardrails",        group: "framework" },
  { id: "section-act4",              label: "Act 4 · Loyalty Advantage",  group: "framework" },
  { id: "section-gap-d",             label: "Loyal Agent Contrast",       group: "framework" },
  { id: "section-paradox",           label: "Paradox Explorer",           group: "scenarios" },
  { id: "section-scenarios",         label: "What If Scenarios",          group: "scenarios" },
  { id: "section-act5",              label: "Act 5 · Intuition Gap",      group: "close" },
  { id: "section-gap-e",             label: "Leadership Strategies",      group: "close" },
  { id: "section-quiz",              label: "Is Your AI Loyal?",          group: "close" },
  { id: "section-research",          label: "Research Deep Dive",         group: "close" },
  { id: "section-qa",                label: "Neural Q&A",                 group: "close" },
  { id: "section-resources",         label: "Resources & Downloads",      group: "close" },
] as const;

const GROUP_COLORS: Record<string, string> = {
  intro:     "bg-cyan-400",
  acts:      "bg-violet-400",
  framework: "bg-emerald-400",
  scenarios: "bg-amber-400",
  close:     "bg-rose-400",
};

const GROUP_ACTIVE_RING: Record<string, string> = {
  intro:     "ring-cyan-400/60",
  acts:      "ring-violet-400/60",
  framework: "ring-emerald-400/60",
  scenarios: "ring-amber-400/60",
  close:     "ring-rose-400/60",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function SectionNav() {
  const [activeId, setActiveId] = useState<string>(NAV_SECTIONS[0].id);
  const [hovered, setHovered] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Show nav only after user scrolls past the hero
  useEffect(() => {
    const hero = document.getElementById("section-hero");
    if (!hero) return;
    const showObserver = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    showObserver.observe(hero);
    return () => showObserver.disconnect();
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = NAV_SECTIONS.map((s) => s.id);

    // Collect all section elements (some may not exist yet — filter nulls)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    // Use a map to track which sections are currently intersecting
    const intersecting = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            intersecting.set(id, entry.intersectionRatio);
          } else {
            intersecting.delete(id);
          }
        });

        // Pick the section with the highest intersection ratio
        if (intersecting.size > 0) {
          const best = Array.from(intersecting.entries()).sort((a, b) => b[1] - a[1])[0];
          setActiveId(best[0]);
        }
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
      }
    );

    elements.forEach((el) => observerRef.current!.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Section navigation"
      className={`fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-1.5 transition-all duration-500 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
      }`}
    >
      {NAV_SECTIONS.map((section) => {
        const isActive = activeId === section.id;
        const isHovered = hovered === section.id;
        const dotColor = GROUP_COLORS[section.group] ?? "bg-white";
        const ringColor = GROUP_ACTIVE_RING[section.group] ?? "ring-white/60";

        return (
          <div key={section.id} className="relative flex items-center justify-end group">
            {/* Tooltip label — appears to the left on hover */}
            <div
              className={`absolute right-7 whitespace-nowrap text-xs font-mono tracking-wide text-white/80 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 pointer-events-none transition-all duration-200 ${
                isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
              }`}
            >
              {section.label}
            </div>

            {/* Dot */}
            <button
              onClick={() => scrollTo(section.id)}
              onMouseEnter={() => setHovered(section.id)}
              onMouseLeave={() => setHovered(null)}
              aria-label={`Jump to ${section.label}`}
              className={`relative rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                isActive
                  ? `w-2.5 h-2.5 ${dotColor} ring-2 ${ringColor} ring-offset-1 ring-offset-black`
                  : `w-1.5 h-1.5 bg-white/25 hover:bg-white/60 hover:w-2 hover:h-2`
              }`}
            />
          </div>
        );
      })}
    </nav>
  );
}
