import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";

export default function Act1() {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<HTMLDivElement>(null);
  const dignityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Provocative opener fade-in
      gsap.fromTo(".act1-opener", 
        { opacity: 0.2, y: 20 },
        {
          opacity: 1, y: 0, duration: 1.2,
          scrollTrigger: {
            trigger: ".act1-opener",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          }
        }
      );

      // Digital Dignity dimensions staggered reveal
      gsap.fromTo(".dignity-dimension",
        { opacity: 0, x: -24 },
        {
          opacity: 1, x: 0,
          stagger: 0.15,
          duration: 0.6,
          scrollTrigger: {
            trigger: dignityRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          }
        }
      );

      gsap.fromTo(".dignity-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: {
            trigger: dignityRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Pin and animate the split section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: true,
          id: "act1-pin",
        },
      });

      tl.to(".fear-content", { opacity: 0, x: -50, duration: 1 })
        .to(".reality-content", { opacity: 1, x: 0, duration: 1 }, "-=0.5")
        .to(".gap-image", { scale: 1.2, opacity: 0.5, duration: 2 }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const dimensions = [
    { number: "01", label: "Autonomy", desc: "The right to make meaningful choices that AI cannot override" },
    { number: "02", label: "Privacy", desc: "Control over personal data and how it is used" },
    { number: "03", label: "Representation", desc: "Fair and accurate portrayal in AI-generated outputs" },
    { number: "04", label: "Equity", desc: "Equal access to AI benefits regardless of background" },
    { number: "05", label: "Accountability", desc: "The right to understand and challenge AI decisions" },
  ];

  return (
    <div id="section-act1" ref={containerRef} className="relative z-10 bg-background">
      <Section className="text-center">
        {/* Provocative Opening Question */}
        <p className="act1-opener text-lg md:text-xl text-cyan-400/70 font-mono mb-8 max-w-3xl mx-auto italic">
          "What if the real threat isn't that AI takes your job — but that it takes your reason for working?"
        </p>
        <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8 reveal-text">
          Act I: The Intuition Gap
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto reveal-text">
          We face a prevailing narrative that "AI will replace us." But this fear overlooks the fundamental difference between processing power and human intuition.
        </p>
      </Section>

      {/* Digital Dignity Definition Block */}
      <div ref={dignityRef} className="container px-4 max-w-4xl mx-auto pb-24">
        <div className="dignity-card border border-cyan-500/30 rounded-2xl bg-slate-900/80 backdrop-blur-sm p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 border-b border-cyan-500/20 pb-6">
            <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-2">Definition</p>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
              Digital Dignity
            </h3>
            <p className="text-sm font-mono text-muted-foreground/60 mb-4">
              /ˈdɪdʒɪtl ˈdɪɡnɪti/ <span className="text-cyan-400/50">noun</span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The preservation of human agency, autonomy, purpose, and self-worth
              in systems designed with artificial intelligence.
            </p>
          </div>

          {/* Five Dimensions */}
          <div>
            <p className="text-xs font-mono text-cyan-400/60 tracking-[0.2em] uppercase mb-6">
              Five Dimensions
            </p>
            <div className="space-y-4">
              {dimensions.map((d) => (
                <div key={d.number} className="dignity-dimension flex items-start gap-4 group">
                  <span className="text-xs font-mono text-cyan-400/40 mt-1 w-6 shrink-0">{d.number}</span>
                  <div className="flex-1 flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
                    <span className="font-heading text-lg font-semibold text-cyan-300 shrink-0">
                      {d.label}
                    </span>
                    <span className="text-muted-foreground text-sm md:text-base">— {d.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Quote */}
          <div className="mt-8 pt-6 border-t border-cyan-500/20">
            <p className="text-sm text-muted-foreground/60 italic text-center">
              "Digital Dignity is not a feature to be added. It is the foundation upon which trustworthy AI must be built."
            </p>
          </div>
        </div>
      </div>

      {/* Fear vs Reality Split Screen */}
      <div ref={splitRef} className="h-screen w-full flex relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={"https://d2xsxph8kpxj0f.cloudfront.net/310519663267931784/KHL22GhjgeeQPRRyxwJ5K4/intuition-gap_a6f4dbad.jpg"}
            alt=""
            role="presentation"
            loading="lazy"
            className="gap-image w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>

        {/* Left Side: The Fear */}
        <div className="fear-content w-1/2 h-full flex flex-col justify-center p-12 z-10 border-r border-white/10 bg-background/80 backdrop-blur-sm">
          <h3 className="font-heading text-4xl font-bold text-destructive mb-6">The Fear</h3>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            "AI is coming for my job."
          </p>
          <p className="text-lg mt-4 text-muted-foreground">
            The anxiety that algorithms will render human effort obsolete. A world where efficiency trumps humanity.
          </p>
        </div>

        {/* Right Side: The Reality */}
        <div className="reality-content w-1/2 h-full flex flex-col justify-center p-12 z-10 opacity-0 translate-x-10 bg-background/80 backdrop-blur-sm">
          <h3 className="font-heading text-4xl font-bold text-primary mb-6">The Reality</h3>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            "AI scales logic. Humans scale meaning."
          </p>
          <p className="text-lg mt-4 text-muted-foreground">
            The gap isn't about speed. It's about judgment in ambiguity. AI processes the past; you navigate the future.
          </p>
        </div>
      </div>
    </div>
  );
}
