import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scale, Lock, Eye, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ParadoxExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  const paradoxes = [
    {
      title: "The Agency Paradox",
      icon: <Scale className="w-24 h-24 text-cyan-400" />,
      statement: "To gain more control over outcomes, we must give up more control over process.",
      resolution: "We resolve this by shifting from 'micro-management' to 'meta-management'—defining the constraints and values rather than the steps.",
      bg: "from-cyan-950/50 to-black"
    },
    {
      title: "The Privacy Paradox",
      icon: <Lock className="w-24 h-24 text-purple-400" />,
      statement: "To get personalized service, we must reveal personal data, which makes us vulnerable.",
      resolution: "We resolve this through 'System Loyalty'—legal and technical guarantees that the agent uses data *only* for the user's benefit.",
      bg: "from-purple-950/50 to-black"
    },
    {
      title: "The Transparency Paradox",
      icon: <Eye className="w-24 h-24 text-emerald-400" />,
      statement: "As AI systems become more capable (Deep Learning), they become less explainable.",
      resolution: "We resolve this by demanding 'behavioral transparency' (what will it do?) rather than 'mechanistic transparency' (how does it think?).",
      bg: "from-emerald-950/50 to-black"
    },
    {
      title: "The Efficiency Paradox",
      icon: <Users className="w-24 h-24 text-amber-400" />,
      statement: "Hyper-efficiency in social systems often leads to fragility and loss of resilience.",
      resolution: "We resolve this by intentionally designing for 'friction'—moments of human pause and judgment that prevent cascading errors.",
      bg: "from-amber-950/50 to-black"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      panelsRef.current.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
          snap: 1,
        });

        // Animate content in
        gsap.fromTo(panel.querySelector(".content-wrapper"), 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            scrollTrigger: {
              trigger: panel,
              start: "top center",
              end: "center center",
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black">
      <div className="py-32 text-center bg-black relative z-10">
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
          Navigating the Paradoxes
        </h2>
        <p className="text-xl text-muted-foreground">
          Four fundamental tensions of the agentic age.
        </p>
      </div>

      {paradoxes.map((p, i) => (
        <div 
          key={i}
          ref={(el) => { if (el) panelsRef.current[i] = el; }}
          className={`h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b ${p.bg}`}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('/images/texture-noise.jpg')] opacity-20 mix-blend-overlay pointer-events-none" />
          
          <div className="content-wrapper container px-4 max-w-4xl relative z-10 text-center">
            <div className="mb-12 flex justify-center">
              <div className="p-8 bg-white/5 rounded-full border border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                {p.icon}
              </div>
            </div>

            <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
              {p.title}
            </h3>

            <div className="mb-12">
              <p className="text-2xl md:text-3xl text-white/90 font-medium leading-tight">
                "{p.statement}"
              </p>
            </div>

            <div className="bg-black/40 p-8 rounded-2xl border-t border-white/20 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4 block">Resolution</span>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {p.resolution}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
