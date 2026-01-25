import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Lock, Eye, Users } from "lucide-react";

export default function ParadoxExplorer() {
  const [activeParadox, setActiveParadox] = useState(0);

  const paradoxes = [
    {
      title: "The Agency Paradox",
      icon: <Scale className="w-8 h-8" />,
      statement: "To gain more control over outcomes, we must give up more control over process.",
      resolution: "We resolve this by shifting from 'micro-management' to 'meta-management'—defining the constraints and values rather than the steps."
    },
    {
      title: "The Privacy Paradox",
      icon: <Lock className="w-8 h-8" />,
      statement: "To get personalized service, we must reveal personal data, which makes us vulnerable.",
      resolution: "We resolve this through 'System Loyalty'—legal and technical guarantees that the agent uses data *only* for the user's benefit."
    },
    {
      title: "The Transparency Paradox",
      icon: <Eye className="w-8 h-8" />,
      statement: "As AI systems become more capable (Deep Learning), they become less explainable.",
      resolution: "We resolve this by demanding 'behavioral transparency' (what will it do?) rather than 'mechanistic transparency' (how does it think?)."
    },
    {
      title: "The Efficiency Paradox",
      icon: <Users className="w-8 h-8" />,
      statement: "Hyper-efficiency in social systems often leads to fragility and loss of resilience.",
      resolution: "We resolve this by intentionally designing for 'friction'—moments of human pause and judgment that prevent cascading errors."
    }
  ];

  return (
    <div className="relative z-10 bg-black py-32">
      <Section>
        <div className="container px-4">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16 text-center">
            Navigating the Paradoxes
          </h2>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left: List */}
            <div className="lg:col-span-4 space-y-4">
              {paradoxes.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActiveParadox(i)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                    activeParadox === i
                      ? "bg-white/10 border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                      : "bg-transparent border-white/5 hover:bg-white/5"
                  }`}
                >
                  <div className={`${activeParadox === i ? "text-cyan-400" : "text-muted-foreground"}`}>
                    {p.icon}
                  </div>
                  <span className={`font-bold ${activeParadox === i ? "text-white" : "text-muted-foreground"}`}>
                    {p.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeParadox}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-br from-cyan-950/20 to-purple-950/20 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col justify-center"
                >
                  <div className="mb-8">
                    <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2 block">The Tension</span>
                    <h3 className="font-heading text-2xl md:text-4xl font-bold text-white leading-tight">
                      "{paradoxes[activeParadox].statement}"
                    </h3>
                  </div>
                  
                  <div className="bg-black/40 p-6 rounded-xl border-l-4 border-purple-500">
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2 block">The Resolution</span>
                    <p className="text-lg text-muted-foreground">
                      {paradoxes[activeParadox].resolution}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
