import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";

export default function Act4() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: layersRef.current,
          start: "top top",
          end: "+=250%",
          pin: true,
          scrub: 1,
        },
      });

      // Animate layers stacking up
      tl.from(".layer-1", { y: 800, opacity: 0, duration: 1 })
        .from(".layer-2", { y: 800, opacity: 0, duration: 1 }, "-=0.5")
        .from(".layer-3", { y: 800, opacity: 0, duration: 1 }, "-=0.5")
        .from(".layer-4", { y: 800, opacity: 0, duration: 1 }, "-=0.5")
        .from(".layer-5", { y: 800, opacity: 0, duration: 1 }, "-=0.5")
        
        // Final message reveal
        .to(".loyalty-message", { opacity: 1, scale: 1.1, duration: 1 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const layers = [
    { id: "governance", title: "Governance", desc: "Clear rules on who the agent serves", color: "bg-blue-900" },
    { id: "data-stewardship", title: "Data Stewardship", desc: "Protecting user data from extraction", color: "bg-indigo-800" },
    { id: "secure-tooling", title: "Secure Tooling", desc: "Preventing compromise and leakage", color: "bg-purple-800" },
    { id: "transparency", title: "Transparency", desc: "Visible decision-making logic", color: "bg-fuchsia-800" },
    { id: "accountability", title: "Accountability", desc: "User recourse mechanisms", color: "bg-pink-800" },
  ];

  return (
    <div ref={containerRef} className="relative z-10 bg-black">
      <Section className="text-center py-20">
        <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8">
          Act IV: System Loyalty
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          "What if loyalty isn't just the right thing to do—it's the most profitable strategy?"
          <br />
          In an age of commoditized intelligence, trust becomes the ultimate competitive moat.
        </p>
      </Section>

      <div ref={layersRef} className="h-screen w-full relative overflow-hidden flex flex-col items-center justify-end pb-20">
        <div className="absolute inset-0 z-0">
           <img 
            src={"https://d2xsxph8kpxj0f.cloudfront.net/310519663267931784/KHL22GhjgeeQPRRyxwJ5K4/iron-triangle_c8cbeb94.jpg"}
            alt=""
            role="presentation"
            loading="lazy"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="loyalty-message absolute top-1/4 z-20 opacity-0 text-center">
          <h3 className="font-heading text-6xl font-bold text-white mb-4">Loyalty by Design</h3>
          <p className="text-2xl text-cyan-300">Not a feature. A foundation.</p>
        </div>

        <div className="relative z-10 w-full max-w-4xl flex flex-col-reverse items-center">
          {layers.map((layer, i) => (
            <div
              key={layer.id}
              className={`layer-${i + 1} h-20 md:h-24 ${layer.color} rounded-xl border border-white/20 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 shadow-2xl -mb-4 relative`}
              style={{ width: `${100 - i * 5}%`, zIndex: 10 - i }}
            >
              <span className="font-heading text-lg md:text-2xl font-bold text-white text-center md:text-left">{layer.title}</span>
              <span className="text-white/80 text-xs md:text-base text-center md:text-right">{layer.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
