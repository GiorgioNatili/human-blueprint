import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Scale, Settings, ChevronDown, ArrowRight } from "lucide-react";
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden texture-overlay">
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
      <section id="problem" className="py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Act I</span>
              <h2 className="text-foreground">The Problem Space</h2>
              <p className="text-xl text-muted-foreground">
                Why the "AI replacement" narrative is fundamentally incomplete
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-2xl">Agentic AI</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Systems that don't just suggest—they <strong>act</strong>. Agentic AI can make decisions, 
                    use tools, and interact with the world autonomously, creating both immense opportunity 
                    and profound ethical challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-2xl">The Dignity Deficit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When humans perceive AI as superior, they experience a decline in self-worth. 
                    As IBM Research notes, this loss of dignity is considered a <strong>human rights violation</strong> 
                    in some ethical frameworks.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-2 border-primary/30 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">💡</div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold">The Critical Choice</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Do we build AI as an <strong className="text-destructive">extractive competitor</strong>, 
                      designed to outperform and replace us? Or as a <strong className="text-primary">faithful apprentice</strong>, 
                      designed to augment our skills and act in our best interest?
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Act 2: The Human Blueprint */}
      <section className="py-24 bg-background texture-overlay">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Act II</span>
              <h2 className="text-foreground">The Human Blueprint</h2>
              <p className="text-xl text-muted-foreground">
                Redefining the "Mestiere" (the craft) for the age of agentic agents
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <Card className="border-2">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">🎨</div>
                    <div>
                      <h3 className="text-3xl mb-2">Reclaiming "Mestiere"</h3>
                      <p className="text-muted-foreground italic">
                        An Italian word meaning more than just a job—a craft, a calling, a vocation 
                        imbued with skill, passion, and purpose.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <p className="text-lg leading-relaxed">
                      For centuries, the mestiere of the artisan was about hand-crafted excellence. 
                      In the digital age, our mestiere is about exercising <strong>judgment</strong>, 
                      <strong> intuition</strong>, and <strong>ethical reasoning</strong>—the very 
                      things AI cannot replicate.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                    <span className="text-xl">💀</span>
                  </div>
                  <h4 className="text-xl font-semibold">Death of Tasks</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-13">
                  Administrative drudgery, repetitive data entry, scheduling conflicts—these tasks 
                  that have held our spirits captive are being automated away.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl">✨</span>
                  </div>
                  <h4 className="text-xl font-semibold">Rebirth of Spirit</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-13">
                  We are liberated to focus on strategic thinking, creative problem-solving, and 
                  ethical oversight—reclaiming our roles as the architects of our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Act 3: The 4-Pillar Framework */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Act III</span>
              <h2 className="text-foreground">The 4-Pillar Framework</h2>
              <p className="text-xl text-muted-foreground">
                Integrating intelligence types into agentic loops
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="border-2 hover:border-primary/50 transition-all group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Brain className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl">Intellectual Intelligence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Raw cognitive power—analysis, pattern recognition, data processing. AI provides 
                    the horsepower; humans provide critical judgment to interpret and act on it.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-all group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Heart className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-2xl">Social Intelligence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Emotional intelligence, cultural awareness, relationship building. While AI can 
                    simulate interaction, it lacks genuine empathy and contextual understanding.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-all group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Scale className="h-8 w-8 text-amber-500" />
                  </div>
                  <h3 className="text-2xl">Ethical Intelligence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Moral reasoning and value alignment. Embedding principles of fairness, transparency, 
                    and dignity into AI architecture through adversarial collaboration.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-primary/50 transition-all group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Settings className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl">Operational Intelligence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The practical engineering of trust—governance, data stewardship, and secure 
                    tooling to ensure agents act in the user's best interest.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Act 4: The Loyalty Advantage */}
      <section className="py-24 bg-background texture-overlay">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Act IV</span>
              <h2 className="text-foreground">The Loyalty Advantage</h2>
              <p className="text-xl text-muted-foreground">
                Why a "loyal" agent is more profitable and more ethical
              </p>
            </div>
            
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-3xl text-center">The Iron Triangle of Agency</h3>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8">
                  <div className="text-center space-y-2">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                      <span className="text-3xl">👤</span>
                    </div>
                    <p className="font-semibold">Principal (You)</p>
                  </div>
                  
                  <ArrowRight className="h-8 w-8 text-primary rotate-90 md:rotate-0" />
                  
                  <div className="text-center space-y-2">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                      <span className="text-3xl">🤝</span>
                    </div>
                    <p className="font-semibold">Agentic System</p>
                  </div>
                  
                  <ArrowRight className="h-8 w-8 text-primary rotate-90 md:rotate-0" />
                  
                  <div className="text-center space-y-2">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                      <span className="text-3xl">🏢</span>
                    </div>
                    <p className="font-semibold">Third Parties</p>
                  </div>
                </div>
                
                <p className="text-center text-muted-foreground leading-relaxed">
                  The Agentic System has a <strong className="text-foreground">fiduciary duty</strong> to 
                  act solely in the principal's best interest, just like a lawyer or financial advisor.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="text-3xl">🛡️</div>
                  <h4 className="font-semibold">Governance</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensures provider's primary obligation is to the user
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="text-3xl">🔒</div>
                  <h4 className="font-semibold">Data Stewardship</h4>
                  <p className="text-sm text-muted-foreground">
                    Prevents misuse of user data for any other purpose
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="text-3xl">⚙️</div>
                  <h4 className="font-semibold">Secure Tooling</h4>
                  <p className="text-sm text-muted-foreground">
                    Enforces alignment with explicit user preferences
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-2 border-primary">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-3xl">Trust = Profitability</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Loyalty isn't just an ethical advantage—it's a massive commercial one. 
                  Trust reduces friction, accelerates adoption, and builds sustainable relationships. 
                  <strong className="text-primary"> A loyal agent is simply more profitable.</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Act 5: The Intuition Gap */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Act V</span>
              <h2 className="text-foreground">The Intuition Gap</h2>
              <p className="text-xl text-muted-foreground">
                What AI cannot cross—and how leaders can fill it
              </p>
            </div>
            
            <Card className="border-2 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-center gap-8 py-6">
                  <div className="text-center space-y-2">
                    <div className="text-4xl">🤖</div>
                    <p className="font-semibold">AI Capabilities</p>
                  </div>
                  
                  <div className="flex-1 max-w-xs">
                    <div className="h-1 bg-gradient-to-r from-muted via-transparent to-muted" />
                    <p className="text-center text-sm text-muted-foreground mt-2">The Gap</p>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <div className="text-4xl">🧠</div>
                    <p className="font-semibold">Human Intuition</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">✓</div>
                    <div>
                      <p className="font-medium">Nuanced Judgment</p>
                      <p className="text-sm text-muted-foreground">Context-aware decision making</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">✓</div>
                    <div>
                      <p className="font-medium">Ethical Reasoning</p>
                      <p className="text-sm text-muted-foreground">Values-based choices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">✓</div>
                    <div>
                      <p className="font-medium">Cultural Understanding</p>
                      <p className="text-sm text-muted-foreground">Deep contextual awareness</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">✓</div>
                    <div>
                      <p className="font-medium">Creative Problem-Solving</p>
                      <p className="text-sm text-muted-foreground">Novel situation handling</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <h3 className="text-3xl text-center">Reshape, Don't Protect</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                      1
                    </div>
                    <h4 className="text-xl font-semibold">Audit</h4>
                    <p className="text-muted-foreground">
                      Identify workflows ripe for augmentation and tasks in the Intuition Gap
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                      2
                    </div>
                    <h4 className="text-xl font-semibold">Collaborate</h4>
                    <p className="text-muted-foreground">
                      Design human-AI collaboration protocols that define clear roles
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-primary/50 transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                      3
                    </div>
                    <h4 className="text-xl font-semibold">Elevate</h4>
                    <p className="text-muted-foreground">
                      Train teams on critical thinking, ethical oversight, and strategic analysis
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing / CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/10 texture-overlay">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-foreground">Reclaimed, Not Replaced</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Human Blueprint is not a defensive crouch against technology. It is a confident, 
              forward-looking vision for a future where agentic AI serves as a powerful tool for 
              human flourishing.
            </p>
            
            <div className="pt-8 space-y-4">
              <p className="text-2xl font-semibold text-primary">
                Build Loyal Agents. Reclaim Your Mestiere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h3 className="text-2xl mb-6">Key References</h3>
              <div className="text-sm text-muted-foreground space-y-2 text-left">
                <p>[1] Gomstyn, A., & Jonker, A. (2026). <em>New ethics risks courtesy of AI agents?</em> IBM Think.</p>
                <p>[2] Greenwood, D., & Moskowitz, B. (2024). <em>Engineering "Loyalty By Design" In Agentic Systems</em>. Consumer Reports Innovation Lab.</p>
                <p>[3] Dégallier-Rochat, S., et al. (2022). <em>Human augmentation, not replacement: A research agenda for AI and robotics in the industry</em>. Frontiers in Robotics and AI.</p>
              </div>
            </div>
            
            <div className="text-center text-sm text-muted-foreground pt-8 border-t">
              <p>© 2026 The Human Blueprint. A presentation on reclaiming digital dignity.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
