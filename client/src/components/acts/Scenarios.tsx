import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Shield, Users, Scale, Lightbulb } from "lucide-react";
import CarouselDots from "@/components/CarouselDots";

export default function Scenarios() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const scenarios = [
    {
      id: 1,
      icon: <Scale className="w-10 h-10 text-cyan-400" />,
      title: "The Civil Right",
      question: "What if AI loyalty becomes the new civil right?",
      desc: "Imagine a future where access to a loyal AI agent — one that serves your interests, not the platform's — is recognised as a fundamental right.",
      implication: "This would force a complete restructuring of the data economy. 'Free' services paid for by surveillance would become illegal or obsolete.",
      color: "from-cyan-900/40 to-blue-900/40"
    },
    {
      id: 2,
      icon: <Shield className="w-10 h-10 text-purple-400" />,
      title: "The Value Flip",
      question: "What if the most valuable companies of 2030 are those that refused to exploit users in 2025?",
      desc: "Companies built on trust outlast those built on extraction. What if the race to monetise user data is destroying the very value it promises to create?",
      implication: "Investors would shift capital from 'growth at all costs' to 'trust at all costs'. Churn would become the primary metric of failure.",
      color: "from-purple-900/40 to-pink-900/40"
    },
    {
      id: 3,
      icon: <Brain className="w-10 h-10 text-emerald-400" />,
      title: "The Judgment Premium",
      question: "What if human judgment becomes more valuable as AI becomes more capable?",
      desc: "As AI absorbs routine cognitive work, human judgment in ambiguous situations becomes scarcer — and therefore more valuable, not less.",
      implication: "Education would shift from memorization to decision-making. The 'liberal arts' would become the new 'computer science'.",
      color: "from-emerald-900/40 to-teal-900/40"
    },
    {
      id: 4,
      icon: <Users className="w-10 h-10 text-amber-400" />,
      title: "Purpose Over Jobs",
      question: "What if the future of work is not about jobs but about purpose?",
      desc: "If AI absorbs administrative work, humans are freed for what is meaningful — work that requires empathy, creativity, and wisdom.",
      implication: "We would measure economic health not by 'unemployment rate' but by 'fulfillment rate'. Work would become a vehicle for self-actualization.",
      color: "from-amber-900/40 to-orange-900/40"
    },
    {
      id: 5,
      icon: <Lightbulb className="w-10 h-10 text-rose-400" />,
      title: "Adversarial Growth",
      question: "What if adversarial collaboration with AI makes us better thinkers?",
      desc: "If AI challenges our assumptions and sharpens our reasoning, its greatest contribution may not be replacing human thinking — but improving it.",
      implication: "We would stop fearing AI 'hallucinations' and start treating them as 'creative sparks'. The goal would be friction, not smoothness.",
      color: "from-rose-900/40 to-red-900/40"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".scenario-card");
      // Horizontal scroll animation for cards
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => "+=" + (cardsRef.current?.offsetWidth || 0),
        }
      });

      // Parallax background animation (moves slower than foreground)
      gsap.to(bgRef.current, {
        xPercent: -20, // Subtle movement
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => "+=" + (cardsRef.current?.offsetWidth || 0),
          scrub: true,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="section-scenarios" ref={containerRef} className="relative h-screen bg-black overflow-hidden flex flex-col justify-center">
      {mounted && (
        <CarouselDots count={scenarios.length} triggerEl={containerRef.current} />
      )}
      {/* Immersive Parallax Background */}
      <div ref={bgRef} className="absolute inset-0 w-[150vw] h-full opacity-30 pointer-events-none">
         <img 
            src={"https://d2xsxph8kpxj0f.cloudfront.net/310519663267931784/KHL22GhjgeeQPRRyxwJ5K4/agentic-network_b3580a7d.jpg"}
            alt=""
            role="presentation"
            loading="lazy"
            className="w-full h-full object-cover mix-blend-screen"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>
      
      <div className="container px-4 mb-8 text-center relative z-10">
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-white">
          Thought Experiments
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Scroll to explore the ethical paradoxes of the agentic age.
        </p>
      </div>

      <div ref={cardsRef} style={{ width: `${scenarios.length * 100}vw` }} className="flex h-[70vh] items-center px-4 md:px-20 gap-12">
        {scenarios.map((scenario, index) => (
          <div 
            key={scenario.id} 
            className={`scenario-card w-[85vw] md:w-[45vw] h-full max-h-[600px] bg-gradient-to-br ${scenario.color} border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col relative backdrop-blur-xl shadow-2xl overflow-hidden`}
          >
            {/* Card Number Background */}
            <div className="absolute -top-4 -right-4 opacity-10">
              <span className="text-[12rem] font-bold text-white leading-none">0{index + 1}</span>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm shrink-0">
                  {scenario.icon}
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight">
                  {scenario.title}
                </h3>
              </div>
              
              <div className="flex-grow flex flex-col justify-center">
                <p className="text-xl md:text-2xl text-white font-medium mb-6 leading-snug">
                  "{scenario.question}"
                </p>
                
                <p className="text-base md:text-lg text-white/70 mb-6 leading-relaxed">
                  {scenario.desc}
                </p>
              </div>
              
              <div className="mt-auto bg-black/30 p-4 rounded-xl border-l-4 border-cyan-500/50">
                <span className="text-cyan-400 font-bold block mb-1 text-xs uppercase tracking-wider">Implication</span>
                <p className="text-sm md:text-base text-white/90 italic">
                  {scenario.implication}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
