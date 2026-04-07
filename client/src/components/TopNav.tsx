import { useEffect, useState } from "react";
import { User, FileDown } from "lucide-react";

interface TopNavProps {
  onAboutClick: () => void;
}

export default function TopNav({ onAboutClick }: TopNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToResources = () => {
    const el = document.getElementById("section-resources");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">
        {/* Left: site title */}
        <button
          onClick={scrollToTop}
          className="font-heading text-lg font-bold tracking-tight text-white/60 hover:text-white transition-colors"
          aria-label="Back to top"
        >
          H<span className="text-cyan-400/70">B</span>
        </button>

        {/* Right: links */}
        <div className="flex items-center gap-6">
          <button
            onClick={onAboutClick}
            className="flex items-center gap-1.5 text-xs font-mono tracking-[0.2em] uppercase text-white/50 hover:text-cyan-400 transition-colors"
          >
            <User className="w-3.5 h-3.5" />
            About
          </button>
          <button
            onClick={scrollToResources}
            className="flex items-center gap-1.5 text-xs font-mono tracking-[0.2em] uppercase text-white/50 hover:text-cyan-400 transition-colors"
          >
            <FileDown className="w-3.5 h-3.5" />
            Research
          </button>
        </div>
      </div>
    </nav>
  );
}
