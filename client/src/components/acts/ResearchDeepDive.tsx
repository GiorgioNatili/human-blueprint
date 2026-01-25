import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";

export default function ResearchDeepDive() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    {
      id: "methodology",
      title: "Research Methodology",
      content: "This framework synthesizes insights from computer science, cognitive neuroscience, organizational psychology, and legal theory. It employs adversarial collaboration as a core methodology for stress-testing human-AI interaction models."
    },
    {
      id: "neuroscience",
      title: "Neuroscientific Basis of Intuition",
      content: "Drawing on research by Kahneman, Klein, and Lieberman, we distinguish between 'System 1' pattern recognition (which AI mimics) and 'embodied intuition' (which relies on biological feedback loops AI lacks). The 'Intuition Gap' is not a mystical concept but a biological reality."
    },
    {
      id: "economics",
      title: "The Economics of Trust",
      content: "Analysis of market dynamics suggests that as intelligence becomes commoditized, trust becomes the scarce asset. 'Loyalty by Design' is not just an ethical choice but a dominant economic strategy for the next decade."
    },
    {
      id: "legal",
      title: "Fiduciary AI Frameworks",
      content: "We propose extending legal concepts of fiduciary duty to software agents. This involves three layers: Duty of Loyalty (user interest first), Duty of Care (competence and safety), and Duty of Confidentiality (data protection)."
    }
  ];

  return (
    <div className="relative z-10 bg-background py-20 border-t border-white/5">
      <Section>
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="w-6 h-6 text-cyan-400" />
            <h2 className="font-heading text-2xl font-bold text-white">
              Research Foundation
            </h2>
          </div>

          <div className="grid gap-4">
            {sections.map((section) => (
              <div 
                key={section.id}
                className="bg-card/20 border border-white/5 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-muted-foreground hover:text-white transition-colors">
                    {section.title}
                  </span>
                  {openSection === section.id ? (
                    <ChevronUp className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
                <AnimatePresence>
                  {openSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-4 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-white/5">
                        {section.content}
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
