import { useEffect, useRef } from "react";
import { X, Linkedin, Mail } from "lucide-react";

interface AboutOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutOverlay({ isOpen, onClose }: AboutOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);


  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      data-lenis-prevent
      className={`fixed inset-0 z-[60] flex items-center justify-center px-4 transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.95)", backdropFilter: "blur(12px)" }}
      role="dialog"
      aria-modal={isOpen}
      aria-label="About Giorgio Natili"
      aria-hidden={!isOpen}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
        aria-label="Close"
        tabIndex={isOpen ? 0 : -1}
      >
        <X className="w-8 h-8" />
      </button>

      {/* Content */}
      <article className="max-w-2xl w-full max-h-[85vh] overflow-y-auto py-8 pr-2">
        <header className="mb-8">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400/60 mb-4">
            About the Author
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
            Giorgio Natili
          </h2>
          <p className="text-lg text-white/50 font-light">
            Technologist &middot; Ethicist &middot; Builder
          </p>
        </header>

        <div className="space-y-4 text-white/60 leading-relaxed mb-10">
          <p>
            Giorgio Natili is a technologist, ethicist, and builder working at
            the intersection of artificial intelligence, human dignity, and data
            sovereignty. Currently serving as Senior Director &amp; Head of AI
            Engineering for Oracle Cloud Support, he leads the design and
            deployment of AI-driven systems that make enterprise support smarter,
            faster, and more trustworthy at scale.
          </p>
          <p>
            His expertise in <span className="text-cyan-400/80">Sovereign AI</span> — the
            principle that individuals, organizations, and nations must retain
            meaningful control over their data, their models, and their
            AI-driven decisions — is grounded in years of hands-on work. At
            OPAQUE Systems, where he served as VP &amp; Head of Engineering, he
            architected confidential AI infrastructure that allowed
            organizations to extract intelligence from sensitive data without
            ever exposing it. That experience forged a core conviction:{" "}
            <em className="text-white/70">
              ethical AI and sovereign AI are not separate conversations — they
              are the same conversation.
            </em>
          </p>
          <p>
            With a career spanning Amazon, Mozilla, Capital One, OPAQUE Systems,
            and Oracle, Giorgio brings rare depth to the question of how AI
            systems can be powerful without being predatory. He holds patents in
            on-device machine learning for PII detection and has designed
            privacy-preserving pipelines across regulated industries including
            finance and healthcare.
          </p>
          <p>
            He is the published co-author of{" "}
            <em>The AI Advantage</em> and{" "}
            <em>The AI Universe</em> — both exploring how civilization can thrive
            within AI's next big disruption — and runs{" "}
            <span className="text-cyan-400/80">human-blueprint.ai</span>, a
            research platform dedicated to digital dignity, algorithmic
            accountability, and the rights of individuals in an increasingly
            automated world.
          </p>
          <p>
            Based in Seattle, Giorgio brings to every stage the rare combination
            of an engineer who has shipped production AI systems and a humanist
            who insists on asking <em>why</em>.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4" aria-label="Author links">
          <a
            href="https://www.linkedin.com/in/giorgionatili/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-cyan-500/40 text-cyan-400 rounded-full text-sm font-semibold hover:bg-cyan-500/10 transition-all"
            tabIndex={isOpen ? 0 : -1}
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <button
            onClick={() => {
              const u = ["g", ".", "n", "a", "t", "i", "l", "i"].join("");
              const d = ["g", "n", "s", "t", "u", "d", "i", "o", ".", "c", "o", "m"].join("");
              window.location.href = "mai" + "lto:" + u + "@" + d;
            }}
            className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 text-white/70 rounded-full text-sm font-semibold hover:bg-white/5 transition-all cursor-pointer"
            tabIndex={isOpen ? 0 : -1}
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </button>
        </nav>
      </article>
    </div>
  );
}
