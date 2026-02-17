import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";

export default function Act5() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal text paragraphs one by one
      gsap.utils.toArray<Element>(".future-text").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Parallax for the background
      gsap.to(".future-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".future-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 bg-background">
      <Section className="future-section min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
        <div className="future-bg absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/future-work.jpg`}
            alt="Future of Work"
            loading="lazy"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl px-4">
          <h2 className="font-heading text-5xl md:text-7xl font-bold mb-12 reveal-text bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300">
            Act V: The Future of Work
          </h2>

          <div className="space-y-12 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            <p className="future-text">
              The future isn't about protecting the past. It's about <span className="text-white font-bold">reshaping</span> skills to fill the Intuition Gap.
            </p>
            <p className="future-text">
              We must move from "Job Protection" to "Skill Evolution."
            </p>
            <p className="future-text">
              From "Managing People" to "Orchestrating Intelligence."
            </p>
            <p className="future-text">
              From "Following Process" to "Exercising Judgment."
            </p>
          </div>

          <div className="mt-24 grid md:grid-cols-2 gap-8 text-left">
            <div className="future-text bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">For Leaders</h3>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Audit roles for the Intuition Gap</li>
                <li>Invest in "soft skills" as core competencies</li>
                <li>Redesign workflows for collaboration</li>
              </ul>
            </div>
            <div className="future-text bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="font-heading text-2xl font-bold text-purple-400 mb-4">For Professionals</h3>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Identify your unique human value</li>
                <li>Develop judgment and empathy</li>
                <li>Demand AI systems that serve you</li>
              </ul>
            </div>
          </div>

          <div className="mt-32 future-text">
            <h3 className="font-heading text-4xl font-bold mb-6">The Human Blueprint</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A vision for a future where technology amplifies the best of humanity rather than diminishing it.
            </p>
            <a
              href={`${import.meta.env.BASE_URL}Research_Foundation_The_Human_Blueprint.pdf`}
              download
              className="inline-block mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/25"
            >
              Download the Full Report
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
