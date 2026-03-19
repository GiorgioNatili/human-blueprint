import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Three questions drawn directly from the Private Speaker Edition
// Ordered to build: fear → reframe → invitation
export const QUESTIONS = [
  {
    id: "q1",
    number: "01",
    text: "What if the narrative that 'AI will replace us' is not just wrong — but dangerously incomplete?",
    sub: "The replacement story is the wrong question.",
    color: "text-cyan-400",
  },
  {
    id: "q2",
    number: "02",
    text: "What if the death of certain tasks is actually the rebirth of the human spirit?",
    sub: "Every automation wave has created more than it destroyed.",
    color: "text-violet-400",
  },
  {
    id: "q3",
    number: "03",
    text: "What if the most valuable skill in the age of AI is the one thing AI can never have: human intuition?",
    sub: "The Intuition Gap widens as AI advances.",
    color: "text-amber-400",
  },
];

export default function ProvocativeQuestions() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Each question block fades + rises in as it enters the viewport
      gsap.utils.toArray<HTMLElement>(".pq-block").forEach((block, i) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 75%",
              end: "top 40%",
              scrub: false,
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Number counters animate in
      gsap.utils.toArray<HTMLElement>(".pq-number").forEach((num) => {
        gsap.fromTo(
          num,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: num,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Divider lines grow in
      gsap.utils.toArray<HTMLElement>(".pq-divider").forEach((div) => {
        gsap.fromTo(
          div,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.6,
            ease: "power2.out",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: div,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="section-provocative"
      ref={containerRef}
      className="relative z-10 bg-black py-32 px-6 md:px-16"
    >
      {/* Subtle top gradient blending from hero */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-24">
        {QUESTIONS.map((q, i) => (
          <div key={q.id} className="pq-block">
            {/* Divider line */}
            {i > 0 && (
              <div className="pq-divider w-16 h-px bg-white/10 mb-12 origin-left" />
            )}

            <div className="flex items-start gap-6 md:gap-10">
              {/* Question number */}
              <span
                className={`pq-number font-mono text-xs tracking-[0.3em] ${q.color} opacity-60 pt-2 shrink-0 select-none`}
              >
                {q.number}
              </span>

              <div>
                {/* The question itself */}
                <p className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                  {q.text}
                </p>

                {/* Subtext */}
                <p className={`font-mono text-sm tracking-wide ${q.color} opacity-70`}>
                  {q.sub}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Bridge line into Act 0 */}
        <div className="pq-block text-center pt-8">
          <div className="pq-divider w-full h-px bg-white/5 mb-12 origin-left" />
          <p className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">
            These are not rhetorical questions. They are the blueprint.
          </p>
        </div>
      </div>

      {/* Bottom gradient blending into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </div>
  );
}
