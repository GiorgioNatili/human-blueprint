import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Handshake, Shield, Zap } from "lucide-react";

export default function DeepPillars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      id: "intellectual",
      title: "Intellectual Intelligence",
      subtitle: "The Chess Move",
      desc: "AI can calculate millions of moves per second. But it cannot decide *which game is worth playing*.",
      example: "In 1997, Deep Blue beat Kasparov. In 2026, the human's role is not to calculate the move, but to define the win condition.",
      icon: <Brain className="w-16 h-16" />,
      color: "text-cyan-400",
      border: "border-cyan-500",
      bg: "bg-cyan-950/20"
    },
    {
      id: "social",
      title: "Social Intelligence",
      subtitle: "The Empathy Bridge",
      desc: "An AI agent can simulate polite conversation. It cannot build the deep trust required for high-stakes negotiation.",
      example: "When a crisis hits, employees don't look to an algorithm for reassurance. They look to a leader who shares their vulnerability.",
      icon: <Handshake className="w-16 h-16" />,
      color: "text-purple-400",
      border: "border-purple-500",
      bg: "bg-purple-950/20"
    },
    {
      id: "ethical",
      title: "Ethical Intelligence",
      subtitle: "The Trolley Problem 2.0",
      desc: "AI optimizes for the metrics you give it. If you give it the wrong metrics, it will optimize for disaster efficiently.",
      example: "An agent maximizing 'engagement' will amplify outrage. A human must intervene to maximize 'truth' and 'dignity'.",
      icon: <Shield className="w-16 h-16" />,
      color: "text-emerald-400",
      border: "border-emerald-500",
      bg: "bg-emerald-950/20"
    },
    {
      id: "operational",
      title: "Operational Intelligence",
      subtitle: "The Conductor",
      desc: "The orchestra doesn't need a conductor to play the notes. It needs a conductor to create the music.",
      example: "AI agents are the virtuoso musicians. You are the conductor, ensuring they play in harmony, not cacophony.",
      icon: <Zap className="w-16 h-16" />,
      color: "text-amber-400",
      border: "border-amber-500",
      bg: "bg-amber-950/20"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the left column (Visual Anchors)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftColRef.current,
        pinSpacing: false,
      });

      // Animate the active state of the left column based on right column scroll
      pillars.forEach((pillar, index) => {
        ScrollTrigger.create({
          trigger: `#pillar-content-${index}`,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              gsap.to(`#pillar-icon-${index}`, { scale: 1.2, opacity: 1, duration: 0.3 });
              gsap.to(`#pillar-text-${index}`, { color: "#fff", opacity: 1, duration: 0.3 });
            } else {
              gsap.to(`#pillar-icon-${index}`, { scale: 1, opacity: 0.5, duration: 0.3 });
              gsap.to(`#pillar-text-${index}`, { color: "#94a3b8", opacity: 0.5, duration: 0.3 });
            }
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="section-deep-pillars" ref={containerRef} className="relative bg-black min-h-[400vh] flex">
      
      {/* Left Column: Pinned Visual Anchors */}
      <div ref={leftColRef} className="hidden lg:flex w-1/2 h-screen flex-col justify-center items-center border-r border-white/10 bg-black/50 backdrop-blur-sm z-10">
        <div className="space-y-12">
          {pillars.map((pillar, index) => (
            <div key={pillar.id} className="flex items-center gap-6 group">
              <div id={`pillar-icon-${index}`} className={`transition-all duration-300 opacity-50 ${pillar.color}`}>
                {pillar.icon}
              </div>
              <h3 id={`pillar-text-${index}`} className="font-heading text-3xl font-bold text-muted-foreground opacity-50 transition-all duration-300">
                {pillar.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Scrolling Content */}
      <div ref={rightColRef} className="w-full lg:w-1/2 relative z-20">
        {pillars.map((pillar, index) => (
          <div
            key={pillar.id}
            id={`pillar-content-${index}`}
            className="h-screen flex flex-col justify-center px-8 md:px-20 border-b border-white/5"
          >
            <div className={`inline-block self-start px-4 py-1 rounded-full text-xs font-bold mb-6 border ${pillar.color} ${pillar.border} bg-black/50`}>
              PILLAR 0{index + 1}
            </div>
            
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-white">
              {pillar.subtitle}
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-white to-transparent mb-8" />
            
            <p className="text-2xl text-muted-foreground leading-relaxed mb-12">
              {pillar.desc}
            </p>
            
            <div className={`p-8 rounded-2xl border-l-4 ${pillar.border} ${pillar.bg} backdrop-blur-md`}>
              <p className="text-xl text-white/90 italic font-medium">
                "{pillar.example}"
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
