import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";
import { Brain, Handshake, Shield, Zap, ChevronRight } from "lucide-react";

export default function DeepPillars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "Intellectual Intelligence",
      subtitle: "The Chess Move",
      desc: "AI can calculate millions of moves per second. But it cannot decide *which game is worth playing*.",
      example: "In 1997, Deep Blue beat Kasparov. In 2026, the human's role is not to calculate the move, but to define the win condition.",
      icon: <Brain className="w-12 h-12" />,
      color: "text-cyan-400",
      border: "border-cyan-500/50",
      bg: "bg-cyan-950/30"
    },
    {
      title: "Social Intelligence",
      subtitle: "The Empathy Bridge",
      desc: "An AI agent can simulate polite conversation. It cannot build the deep trust required for high-stakes negotiation.",
      example: "When a crisis hits, employees don't look to an algorithm for reassurance. They look to a leader who shares their vulnerability.",
      icon: <Handshake className="w-12 h-12" />,
      color: "text-purple-400",
      border: "border-purple-500/50",
      bg: "bg-purple-950/30"
    },
    {
      title: "Ethical Intelligence",
      subtitle: "The Trolley Problem 2.0",
      desc: "AI optimizes for the metrics you give it. If you give it the wrong metrics, it will optimize for disaster efficiently.",
      example: "An agent maximizing 'engagement' will amplify outrage. A human must intervene to maximize 'truth' and 'dignity'.",
      icon: <Shield className="w-12 h-12" />,
      color: "text-emerald-400",
      border: "border-emerald-500/50",
      bg: "bg-emerald-950/30"
    },
    {
      title: "Operational Intelligence",
      subtitle: "The Conductor",
      desc: "The orchestra doesn't need a conductor to play the notes. It needs a conductor to create the music.",
      example: "AI agents are the virtuoso musicians. You are the conductor, ensuring they play in harmony, not cacophony.",
      icon: <Zap className="w-12 h-12" />,
      color: "text-amber-400",
      border: "border-amber-500/50",
      bg: "bg-amber-950/30"
    }
  ];

  return (
    <div ref={containerRef} className="relative z-10 bg-background py-32">
      <Section>
        <div className="container px-4">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-16 text-center">
            Deep Dive: The 4 Pillars
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Navigation */}
            <div className="space-y-4">
              {pillars.map((pillar, index) => (
                <button
                  key={index}
                  onClick={() => setActivePillar(index)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                    activePillar === index 
                      ? `${pillar.bg} ${pillar.border} shadow-lg` 
                      : "bg-card/20 border-white/5 hover:bg-card/40"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${activePillar === index ? pillar.color : "text-muted-foreground"}`}>
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className={`font-heading text-xl font-bold ${activePillar === index ? "text-white" : "text-muted-foreground"}`}>
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-muted-foreground opacity-80">{pillar.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activePillar === index ? "rotate-90 text-white" : "text-muted-foreground"}`} />
                </button>
              ))}
            </div>

            {/* Right: Content Display */}
            <div className="relative min-h-[400px] bg-black/40 rounded-2xl border border-white/10 p-8 md:p-12 backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              
              <div key={activePillar} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold mb-6 border ${pillars[activePillar].color} ${pillars[activePillar].border} bg-black/50`}>
                  CASE STUDY
                </div>
                
                <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
                  {pillars[activePillar].subtitle}
                </h3>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {pillars[activePillar].desc}
                </p>
                
                <div className="bg-white/5 p-6 rounded-xl border-l-4 border-white/20">
                  <p className="text-lg italic text-white/90">
                    "{pillars[activePillar].example}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
