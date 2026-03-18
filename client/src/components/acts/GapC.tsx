import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ────────────────────────────────────────────────────────────────────

const corruptionExamples = [
  {
    term: "Loyalty Programs",
    claim: "\"We reward your loyalty\"",
    reality: "Surveillance infrastructure that tracks behaviour, creates psychological dependency, and extracts maximum value from customers.",
    icon: "💳",
  },
  {
    term: "Platform Loyalty",
    claim: "\"We serve our users\"",
    reality: "Engagement metrics optimised for advertiser revenue. Users are the product, not the customer.",
    icon: "📱",
  },
  {
    term: "Algorithmic Fairness",
    claim: "\"Our system is mathematically fair\"",
    reality: "Statistical parity weaponised to justify discriminatory outcomes while hiding behind neutral-sounding definitions.",
    icon: "⚖️",
  },
  {
    term: "Surveillance Capitalism",
    claim: "\"Free service, mutual benefit\"",
    reality: "Behavioural data harvested to predict and manipulate future actions. Zuboff (2019): the user is the raw material, not the beneficiary.",
    icon: "🔍",
  },
];

interface ContrastRow {
  dimension: string;
  loyal: string;
  general: string;
}

const contrastRows: ContrastRow[] = [
  {
    dimension: "Primary obligation",
    loyal: "User's best interests — always",
    general: "Platform revenue and engagement metrics",
  },
  {
    dimension: "Data handling",
    loyal: "Used only to benefit the user; never sold",
    general: "Monetised through advertising and third-party sharing",
  },
  {
    dimension: "Conflict of interest",
    loyal: "Disclosed and resolved in user's favour",
    general: "Hidden behind opaque recommendation algorithms",
  },
  {
    dimension: "Decision transparency",
    loyal: "Reasoning visible and challengeable",
    general: "Black-box outputs with no audit trail",
  },
  {
    dimension: "Business model",
    loyal: "User pays for service (user = customer)",
    general: "Service is free (user = product)",
  },
  {
    dimension: "Legal analogy",
    loyal: "Fiduciary — lawyer, doctor, financial advisor",
    general: "Vendor — optimising for own profit",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function GapC() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading
      gsap.from(".gapc-heading", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".gapc-heading", start: "top 82%" },
      });

      // Intro paragraph
      gsap.from(".gapc-intro", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ".gapc-intro", start: "top 82%" },
      });

      // Corruption cards — stagger
      gsap.from(".gapc-corruption-card", {
        opacity: 0,
        y: 32,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: ".gapc-corruption-grid", start: "top 78%" },
      });

      // Reclaim heading
      gsap.from(".gapc-reclaim-heading", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ".gapc-reclaim-heading", start: "top 82%" },
      });

      // Contrast table rows — stagger
      gsap.from(".gapc-contrast-row", {
        opacity: 0,
        x: -24,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: ".gapc-contrast-table", start: "top 78%" },
      });

      // Bridge paragraph
      gsap.from(".gapc-bridge", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ".gapc-bridge", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gap-c"
      className="relative z-10 py-32 px-6 bg-gradient-to-b from-background via-slate-950/60 to-background"
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Section label ── */}
        <div className="gapc-heading text-center mb-6">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-amber-400/80 border border-amber-400/20 rounded-full px-4 py-1 mb-6">
            The Loyalty Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            The Word "Loyalty" Has Been{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">
              Corrupted
            </span>
          </h2>
        </div>

        {/* ── Intro ── */}
        <p className="gapc-intro text-lg text-white/60 text-center max-w-3xl mx-auto mb-20 leading-relaxed">
          Before we can build loyal AI, we must reclaim the word itself. In the digital economy,
          "loyalty" has been systematically redefined to serve corporate interests — not yours.
          The result: users are rightfully sceptical whenever a tech company invokes the concept.
        </p>

        {/* ── Four corruption examples ── */}
        <div className="gapc-corruption-grid grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
          {corruptionExamples.map((ex) => (
            <div
              key={ex.term}
              className="gapc-corruption-card group relative rounded-xl border border-rose-500/15 bg-rose-950/10 p-6 overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />

              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0 mt-0.5">{ex.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-rose-300 tracking-wide uppercase">
                      {ex.term}
                    </span>
                    <XCircle className="w-3.5 h-3.5 text-rose-400/60 shrink-0" />
                  </div>
                  <p className="text-white/80 text-sm italic mb-2">{ex.claim}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{ex.reality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Reclaim section ── */}
        <div className="gapc-reclaim-heading text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-cyan-400/80 border border-cyan-400/20 rounded-full px-4 py-1 mb-6">
            Reclaiming Loyalty
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Loyal Agent vs.{" "}
            <span className="text-white/40">General-Purpose AI</span>
          </h3>
          <p className="mt-4 text-white/50 text-base max-w-2xl mx-auto">
            A fiduciary is legally bound to act in your best interests — like a lawyer or doctor.
            System Loyalty applies this same standard to AI agents.
          </p>
        </div>

        {/* ── Contrast table ── */}
        <div className="gapc-contrast-table mb-8 rounded-2xl border border-white/8 overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-[2fr_3fr_3fr] bg-white/5 border-b border-white/8">
            <div className="px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white/30">
              Dimension
            </div>
            <div className="px-5 py-3 text-xs font-semibold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Loyal Agent
            </div>
            <div className="px-5 py-3 text-xs font-semibold uppercase tracking-widest text-rose-400/70 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" /> General-Purpose AI
            </div>
          </div>

          {/* Table rows */}
          {contrastRows.map((row, i) => (
            <div
              key={row.dimension}
              className={`gapc-contrast-row grid grid-cols-[2fr_3fr_3fr] border-b border-white/5 last:border-0 ${
                i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
              }`}
            >
              <div className="px-5 py-4 text-sm font-medium text-white/50 flex items-center">
                {row.dimension}
              </div>
              <div className="px-5 py-4 text-sm text-cyan-100/80 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400/60 shrink-0 mt-0.5" />
                {row.loyal}
              </div>
              <div className="px-5 py-4 text-sm text-rose-200/60 flex items-start gap-2">
                <XCircle className="w-4 h-4 text-rose-400/50 shrink-0 mt-0.5" />
                {row.general}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bridge to Act 3 ── */}
        <div className="gapc-bridge mt-20 text-center">
          <div className="inline-block border border-white/10 rounded-2xl px-8 py-6 bg-white/[0.03] max-w-2xl">
            <p className="text-white/70 text-base leading-relaxed">
              Reclaiming loyalty requires more than a definition — it requires a framework.
              The{" "}
              <span className="text-cyan-300 font-semibold">4-Pillar Framework</span>{" "}
              that follows identifies the four domains of human intelligence that a loyal agent
              must preserve, protect, and amplify — not replace.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
