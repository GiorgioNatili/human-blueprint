import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { ArrowDown, Brain, Handshake, Shield, Zap } from "lucide-react";

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

      // Text Reveal Animation
      gsap.utils.toArray(".reveal-text").forEach((element: any) => {
        gsap.fromTo(
          element,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Iceberg Parallax
      gsap.to(".iceberg-img", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".iceberg-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Cards Stagger
      gsap.from(".pillar-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pillars-grid",
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-background text-foreground overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Digital Landscape"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        </div>

        <div className="relative z-10 container text-center px-4">
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-purple-200 reveal-text">
            The Human Blueprint
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 reveal-text delay-200">
            Reclaiming Digital Dignity in the Age of Agentic AI
          </p>
          <div className="reveal-text delay-400">
            <ArrowDown className="w-8 h-8 mx-auto animate-bounce text-primary" />
          </div>
        </div>
      </section>

      {/* Act 1: The Problem Space */}
      <section className="py-24 relative">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-text">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-primary">
                The Intuition Gap
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We face a prevailing narrative that "AI will replace us." But this fear overlooks the fundamental difference between processing power and human intuition.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The future of work isn't about protecting jobs—it's about reshaping skills to fill the gap that AI cannot cross.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl reveal-text delay-200">
              <img
                src="/images/digital-dignity.jpg"
                alt="Human Touch"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Act 2: The Iceberg (Parallax) */}
      <section className="iceberg-section py-32 relative overflow-hidden bg-gradient-to-b from-background via-indigo-950/20 to-background">
        <div className="container px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal-text">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              The Iceberg's Foundation
            </h2>
            <p className="text-xl text-muted-foreground">
              What you see is just the tip. Below the surface lies the deep technical knowledge, research, and philosophical grounding necessary to speak with authority.
            </p>
          </div>
          
          <div className="relative h-[600px] w-full flex items-center justify-center">
            <div className="iceberg-img absolute w-[800px] h-[800px] opacity-80 mix-blend-screen">
              <img
                src="/images/iceberg-abstract.png"
                alt="Abstract Iceberg"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
              {[
                { title: "Digital Dignity", desc: "The ethical foundation" },
                { title: "Adversarial Collaboration", desc: "The methodology" },
                { title: "System Loyalty", desc: "The technical implementation" },
              ].map((item, i) => (
                <div key={i} className="bg-card/30 backdrop-blur-md border border-white/10 p-8 rounded-xl text-center hover:bg-card/50 transition-colors duration-300 reveal-text">
                  <h3 className="font-heading text-2xl font-bold mb-2 text-cyan-300">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Act 3: The 4-Pillar Framework */}
      <section className="py-32 relative">
        <div className="container px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16 text-center reveal-text">
            The 4-Pillar Framework
          </h2>
          
          <div className="pillars-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Brain className="w-10 h-10 text-cyan-400" />,
                title: "Intellectual",
                desc: "Judgment in ambiguity. AI handles data; humans handle context.",
              },
              {
                icon: <Handshake className="w-10 h-10 text-purple-400" />,
                title: "Social",
                desc: "Emotional connection. AI handles routine; humans build trust.",
              },
              {
                icon: <Shield className="w-10 h-10 text-emerald-400" />,
                title: "Ethical",
                desc: "Moral reasoning. AI follows rules; humans navigate dilemmas.",
              },
              {
                icon: <Zap className="w-10 h-10 text-amber-400" />,
                title: "Operational",
                desc: "Strategic coordination. AI optimizes; humans lead.",
              },
            ].map((pillar, i) => (
              <div key={i} className="pillar-card bg-card border border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300 group">
                <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Act 4: Agentic AI & Loyalty */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/agentic-network.jpg"
            alt="Agentic Network"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="container px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 reveal-text">
              <img
                src="/images/collaboration.jpg"
                alt="Collaboration"
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
            <div className="order-1 md:order-2 reveal-text">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
                System Loyalty
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                "What if loyalty isn't just the right thing to do—it's the most profitable strategy?"
              </p>
              <ul className="space-y-4">
                {[
                  "Governance: Clear rules on who the agent serves",
                  "Data Stewardship: Protecting user data",
                  "Secure Tooling: Preventing compromise",
                  "Transparency: Visible decision-making",
                  "Accountability: User recourse mechanisms",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black/20">
        <div className="container px-4 text-center">
          <p className="font-heading text-2xl font-bold mb-4 text-primary">Manus AI</p>
          <p className="text-muted-foreground">
            © 2026 The Human Blueprint. Private Speaker Edition.
          </p>
        </div>
      </footer>
    </div>
  );
}
