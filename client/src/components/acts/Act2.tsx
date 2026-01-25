import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";
import Scene from "@/components/canvas/Scene";
import NeuralMesh from "@/components/canvas/NeuralMesh";

export default function Act2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const icebergRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the iceberg section for a long scroll
      ScrollTrigger.create({
        trigger: icebergRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
        id: "act2-pin",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: icebergRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
        },
      });

      // Phase 1: Surface (Tip of the Iceberg)
      tl.to(".surface-text", { opacity: 0, y: -50, duration: 1 })
        .to(".iceberg-image", { yPercent: -30, scale: 1.2, duration: 2 }, "<")
        
      // Phase 2: Submersion (Going Deeper)
        .to(".depth-marker", { opacity: 1, duration: 0.5 }, "-=1")
        .to(".iceberg-image", { yPercent: -60, scale: 1.5, duration: 2 })
        
      // Phase 3: The Foundation (Reveal)
        .fromTo(".foundation-text", 
          { opacity: 0, y: 100 }, 
          { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
        );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 bg-indigo-950/30">
      <div ref={icebergRef} className="h-screen w-full relative overflow-hidden flex flex-col items-center justify-center">
        {/* Background Gradient that gets darker */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/50 to-black z-0" />
        
        {/* The Neural Mesh (Subtle Background) */}
        <div className="iceberg-image absolute w-full h-full z-0 pointer-events-none opacity-50">
           <Scene>
             <NeuralMesh />
           </Scene>
        </div>

        {/* Surface Content */}
        <div className="surface-text relative z-20 text-center max-w-2xl px-4 mt-[-20vh]">
          <h2 className="font-heading text-5xl font-bold mb-6">Act II: The Iceberg</h2>
          <p className="text-xl text-muted-foreground">
            What you see is just the tip. The "shiny object" of AI tools is supported by a massive, invisible structure of human expertise.
          </p>
        </div>

        {/* Depth Markers */}
        <div className="depth-marker absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-20 opacity-0 z-20">
          <div className="text-right">
            <span className="block text-sm text-cyan-400 font-mono">0m</span>
            <span className="block text-xs text-muted-foreground">Surface Tools</span>
          </div>
          <div className="text-right">
            <span className="block text-sm text-cyan-400 font-mono">-100m</span>
            <span className="block text-xs text-muted-foreground">Prompt Engineering</span>
          </div>
          <div className="text-right">
            <span className="block text-sm text-cyan-400 font-mono">-500m</span>
            <span className="block text-xs text-muted-foreground">Domain Expertise</span>
          </div>
          <div className="text-right">
            <span className="block text-sm text-cyan-400 font-mono">-1000m</span>
            <span className="block text-xs text-muted-foreground">Ethical Frameworks</span>
          </div>
        </div>

        {/* Foundation Content (Revealed at bottom) */}
        <div className="absolute bottom-20 w-full max-w-6xl px-4 grid grid-cols-3 gap-8 z-20">
          {[
            { title: "Digital Dignity", desc: "The ethical bedrock. Respecting human agency in every automated decision." },
            { title: "Adversarial Collaboration", desc: "The methodology. Using AI to challenge, not just confirm, our thinking." },
            { title: "System Loyalty", desc: "The technical guarantee. Ensuring the agent serves the user, not the platform." },
          ].map((item, i) => (
            <div key={i} className="foundation-text bg-black/60 backdrop-blur-md border border-cyan-500/30 p-8 rounded-xl">
              <h3 className="font-heading text-2xl font-bold mb-3 text-cyan-300">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
