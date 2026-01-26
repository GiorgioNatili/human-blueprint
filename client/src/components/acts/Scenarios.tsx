import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Shield, Users, Scale, Lightbulb } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Scenarios() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const scenarios = [
    {
      id: 1,
      icon: <Scale className="w-12 h-12 text-cyan-400" />,
      title: "The Civil Right",
      question: "What if AI loyalty becomes the new civil right?",
      desc: "Imagine a future where having access to a loyal AI agent—one that serves your interests rather than exploiting you—is recognized as a fundamental right, like access to legal counsel.",
      implication: "This would force a complete restructuring of the data economy. 'Free' services paid for by surveillance would become illegal or obsolete.",
      color: "from-cyan-500/20 to-blue-600/20"
    },
    {
      id: 2,
      icon: <Shield className="w-12 h-12 text-purple-400" />,
      title: "The Value Flip",
      question: "What if the most valuable companies of 2030 are those that refused to exploit users in 2025?",
      desc: "History shows that companies built on trust outlast those built on extraction. What if the current race to monetize user data is actually destroying long-term value?",
      implication: "Investors would shift capital from 'growth at all costs' to 'trust at all costs'. Churn would become the primary metric of failure.",
      color: "from-purple-500/20 to-pink-600/20"
    },
    {
      id: 3,
      icon: <Brain className="w-12 h-12 text-emerald-400" />,
      title: "The Judgment Premium",
      question: "What if human judgment becomes more valuable as AI becomes more capable?",
      desc: "Paradoxically, as AI handles more routine cognitive tasks, human judgment in ambiguous situations becomes more valuable, not less.",
      implication: "Education would shift from memorization to decision-making. The 'liberal arts' would become the new 'computer science'.",
      color: "from-emerald-500/20 to-teal-600/20"
    },
    {
      id: 4,
      icon: <Users className="w-12 h-12 text-amber-400" />,
      title: "Purpose Over Jobs",
      question: "What if the future of work is not about jobs but about purpose?",
      desc: "If AI handles administrative tasks, humans are freed to focus on work that is meaningful—that requires empathy, creativity, and wisdom.",
      implication: "We would measure economic health not by 'unemployment rate' but by 'fulfillment rate'. Work would become a vehicle for self-actualization.",
      color: "from-amber-500/20 to-orange-600/20"
    },
    {
      id: 5,
      icon: <Lightbulb className="w-12 h-12 text-rose-400" />,
      title: "Adversarial Growth",
      question: "What if adversarial collaboration with AI makes us better thinkers?",
      desc: "If AI challenges our assumptions and sharpens our judgment, we become better decision-makers. What if AI's greatest contribution is not replacing human thinking but improving it?",
      implication: "We would stop fearing AI 'hallucinations' and start treating them as 'creative sparks'. The goal would be friction, not smoothness.",
      color: "from-rose-500/20 to-red-600/20"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".scenario-card");
      
      // Horizontal scroll animation
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen bg-black/80 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 bg-[url('/images/texture-noise.jpg')] opacity-10 mix-blend-overlay pointer-events-none" />
      
      <div className="container px-4 mb-12 text-center relative z-10">
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-white">
          Thought Experiments
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Scroll to explore the ethical paradoxes of the agentic age.
        </p>
      </div>

      <div ref={cardsRef} className="flex w-[500vw] h-[60vh] items-center px-4 md:px-20 gap-20">
        {scenarios.map((scenario, index) => (
          <div 
            key={scenario.id} 
            className={`scenario-card w-[80vw] md:w-[60vw] h-full bg-gradient-to-br ${scenario.color} border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col justify-center relative backdrop-blur-md`}
          >
            <div className="absolute top-8 left-8 opacity-50">
              <span className="text-9xl font-bold text-white/5">0{index + 1}</span>
            </div>
            
            <div className="relative z-10">
              <div className="mb-8 p-4 bg-white/5 rounded-full w-fit backdrop-blur-sm border border-white/10">
                {scenario.icon}
              </div>
              
              <h3 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                {scenario.title}
              </h3>
              
              <p className="text-2xl md:text-3xl text-white/90 font-light mb-8 leading-relaxed">
                "{scenario.question}"
              </p>
              
              <div className="h-px w-24 bg-white/30 mb-8" />
              
              <div className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed">
                <p>{scenario.desc}</p>
                <div className="bg-black/20 p-4 rounded-lg border-l-2 border-white/30">
                  <span className="text-white font-bold block mb-1 text-sm uppercase opacity-70">Implication</span>
                  <p>{scenario.implication}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
