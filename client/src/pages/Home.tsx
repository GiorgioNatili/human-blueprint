import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { ArrowDown } from "lucide-react";

import Scene from "@/components/canvas/Scene";
import ParticleWorld from "@/components/canvas/ParticleWorld";

import Act0 from "@/components/acts/Act0";
import Act1 from "@/components/acts/Act1";
import Act2 from "@/components/acts/Act2";
import CognitiveImpact from "@/components/acts/CognitiveImpact"; // New
import Act3 from "@/components/acts/Act3";
import DeepPillars from "@/components/acts/DeepPillars";
import Act4 from "@/components/acts/Act4";
import ParadoxExplorer from "@/components/acts/ParadoxExplorer"; // New
import Scenarios from "@/components/acts/Scenarios";
import Act5 from "@/components/acts/Act5";
import NeuralQA from "@/components/acts/NeuralQA";
import ResearchDeepDive from "@/components/acts/ResearchDeepDive";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      // Hero Parallax
      gsap.to(".hero-bg", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Initial Text Reveal
      gsap.utils.toArray(".reveal-text").forEach((element: any) => {
        gsap.fromTo(
          element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-background text-foreground overflow-hidden font-sans selection:bg-cyan-500/30">
      {/* Persistent 3D Background */}
      <Scene>
        <ParticleWorld />
      </Scene>

      {/* Hero Section */}
      <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="hero-bg absolute inset-0 z-0">
          {/* Fallback image for mobile or low-power mode */}
          <img
            src="/images/hero-bg.jpg"
            alt="Digital Landscape"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        </div>

        <div className="relative z-10 container text-center px-4">
          <h1 className="font-heading text-6xl md:text-9xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-purple-200 reveal-text">
            The Human Blueprint
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto mb-12 reveal-text delay-200 font-light">
            Reclaiming Digital Dignity in the Age of Agentic AI
          </p>
          <div className="reveal-text delay-400">
            <ArrowDown className="w-8 h-8 mx-auto animate-bounce text-primary" />
          </div>
        </div>
      </section>

      {/* Modular Acts */}
      <Act0 />
      <Act1 />
      <Act2 />
      <CognitiveImpact /> {/* New Module */}
      <Act3 />
      <DeepPillars />
      <Act4 />
      <ParadoxExplorer /> {/* New Module */}
      <Scenarios />
      <Act5 />
      <NeuralQA />
      <ResearchDeepDive />

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black relative z-10">
        <div className="container px-4 text-center">
          <p className="font-heading text-2xl font-bold mb-4 text-primary">Manus AI</p>
          <p className="text-muted-foreground">
            © 2026 The Human Blueprint. Research Foundation Edition.
          </p>
        </div>
      </footer>
    </div>
  );
}
