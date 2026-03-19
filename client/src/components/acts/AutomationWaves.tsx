import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hammer, Cpu, Bot, Hand, ArrowRight, Layers, type LucideIcon } from "lucide-react";
import CarouselDots from "@/components/CarouselDots";

gsap.registerPlugin(ScrollTrigger);

interface Slide {
  id: string;
  tag: string;
  tagColor: string;
  Icon?: LucideIcon;
  iconColor?: string;
  title: string;
  subtitle: string;
  body: string;
  accent: string;
  bg: string;
  detail?: {
    items: { label: string; value: string; color?: string }[];
  };
  timeline?: {
    items: { era: string; label: string; example: string; active?: boolean }[];
  };
}

const slides: Slide[] = [
  {
    id: "intro",
    tag: "Historical Context",
    tagColor: "text-slate-300 border-slate-300/40 bg-slate-300/10",
    Icon: Layers,
    iconColor: "text-slate-300",
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
    Icon: Hand,
    iconColor: "text-orange-400",
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
    Icon: Hammer,
    iconColor: "text-yellow-400",
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
    Icon: Cpu,
    iconColor: "text-cyan-400",
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
    Icon: Bot,
    iconColor: "text-violet-400",
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
        { label: "Creating", value: "AI architects, prompt engineers, human-AI leads" },
      ],
    },
  },
  {
    id: "spectrum",
    tag: "The Spectrum",
    tagColor: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    Icon: ArrowRight,
    iconColor: "text-emerald-400",
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

export default function AutomationWaves() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".gapb-panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + (scrollContainerRef.current?.offsetWidth || 0),
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div id="section-gap-b" ref={containerRef} className="relative z-10">
      {mounted && (
        <CarouselDots count={slides.length} triggerEl={scrollContainerRef.current} />
      )}
      <div
        ref={scrollContainerRef}
        style={{ width: `${slides.length * 100}%` }}
        className="h-screen flex flex-nowrap"
      >
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`gapb-panel w-screen h-screen flex flex-col items-center justify-center px-12 py-16 border-r border-white/5 ${slide.bg}`}
          >
            {/* Slide counter */}
            <div className="absolute top-8 right-12 text-xs text-white/20 font-mono tracking-widest">
              {String(idx + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>

            <div className="max-w-5xl w-full">
              {/* Tag */}
              <div className="flex justify-center mb-6">
                <span
                  className={`text-xs font-mono tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border ${slide.tagColor}`}
                >
                  {slide.tag}
                </span>
              </div>

              {/* Icon */}
              {slide.Icon && (
                <div className="flex justify-center mb-8">
                  <slide.Icon className={`w-16 h-16 ${slide.iconColor}`} aria-hidden="true" />
                </div>
              )}

              {/* Title */}
              <h2
                className={`font-heading text-center font-bold mb-4 leading-tight ${slide.accent} ${
                  slide.id === "intro" || slide.id === "spectrum"
                    ? "text-4xl md:text-6xl"
                    : "text-5xl md:text-7xl"
                }`}
              >
                {slide.title}
              </h2>

              {/* Subtitle */}
              <h3 className="text-2xl md:text-3xl text-white/80 text-center mb-8 font-light">
                {slide.subtitle}
              </h3>

              {/* Body */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-10">
                {slide.body}
              </p>

              {/* Detail grid */}
              {slide.detail && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {slide.detail.items.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                    >
                      <div
                        className={`text-sm font-semibold mb-1 ${
                          item.color ?? slide.accent
                        }`}
                      >
                        {item.label}
                      </div>
                      <div className="text-xs text-white/50 leading-snug">{item.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Scroll hint on first slide */}
            {idx === 0 && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
                <span className="text-xs font-mono tracking-widest uppercase">Scroll to explore</span>
                <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
