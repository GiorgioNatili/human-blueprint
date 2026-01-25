import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Brain, Cpu, Activity, Zap } from "lucide-react";

export default function CognitiveImpact() {
  const [activeMode, setActiveMode] = useState<"automation" | "augmentation">("automation");

  return (
    <div className="relative z-10 bg-background py-32 border-t border-white/5">
      <Section>
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Cognitive Impact Analysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Research shows two distinct pathways for AI integration. One leads to atrophy, the other to mastery.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white/5 p-1 rounded-full flex gap-2 border border-white/10">
              <button
                onClick={() => setActiveMode("automation")}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeMode === "automation" 
                    ? "bg-destructive text-white shadow-lg" 
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                Pathway A: Automation
              </button>
              <button
                onClick={() => setActiveMode("augmentation")}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeMode === "augmentation" 
                    ? "bg-emerald-600 text-white shadow-lg" 
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                Pathway B: Augmentation
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visualization */}
            <div className="relative h-[400px] bg-black/40 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-white/[0.02]" />
              
              {activeMode === "automation" ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-center"
                >
                  <div className="relative w-48 h-48 mx-auto mb-8">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} 
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-destructive/20 rounded-full blur-xl"
                    />
                    <Cpu className="w-full h-full text-destructive p-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-destructive mb-2">Cognitive Offloading</h3>
                  <p className="text-muted-foreground">Neural pathways weaken due to disuse.</p>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-center"
                >
                  <div className="relative w-48 h-48 mx-auto mb-8">
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-dashed border-emerald-500/30 rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center gap-4">
                      <Brain className="w-16 h-16 text-emerald-400" />
                      <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
                      <Cpu className="w-16 h-16 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-2">Cognitive Extension</h3>
                  <p className="text-muted-foreground">Neural pathways strengthen through challenge.</p>
                </motion.div>
              )}
            </div>

            {/* Data Points */}
            <div className="space-y-6">
              {activeMode === "automation" ? (
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                  <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-xl mb-4">
                    <h4 className="font-bold text-destructive mb-2 flex items-center gap-2">
                      <Activity className="w-5 h-5" /> The "Google Effect"
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Research indicates that when information is easily accessible via external tools, the brain reduces resource allocation for memory retention.
                    </p>
                  </div>
                  <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-xl">
                    <h4 className="font-bold text-destructive mb-2 flex items-center gap-2">
                      <Activity className="w-5 h-5" /> Skill Atrophy
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      "Use it or lose it" applies to cognitive functions. Over-reliance on AI for decision-making degrades critical thinking skills over time.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                  <div className="bg-emerald-950/30 border border-emerald-500/20 p-6 rounded-xl mb-4">
                    <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2">
                      <Activity className="w-5 h-5" /> Adversarial Growth
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      When AI is used to *challenge* rather than *replace* human thought, it triggers deeper cognitive processing and "desirable difficulty."
                    </p>
                  </div>
                  <div className="bg-emerald-950/30 border border-emerald-500/20 p-6 rounded-xl">
                    <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2">
                      <Activity className="w-5 h-5" /> Extended Mind Thesis
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Properly integrated tools become part of the cognitive system, expanding the "search space" of possible solutions without replacing the solver.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
