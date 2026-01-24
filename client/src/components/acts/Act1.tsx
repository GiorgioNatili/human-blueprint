import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";

export default function Act1() {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the split section
      ScrollTrigger.create({
        trigger: splitRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
        id: "act1-pin",
      });

      // Animate the "Fear" side out and "Reality" side in
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
        },
      });

      tl.to(".fear-content", { opacity: 0, x: -50, duration: 1 })
        .to(".reality-content", { opacity: 1, x: 0, duration: 1 }, "-=0.5")
        .to(".gap-image", { scale: 1.2, opacity: 0.5, duration: 2 }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 bg-background">
      <Section className="text-center">
        <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8 reveal-text">
          Act I: The Intuition Gap
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto reveal-text">
          We face a prevailing narrative that "AI will replace us." But this fear overlooks the fundamental difference between processing power and human intuition.
        </p>
      </Section>

      <div ref={splitRef} className="h-screen w-full flex relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/intuition-gap.jpg" 
            alt="Intuition Gap" 
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
