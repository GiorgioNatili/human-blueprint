import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ParallaxNav from "@/components/ParallaxNav";
import { Brain, Heart, Scale, Settings, ChevronDown, ArrowRight, Shield, Lock, Cog, Lightbulb, Target, Users } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <ParallaxNav />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden texture-overlay pt-20">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <div className="container relative z-10 text-center py-20">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="text-sm font-medium text-primary">Reclaiming Digital Dignity</span>
            </div>
            
            <h1 className="text-foreground animate-fade-in">
              The Human Blueprint
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              In the age of agentic AI, the narrative that "AI will replace us" is missing the most critical piece: 
              <span className="text-primary font-semibold"> The Human Blueprint</span>.
            </p>
            
            <div className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed pt-4">
              <p>
                This presentation redefines the <strong className="text-foreground">"Mestiere"</strong> (the craft) 
                for the age of agentic agents, exploring how AI systems that don't just suggest but <em>act</em> can 
                be designed to respect human dignity at every step.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore the Blueprint
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>

      {/* Act 1: The Problem Space */}
      <section id="problem" className="py-32 bg-card scroll-mt-20">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Act I</span>
              <h2 className="text-foreground">The Problem Space</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Why the "AI replacement" narrative is fundamentally incomplete and what we're really facing
              </p>
            </div>
            
            {/* Agentic AI Definition */}
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-10 space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <div className="space-y-4 flex-1">
                    <h3 className="text-3xl">What is Agentic AI?</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Unlike traditional AI that merely suggests or predicts, <strong className="text-foreground">agentic AI systems act autonomously</strong>. 
                      They make decisions, use tools, interact with external systems, and execute tasks on behalf of users. 
                      Think of an AI that doesn't just recommend a meeting time but actually schedules it, sends invitations, 
                      and adjusts your calendar—all without human intervention.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 pt-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Target className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Goal-Oriented</p>
                          <p className="text-xs text-muted-foreground">Pursues objectives independently</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Cog className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Tool-Using</p>
                          <p className="text-xs text-muted-foreground">Interacts with external systems</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Lightbulb className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Adaptive</p>
                          <p className="text-xs text-muted-foreground">Learns from context and feedback</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* The Two Paths */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-destructive/30 hover:border-destructive/50 transition-all">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-2xl text-destructive">The Dignity Deficit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When humans perceive AI as superior, they experience a decline in self-worth and agency. 
                    IBM Research identifies this loss of dignity as a <strong>human rights violation</strong> in 
                    some ethical frameworks. The risk is not just unemployment—it's the erosion of human purpose and meaning.
                  </p>
                  <div className="pt-4 space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>Diminished self-worth and confidence</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>Loss of strategic decision-making roles</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                      <span>Erosion of craft and professional identity</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-primary/30 hover:border-primary/50 transition-all">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-2xl text-primary">The Augmentation Path</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Research shows that the greatest performance gains come from <strong>human-AI collaboration</strong>, 
                    not replacement. By leveraging complementary strengths—human judgment and creativity combined with 
                    AI's computational power—we achieve outcomes neither could reach alone.
                  </p>
                  <div className="pt-4 space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Humans provide context and ethical oversight</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>AI handles repetitive and computational tasks</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>Together: unprecedented productivity and insight</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* The Critical Choice */}
            <Card className="border-2 border-primary/30 bg-primary/5">
              <CardContent className="p-10">
                <div className="flex items-start gap-6">
                  <div className="text-5xl">💡</div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-semibold">The Critical Choice We Face</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Do we build AI as an <strong className="text-destructive">extractive competitor</strong>, 
                      designed to outperform and replace us, maximizing efficiency at the cost of human dignity? 
                      Or as a <strong className="text-primary">faithful apprentice</strong>, designed to augment 
                      our skills, act in our best interest, and preserve our role as the strategic and ethical 
                      centers of our work?
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      This choice will define the next decade of work, creativity, and human flourishing. 
                      The Human Blueprint argues for the latter—and shows how to build it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Act 2: The Human Blueprint */}
      <section id="blueprint" className="py-32 bg-background texture-overlay scroll-mt-20">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Act II</span>
              <h2 className="text-foreground">The Human Blueprint</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Redefining the "Mestiere" (the craft) for the age of agentic agents
              </p>
            </div>
            
            {/* Mestiere Concept */}
            <Card className="border-2 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-10 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="text-6xl">🎨</div>
                  <div className="space-y-3">
                    <h3 className="text-4xl">Reclaiming "Mestiere"</h3>
                    <p className="text-lg text-muted-foreground italic">
                      An Italian word meaning more than just a job—a craft, a calling, a vocation 
                      imbued with skill, passion, and purpose.
                    </p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary pl-8 py-4 space-y-4">
                  <p className="text-lg leading-relaxed">
                    For centuries, the mestiere of the artisan was about hand-crafted excellence—the 
                    watchmaker's precision, the tailor's eye, the chef's intuition. These crafts were 
                    defined not by the tools used but by the <strong>judgment, creativity, and mastery</strong> 
                    the artisan brought to their work.
                  </p>
                  <p className="text-lg leading-relaxed">
                    In the digital age, our mestiere is no longer about manual dexterity. It's about 
                    exercising <strong className="text-primary">judgment</strong>, <strong className="text-primary">intuition</strong>, 
                    and <strong className="text-primary">ethical reasoning</strong>—the very things AI cannot replicate. 
                    The Human Blueprint is about reclaiming this craft.
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-sm text-muted-foreground italic text-center">
                    "The mestiere is not what you do with your hands, but what you bring to the work with your mind and heart."
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Death and Rebirth */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-destructive/20 flex items-center justify-center">
                    <span className="text-3xl">💀</span>
                  </div>
                  <h4 className="text-2xl font-semibold">Death of Tasks</h4>
                </div>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Administrative drudgery, repetitive data entry, scheduling conflicts, status report 
                      compilation—these tasks that have held our spirits captive are being automated away.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2">
                        <span className="text-destructive">✗</span>
                        <span className="line-through opacity-60">Manual data entry and formatting</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-destructive">✗</span>
                        <span className="line-through opacity-60">Calendar management and scheduling</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-destructive">✗</span>
                        <span className="line-through opacity-60">Routine report generation</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-destructive">✗</span>
                        <span className="line-through opacity-60">Basic customer service responses</span>
                      </p>
                    </div>
                    <p className="text-sm italic text-muted-foreground pt-2">
                      Good riddance. These were never the craft—they were the obstacles to it.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl">✨</span>
                  </div>
                  <h4 className="text-2xl font-semibold">Rebirth of Spirit</h4>
                </div>
                <Card className="border-2 border-primary/30">
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      We are liberated to focus on strategic thinking, creative problem-solving, ethical 
                      oversight, and relationship building—reclaiming our roles as the architects of our work.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span className="font-medium">Strategic decision-making and planning</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span className="font-medium">Creative problem-solving and innovation</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span className="font-medium">Ethical oversight and value alignment</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span className="font-medium">Deep relationship and trust building</span>
                      </p>
                    </div>
                    <p className="text-sm italic text-primary pt-2 font-medium">
                      This is the rebirth—the return to what makes work meaningful.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Adversarial Collaboration */}
            <Card className="border-2 border-primary">
              <CardContent className="p-10 space-y-6">
                <h3 className="text-3xl text-center">Adversarial Collaboration</h3>
                <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                  The AI's role is not to compete with the human but to <strong className="text-foreground">interrogate 
                  and sharpen</strong> the human's recommendations. This keeps the human at the center of decision-making, 
                  preserving their dignity and strategic importance.
                </p>
                <div className="grid md:grid-cols-3 gap-6 pt-6">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold">Human Proposes</h4>
                    <p className="text-sm text-muted-foreground">Strategic direction and ethical framework</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Brain className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold">AI Challenges</h4>
                    <p className="text-sm text-muted-foreground">Questions assumptions and surfaces risks</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold">Human Decides</h4>
                    <p className="text-sm text-muted-foreground">Final judgment with enhanced insight</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Act 3: The 4-Pillar Framework */}
      <section id="framework" className="py-32 bg-card scroll-mt-20">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Act III</span>
              <h2 className="text-foreground">The 4-Pillar Framework</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Integrating multiple intelligence types into agentic loops for human-centric AI
              </p>
            </div>
            
            <p className="text-lg text-center text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Building loyal, human-centric agentic systems requires more than raw computational power. 
              The 4-Pillar Framework provides a comprehensive model for designing AI that respects and 
              amplifies human capabilities across four critical dimensions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pillar 1: Intellectual Intelligence */}
              <Card className="border-2 hover:border-blue-500/50 transition-all group">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Brain className="h-8 w-8 text-blue-500" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Pillar 1</span>
                      <h3 className="text-2xl">Intellectual Intelligence</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Raw cognitive power—analysis, pattern recognition, data processing, and computational reasoning. 
                    AI excels here, providing the horsepower for complex calculations and large-scale data analysis.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-blue-500">AI</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">AI Contribution</p>
                        <p className="text-xs text-muted-foreground">Rapid data processing, pattern detection, predictive modeling</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">H</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Human Contribution</p>
                        <p className="text-xs text-muted-foreground">Critical judgment, interpretation, strategic application</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Pillar 2: Social Intelligence */}
              <Card className="border-2 hover:border-pink-500/50 transition-all group">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Heart className="h-8 w-8 text-pink-500" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Pillar 2</span>
                      <h3 className="text-2xl">Social Intelligence</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Emotional intelligence, cultural awareness, empathy, and relationship building. While AI can 
                    simulate interaction, it fundamentally lacks genuine empathy and deep contextual understanding.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded bg-pink-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-pink-500">AI</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">AI Contribution</p>
                        <p className="text-xs text-muted-foreground">Sentiment analysis, communication patterns, interaction tracking</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">H</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Human Contribution</p>
                        <p className="text-xs text-muted-foreground">Genuine empathy, cultural nuance, trust building, conflict resolution</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Pillar 3: Ethical Intelligence */}
              <Card className="border-2 hover:border-amber-500/50 transition-all group">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Scale className="h-8 w-8 text-amber-500" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Pillar 3</span>
                      <h3 className="text-2xl">Ethical Intelligence</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Moral reasoning, value alignment, and ethical decision-making. Embedding principles of fairness, 
                    transparency, and dignity into AI architecture through careful design and ongoing oversight.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-amber-500">AI</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">AI Contribution</p>
                        <p className="text-xs text-muted-foreground">Bias detection, fairness metrics, consistency in rule application</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">H</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Human Contribution</p>
                        <p className="text-xs text-muted-foreground">Moral judgment, value prioritization, ethical framework design</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Pillar 4: Operational Intelligence */}
              <Card className="border-2 hover:border-purple-500/50 transition-all group">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Settings className="h-8 w-8 text-purple-500" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Pillar 4</span>
                      <h3 className="text-2xl">Operational Intelligence</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    The practical engineering of trust—governance structures, data stewardship, secure tooling, 
                    and technical safeguards that ensure agents act in the user's best interest.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-purple-500">AI</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">AI Contribution</p>
                        <p className="text-xs text-muted-foreground">Automated compliance, security monitoring, audit trails</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">H</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Human Contribution</p>
                        <p className="text-xs text-muted-foreground">Governance design, policy setting, accountability oversight</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Framework Integration */}
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-10 text-center space-y-6">
                <h3 className="text-3xl">Integration is Key</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  These four pillars don't operate in isolation. A truly human-centric agentic system 
                  integrates all four dimensions, creating AI that is not just intelligent, but 
                  <strong className="text-foreground"> wise, empathetic, ethical, and trustworthy</strong>.
                </p>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  The framework provides a practical checklist for designers and leaders: Are we building 
                  systems that honor all four dimensions? Or are we optimizing for intellectual intelligence 
                  at the expense of the others?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Act 4: The Loyalty Advantage */}
      <section id="loyalty" className="py-32 bg-background texture-overlay scroll-mt-20">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Act IV</span>
              <h2 className="text-foreground">The Loyalty Advantage</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Why a "loyal" agent is more profitable and more ethical than a general-purpose chatbot
              </p>
            </div>
            
            {/* Iron Triangle */}
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-10 space-y-8">
                <h3 className="text-4xl text-center">The Iron Triangle of Agency</h3>
                <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Drawing from centuries of legal tradition, the concept of <strong className="text-foreground">fiduciary duty</strong> defines 
                  the relationship between an agent and their principal. The agent must act solely in the principal's best interest.
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
                  <div className="text-center space-y-3">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto border-4 border-primary">
                      <span className="text-4xl">👤</span>
                    </div>
                    <p className="font-bold text-lg">Principal (You)</p>
                    <p className="text-sm text-muted-foreground max-w-[200px]">The user whose interests must be protected</p>
                  </div>
                  
                  <ArrowRight className="h-10 w-10 text-primary rotate-90 md:rotate-0" />
                  
                  <div className="text-center space-y-3">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto border-4 border-primary">
                      <span className="text-4xl">🤝</span>
                    </div>
                    <p className="font-bold text-lg">Agentic System</p>
                    <p className="text-sm text-muted-foreground max-w-[200px]">The agent with fiduciary duty to the principal</p>
                  </div>
                  
                  <ArrowRight className="h-10 w-10 text-primary rotate-90 md:rotate-0" />
                  
                  <div className="text-center space-y-3">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto border-4 border-primary">
                      <span className="text-4xl">🏢</span>
                    </div>
                    <p className="font-bold text-lg">Third Parties</p>
                    <p className="text-sm text-muted-foreground max-w-[200px]">External services the agent interacts with</p>
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-6 border border-primary/20">
                  <p className="text-center text-muted-foreground leading-relaxed">
                    The Agentic System has a <strong className="text-foreground">fiduciary duty</strong> to 
                    act solely in the principal's best interest, just like a lawyer or financial advisor. 
                    This is not optional—it's the foundation of trust.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Five Levels of System Guarantees */}
            <div className="space-y-6">
              <h3 className="text-3xl text-center">Five Levels of System Guarantees</h3>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                Loyalty by Design requires multiple layers of technical and organizational safeguards 
                to ensure the agent truly serves the user's interests.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <Card className="border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">1. Governance</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Legal and organizational structures ensuring the provider's primary obligation is to the user, 
                      not to advertisers or third parties.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Lock className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">2. Data Stewardship</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Strict controls preventing misuse of user data for training, profiling, or monetization 
                      without explicit consent.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Cog className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">3. Secure Tooling</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Technical safeguards ensuring the agent can only access tools and data explicitly 
                      authorized by the user.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Target className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">4. Alignment</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Continuous verification that the agent's actions match the user's stated preferences 
                      and values, not hidden objectives.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Lightbulb className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">5. Transparency</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Clear explanations of how the agent makes decisions, what data it uses, and why 
                      it recommends specific actions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Business Case */}
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/10 to-transparent">
              <CardContent className="p-10 space-y-6">
                <h3 className="text-4xl text-center">Trust = Profitability</h3>
                <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Loyalty isn't just an ethical advantage—it's a <strong className="text-primary">massive commercial one</strong>.
                </p>
                <div className="grid md:grid-cols-3 gap-6 pt-6">
                  <div className="text-center space-y-3">
                    <div className="text-4xl">📈</div>
                    <h4 className="font-semibold">Higher Adoption</h4>
                    <p className="text-sm text-muted-foreground">
                      Users embrace agents they trust, accelerating deployment and reducing resistance
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="text-4xl">🔄</div>
                    <h4 className="font-semibold">Lower Churn</h4>
                    <p className="text-sm text-muted-foreground">
                      Loyal systems create sticky relationships, reducing customer acquisition costs
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="text-4xl">💰</div>
                    <h4 className="font-semibold">Premium Pricing</h4>
                    <p className="text-sm text-muted-foreground">
                      Users willingly pay more for agents that demonstrably serve their interests
                    </p>
                  </div>
                </div>
                <p className="text-center text-lg text-muted-foreground pt-6 max-w-2xl mx-auto">
                  Trust reduces friction, accelerates adoption, and builds sustainable relationships. 
                  <strong className="text-primary"> A loyal agent is simply more profitable.</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Act 5: The Intuition Gap */}
      <section id="intuition" className="py-32 bg-card scroll-mt-20">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Act V</span>
              <h2 className="text-foreground">The Intuition Gap</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                What AI cannot cross—and how leaders can fill it
              </p>
            </div>
            
            {/* The Gap Visualization */}
            <Card className="border-2 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-10 space-y-8">
                <div className="flex items-center justify-center gap-12 py-8">
                  <div className="text-center space-y-3">
                    <div className="text-6xl">🤖</div>
                    <p className="font-bold text-lg">AI Capabilities</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Pattern recognition</p>
                      <p>Data processing</p>
                      <p>Rule application</p>
                      <p>Optimization</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 max-w-md space-y-4">
                    <div className="h-2 bg-gradient-to-r from-blue-500 via-transparent to-primary rounded-full" />
                    <div className="text-center space-y-2 py-4 px-6 bg-primary/5 rounded-lg border-2 border-primary/30">
                      <p className="font-bold text-primary text-lg">The Intuition Gap</p>
                      <p className="text-sm text-muted-foreground">
                        The space where human judgment remains irreplaceable
                      </p>
                    </div>
                    <div className="h-2 bg-gradient-to-r from-primary via-transparent to-amber-500 rounded-full" />
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="text-6xl">🧠</div>
                    <p className="font-bold text-lg">Human Intuition</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Contextual judgment</p>
                      <p>Ethical reasoning</p>
                      <p>Cultural nuance</p>
                      <p>Creative insight</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 pt-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <span className="text-2xl">✓</span>
                      Nuanced Judgment
                    </h4>
                    <p className="text-sm text-muted-foreground pl-8">
                      Weighing competing priorities, understanding unspoken context, and making decisions 
                      when rules conflict or don't apply.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <span className="text-2xl">✓</span>
                      Ethical Reasoning
                    </h4>
                    <p className="text-sm text-muted-foreground pl-8">
                      Navigating moral dilemmas, prioritizing values, and making choices that honor 
                      human dignity even when efficiency suffers.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <span className="text-2xl">✓</span>
                      Cultural Understanding
                    </h4>
                    <p className="text-sm text-muted-foreground pl-8">
                      Reading between the lines, understanding cultural context, and adapting 
                      communication to build genuine connection.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <span className="text-2xl">✓</span>
                      Creative Problem-Solving
                    </h4>
                    <p className="text-sm text-muted-foreground pl-8">
                      Approaching novel situations with imagination, drawing unexpected connections, 
                      and inventing solutions that don't yet exist.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Reshape, Don't Protect */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-4xl">Reshape, Don't Protect</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  The goal is not to protect jobs from AI, but to <strong className="text-foreground">reshape roles</strong> to 
                  focus on the Intuition Gap—the work that makes us irreplaceable.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary">
                      1
                    </div>
                    <h4 className="text-2xl font-semibold">Audit</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Identify workflows ripe for augmentation and tasks that fall into the Intuition Gap. 
                      Map your team's current work against the 4-Pillar Framework.
                    </p>
                    <div className="pt-4 space-y-2 text-sm">
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>Which tasks are purely computational?</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>Which require human judgment?</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>Where does ethical reasoning matter most?</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary">
                      2
                    </div>
                    <h4 className="text-2xl font-semibold">Collaborate</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Design human-AI collaboration protocols that define clear roles. Implement adversarial 
                      collaboration where AI challenges human recommendations.
                    </p>
                    <div className="pt-4 space-y-2 text-sm">
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>What should AI automate completely?</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>What requires human final approval?</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>How do we ensure human oversight?</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary">
                      3
                    </div>
                    <h4 className="text-2xl font-semibold">Elevate</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Train teams on critical thinking, ethical oversight, and strategic analysis. 
                      Invest in the skills that live in the Intuition Gap.
                    </p>
                    <div className="pt-4 space-y-2 text-sm">
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>Ethical decision-making frameworks</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>Strategic thinking and planning</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>Creative problem-solving methods</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Leadership Call to Action */}
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/10 to-transparent">
              <CardContent className="p-10 space-y-6">
                <h3 className="text-3xl text-center">A Call to Leaders</h3>
                <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  The Intuition Gap is not a weakness—it's our <strong className="text-primary">competitive advantage</strong>. 
                  Leaders who invest in developing their teams' uniquely human capabilities will build organizations 
                  that thrive in the age of agentic AI.
                </p>
                <div className="flex justify-center pt-4">
                  <div className="inline-block px-6 py-3 bg-primary/10 rounded-lg border border-primary/30">
                    <p className="text-center font-semibold text-primary">
                      The future belongs to those who master the collaboration, not those who resist the change.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing / CTA */}
      <section className="py-32 bg-gradient-to-b from-background to-primary/10 texture-overlay">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-foreground">Reclaimed, Not Replaced</h2>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              The Human Blueprint is not a defensive crouch against technology. It is a confident, 
              forward-looking vision for a future where agentic AI serves as a powerful tool for 
              human flourishing.
            </p>
            
            <div className="pt-8 space-y-8">
              <p className="text-3xl font-semibold text-primary">
                Build Loyal Agents. Reclaim Your Mestiere.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="p-6 bg-card rounded-lg border-2 border-primary/20">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="font-semibold mb-2">Design for Dignity</h4>
                  <p className="text-sm text-muted-foreground">
                    Build AI systems that preserve and enhance human agency
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border-2 border-primary/20">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="font-semibold mb-2">Engineer Loyalty</h4>
                  <p className="text-sm text-muted-foreground">
                    Implement fiduciary duty through technical safeguards
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border-2 border-primary/20">
                  <div className="text-4xl mb-4">✨</div>
                  <h4 className="font-semibold mb-2">Elevate Humanity</h4>
                  <p className="text-sm text-muted-foreground">
                    Invest in the skills that live in the Intuition Gap
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-card border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <h3 className="text-2xl mb-8 font-serif">Key References</h3>
              <div className="text-sm text-muted-foreground space-y-3 text-left max-w-3xl mx-auto">
                <p>[1] Statista. (2023). <em>Global survey on the impact of AI on the workplace</em>.</p>
                <p>[2] IBM. (2026). <em>What are AI Agents?</em></p>
                <p>[3] Gomstyn, A., & Jonker, A. (2026). <em>New ethics risks courtesy of AI agents? Researchers are on the case</em>. IBM Think.</p>
                <p>[4] Fondazione Cologni. <em>Stories of Italy design, craftsmanship and art</em>.</p>
                <p>[5] Dégallier-Rochat, S., et al. (2022). <em>Human augmentation, not replacement: A research agenda for AI and robotics in the industry</em>. Frontiers in Robotics and AI.</p>
                <p>[6] Greenwood, D., & Moskowitz, B. (2024). <em>Engineering "Loyalty By Design" In Agentic Systems</em>. Consumer Reports Innovation Lab.</p>
              </div>
            </div>
            
            <div className="text-center text-sm text-muted-foreground pt-8 border-t">
              <p>© 2026 The Human Blueprint. A presentation on reclaiming digital dignity in the age of agentic AI.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
