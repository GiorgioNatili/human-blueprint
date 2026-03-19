import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";

gsap.registerPlugin(ScrollTrigger);

const DIALOGUE = [
  {
    role: "human",
    label: "Human",
    icon: "H",
    color: "text-cyan-300",
    bg: "bg-cyan-950/40 border-cyan-500/30",
    text: "Based on market conditions, I recommend increasing exposure to emerging markets.",
  },
  {
    role: "ai",
    label: "AI Sparring Partner",
    icon: "AI",
    color: "text-violet-300",
    bg: "bg-violet-950/40 border-violet-500/30",
    text: "Three concerns: (1) Currency volatility in target markets is up 23% this quarter. (2) Your assumption of continued USD strength conflicts with three leading reversal indicators. (3) Historical data shows >15% EM exposure increases portfolio volatility by 40% in similar conditions. How do you address these?",
  },
  {
    role: "human",
    label: "Human",
    icon: "H",
    color: "text-cyan-300",
    bg: "bg-cyan-950/40 border-cyan-500/30",
    text: "Good points. Cap EM exposure at 12%, focus on currency-hedged markets, and implement dynamic rebalancing tied to USD strength indicators. Capture growth, manage downside.",
  },
  {
    role: "ai",
    label: "AI Sparring Partner",
    icon: "AI",
    color: "text-violet-300",
    bg: "bg-violet-950/40 border-violet-500/30",
    text: "Revised strategy addresses all concerns. Implementing now.",
  },
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Co-Designed Tests",
    desc: "Both parties shape the experiment — no unilateral framing of the problem.",
    color: "border-cyan-400/40 text-cyan-300",
    bg: "bg-cyan-950/30",
  },
  {
    number: "02",
    title: "Neutral Moderation",
    desc: "A third perspective ensures neither party's bias dominates the process.",
    color: "border-violet-400/40 text-violet-300",
    bg: "bg-violet-950/30",
  },
  {
    number: "03",
    title: "Joint Accountability",
    desc: "Results are published together — the AI cannot hide inconvenient findings.",
    color: "border-amber-400/40 text-amber-300",
    bg: "bg-amber-950/30",
  },
  {
    number: "04",
    title: "Human Decides",
    desc: "The human retains final judgment. The AI sharpens the blade; the human wields it.",
    color: "border-emerald-400/40 text-emerald-300",
    bg: "bg-emerald-950/30",
  },
];

