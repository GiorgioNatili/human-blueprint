import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, Presentation, BookOpen, ExternalLink, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ─── Resource data ────────────────────────────────────────────────────────────

const resources = [
  {
    id: "research",
    Icon: BookOpen,
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    bgColor: "bg-cyan-950/20",
    accentColor: "text-cyan-400",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    badge: "Research Foundation",
    title: "The Human Blueprint",
    subtitle: "Full Academic Research Report",
    description: "80+ pages of peer-reviewed research covering the Intuition Gap, the 4-Pillar Framework, cross-industry case studies, and the implementation guide for organisations.",
    meta: "PDF · 485 KB · Academic edition",
    url: "/assets/research-foundation-the-human-blueprint.pdf",
    filename: "research-foundation-the-human-blueprint.pdf",
  },
  {
    id: "presentation",
    Icon: Presentation,
    iconColor: "text-violet-400",
    borderColor: "border-violet-500/30",
    bgColor: "bg-violet-950/20",
    accentColor: "text-violet-400",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/30",
    badge: "Public Edition",
    title: "Presentation Slides",
    subtitle: "The Human Blueprint — Speaker Deck",
    description: "The complete public presentation: all five acts, the Digital Dignity framework, the Adversarial Collaboration model, and the 4-Pillar Framework in slide format.",
    meta: "PDF · 372 KB · Presentation edition",
    url: "/assets/public-presentation-edition-slides.pdf",
    filename: "public-presentation-edition-slides.pdf",
  },
  {
    id: "japanese",
    Icon: FileText,
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-950/20",
    accentColor: "text-emerald-400",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    badge: "Companion Research",
    title: "Design Principles for the Agentic Age",
    subtitle: "Japanese Minimalism & Human-AI Interface Design",
    description: "A companion research document exploring how Japanese aesthetic principles — Ma, Wabi-sabi, and Ichi-go ichi-e — apply to human-AI interface design and Digital Dignity.",
    meta: "PDF · 128 KB · Design research",
    url: "/assets/design-principles-for-the-agentic-age.pdf",
    filename: "design-principles-for-the-agentic-age.pdf",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function GapF() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading fade-in
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      // Cards staggered reveal
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        });
      }

      // CTA fade-in
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="section-resources"
      className="relative z-10 py-32 bg-black border-t border-white/5"
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container px-4 relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-20">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400/60 mb-4 block">
            Resources & Downloads
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Take the Research With You
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Every document below is free to download, share, and cite. The research is only useful if it travels.
          </p>
        </div>

        {/* Resource cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {resources.map((res) => (
            <div
              key={res.id}
              className={`group relative flex flex-col rounded-2xl border ${res.borderColor} ${res.bgColor} p-8 transition-all duration-300 hover:scale-[1.02] hover:border-opacity-60`}
            >
              {/* Badge */}
              <div className="mb-6">
                <span className={`text-xs font-mono tracking-[0.2em] uppercase px-3 py-1 rounded-full border ${res.badgeColor}`}>
                  {res.badge}
                </span>
              </div>

              {/* Icon */}
              <res.Icon className={`w-10 h-10 ${res.iconColor} mb-5`} aria-hidden="true" />

              {/* Title */}
              <h3 className={`font-heading text-xl font-bold mb-1 ${res.accentColor}`}>
                {res.title}
              </h3>
              <p className="text-sm text-white/50 mb-4 font-medium">{res.subtitle}</p>

              {/* Description */}
              <p className="text-sm text-white/40 leading-relaxed flex-grow mb-6">
                {res.description}
              </p>

              {/* Meta + download CTA */}
              <div className="mt-auto">
                <p className="text-xs text-white/25 font-mono mb-4">{res.meta}</p>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${res.accentColor} group-hover:gap-3 transition-all`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Open PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div ref={ctaRef} className="text-center border-t border-white/5 pt-16">
          <p className="text-white/30 text-sm font-mono tracking-widest uppercase mb-6">
            Speaking · Consulting · Collaboration
          </p>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Bring This Research to Your Organisation
          </h3>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Giorgio Natili delivers keynotes, workshops, and advisory sessions on human-AI collaboration and Digital Dignity.
          </p>
          <a
            href="mailto:g.natili@gnstudio.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 rounded-full transition-all duration-300 font-bold text-base hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>

          {/* Disclaimer */}
          <p className="text-xs text-white/20 max-w-2xl mx-auto mt-16 leading-relaxed">
            Disclaimer: This content was produced with AI assistance under human oversight and represents the personal opinions of Giorgio Natili. It is intended for educational and discussion purposes only.
          </p>
        </div>
      </div>
    </section>
  );
}
