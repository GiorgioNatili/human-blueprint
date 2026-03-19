import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";

export default function EthicsGuardrails() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Provocative opener
      gsap.fromTo(".ethics-opener",
        { opacity: 0.2, y: 20 },
        {
          opacity: 1, y: 0, duration: 1.2,
          scrollTrigger: {
            trigger: ".ethics-opener",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          }
        }
      );

      // Loyalty layers stagger in
      gsap.fromTo(".loyalty-layer",
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0,
          stagger: 0.2,
          duration: 0.7,
          scrollTrigger: {
            trigger: ".loyalty-layers",
            start: "top 70%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Guardrail cards
      gsap.fromTo(".guardrail-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          stagger: 0.15,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".guardrail-grid",
            start: "top 75%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Fairness section
      gsap.fromTo(".fairness-block",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: {
            trigger: ".fairness-block",
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const loyaltyLayers = [
    {
      number: "01",
      title: "User Interests",
      desc: "What the user explicitly requests",
      color: "border-cyan-400/40 text-cyan-300",
      bg: "bg-cyan-950/30",
    },
    {
      number: "02",
      title: "User Wellbeing",
      desc: "What serves the user's long-term interests",
      color: "border-blue-400/40 text-blue-300",
      bg: "bg-blue-950/30",
    },
    {
      number: "03",
      title: "Third-Party Protection",
      desc: "What prevents harm to others",
      color: "border-purple-400/40 text-purple-300",
      bg: "bg-purple-950/30",
    },
    {
      number: "04",
      title: "Societal Guardrails",
      desc: "What the law and ethics require",
      color: "border-fuchsia-400/40 text-fuchsia-300",
      bg: "bg-fuchsia-950/30",
    },
  ];

  const guardrails = [
    {
      type: "Hard Stops",
      color: "border-amber-400/50 text-amber-300",
      bg: "bg-amber-950/30",
      icon: "✕",
      desc: "Actions the agent will never take regardless of instruction. Non-negotiable ethical boundaries baked into the system architecture.",
    },
    {
      type: "Soft Friction",
      color: "border-cyan-400/50 text-cyan-300",
      bg: "bg-cyan-950/30",
      icon: "⚠",
      desc: "Actions requiring explicit human confirmation before execution. The agent pauses, explains, and waits for conscious consent.",
    },
    {
      type: "Transparency Obligations",
      color: "border-purple-400/50 text-purple-300",
      bg: "bg-purple-950/30",
      icon: "◎",
      desc: "Actions the agent must disclose even when not asked. Proactive honesty as a design principle, not an afterthought.",
    },
  ];

  return (
    <div id="section-ethics" ref={containerRef} className="relative z-10 bg-black">
      <Section className="text-center">
        <p className="ethics-opener text-lg md:text-xl text-cyan-400/70 font-mono mb-8 max-w-3xl mx-auto italic">
          "What if loyalty is not a feature you add at the end — but the architecture you start with?"
        </p>
        <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 reveal-text">
          The Ethics of Loyalty
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          AI agents should be designed to serve the user's interests above all else.
          But what if those interests are harmful?
        </p>
      </Section>

      {/* Layered Loyalty Model */}
      <div className="container max-w-4xl mx-auto px-4 pb-16">
        <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-8 text-center">
          The Layered Loyalty Model
        </p>
        <div className="loyalty-layers space-y-3">
          {loyaltyLayers.map((layer, i) => (
            <div
              key={layer.number}
              className={`loyalty-layer flex items-center gap-6 p-5 rounded-xl border ${layer.color} ${layer.bg} backdrop-blur-sm`}
              style={{ marginLeft: `${i * 16}px` }}
            >
              <span className="font-mono text-xs opacity-50 w-6 shrink-0">{layer.number}</span>
              <div className="flex-1">
                <span className="font-heading text-lg font-semibold mr-3">{layer.title}</span>
                <span className="text-muted-foreground text-sm">— {layer.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground/60 text-sm italic mt-6 max-w-2xl mx-auto">
          A truly loyal agent navigates all four layers simultaneously. It is not a yes-machine.
          It is a trusted advisor — like a doctor who tells you what you need to hear,
          not what you want to hear.
        </p>
      </div>

      {/* Fairness & Corruption of Loyalty */}
      <div className="container max-w-4xl mx-auto px-4 pb-16">
        <div className="fairness-block border border-amber-500/20 rounded-2xl bg-amber-950/10 p-8 md:p-10">
          <p className="text-xs font-mono text-amber-400/60 tracking-[0.3em] uppercase mb-4">
            The Fairness Problem
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Loyalty Has Been Corrupted
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In practice, "fairness" in AI systems has been applied inconsistently — with poor
            justifications and biased outcomes that span from good to evil too easily.
            We live in a world where loyalty has too many meanings, and fairness is invoked
            to justify decisions that serve neither the user nor society.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            True loyalty by design requires <span className="text-amber-300">auditable</span>,{" "}
            <span className="text-amber-300">contestable</span>, and{" "}
            <span className="text-amber-300">transparent</span> decision logic —
            not opaque systems that claim fairness while encoding bias.
          </p>
        </div>
      </div>

      {/* Three Guardrail Types */}
      <div className="container max-w-5xl mx-auto px-4 pb-24">
        <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-8 text-center">
          Three Guardrail Types
        </p>
        <div className="guardrail-grid grid grid-cols-1 md:grid-cols-3 gap-4">
          {guardrails.map((g) => (
            <div
              key={g.type}
              className={`guardrail-card border rounded-xl p-6 ${g.color} ${g.bg} backdrop-blur-sm`}
            >
              <div className="text-2xl mb-3 opacity-60">{g.icon}</div>
              <h4 className="font-heading text-lg font-semibold mb-3">{g.type}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