export default function AdversarialCollab() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Opener
      gsap.fromTo(
        ".ac-opener",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: ".ac-opener",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // Principles stagger
      gsap.fromTo(
        ".ac-principle",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.18,
          duration: 0.7,
          scrollTrigger: {
            trigger: ".ac-principles",
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Dialogue reveal
      gsap.fromTo(
        ".dialogue-line",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.25,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".ac-dialogue",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Citation
      gsap.fromTo(
        ".ac-citation",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".ac-citation",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div id="section-adversarial" ref={containerRef} className="relative z-10 bg-black">
      <Section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">

        {/* Opener */}
        <div className="ac-opener mb-16 text-center">
          <p className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase mb-4">
            The Partnership Model
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Adversarial{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Collaboration
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Not servant. Not master.{" "}
            <span className="text-white font-semibold">Sparring partner.</span>{" "}
            The AI that challenges your thinking is more valuable than the one that agrees with it.
          </p>
        </div>

        {/* Definition Block */}
        <div className="ac-opener mb-16 border border-violet-500/20 rounded-xl p-8 bg-violet-950/10 backdrop-blur-sm">
          <p className="text-xs font-mono tracking-[0.25em] text-violet-400 uppercase mb-3">Definition</p>
          <p className="text-slate-200 text-base leading-relaxed">
            <span className="text-white font-semibold">Adversarial Collaboration</span> is a scientific methodology
            wherein researchers with opposing views work together to jointly advance knowledge of an area under dispute.
            Parties with competing hypotheses co-design experiments, ensuring no obvious biases or weaknesses in the
            experimental design — and publish results together regardless of outcome.
          </p>
          <p className="text-slate-400 text-sm mt-4 leading-relaxed">
            Developed independently by Erez & Latham (1988) and later by Daniel Kahneman (late 1990s), the method has
            been shown to reduce cognitive-motivational biases and resolve contentious scientific disputes. Applied to
            human-AI interaction, it becomes the most powerful model for preserving human dignity while leveraging AI's
            analytical depth.
          </p>
        </div>

        {/* Four Principles */}
        <div className="ac-principles grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {PRINCIPLES.map((p) => (
            <div
              key={p.number}
              className={`ac-principle border rounded-xl p-6 ${p.bg} ${p.color.split(" ")[0]} backdrop-blur-sm`}
            >
              <div className={`text-xs font-mono tracking-widest mb-2 ${p.color.split(" ")[1]}`}>
                {p.number}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* The Loop Visual */}
        <div className="ac-opener mb-16 text-center">
          <p className="text-xs font-mono tracking-[0.3em] text-slate-500 uppercase mb-8">The Adversarial Loop</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-mono">
            {[
              { label: "Human Proposes", color: "bg-cyan-950/60 border-cyan-500/40 text-cyan-300" },
              { label: "→", color: "text-slate-500 bg-transparent border-transparent" },
              { label: "AI Interrogates", color: "bg-violet-950/60 border-violet-500/40 text-violet-300" },
              { label: "→", color: "text-slate-500 bg-transparent border-transparent" },
              { label: "Human Refines", color: "bg-cyan-950/60 border-cyan-500/40 text-cyan-300" },
              { label: "→", color: "text-slate-500 bg-transparent border-transparent" },
              { label: "Human Decides", color: "bg-emerald-950/60 border-emerald-500/40 text-emerald-300" },
              { label: "→", color: "text-slate-500 bg-transparent border-transparent" },
              { label: "AI Executes", color: "bg-violet-950/60 border-violet-500/40 text-violet-300" },
            ].map((step, i) =>
              step.label === "→" ? (
                <span key={i} className="text-slate-500 text-lg">→</span>
              ) : (
                <span
                  key={i}
                  className={`border rounded-lg px-4 py-2 ${step.color} cursor-pointer transition-all duration-200 hover:scale-105`}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {step.label}
                </span>
              )
            )}
          </div>
          {activeStep !== null && (
            <p className="text-slate-400 text-xs mt-4 font-mono">
              {activeStep === 0 && "Strategy and direction come from human judgment and contextual understanding."}
              {activeStep === 2 && "Data-driven challenge: weaknesses, blind spots, and alternative perspectives."}
              {activeStep === 4 && "Refined thinking that integrates both human intuition and AI analysis."}
              {activeStep === 6 && "Final authority always rests with the human. Dignity preserved."}
              {activeStep === 8 && "AI implements the human-validated decision with precision and consistency."}
            </p>
          )}
        </div>

        {/* Live Dialogue Example */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-[0.3em] text-slate-500 uppercase mb-6 text-center">
            In Practice — Financial Analysis
          </p>
          <div className="ac-dialogue space-y-4">
            {DIALOGUE.map((line, i) => (
              <div key={i} className={`dialogue-line flex gap-4 items-start`}>
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border ${line.bg} ${line.color}`}
                >
                  {line.icon}
                </div>
                <div className={`flex-1 border rounded-xl p-4 ${line.bg}`}>
                  <p className={`text-xs font-mono tracking-wider mb-2 ${line.color}`}>{line.label}</p>
                  <p className="text-slate-200 text-sm leading-relaxed">{line.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insight */}
        <div className="ac-opener mb-12 text-center border-t border-slate-800 pt-12">
          <blockquote className="text-xl md:text-2xl text-slate-200 italic leading-relaxed max-w-3xl mx-auto mb-4">
            "Expert judgment improves when intuitions are tested against rigorous analysis."
          </blockquote>
          <p className="text-slate-500 text-sm font-mono">
            — Kahneman & Klein, <em>Conditions for Intuitive Expertise</em>, 2009
          </p>
        </div>

        {/* The Distinction */}
        <div className="ac-opener grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            {
              label: "Servant AI",
              desc: "Agrees with everything. Provides false confidence. Wastes analytical capability.",
              color: "border-red-500/30 bg-red-950/20 text-red-400",
              icon: "✗",
            },
            {
              label: "Adversarial AI",
              desc: "Challenges assumptions. Sharpens judgment. Preserves human strategic centrality.",
              color: "border-emerald-500/30 bg-emerald-950/20 text-emerald-400",
              icon: "✓",
            },
            {
              label: "Autonomous AI",
              desc: "Decides unilaterally. Removes human agency. Violates digital dignity.",
              color: "border-red-500/30 bg-red-950/20 text-red-400",
              icon: "✗",
            },
          ].map((item, i) => (
            <div key={i} className={`border rounded-xl p-6 text-center ${item.color}`}>
              <div className="text-2xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-white text-sm mb-2">{item.label}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Academic Citation */}
        <div className="ac-citation border border-slate-700/40 rounded-xl p-6 bg-slate-900/30 text-center">
          <p className="text-xs font-mono tracking-[0.25em] text-slate-500 uppercase mb-3">Research Foundation</p>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
            The adversarial collaboration methodology was independently developed by{" "}
            <span className="text-slate-200">Erez & Latham (1988)</span> and{" "}
            <span className="text-slate-200">Daniel Kahneman (late 1990s)</span>, with formal application to
            human-AI systems explored in{" "}
            <span className="text-slate-200">Kahneman & Klein's</span> landmark 2009 paper{" "}
            <em>"Conditions for Intuitive Expertise: A Failure to Disagree"</em> (
            <span className="text-cyan-400">American Psychologist, 64(6), 515–526</span>).
          </p>
        </div>

      </Section>
    </div>
  );
}
