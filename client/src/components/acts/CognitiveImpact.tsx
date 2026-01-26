import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Cpu, Zap, ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CognitiveImpact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const automationRef = useRef<HTMLDivElement>(null);
  const augmentationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the container for a longer duration to ensure readability
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // Increased scroll distance
        pin: true,
        scrub: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
        }
      });

      // Phase 1: Hold Automation (Readability) then Fade Out
      tl.to(automationRef.current, { opacity: 1, duration: 1 }) // Hold
        .to(automationRef.current, { opacity: 0, scale: 0.9, duration: 1 }, "+=1"); // Fade out

      // Phase 2: Fade In Augmentation and Hold
      tl.fromTo(augmentationRef.current, 
        { opacity: 0, scale: 1.1, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 1 }
      )
      .to(augmentationRef.current, { opacity: 1, duration: 2 }); // Hold for reading

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Immersive Background */}
      <div className="absolute inset-0 bg-[url('/images/texture-noise.jpg')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

      <div className="container px-4 relative z-20 h-full flex flex-col justify-center">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white">
            Cognitive Impact Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two distinct pathways for AI integration. Scroll to explore the divergence.
          </p>
          <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto mt-8 animate-bounce" />
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[50vh]">
          
          {/* Pathway A: Automation (Absolute Positioned) */}
          <div ref={automationRef} className="absolute inset-0 flex flex-col md:flex-row items-center gap-12 bg-destructive/5 border border-destructive/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-3 mb-6 bg-destructive/20 px-4 py-2 rounded-full border border-destructive/30">
                <Cpu className="w-6 h-6 text-destructive" />
                <span className="text-destructive font-bold uppercase tracking-wider">Pathway A: Automation</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">Cognitive Offloading</h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                When we outsource critical thinking to AI, neural pathways weaken due to disuse. The "Google Effect" becomes the "Agentic Atrophy."
              </p>
              <div className="bg-black/40 p-6 rounded-xl border-l-4 border-destructive">
                <p className="text-destructive-foreground italic">
                  "Use it or lose it" applies to cognitive functions. Over-reliance degrades judgment over time.
                </p>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-destructive/20 rounded-full blur-3xl animate-pulse" />
                <Cpu className="w-full h-full text-destructive/80 relative z-10" />
              </div>
            </div>
          </div>

          {/* Pathway B: Augmentation (Absolute Positioned) */}
          <div ref={augmentationRef} className="absolute inset-0 flex flex-col md:flex-row items-center gap-12 bg-emerald-900/10 border border-emerald-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-md opacity-0">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-3 mb-6 bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-500/30">
                <Brain className="w-6 h-6 text-emerald-400" />
                <span className="text-emerald-400 font-bold uppercase tracking-wider">Pathway B: Augmentation</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-4">Cognitive Extension</h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                When AI is used to *challenge* rather than replace human thought, it triggers deeper processing and "desirable difficulty."
              </p>
              <div className="bg-black/40 p-6 rounded-xl border-l-4 border-emerald-500">
                <p className="text-emerald-100 italic">
                  Properly integrated tools expand the "search space" of solutions without replacing the solver.
                </p>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 border-2 border-dashed border-emerald-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="w-32 h-32 text-emerald-400" />
                  <Zap className="absolute top-0 right-0 w-12 h-12 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
