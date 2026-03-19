import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "@/components/ui/Section";

gsap.registerPlugin(ScrollTrigger);

// ─── Quiz Data ───────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    id: 1,
    pillar: "System Loyalty",
    pillarColor: "text-cyan-400",
    text: "When your AI assistant makes a recommendation, how do you know whose interests it is actually serving?",
    options: [
      { label: "I don't — I assume it's trying to help me.", score: 1 },
      { label: "I check occasionally, but mostly trust the output.", score: 2 },
      { label: "I understand the incentive model behind the tool I use.", score: 3 },
      { label: "I've explicitly configured it to serve my goals, not the platform's.", score: 4 },
    ],
  },
  {
    id: 2,
    pillar: "Intellectual Intelligence",
    pillarColor: "text-violet-400",
    text: "When AI gives you an analysis or recommendation, what do you do next?",
    options: [
      { label: "I act on it — that's why I use AI.", score: 1 },
      { label: "I skim it and usually agree.", score: 2 },
      { label: "I review it critically and look for gaps.", score: 3 },
      { label: "I use it as a starting point, then apply my own judgment to the ambiguous parts.", score: 4 },
    ],
  },
  {
    id: 3,
    pillar: "Social Intelligence",
    pillarColor: "text-pink-400",
    text: "In situations requiring empathy — a difficult conversation, a team conflict, a client relationship — what role does AI play?",
    options: [
      { label: "AI handles the communication for me.", score: 1 },
      { label: "AI drafts the message; I send it as-is.", score: 2 },
      { label: "AI helps me prepare, but I lead the conversation.", score: 3 },
      { label: "AI is not involved — I own the human relationship entirely.", score: 4 },
    ],
  },
  {
    id: 4,
    pillar: "Ethical Intelligence",
    pillarColor: "text-amber-400",
    text: "When an AI output could cause harm — to a person, a group, or a decision — how does your workflow handle it?",
    options: [
      { label: "I haven't thought about this scenario.", score: 1 },
      { label: "I trust the AI has built-in safeguards.", score: 2 },
      { label: "I review outputs before acting on anything sensitive.", score: 3 },
      { label: "I have explicit guardrails: a checklist, a second opinion, or a review step.", score: 4 },
    ],
  },
  {
    id: 5,
    pillar: "Operational Intelligence",
    pillarColor: "text-emerald-400",
    text: "Who sets the priorities and goals that your AI is working toward?",
    options: [
      { label: "The AI decides based on what seems most efficient.", score: 1 },
      { label: "The platform defaults — I haven't changed them.", score: 2 },
      { label: "I set them loosely and adjust when things go wrong.", score: 3 },
      { label: "I define clear objectives, constraints, and success criteria upfront.", score: 4 },
    ],
  },
  {
    id: 6,
    pillar: "Adversarial Collaboration",
    pillarColor: "text-sky-400",
    text: "Does your AI ever push back on your ideas, challenge your assumptions, or tell you you're wrong?",
    options: [
      { label: "No — it agrees with me and helps me execute.", score: 1 },
      { label: "Rarely, and I find it annoying when it does.", score: 2 },
      { label: "Sometimes — I've noticed it flags issues.", score: 3 },
      { label: "Yes, and I actively prompt it to challenge me before I decide.", score: 4 },
    ],
  },
  {
    id: 7,
    pillar: "Digital Dignity",
    pillarColor: "text-rose-400",
    text: "How much of your professional judgment, creative thinking, or decision-making have you delegated to AI in the past month?",
    options: [
      { label: "Most of it — AI handles the thinking, I handle the output.", score: 1 },
      { label: "A significant portion — it's faster and usually good enough.", score: 2 },
      { label: "Some routine tasks — I keep the important decisions.", score: 3 },
      { label: "Only the analytical groundwork — my judgment and craft remain mine.", score: 4 },
    ],
  },
];

// ─── Result Profiles ──────────────────────────────────────────────────────────

