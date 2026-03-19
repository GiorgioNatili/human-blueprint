import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";
import { Hammer, Hand, Cpu, Bot } from "lucide-react";

export default function Act0() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 1,
        },
      });

      // Step 1: The Hand
      tl.fromTo(".step-1", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
        .to(".step-1", { opacity: 0, scale: 1.2, duration: 1, delay: 1 })
        
      // Step 2: The Hammer
        .fromTo(".step-2", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
        .to(".step-2", { opacity: 0, scale: 1.2, duration: 1, delay: 1 })

      // Step 3: The Algorithm
        .fromTo(".step-3", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
        .to(".step-3", { opacity: 0, scale: 1.2, duration: 1, delay: 1 })

      // Step 4: The Agent
        .fromTo(".step-4", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    { id: "step-1", Icon: Hand, color: "text-amber-200", title: "The Hand", desc: "Direct manipulation. The era of craft." },
    { id: "step-2", Icon: Hammer, color: "text-slate-300", title: "The Hammer", desc: "Leverage. The era of industry." },
    { id: "step-3", Icon: Cpu, color: "text-cyan-400", title: "The Algorithm", desc: "Automation. The era of information." },
    { id: "step-4", Icon: Bot, color: "text-purple-400", title: "The Agent", desc: "Autonomy. The era of collaboration." },
  ];

  return (
    <div id="section-act0" ref={containerRef} className="relative z-10 bg-black">
      <Section className="text-center py-20">
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 text-muted-foreground">
          Prologue: The Evolution of Tools
        </h2>
      </Section>

      <div ref={timelineRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`${step.id} absolute flex flex-col items-center justify-center text-center opacity-0`}
          >
            <div className="mb-8 p-8 bg-white/5 rounded-full border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <step.Icon className={`w-32 h-32 ${step.color}`} aria-hidden="true" />
            </div>
            <h3 className="font-heading text-6xl font-bold mb-4 text-white">{step.title}</h3>
            <p className="text-2xl text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
