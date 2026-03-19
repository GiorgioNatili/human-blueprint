import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";

const cases = [
  {
    domain: "Healthcare",
    humanRole: "Physician delivers diagnosis with empathy and presence",
    aiRole: "Analyzes scans, surfaces prognosis probabilities, flags anomalies",
    insight: "85% of patients want a human to deliver serious diagnoses",
    stat: "85%",
    statLabel: "prefer human delivery",
    color: "border-cyan-500/30 text-cyan-300",
    bg: "bg-cyan-950/20",
    number: "01",
  },
  {
    domain: "Conflict Resolution",
    humanRole: "Mediator reads body language, manages emotional escalation",
    aiRole: "Identifies recurring conflict patterns, surfaces historical precedents",
    insight: "Emotional de-escalation requires physical presence and human attunement",
    stat: "∞",
    statLabel: "context AI cannot read",
    color: "border-purple-500/30 text-purple-300",
    bg: "bg-purple-950/20",
    number: "02",
  },
  {
    domain: "Customer Service",
    humanRole: "Agent manages grief, trauma, or distress with compassion",
    aiRole: "Retrieves account history, drafts response options, flags urgency",
    insight: "Trust is rebuilt through human acknowledgment, not automated resolution",
    stat: "2.5×",
    statLabel: "higher lifetime value with trust",
    color: "border-blue-500/30 text-blue-300",
    bg: "bg-blue-950/20",
    number: "03",
  },
  {
    domain: "Leadership",
    humanRole: "Manager delivers feedback with care, mentorship, and personal investment",
    aiRole: "Tracks performance metrics, benchmarks against peers, surfaces patterns",
    insight: "Motivation requires a relationship, not a report",
    stat: "40%",
    statLabel: "better judgment when challenged",
    color: "border-fuchsia-500/30 text-fuchsia-300",
    bg: "bg-fuchsia-950/20",
    number: "04",
  },
  {
    domain: "Education",
    humanRole: "Teacher identifies emotional barriers, provides encouragement and belief",
    aiRole: "Personalizes content difficulty, tracks learning velocity, flags gaps",
    insight: "Learning breakthroughs happen through human belief in the student",
    stat: "73%",
    statLabel: "distrust AI to act in their interests",
    color: "border-emerald-500/30 text-emerald-300",
    bg: "bg-emerald-950/20",
    number: "05",
  },
];

export default function UseCases() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".usecase-opener",
        { opacity: 0.2, y: 20 },
        {
          opacity: 1, y: 0, duration: 1.2,
          scrollTrigger: {
            trigger: ".usecase-opener",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          }
        }
      );

      gsap.utils.toArray<Element>(".usecase-card").forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            delay: i * 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="section-use-cases" ref={containerRef} className="relative z-10 bg-black">
      <Section className="text-center">
        <p className="usecase-opener text-lg md:text-xl text-cyan-400/70 font-mono mb-8 max-w-3xl mx-auto italic">
          "What if the four pillars of human intelligence are the only things standing between a useful tool and an extractive one?"
        </p>
        <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 reveal-text">
          Where Judgment Stays Human
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Five domains where emotional intelligence is not a soft skill —
          it is the irreplaceable core of the work.
        </p>
      </Section>

      <div className="container max-w-5xl mx-auto px-4 pb-24 space-y-5">
        {cases.map((c) => (
          <div
            key={c.domain}
            className={`usecase-card border rounded-2xl p-6 md:p-8 ${c.color} ${c.bg} backdrop-blur-sm`}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Left: Number + Domain + Stat */}
              <div className="md:w-48 shrink-0">
                <p className="font-mono text-xs opacity-40 mb-1">{c.number}</p>
                <h3 className="font-heading text-2xl font-bold mb-3">{c.domain}</h3>
                <div className="border-t border-current/20 pt-3">
                  <p className="font-mono text-3xl font-bold opacity-80">{c.stat}</p>
                  <p className="text-xs opacity-50 mt-1">{c.statLabel}</p>
                </div>
              </div>

              {/* Right: Roles + Insight */}
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-mono opacity-40 tracking-widest uppercase mb-2">Human Role</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.humanRole}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono opacity-40 tracking-widest uppercase mb-2">AI Role</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.aiRole}</p>
                  </div>
                </div>
                <div className="border-t border-current/10 pt-4">
                  <p className="text-sm italic opacity-70">"{c.insight}"</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
