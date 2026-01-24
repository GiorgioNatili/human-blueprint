import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ChevronDown, ChevronUp } from "lucide-react";

export default function NeuralQA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const qa = [
    {
      q: "Isn't System Loyalty unrealistic given current business incentives?",
      short: "It's challenging but increasingly viable as trust becomes a competitive advantage.",
      long: "You're right that current business incentives often favor extraction. However, user trust is eroding, regulation is coming, and talent wants purpose. Companies that build for loyalty now will be ahead of the curve. Long-term value beats short-term extraction."
    },
    {
      q: "How do you prevent users from using loyal AI agents for harmful purposes?",
      short: "Loyal agents have ethical constraints, similar to human fiduciaries.",
      long: "We use 'layered loyalty'. Layer 1 is loyalty to the user. Layer 2 is ethical constraints (refusing harm). Layer 3 is societal obligations (laws). Like a lawyer, an agent serves you zealously but cannot assist in crimes."
    },
    {
      q: "Will this increase the digital divide?",
      short: "It's a risk, but also an opportunity for democratization.",
      long: "If only the wealthy have loyal agents, inequality will skyrocket. That's why we frame AI loyalty as a 'civil right'. We must push for public access to non-extractive AI infrastructure."
    },
    {
      q: "Can an AI truly have 'dignity'?",
      short: "Digital Dignity is about the human, not the machine.",
      long: "We aren't arguing for robot rights. 'Digital Dignity' means respecting the human user's agency, privacy, and intent. It's about how the system treats YOU, not how you treat the system."
    }
  ];

  return (
    <div className="relative z-10 bg-background py-32 border-t border-white/5">
      <Section>
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-950/30 text-cyan-400 mb-6 border border-cyan-500/20">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Neural Query
            </h2>
            <p className="text-muted-foreground">
              Anticipating the friction points.
            </p>
          </div>

          <div className="space-y-4">
            {qa.map((item, index) => (
              <div 
                key={index}
                className="bg-card/30 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-heading text-lg md:text-xl font-bold text-white pr-8">
                    {item.q}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="p-4 bg-cyan-950/20 rounded-lg border border-cyan-500/10 mb-4">
                          <span className="text-cyan-400 font-bold text-sm uppercase block mb-1">Short Answer</span>
                          <p className="text-white/90">{item.short}</p>
                        </div>
                        <div className="pl-4 border-l-2 border-white/10">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.long}
                          </p>
                        </div>
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
