import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Act2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const icebergRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin and animate the iceberg section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: icebergRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
          id: "act2-pin",
        },
      });

      // Phase 1: Surface (Tip of the Iceberg)
      tl.to(".surface-text", { opacity: 0, y: -50, duration: 1 })
        // Scale up significantly for immersion
        .to(".iceberg-image", { yPercent: -40, scale: 1.8, duration: 2 }, "<")
        .to(".water-texture", { yPercent: -20, opacity: 0.6, duration: 2 }, "<")

      // Phase 2: Submersion (Going Deeper)
        .to(".iceberg-image", { yPercent: -70, scale: 2.2, duration: 2 })
        .to(".water-texture", { yPercent: -50, opacity: 0.8, duration: 2 }, "<")

      // Phase 3: The Foundation (Reveal)
        .fromTo(".foundation-text",
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
        );

      // Depth marker animations — genie magnification effect synced to scroll
      const markers = gsap.utils.toArray<HTMLElement>(".depth-marker");
      const colors = ["#22d3ee", "#818cf8", "#a78bfa", "#c084fc"]; // cyan, indigo, purple, violet

      markers.forEach((marker, i) => {
        const progress = i / markers.length;
        const startPct = progress * 80; // spread across 0-80% of scroll
        const endPct = startPct + 25;

        gsap.fromTo(marker,
          { scale: 1, opacity: 0.4, x: 0, color: "#ffffff" },
          {
            scale: 1.5,
            opacity: 1,
            x: -20,
            color: colors[i],
            ease: "power2.out",
            scrollTrigger: {
              trigger: icebergRef.current,
              start: `top+=${startPct}% top`,
              end: `top+=${endPct}% top`,
              scrub: 1,
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="section-act2" ref={containerRef} className="relative z-10 bg-black">
      <div ref={icebergRef} className="h-screen w-full relative overflow-hidden flex flex-col items-center justify-center">
        {/* Deep Underwater Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#020c1b] to-black z-0" />

        {/* Animated Water Texture Layer for Parallax */}
        <div className="water-texture absolute inset-0 opacity-20 mix-blend-overlay z-0 scale-150 origin-top" style={{ backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663267931784/KHL22GhjgeeQPRRyxwJ5K4/texture-noise_a856544f.jpg')` }} />

        {/* The Iceberg Image */}
        <div className="iceberg-image absolute w-full h-full z-10 mix-blend-screen opacity-90 pointer-events-none flex items-center justify-center">
           <img
            src={"https://d2xsxph8kpxj0f.cloudfront.net/310519663267931784/KHL22GhjgeeQPRRyxwJ5K4/iceberg-abstract_5bc48d27.png"}
            alt="Abstract Iceberg"
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Surface Content */}
        <div className="surface-text relative z-20 text-center max-w-4xl px-4 mt-[-10vh]">
          <h2 className="font-heading text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl">Act II: The Iceberg</h2>
          <p className="text-2xl md:text-3xl text-white/90 font-light drop-shadow-lg">
            What you see is just the tip. The "shiny object" of AI tools is supported by a massive, invisible structure of human expertise.
          </p>
        </div>

        {/* Depth Markers — animated with genie magnification on scroll */}
        <div className="absolute right-8 md:right-16 top-0 bottom-0 flex flex-col justify-center gap-[20vh] text-right z-20 pointer-events-none">
          <div className="depth-marker font-mono text-xl md:text-3xl font-bold text-white opacity-40 origin-right">
            <span className="tabular-nums">0m</span> — Surface
          </div>
          <div className="depth-marker font-mono text-xl md:text-3xl font-bold text-white opacity-40 origin-right">
            <span className="tabular-nums">-100m</span> — Twilight Zone
          </div>
          <div className="depth-marker font-mono text-xl md:text-3xl font-bold text-white opacity-40 origin-right">
            <span className="tabular-nums">-1000m</span> — Midnight Zone
          </div>
          <div className="depth-marker font-mono text-xl md:text-3xl font-bold text-white opacity-40 origin-right">
            <span className="tabular-nums">-4000m</span> — The Abyss
          </div>
        </div>

        {/* Foundation Content (Revealed at bottom) */}
        <div className="absolute bottom-20 w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-3 gap-8 z-20">
          {[
            { title: "Digital Dignity", desc: "The ethical bedrock. Respecting human agency in every automated decision." },
            { title: "Adversarial Collaboration", desc: "The methodology. Using AI to challenge, not just confirm, our thinking." },
            { title: "System Loyalty", desc: "The technical guarantee. Ensuring the agent serves the user, not the platform." },
          ].map((item) => (
            <div key={item.title} className="foundation-text bg-black/70 backdrop-blur-xl border border-cyan-500/30 p-10 rounded-2xl shadow-2xl">
              <h3 className="font-heading text-3xl font-bold mb-4 text-cyan-300">{item.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
