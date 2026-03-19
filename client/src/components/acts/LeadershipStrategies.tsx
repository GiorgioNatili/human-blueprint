import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  GraduationCap,
  Workflow,
  RefreshCw,
  BarChart3,
  ShieldCheck,
  Star,
  type LucideIcon,
} from "lucide-react";
import CarouselDots from "@/components/CarouselDots";

gsap.registerPlugin(ScrollTrigger);

// ─── Types ────────────────────────────────────────────────────────────────────

interface Tactic {
  label: string;
  description: string;
}

interface Slide {
  id: string;
  tag: string;
  tagColor: string;
  Icon: LucideIcon;
  iconColor: string;
  title: string;
  subtitle: string;
  body: string;
  accent: string;
  bg: string;
  tactics: Tactic[];
  outcome: string;
}

// ─── Slide data ───────────────────────────────────────────────────────────────

const slides: Slide[] = [
  {
    id: "audit",
    tag: "Strategy 1 · Audit Current Roles",
    tagColor: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
    Icon: Search,
    iconColor: "text-cyan-400",
    title: "Where is the Intuition Gap in your organisation?",
    subtitle: "You cannot redesign what you have not mapped.",
    body: "A systematic role audit reveals which tasks AI can handle today, which require human judgment, and where the Intuition Gap is widest. Most organisations discover that 40–60% of knowledge work is automatable — and that the remaining 40–60% is more valuable than they thought.",
    accent: "text-cyan-400",
    bg: "bg-cyan-950/10",
    tactics: [
      { label: "Time-allocation survey", description: "Ask employees to log one week of work in three buckets: routine/repetitive, judgment-required, and relationship-critical." },
      { label: "Task decomposition", description: "Break each role into 10–15 discrete tasks. Score each on a 1–5 scale for AI automability using the 4-Pillar Framework as the rubric." },
      { label: "Gap heat map", description: "Visualise results by team and seniority. Roles with high routine scores are augmentation candidates; roles with high judgment scores are Intuition Gap anchors." },
      { label: "Opportunity backlog", description: "Convert the heat map into a prioritised list of AI augmentation opportunities, sorted by effort-to-impact ratio." },
    ],
    outcome: "Organisations that conduct structured role audits before AI deployment report 2.3× higher adoption rates and 40% fewer role conflicts (McKinsey Global Institute, 2024).",
  },
  {
    id: "skills",
    tag: "Strategy 2 · Invest in Intuition Gap Skills",
    tagColor: "text-violet-400 border-violet-400/40 bg-violet-400/10",
    Icon: GraduationCap,
    iconColor: "text-violet-400",
    title: "These are not soft skills. They are the core skills of the AI age.",
    subtitle: "Critical thinking, emotional intelligence, ethical reasoning — the skills AI cannot replicate.",
    body: "As AI absorbs routine cognitive work, the premium on human judgment rises. Training programmes that focus on Intuition Gap skills — not technical AI literacy — are the highest-ROI investment a leader can make in 2025.",
    accent: "text-violet-400",
    bg: "bg-violet-950/10",
    tactics: [
      { label: "Critical thinking", description: "Structured argument analysis, assumption identification, and evidence evaluation. Use real AI outputs as training material — have employees challenge and improve them." },
      { label: "Emotional intelligence", description: "Self-awareness, empathy, and relationship management. Goleman (1995) shows EQ accounts for 67% of the competencies needed for leadership performance." },
      { label: "Ethical reasoning", description: "Values conflict identification, applied ethical frameworks, and moral judgment under uncertainty. Pair with real AI ethics case studies from your industry." },
      { label: "Strategic thinking", description: "Pattern recognition across domains, scenario planning, and competing-priorities balancing. These are the skills that determine which human decisions AI escalates to." },
    ],
    outcome: "IBM's 2023 Global AI Adoption Index found that organisations investing in human skills alongside AI tools achieve 3.4× greater productivity gains than those investing in AI tools alone.",
  },
  {
    id: "workflows",
    tag: "Strategy 3 · Redesign Workflows",
    tagColor: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    Icon: Workflow,
    iconColor: "text-emerald-400",
    title: "Don't add AI to old workflows. Build new ones.",
    subtitle: "The legal document review example shows what redesign looks like in practice.",
    body: "Adding AI to an existing workflow captures 10–20% of its potential. Redesigning the workflow around the complementary strengths of humans and AI captures 60–80%. The difference is whether you treat AI as a faster version of what humans already do, or as a fundamentally different kind of collaborator.",
    accent: "text-emerald-400",
    bg: "bg-emerald-950/10",
    tactics: [
      { label: "Map the old workflow", description: "Document every handoff, decision point, and bottleneck. Identify which steps are purely mechanical (AI candidates) and which require judgment (human anchors)." },
      { label: "Redesign around strengths", description: "AI handles: document review, pattern detection, data synthesis, first-draft generation. Humans handle: contextual judgment, client counsel, ethical decisions, strategic direction." },
      { label: "Legal document example", description: "Old: junior lawyers review documents → senior lawyers review juniors. New: AI flags relevant passages → juniors add contextual judgment → seniors focus on strategy. Same outcome, 60% less time." },
      { label: "Pilot before scaling", description: "Run a 6-week pilot with one team. Measure quality, speed, and employee satisfaction. Use findings to refine before organisation-wide rollout." },
    ],
    outcome: "Deloitte's 2024 Future of Work report found that workflow redesign — not AI tool adoption — is the primary driver of productivity gains in knowledge work.",
  },
  {
    id: "feedback",
    tag: "Strategy 4 · Create Feedback Loops",
    tagColor: "text-amber-400 border-amber-400/40 bg-amber-400/10",
    Icon: RefreshCw,
    iconColor: "text-amber-400",
    title: "Humans learn from AI. AI learns from humans. Neither stops.",
    subtitle: "The virtuous cycle of mutual improvement.",
    body: "Static AI deployment is a missed opportunity. The most valuable human-AI systems are those where human decisions continuously improve AI recommendations, and AI analysis continuously sharpens human judgment. This requires deliberate loop design — it does not happen automatically.",
    accent: "text-amber-400",
    bg: "bg-amber-950/10",
    tactics: [
      { label: "Decision logging", description: "Every time a human overrides or modifies an AI recommendation, capture the reasoning. This becomes training data for the next model iteration." },
      { label: "Explanation requirement", description: "Require humans to articulate why they deviated from AI recommendations. This surfaces tacit knowledge and improves both human and AI reasoning quality." },
      { label: "AI analysis review", description: "Regularly review AI outputs as a team. Identify systematic errors, biases, and blind spots. Use these reviews as learning moments for human judgment calibration." },
      { label: "Calibration sessions", description: "Monthly 30-minute sessions where teams compare their intuitive judgments against AI predictions on past cases. Builds metacognitive awareness of where human judgment adds most value." },
    ],
    outcome: "Adversarial collaboration research (Kahneman & Klein, 2009) shows that structured feedback loops between human and algorithmic judgment produce 28% better decisions than either alone.",
  },
  {
    id: "metrics",
    tag: "Strategy 5 · Measure What Matters",
    tagColor: "text-rose-400 border-rose-400/40 bg-rose-400/10",
    Icon: BarChart3,
    iconColor: "text-rose-400",
    title: "Hours worked and tasks completed are the wrong metrics.",
    subtitle: "In human-AI collaboration, the unit of value is judgment quality.",
    body: "Traditional productivity metrics were designed for industrial work. They measure inputs (hours) and outputs (tasks). In human-AI collaboration, the valuable human contribution is judgment quality in ambiguous situations — which these metrics are blind to. New metrics are required.",
    accent: "text-rose-400",
    bg: "bg-rose-950/10",
    tactics: [
      { label: "Judgment quality score", description: "Track the outcomes of human decisions in ambiguous situations over time. Compare against AI baseline recommendations. Improvement = human value added." },
      { label: "Relationship strength index", description: "Measure trust, collaboration quality, and stakeholder satisfaction. These are the outcomes of emotional intelligence — the skills AI cannot replicate." },
      { label: "Ethical decision rate", description: "Track how often teams identify and escalate ethical concerns in AI outputs. High rates indicate healthy human oversight; low rates indicate over-reliance." },
      { label: "Strategic impact score", description: "Measure the proportion of human time spent on high-leverage, non-automatable work. Rising scores indicate successful Intuition Gap positioning." },
    ],
    outcome: "Organisations that adopt judgment-quality metrics alongside traditional productivity metrics report 45% higher employee engagement and 31% lower AI-related role anxiety (Gallup, 2024).",
  },
  {
    id: "safety",
    tag: "Strategy 6 · Foster Psychological Safety",
    tagColor: "text-sky-400 border-sky-400/40 bg-sky-400/10",
    Icon: ShieldCheck,
    iconColor: "text-sky-400",
    title: "Fear of AI is a leadership failure, not an employee problem.",
    subtitle: "Edmondson (1999): psychological safety is the foundation of learning organisations.",
    body: "The transition to AI-augmented work is threatening for many employees. Leaders who dismiss this fear accelerate disengagement. Leaders who acknowledge it, frame AI as a tool rather than a threat, and invest visibly in human development create the psychological safety necessary for genuine adoption.",
    accent: "text-sky-400",
    bg: "bg-sky-950/10",
    tactics: [
      { label: "Acknowledge fears openly", description: "Name the anxiety in team meetings. 'I know some of you are worried about what this means for your role. Let's talk about it.' Silence amplifies fear; acknowledgment reduces it." },
      { label: "Frame AI as tool, not threat", description: "Consistently use language that positions AI as something humans use, not something that replaces them. 'This AI handles the data synthesis so you can focus on the strategic recommendation.'" },
      { label: "Celebrate human contributions", description: "Explicitly recognise moments where human judgment added value that AI could not. Make these stories visible. They become the organisation's evidence that the Intuition Gap is real and valuable." },
      { label: "Commit to development", description: "Announce and fund a specific Intuition Gap skills programme. The investment signals that the organisation values human capabilities — not just AI capabilities." },
    ],
    outcome: "Edmondson's research across 51 work teams found that psychological safety is the strongest predictor of team learning behaviour — more predictive than team composition, leadership style, or task complexity.",
  },
  {
    id: "example",
    tag: "Strategy 7 · Lead by Example",
    tagColor: "text-fuchsia-400 border-fuchsia-400/40 bg-fuchsia-400/10",
    Icon: Star,
    iconColor: "text-fuchsia-400",
    title: "Leadership in the AI age means being the best example of what AI cannot replicate.",
    subtitle: "Model judgment, empathy, and ethical transparency — visibly.",
    body: "Employees watch what leaders do, not what they say. A leader who talks about human-AI collaboration but delegates all judgment to AI models sends a clear signal: human capabilities are not valued here. The opposite is equally powerful — a leader who demonstrates judgment, empathy, and ethical reasoning in public builds the culture that makes human-AI collaboration work.",
    accent: "text-fuchsia-400",
    bg: "bg-fuchsia-950/10",
    tactics: [
      { label: "Use AI tools visibly", description: "Demonstrate AI augmentation in meetings. 'I asked the AI to synthesise the market data — here's what it found. Now here's my judgment about what it means for our strategy.'" },
      { label: "Show judgment in ambiguity", description: "When facing genuinely uncertain decisions, narrate your reasoning process out loud. This models the kind of judgment that fills the Intuition Gap and teaches it by example." },
      { label: "Make ethical decisions transparently", description: "When you make a decision based on values rather than data, say so explicitly. 'The AI recommendation optimises for short-term revenue. I'm choosing a different path because of our long-term commitment to X.'" },
      { label: "Think strategically in public", description: "Share your strategic reasoning — the patterns you see, the futures you're anticipating, the competing priorities you're balancing. This is the thinking AI cannot do, and making it visible makes it learnable." },
    ],
    outcome: "Harvard Business Review (2023) found that leaders who visibly model human-AI collaboration see 2.7× higher team adoption rates and 58% lower resistance to AI-augmented workflows.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function LeadershipStrategies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !scrollContainerRef.current) return;
    const panels = gsap.utils.toArray<HTMLElement>(".gape-panel");
    if (!panels.length) return;

    const ctx = gsap.context(() => {
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
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
    <div id="section-gap-e" ref={containerRef} className="relative z-10">
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
            className={`gape-panel w-screen h-screen flex flex-col items-center justify-center px-12 py-16 border-r border-white/5 ${slide.bg}`}
          >
            {/* Slide counter */}
            <div className="absolute top-8 right-12 text-xs text-white/20 font-mono tracking-widest">
              {String(idx + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>

            <div className="max-w-5xl w-full">
              {/* Tag */}
              <div className="flex justify-center mb-5">
                <span className={`text-xs font-mono tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border ${slide.tagColor}`}>
                  {slide.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <slide.Icon className={`w-12 h-12 ${slide.iconColor}`} aria-hidden="true" />
              </div>

              {/* Title */}
              <h2 className={`font-heading text-center font-bold mb-3 leading-tight text-2xl md:text-4xl ${slide.accent}`}>
                {slide.title}
              </h2>

              {/* Subtitle */}
              <h3 className="text-base md:text-lg text-white/60 text-center mb-5 font-light italic">
                {slide.subtitle}
              </h3>

              {/* Body */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-7">
                {slide.body}
              </p>

              {/* Tactics grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {slide.tactics.map((tactic) => (
                  <div
                    key={tactic.label}
                    className="rounded-xl border border-white/8 bg-white/[0.03] p-4"
                  >
                    <div className={`text-xs font-semibold uppercase tracking-widest mb-1.5 ${slide.accent}`}>
                      {tactic.label}
                    </div>
                    <div className="text-xs text-white/50 leading-relaxed">
                      {tactic.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Outcome */}
              <div className="rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4">
                <span className={`text-xs font-semibold uppercase tracking-widest ${slide.accent} mr-2`}>
                  Evidence:
                </span>
                <span className="text-sm text-white/50 leading-relaxed">
                  {slide.outcome}
                </span>
              </div>
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
