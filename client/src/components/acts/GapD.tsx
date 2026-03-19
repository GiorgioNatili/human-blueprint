import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scale,
  Database,
  AlertCircle,
  Eye,
  CreditCard,
  Gavel,
  type LucideIcon,
} from "lucide-react";
import CarouselDots from "@/components/CarouselDots";

gsap.registerPlugin(ScrollTrigger);

// ─── Types ────────────────────────────────────────────────────────────────────

interface ComparisonItem {
  label: string;
  loyal: string;
  general: string;
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
  comparison: ComparisonItem[];
  caseStudy?: {
    label: string;
    text: string;
  };
}

// ─── Slide data ───────────────────────────────────────────────────────────────

const slides: Slide[] = [
  {
    id: "obligation",
    tag: "Dimension 1 · Primary Obligation",
    tagColor: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
    Icon: Scale,
    iconColor: "text-cyan-400",
    title: "Who does the agent actually serve?",
    subtitle: "The obligation gap is where loyalty begins — or ends.",
    body: "Every AI system serves someone. The question is whether that someone is the user — or the platform. Fiduciary financial advisors are legally required to act in client interests. The same standard must apply to AI agents.",
    accent: "text-cyan-400",
    bg: "bg-cyan-950/10",
    comparison: [
      { label: "When interests conflict", loyal: "User's interest wins — always", general: "Platform revenue wins — always" },
      { label: "Incentive structure", loyal: "User pays; agent optimises for user outcomes", general: "Advertiser pays; agent optimises for engagement" },
      { label: "Legal analogy", loyal: "Fiduciary advisor — legally bound to client", general: "Salesperson — legally free to maximise commission" },
      { label: "Real-world example", loyal: "Vanguard: no proprietary funds, no sales incentives", general: "Robo-advisors that upsell affiliated products" },
    ],
    caseStudy: {
      label: "Case Study",
      text: "Fiduciary financial advisors command higher fees and manage more assets than non-fiduciary advisors — because clients trust them. A 2024 survey found 73% of users don't trust AI systems to act in their best interests. Loyal agents solve this trust deficit.",
    },
  },
  {
    id: "data",
    tag: "Dimension 2 · Data Handling",
    tagColor: "text-violet-400 border-violet-400/40 bg-violet-400/10",
    Icon: Database,
    iconColor: "text-violet-400",
    title: "Your data: asset or liability?",
    subtitle: "In a loyal system, your data works for you — not against you.",
    body: "Extractive systems treat user data as inventory to be monetised. Loyal agents treat it as a trust held in stewardship — used only to improve outcomes for the person it belongs to, never sold or shared without explicit consent.",
    accent: "text-violet-400",
    bg: "bg-violet-950/10",
    comparison: [
      { label: "Data collection", loyal: "Minimum necessary; purpose-limited", general: "Maximum possible; purpose-agnostic" },
      { label: "Third-party sharing", loyal: "Never without explicit, informed consent", general: "Default-on; buried in terms of service" },
      { label: "Retention", loyal: "Deleted when no longer needed", general: "Retained indefinitely; sold after churn" },
      { label: "Real-world example", loyal: "Signal: zero metadata retention, open-source audit", general: "Free email services scanning content for ad targeting" },
    ],
    caseStudy: {
      label: "Case Study",
      text: "ProtonMail and Signal built profitable businesses on a single promise: your data is yours. Users pay a premium for this guarantee. The privacy-as-loyalty model proves that data stewardship is not a cost — it is a competitive advantage.",
    },
  },
  {
    id: "conflict",
    tag: "Dimension 3 · Conflict of Interest",
    tagColor: "text-amber-400 border-amber-400/40 bg-amber-400/10",
    Icon: AlertCircle,
    iconColor: "text-amber-400",
    title: "Hidden conflicts corrode trust silently.",
    subtitle: "Disclosure is not enough — resolution must favour the user.",
    body: "Every AI recommendation system has potential conflicts of interest. The difference between loyal and extractive agents is not whether conflicts exist — it is whether they are disclosed, and how they are resolved when they arise.",
    accent: "text-amber-400",
    bg: "bg-amber-950/10",
    comparison: [
      { label: "Conflict detection", loyal: "Proactively identified and flagged to user", general: "Suppressed or hidden in algorithm weights" },
      { label: "Conflict resolution", loyal: "Resolved in user's favour; user informed", general: "Resolved in platform's favour; user unaware" },
      { label: "Sponsored content", loyal: "Clearly labelled; ranked separately from organic", general: "Indistinguishable from organic recommendations" },
      { label: "Real-world example", loyal: "Wirecutter: no affiliate links in editorial rankings", general: "Search engines mixing paid and organic results" },
    ],
    caseStudy: {
      label: "Case Study",
      text: "The FTC's 2023 action against undisclosed AI-driven endorsements illustrates the regulatory direction of travel. Loyal agents that disclose and resolve conflicts proactively will be well-positioned as enforcement tightens — extractive systems will face retroactive restructuring.",
    },
  },
  {
    id: "transparency",
    tag: "Dimension 4 · Decision Transparency",
    tagColor: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    Icon: Eye,
    iconColor: "text-emerald-400",
    title: "Can you challenge a decision you can't see?",
    subtitle: "Transparency is the precondition for human oversight.",
    body: "Black-box outputs are not just technically opaque — they are ethically disempowering. When users cannot inspect an agent's reasoning, they cannot exercise the oversight that the 4-Pillar Framework requires. Transparency is not a feature; it is a prerequisite for dignity.",
    accent: "text-emerald-400",
    bg: "bg-emerald-950/10",
    comparison: [
      { label: "Reasoning visibility", loyal: "Explanation available on request; auditable", general: "Output only; reasoning proprietary" },
      { label: "Error correction", loyal: "User can identify and challenge errors", general: "User cannot distinguish error from policy" },
      { label: "Audit trail", loyal: "Logged decisions with timestamps and rationale", general: "No persistent audit trail for users" },
      { label: "Real-world example", loyal: "EU AI Act Article 13: transparency obligations for high-risk AI", general: "Opaque credit-scoring systems pre-GDPR" },
    ],
    caseStudy: {
      label: "Case Study",
      text: "The EU AI Act's transparency requirements for high-risk systems reflect a growing consensus: users have a right to understand decisions that affect them. Loyal agents built with explainability from the ground up will meet these requirements without costly retrofits.",
    },
  },
  {
    id: "business-model",
    tag: "Dimension 5 · Business Model",
    tagColor: "text-rose-400 border-rose-400/40 bg-rose-400/10",
    Icon: CreditCard,
    iconColor: "text-rose-400",
    title: "\"If you're not paying for the product, you are the product.\"",
    subtitle: "Loyal agents invert this equation.",
    body: "The business model is not a detail — it is the architecture of loyalty. When users pay for a service, their interests align with the provider's. When the service is 'free', the user's attention and data become the product being sold to a third party.",
    accent: "text-rose-400",
    bg: "bg-rose-950/10",
    comparison: [
      { label: "Revenue source", loyal: "User subscription or per-task fee", general: "Advertiser spend; data licensing" },
      { label: "Optimisation target", loyal: "User outcomes and satisfaction", general: "Engagement time and click-through rate" },
      { label: "Churn dynamic", loyal: "Low churn — users stay with agents they trust", general: "High churn — users leave when trust erodes" },
      { label: "Real-world example", loyal: "Stripe: premium pricing, zero advertising, user-first roadmap", general: "Free social platforms monetising attention" },
    ],
    caseStudy: {
      label: "Case Study",
      text: "Healthcare systems that prioritise patient wellbeing over billing optimisation have lower patient churn and better long-term financial performance. The loyal model requires patience — resisting short-term extraction in favour of long-term value creation — but the lifetime value of a trusted user far exceeds the gains from exploitation.",
    },
  },
  {
    id: "legal",
    tag: "Dimension 6 · Legal Analogy",
    tagColor: "text-indigo-400 border-indigo-400/40 bg-indigo-400/10",
    Icon: Gavel,
    iconColor: "text-indigo-400",
    title: "The law already knows how to govern agents.",
    subtitle: "Fiduciary duty is the legal framework AI has been waiting for.",
    body: "Lawyers, doctors, financial advisors, and trustees are all fiduciaries — legally bound to act in their principal's best interests. This framework, refined over centuries, maps directly onto AI agents. The question is not whether to apply it, but when.",
    accent: "text-indigo-400",
    bg: "bg-indigo-950/10",
    comparison: [
      { label: "Duty of loyalty", loyal: "Encoded in system architecture and governance", general: "Absent; agent serves platform by design" },
      { label: "Duty of care", loyal: "Competence and diligence obligations enforced", general: "No enforceable standard of care" },
      { label: "Duty of disclosure", loyal: "Conflicts and limitations proactively disclosed", general: "No disclosure obligation" },
      { label: "Real-world example", loyal: "Balkin (2016): 'Information Fiduciaries and the First Amendment'", general: "Current social media platforms: no fiduciary duty" },
    ],
    caseStudy: {
      label: "Legal Horizon",
      text: "Jack Balkin's 2016 paper on 'Information Fiduciaries' proposed that platforms holding intimate user data should be treated as fiduciaries. As agentic AI systems gain access to financial accounts, health records, and personal communications, the legal and ethical case for fiduciary AI becomes irresistible.",
    },
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function GapD() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".gapd-panel");
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
    <div id="section-gap-d" ref={containerRef} className="relative z-10">
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
            className={`gapd-panel w-screen h-screen flex flex-col items-center justify-center px-12 py-16 border-r border-white/5 ${slide.bg}`}
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
              <h2 className={`font-heading text-center font-bold mb-3 leading-tight text-3xl md:text-5xl ${slide.accent}`}>
                {slide.title}
              </h2>

              {/* Subtitle */}
              <h3 className="text-lg md:text-xl text-white/70 text-center mb-6 font-light">
                {slide.subtitle}
              </h3>

              {/* Body */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-8">
                {slide.body}
              </p>

              {/* Comparison grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {slide.comparison.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/8 bg-white/[0.03] p-4"
                  >
                    <div className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2">
                      {item.label}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-lg bg-cyan-950/30 border border-cyan-500/15 px-3 py-2">
                        <div className="text-[10px] text-cyan-400/60 font-mono uppercase tracking-wider mb-1">Loyal</div>
                        <div className="text-xs text-cyan-100/80 leading-snug">{item.loyal}</div>
                      </div>
                      <div className="rounded-lg bg-rose-950/20 border border-rose-500/15 px-3 py-2">
                        <div className="text-[10px] text-rose-400/60 font-mono uppercase tracking-wider mb-1">General</div>
                        <div className="text-xs text-rose-100/60 leading-snug">{item.general}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Case study */}
              {slide.caseStudy && (
                <div className={`rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4`}>
                  <span className={`text-xs font-semibold uppercase tracking-widest ${slide.accent} mr-2`}>
                    {slide.caseStudy.label}:
                  </span>
                  <span className="text-sm text-white/50 leading-relaxed">
                    {slide.caseStudy.text}
                  </span>
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
