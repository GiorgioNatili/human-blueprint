import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Handshake, Shield, Zap } from "lucide-react";

export default function Act3() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".pillar-panel");
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (scrollContainerRef.current?.offsetWidth || 0),
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      id: "intro",
      title: "Act III: The 4 Pillars",
      subtitle: "A Framework for Human-AI Synergy",
      desc: "To bridge the Intuition Gap, we must cultivate four distinct types of intelligence.",
      color: "text-white",
      bg: "bg-background",
    },
    {
      id: "intellectual",
      icon: <Brain className="w-24 h-24 mb-8 text-cyan-400" />,
      title: "Intellectual Intelligence",
      subtitle: "Judgment in Ambiguity",
      desc: "AI handles data processing and pattern recognition. Humans handle context, nuance, and the 'why' behind the data.",
      color: "text-cyan-400",
      bg: "bg-cyan-950/20",
    },
    {
      id: "social",
      icon: <Handshake className="w-24 h-24 mb-8 text-purple-400" />,
      title: "Social Intelligence",
      subtitle: "Emotional Connection",
      desc: "AI can simulate empathy, but it cannot feel. Humans build trust, navigate politics, and foster genuine connection.",
      color: "text-purple-400",
      bg: "bg-purple-950/20",
    },
    {
      id: "ethical",
      icon: <Shield className="w-24 h-24 mb-8 text-emerald-400" />,
      title: "Ethical Intelligence",
      subtitle: "Moral Reasoning",
      desc: "AI follows rules and optimizes metrics. Humans must define the values, resolve dilemmas, and ensure digital dignity.",
      color: "text-emerald-400",
      bg: "bg-emerald-950/20",
    },
    {
      id: "operational",
      icon: <Zap className="w-24 h-24 mb-8 text-amber-400" />,
      title: "Operational Intelligence",
      subtitle: "Strategic Coordination",
      desc: "AI executes tasks with speed. Humans orchestrate the workflow, set the strategy, and lead the team.",
      color: "text-amber-400",
      bg: "bg-amber-950/20",
    },
  ];

  return (
    <div ref={containerRef} className="relative z-10">
      <div ref={scrollContainerRef} className="h-screen w-[500%] flex flex-nowrap">
        {pillars.map((pillar, i) => (
          <div 
            key={i} 
            className={`pillar-panel w-screen h-screen flex flex-col items-center justify-center p-12 border-r border-white/5 ${pillar.bg}`}
          >
            <div className="max-w-4xl text-center">
              {pillar.icon && <div className="flex justify-center">{pillar.icon}</div>}
              <h2 className={`font-heading text-6xl md:text-8xl font-bold mb-4 ${pillar.color}`}>
                {pillar.title}
              </h2>
              <h3 className="text-3xl md:text-4xl text-white mb-8 font-light">
                {pillar.subtitle}
              </h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
