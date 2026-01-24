import { useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";

export default function Scenarios() {
  const [activeScenario, setActiveScenario] = useState<number | null>(null);

  const scenarios = [
    {
      id: 1,
      title: "The Civil Right",
      question: "What if AI loyalty becomes the new civil right?",
      desc: "Imagine a future where having access to a loyal AI agent—one that serves your interests rather than exploiting you—is recognized as a fundamental right, like access to legal counsel.",
      implication: "This would force a complete restructuring of the data economy. 'Free' services paid for by surveillance would become illegal or obsolete."
    },
    {
      id: 2,
      title: "The Value Flip",
      question: "What if the most valuable companies of 2030 are those that refused to exploit users in 2025?",
      desc: "History shows that companies built on trust outlast those built on extraction. What if the current race to monetize user data is actually destroying long-term value?",
      implication: "Investors would shift capital from 'growth at all costs' to 'trust at all costs'. Churn would become the primary metric of failure."
    },
    {
      id: 3,
      title: "The Judgment Premium",
      question: "What if human judgment becomes more valuable as AI becomes more capable?",
      desc: "Paradoxically, as AI handles more routine cognitive tasks, human judgment in ambiguous situations becomes more valuable, not less.",
      implication: "Education would shift from memorization to decision-making. The 'liberal arts' would become the new 'computer science'."
    },
    {
      id: 4,
      title: "Purpose Over Jobs",
      question: "What if the future of work is not about jobs but about purpose?",
      desc: "If AI handles administrative tasks, humans are freed to focus on work that is meaningful—that requires empathy, creativity, and wisdom.",
      implication: "We would measure economic health not by 'unemployment rate' but by 'fulfillment rate'. Work would become a vehicle for self-actualization."
    },
    {
      id: 5,
      title: "Adversarial Growth",
      question: "What if adversarial collaboration with AI makes us better thinkers?",
      desc: "If AI challenges our assumptions and sharpens our judgment, we become better decision-makers. What if AI's greatest contribution is not replacing human thinking but improving it?",
      implication: "We would stop fearing AI 'hallucinations' and start treating them as 'creative sparks'. The goal would be friction, not smoothness."
    }
  ];

  return (
    <div className="relative z-10 bg-black py-32">
      <Section>
        <div className="container px-4">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 text-center text-white">
            Thought Experiments
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-20">
            Challenge your assumptions about the future. Click to explore.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.id}
                layoutId={`card-${scenario.id}`}
                onClick={() => setActiveScenario(scenario.id)}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 cursor-pointer hover:bg-white/10 hover:border-cyan-500/50 transition-colors group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-20 font-heading text-6xl font-bold text-white group-hover:opacity-40 transition-opacity">
                  {index + 1}
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4 relative z-10">
                  {scenario.title}
                </h3>
                <p className="text-muted-foreground relative z-10">
                  {scenario.question}
                </p>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {activeScenario !== null && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setActiveScenario(null)}>
                <motion.div
                  layoutId={`card-${activeScenario}`}
                  className="bg-zinc-900 border border-white/20 rounded-3xl p-8 md:p-12 max-w-2xl w-full relative overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    onClick={() => setActiveScenario(null)}
                    className="absolute top-6 right-6 text-white/50 hover:text-white"
                  >
                    ✕
                  </button>
                  
                  <div className="relative z-10">
                    <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 block">
                      Scenario 0{activeScenario}
                    </span>
                    <h3 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8">
                      {scenarios[activeScenario - 1].question}
                    </h3>
                    
                    <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
                      <p>{scenarios[activeScenario - 1].desc}</p>
                      
                      <div className="bg-white/5 p-6 rounded-xl border-l-2 border-cyan-500">
                        <span className="text-cyan-400 font-bold block mb-2 text-sm uppercase">Implication</span>
                        <p>{scenarios[activeScenario - 1].implication}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </Section>
    </div>
  );
}
