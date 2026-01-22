import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  act?: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Introduction" },
  { id: "problem", label: "The Problem Space", act: "Act I" },
  { id: "blueprint", label: "The Human Blueprint", act: "Act II" },
  { id: "framework", label: "4-Pillar Framework", act: "Act III" },
  { id: "loyalty", label: "The Loyalty Advantage", act: "Act IV" },
  { id: "intuition", label: "The Intuition Gap", act: "Act V" },
];

export default function ParallaxNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero
      setIsScrolled(window.scrollY > 100);

      // Find active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i]!.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed nav height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Title */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <span className="text-xl font-bold text-primary">HB</span>
            </div>
            <span className="font-serif text-lg font-semibold hidden md:block">
              The Human Blueprint
            </span>
          </button>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all relative group",
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.act && (
                  <span className="text-xs opacity-60 block">{item.act}</span>
                )}
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Indicator */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="text-xs text-muted-foreground">
              {navItems.find(item => item.id === activeSection)?.act}
            </div>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{
            width: `${Math.min(
              ((window.scrollY /
                (document.documentElement.scrollHeight - window.innerHeight)) *
                100),
              100
            )}%`,
          }}
        />
      </div>
    </nav>
  );
}
