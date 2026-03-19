import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bot, Network, RefreshCw, Cpu, HelpCircle, type LucideIcon } from "lucide-react";
import CarouselDots from "@/components/CarouselDots";

gsap.registerPlugin(ScrollTrigger);

interface Slide {
  id: string;
  tag?: string;
  tagColor?: string;
  Icon?: LucideIcon;
  iconColor?: string;
  title: string;
  subtitle: string;
  body: string;
  accent: string;
  bg: string;
  detail?: {
    items: { label: string; value: string }[];
  };
}

const slides: Slide[] = [
  {
    id: "question",
    tag: "The Provocation",
    tagColor: "text-rose-400 border-rose-400/40 bg-rose-400/10",
    Icon: HelpCircle,
    iconColor: "text-rose-400",
    title: "What if the narrative that 'AI will replace us' is not just wrong—",
    subtitle: "but dangerously incomplete?",
    body: "62% of workers fear AI will significantly impact their jobs within five years. But fear is not a strategy. The real question is not whether AI can perform certain tasks — but whether the systems we build respect human dignity and preserve human agency.",
    accent: "text-rose-400",
    bg: "bg-rose-950/10",
  },
  {
    id: "agentic-def",
    tag: "Definition",
    tagColor: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
    Icon: Cpu,
    iconColor: "text-cyan-400",
    title: "Agentic AI",
    subtitle: "From tool to agent — a qualitative leap",
    body: "Unlike traditional AI that suggests, agentic AI acts — making decisions, executing tasks, and adapting strategies without continuous human intervention. This shift from advisory to executive function raises profound questions about control, trust, and dignity.",
    accent: "text-cyan-400",
    bg: "bg-cyan-950/15",
    detail: {
      items: [
        { label: "Autonomy", value: "Operates independently within defined parameters" },
        { label: "Goal-orientation", value: "Works toward objectives, not just prompts" },
        { label: "Proactivity", value: "Initiates actions rather than waiting for instructions" },
        { label: "Adaptability", value: "Learns from experience and adjusts behavior" },
      ],
    },
  },
  {
    id: "single-vs-multi",
    tag: "Taxonomy",
    tagColor: "text-violet-400 border-violet-400/40 bg-violet-400/10",
    Icon: Bot,
    iconColor: "text-violet-400",
    title: "Single-Agent vs. Multi-Agent",
    subtitle: "Two architectures, one question of loyalty",
    body: "A single agent serves one user with a clear accountability chain. A multi-agent system deploys networks of specialized agents coordinating toward complex goals. Both architectures raise the same fundamental question: whose interests does the agent serve?",
    accent: "text-violet-400",
    bg: "bg-violet-950/15",
    detail: {
      items: [
        { label: "Single-Agent", value: "One AI, one principal — clear accountability chain" },
        { label: "Multi-Agent", value: "Specialist agents coordinating — emergent behavior risk" },
        { label: "Orchestrator", value: "A master agent directing sub-agents — power concentration" },
        { label: "Peer-to-Peer", value: "Agents negotiating with agents — alignment at every node" },
      ],
    },
  },
  {
    id: "agentic-loop",
    tag: "Mechanism",
    tagColor: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    Icon: RefreshCw,
    iconColor: "text-emerald-400",
    title: "The Agentic Loop",
    subtitle: "Perceive → Plan → Act → Learn → Repeat",
    body: "Every agentic system perceives its environment, plans a sequence of actions, executes them, and learns from outcomes — then repeats. The loop runs autonomously, which is precisely what makes alignment non-negotiable at every node.",
    accent: "text-emerald-400",
    bg: "bg-emerald-950/15",
    detail: {
      items: [
        { label: "Perceive", value: "Reads environment: data, APIs, user context, memory" },
        { label: "Plan", value: "Generates action sequence toward goal" },
        { label: "Act", value: "Executes: calls APIs, writes files, sends messages" },
        { label: "Learn", value: "Updates internal model based on outcome feedback" },
      ],
    },
  },
  {
    id: "reframe",
    tag: "The Pivot",
    tagColor: "text-amber-400 border-amber-400/40 bg-amber-400/10",
    Icon: Network,
    iconColor: "text-amber-400",
    title: "The question is not 'Will AI replace us?'",
    subtitle: "It is: 'How do we design AI that serves us?'",
    body: "This reframing shifts from passive fear to active agency — from zero-sum competition to positive-sum partnership. The rest of this presentation provides the framework: The Human Blueprint.",
    accent: "text-amber-400",
    bg: "bg-amber-950/10",
  },
];

export default function GapA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".gapa-panel");
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
    <div id="section-gap-a" ref={containerRef} className="relative z-10">
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
            className={`gapa-panel w-screen h-screen flex flex-col items-center justify-center px-12 py-16 border-r border-white/5 ${slide.bg}`}
          >
            {/* Slide counter */}
            <div className="absolute top-8 right-12 text-xs text-white/20 font-mono tracking-widest">
              {String(idx + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>

            <div className="max-w-5xl w-full">
              {/* Tag */}
              {slide.tag && (
                <div className="flex justify-center mb-6">
                  <span
                    className={`text-xs font-mono tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border ${slide.tagColor}`}
                  >
                    {slide.tag}
                  </span>
                </div>
              )}

              {/* Icon */}
              {slide.Icon && (
                <div className="flex justify-center mb-8">
                  <slide.Icon className={`w-16 h-16 ${slide.iconColor}`} aria-hidden="true" />
                </div>
              )}

              {/* Title */}
              <h2
                className={`font-heading text-center font-bold mb-4 leading-tight ${slide.accent} ${
                  slide.id === "question" || slide.id === "reframe"
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
                      <div className={`text-sm font-semibold mb-1 ${slide.accent}`}>
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
