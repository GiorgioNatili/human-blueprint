import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, ChevronUp, Link as LinkIcon } from "lucide-react";

export default function ResearchDeepDive() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    {
      id: "methodology",
      title: "Research Methodology",
      content: `This framework synthesizes insights from computer science, cognitive neuroscience, organizational psychology, and legal theory. It employs adversarial collaboration as a core methodology for stress-testing human-AI interaction models.
      
      Key Approaches:
      1. Cross-Disciplinary Synthesis: Integrating technical constraints of LLMs with biological constraints of human cognition.
      2. Adversarial Stress-Testing: Simulating "worst-case" scenarios of AI alignment failure to design robust safeguards.
      3. Historical Pattern Matching: Analyzing previous technological shifts (Industrial Revolution, Internet Age) to predict adoption curves and friction points.`,
      resources: [
        "Kahneman, D. (2011). Thinking, Fast and Slow.",
        "Tetlock, P. E. (2015). Superforecasting: The Art and Science of Prediction."
      ]
    },
    {
      id: "neuroscience",
      title: "Neuroscientific Basis of Intuition",
      content: `Drawing on research by Kahneman, Klein, and Lieberman, we distinguish between 'System 1' pattern recognition (which AI mimics) and 'embodied intuition' (which relies on biological feedback loops AI lacks). The 'Intuition Gap' is not a mystical concept but a biological reality.
      
      The "Somatic Marker Hypothesis" (Damasio) suggests that emotional processes guide behavior, particularly decision-making. AI lacks this somatic feedback loop, meaning it can calculate risk but cannot "feel" consequence. This biological divergence is the fundamental barrier to AI replicating true human judgment in high-stakes, ambiguous environments.`,
      resources: [
        "Damasio, A. R. (1994). Descartes' Error: Emotion, Reason, and the Human Brain.",
        "Klein, G. (1998). Sources of Power: How People Make Decisions."
      ]
    },
    {
      id: "economics",
      title: "The Economics of Trust",
      content: `Analysis of market dynamics suggests that as intelligence becomes commoditized, trust becomes the scarce asset. 'Loyalty by Design' is not just an ethical choice but a dominant economic strategy for the next decade.
      
      In a zero-marginal-cost intelligence economy, the differentiator shifts from "who has the smartest model" to "who has the most aligned model." Users will pay a premium for agents that are contractually obligated to serve their interests, creating a new market for "Fiduciary AI" that competes against ad-supported, surveillance-based models.`,
      resources: [
        "Arrow, K. J. (1974). The Limits of Organization.",
        "Zuboff, S. (2019). The Age of Surveillance Capitalism."
      ]
    },
    {
      id: "legal",
      title: "Fiduciary AI Frameworks",
      content: `We propose extending legal concepts of fiduciary duty to software agents. This involves three layers:
      
      1. Duty of Loyalty: The agent must act solely in the user's interest, avoiding conflicts of interest (e.g., not recommending a product because of a backend kickback).
      2. Duty of Care: The agent must perform its function with a high standard of competence and safety.
      3. Duty of Confidentiality: The agent must protect user data from unauthorized access and exploitation, even from the platform provider itself.`,
      resources: [
        "Balkin, J. M. (2016). Information Fiduciaries and the First Amendment.",
        "Richards, N. M., & Hartzog, W. (2020). A Duty of Loyalty for Privacy Law."
      ]
    }
  ];

  return (
    <div className="relative z-10 bg-background py-20 border-t border-white/5">
      <Section>
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <BookOpen className="w-8 h-8 text-cyan-400" />
              <div>
                <h2 className="font-heading text-3xl font-bold text-white">
                  Research Foundation
                </h2>
                <p className="text-muted-foreground text-sm">
                  Deep dive into the academic and theoretical basis.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {sections.map((section) => (
              <div 
                key={section.id}
                className="bg-card/10 border border-white/5 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors"
              >
                <button
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-heading text-xl font-bold text-white/90">
                    {section.title}
                  </span>
                  {openSection === section.id ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                <AnimatePresence>
                  {openSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-white/5">
                        <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-line mb-6">
                          {section.content}
                        </div>
                        
                        {section.resources && (
                          <div className="bg-black/30 rounded-lg p-4">
                            <h4 className="text-sm font-bold text-cyan-400 mb-3 flex items-center gap-2">
                              <LinkIcon className="w-3 h-3" /> Key References
                            </h4>
                            <ul className="space-y-2">
                              {section.resources.map((res, i) => (
                                <li key={i} className="text-xs text-white/60 font-mono">
                                  {res}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