const PROFILES = [
  {
    min: 7,
    max: 11,
    title: "The Surrendered Professional",
    emoji: "⚠️",
    tagline: "Your AI is running the show.",
    color: "border-red-500/40 bg-red-950/20",
    titleColor: "text-red-400",
    summary:
      "You've handed significant control to AI systems without establishing who they serve, what guardrails exist, or where your judgment begins. This isn't efficiency — it's exposure. You're at risk of eroding the very capabilities that make you irreplaceable.",
    pillars: [
      { label: "System Loyalty", status: "Critical", color: "text-red-400" },
      { label: "Human Agency", status: "Critical", color: "text-red-400" },
      { label: "Ethical Oversight", status: "Critical", color: "text-red-400" },
    ],
    recommendations: [
      "Audit every AI tool you use: who built it, what are its incentives, and whose interests does it serve by default?",
      "Identify three decisions you've delegated to AI this week and reclaim the judgment layer for each.",
      "Read the System Loyalty framework and apply the five-layer model to your primary AI tool.",
    ],
    cta: "Start with the System Loyalty audit.",
  },
  {
    min: 12,
    max: 16,
    title: "The Passive Adopter",
    emoji: "🔶",
    tagline: "You use AI, but AI may be using you.",
    color: "border-orange-500/40 bg-orange-950/20",
    titleColor: "text-orange-400",
    summary:
      "You've integrated AI into your workflow but largely on default settings, trusting that the tool is working in your interests. You're getting efficiency gains, but you're also accumulating invisible risks — in data, in judgment, in the slow erosion of skills you're no longer exercising.",
    pillars: [
      { label: "System Loyalty", status: "Weak", color: "text-orange-400" },
      { label: "Adversarial Collaboration", status: "Absent", color: "text-red-400" },
      { label: "Ethical Guardrails", status: "Assumed", color: "text-orange-400" },
    ],
    recommendations: [
      "Configure your AI tools explicitly: set goals, define constraints, and understand what data they collect.",
      "Introduce one adversarial prompt per session: 'What are the three strongest arguments against this recommendation?'",
      "Establish a personal review step before acting on any AI output that affects people.",
    ],
    cta: "Activate the Adversarial Collaboration loop.",
  },
  {
    min: 17,
    max: 21,
    title: "The Conscious Collaborator",
    emoji: "🔷",
    tagline: "You're on the right path — now go deeper.",
    color: "border-blue-500/40 bg-blue-950/20",
    titleColor: "text-blue-400",
    summary:
      "You've developed healthy instincts about AI collaboration. You review outputs, retain judgment on important decisions, and understand that AI is a tool, not a replacement. The gap to close is in formalization: your good habits need to become explicit systems.",
    pillars: [
      { label: "Intellectual Intelligence", status: "Active", color: "text-blue-400" },
      { label: "Social Intelligence", status: "Preserved", color: "text-blue-400" },
      { label: "Operational Intelligence", status: "Developing", color: "text-sky-400" },
    ],
    recommendations: [
      "Document your AI workflow: write down the exact points where your judgment overrides AI output.",
      "Extend adversarial collaboration to strategic decisions — not just tactical ones.",
      "Map your work against the 4-Pillar Framework and identify which pillar needs the most development.",
    ],
    cta: "Formalize your collaboration model.",
  },
  {
    min: 22,
    max: 25,
    title: "The Loyal Architect",
    emoji: "✦",
    tagline: "You've built a system that works for you.",
    color: "border-cyan-500/40 bg-cyan-950/20",
    titleColor: "text-cyan-400",
    summary:
      "You operate with intentionality. Your AI serves your goals, not the platform's. You've preserved your judgment, your relationships, and your ethical oversight. You're not just using AI — you're designing the relationship. This is what Digital Dignity looks like in practice.",
    pillars: [
      { label: "System Loyalty", status: "Established", color: "text-cyan-400" },
      { label: "All 4 Pillars", status: "Active", color: "text-cyan-400" },
      { label: "Digital Dignity", status: "Preserved", color: "text-emerald-400" },
    ],
    recommendations: [
      "Share your model with your team — loyal AI architecture scales through culture, not just individual practice.",
      "Explore the Intuition Gap: identify the frontier where your human judgment is most irreplaceable and invest there.",
      "Consider how you'd score your organization, not just yourself.",
    ],
    cta: "Extend the model to your team.",
  },
  {
    min: 26,
    max: 28,
    title: "The Human Blueprint",
    emoji: "◈",
    tagline: "You are the model.",
    color: "border-violet-500/40 bg-violet-950/20",
    titleColor: "text-violet-400",
    summary:
      "You've internalized every principle of the Human Blueprint. Your AI is loyal, your judgment is sovereign, your relationships are human, your ethics are explicit, and your craft is yours. You're not just surviving the age of agentic AI — you're defining what it means to thrive in it.",
    pillars: [
      { label: "System Loyalty", status: "Mastered", color: "text-violet-400" },
      { label: "4-Pillar Framework", status: "Mastered", color: "text-violet-400" },
      { label: "Digital Dignity", status: "Embodied", color: "text-violet-400" },
    ],
    recommendations: [
      "You are the proof of concept. Document your approach and make it teachable.",
      "The next frontier: how do you maintain this as AI systems become more autonomous?",
      "Consider contributing to the conversation — this framework needs practitioners, not just theorists.",
    ],
    cta: "You are the proof of concept.",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getProfile(score: number) {
  return PROFILES.find((p) => score >= p.min && score <= p.max) ?? PROFILES[0];
}

function ScoreBar({ score, max = 28 }: { score: number; max?: number }) {
  const pct = Math.round((score / max) * 100);
  const color =
    pct < 45 ? "bg-red-500" : pct < 60 ? "bg-orange-500" : pct < 75 ? "bg-blue-500" : pct < 90 ? "bg-cyan-500" : "bg-violet-500";
  return (
    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
      <div
        className={`h-2 rounded-full transition-all duration-1000 ease-out ${color}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function LoyaltyQuiz() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0); // 0 = intro, 1-7 = questions, 8 = result
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [animating, setAnimating] = useState(false);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const profile = getProfile(totalScore);
  const progress = current === 0 ? 0 : current > QUESTIONS.length ? 100 : Math.round((current / QUESTIONS.length) * 100);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".quiz-entrance",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".quiz-entrance",
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Animate question transitions
  useEffect(() => {
    if (current > 0 && current <= QUESTIONS.length) {
      gsap.fromTo(
        ".quiz-card",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [current]);

  // Animate result reveal
  useEffect(() => {
    if (showResult) {
      gsap.fromTo(
        ".result-card",
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" }
      );
    }
  }, [showResult]);

  function handleSelect(score: number) {
    if (animating) return;
    setSelected(score);
  }

  function handleNext() {
    if (selected === null || animating) return;
    setAnimating(true);
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);

    gsap.to(".quiz-card", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setSelected(null);
        if (current >= QUESTIONS.length) {
          setShowResult(true);
        } else {
          setCurrent((c) => c + 1);
        }
        setAnimating(false);
      },
    });
  }

  function handleStart() {
    gsap.to(".quiz-intro", {
      opacity: 0,
      y: -20,
      duration: 0.4,
      onComplete: () => setCurrent(1),
    });
  }

  function handleRestart() {
    setAnswers([]);
    setSelected(null);
    setShowResult(false);
    setCurrent(0);
    gsap.fromTo(
      ".quiz-intro",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }

  const q = current >= 1 && current <= QUESTIONS.length ? QUESTIONS[current - 1] : null;

  return (
    <div id="section-quiz" ref={containerRef} className="relative z-10 bg-black">
      <Section className="py-24 px-6 md:px-12 max-w-3xl mx-auto">

        {/* Section Header */}
        <div className="quiz-entrance text-center mb-14">
          <p className="text-xs font-mono tracking-[0.3em] text-amber-400 uppercase mb-4">
            Self-Assessment
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Is Your AI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              Loyal?
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Seven questions. Four pillars. One score. Discover where your human-AI relationship stands — and what to do about it.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="quiz-entrance">

          {/* ── Intro Screen ── */}
          {current === 0 && !showResult && (
            <div className="quiz-intro border border-amber-500/20 rounded-2xl p-8 bg-amber-950/10 backdrop-blur-sm text-center">
              <div className="text-5xl mb-6">◈</div>
              <h3 className="text-white font-bold text-xl mb-3">The Human Blueprint Loyalty Assessment</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
                This assessment maps your current AI relationship against the 4-Pillar Framework — Intellectual, Social, Ethical, and Operational Intelligence — plus System Loyalty, Adversarial Collaboration, and Digital Dignity.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8 text-xs font-mono">
                {["7 Questions", "~3 Minutes", "5 Result Profiles", "Personalized Recommendations"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-amber-500/30 text-amber-400 bg-amber-950/30">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={handleStart}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-black font-bold rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                Start Assessment →
              </button>
            </div>
          )}

          {/* ── Question Screen ── */}
          {current >= 1 && current <= QUESTIONS.length && q && !showResult && (
            <div className="quiz-card">
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2 text-xs font-mono text-slate-500">
                  <span>Question {current} of {QUESTIONS.length}</span>
                  <span className={q.pillarColor}>{q.pillar}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden">
                  <div
                    className="h-1 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="border border-slate-700/50 rounded-2xl p-8 bg-slate-900/40 backdrop-blur-sm mb-4">
                <p className={`text-xs font-mono tracking-widest uppercase mb-4 ${q.pillarColor}`}>
                  {q.pillar}
                </p>
                <p className="text-white text-lg font-medium leading-relaxed mb-8">
                  {q.text}
                </p>

                {/* Options */}
                <div className="space-y-3">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(opt.score)}
                      className={`w-full text-left px-5 py-4 rounded-xl border text-sm leading-relaxed transition-all duration-200 cursor-pointer
                        ${selected === opt.score
                          ? "border-amber-400/60 bg-amber-950/40 text-white"
                          : "border-slate-700/50 bg-slate-900/20 text-slate-300 hover:border-slate-500 hover:bg-slate-800/40"
                        }`}
                    >
                      <span className={`font-mono text-xs mr-3 ${selected === opt.score ? "text-amber-400" : "text-slate-600"}`}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <div className="text-right">
                <button
                  onClick={handleNext}
                  disabled={selected === null}
                  className={`px-7 py-3 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer
                    ${selected !== null
                      ? "bg-gradient-to-r from-amber-500 to-rose-500 text-black hover:scale-105"
                      : "bg-slate-800 text-slate-600 cursor-not-allowed"
                    }`}
                >
                  {current < QUESTIONS.length ? "Next →" : "See My Results →"}
                </button>
              </div>
            </div>
          )}

          {/* ── Result Screen ── */}
          {showResult && (
            <div className="result-card">
              {/* Score Bar */}
              <div className="mb-8 text-center">
                <p className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-2">Your Loyalty Score</p>
                <p className="text-5xl font-bold text-white mb-3">
                  {totalScore}
                  <span className="text-slate-600 text-2xl"> / 28</span>
                </p>
                <div className="max-w-xs mx-auto">
                  <ScoreBar score={totalScore} />
                </div>
              </div>

              {/* Profile Card */}
              <div className={`border rounded-2xl p-8 backdrop-blur-sm mb-6 ${profile.color}`}>
                <div className="text-4xl mb-4 text-center">{profile.emoji}</div>
                <h3 className={`text-2xl font-bold text-center mb-2 ${profile.titleColor}`}>
                  {profile.title}
                </h3>
                <p className="text-slate-400 text-sm text-center italic mb-6">{profile.tagline}</p>
                <p className="text-slate-200 text-sm leading-relaxed mb-6">{profile.summary}</p>

                {/* Pillar Status */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {profile.pillars.map((p, i) => (
                    <div key={i} className="text-center border border-slate-700/40 rounded-xl p-3 bg-black/20">
                      <p className={`text-xs font-bold mb-1 ${p.color}`}>{p.status}</p>
                      <p className="text-slate-500 text-xs leading-tight">{p.label}</p>
                    </div>
                  ))}
                </div>

                {/* Recommendations */}
                <div className="border-t border-slate-700/40 pt-6">
                  <p className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-4">
                    Recommended Actions
                  </p>
                  <ol className="space-y-3">
                    {profile.recommendations.map((rec, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                        <span className={`flex-shrink-0 font-mono font-bold ${profile.titleColor}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* CTA */}
                <div className="mt-6 text-center">
                  <p className={`text-sm font-semibold ${profile.titleColor}`}>{profile.cta}</p>
                </div>
              </div>

              {/* Per-Question Breakdown */}
              <div className="border border-slate-800/60 rounded-2xl p-6 bg-slate-900/20 mb-6">
                <p className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-4">
                  Your Answers
                </p>
                <div className="space-y-2">
                  {QUESTIONS.map((q, i) => {
                    const a = answers[i] ?? 0;
                    const pct = Math.round((a / 4) * 100);
                    return (
                      <div key={q.id} className="flex items-center gap-3">
                        <span className={`text-xs font-mono w-28 flex-shrink-0 ${q.pillarColor}`}>
                          {q.pillar}
                        </span>
                        <div className="flex-1 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-rose-400"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-slate-500 text-xs font-mono w-8 text-right">{a}/4</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Restart */}
              <div className="text-center">
                <button
                  onClick={handleRestart}
                  className="px-6 py-2 border border-slate-700 text-slate-400 rounded-full text-sm hover:border-slate-500 hover:text-slate-200 transition-all duration-200 cursor-pointer"
                >
                  ↺ Retake Assessment
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Framework Note */}
        {current === 0 && !showResult && (
          <div className="quiz-entrance mt-8 text-center">
            <p className="text-xs text-slate-600 font-mono leading-relaxed max-w-lg mx-auto">
              Grounded in the 4-Pillar Framework (Kahneman & Klein, 2009; Consumer Reports Innovation Lab, 2024) and the System Loyalty model. Results are for reflection, not diagnosis.
            </p>
          </div>
        )}

      </Section>
    </div>
  );
}
