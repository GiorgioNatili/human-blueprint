import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CarouselDotsProps {
  /** Total number of slides in the carousel */
  count: number;
  /**
   * The GSAP ScrollTrigger trigger element — the pinned scroll container.
   * Pass the ref.current value after mount.
   */
  triggerEl: HTMLElement | null;
  /** Optional extra className for the wrapper */
  className?: string;
}

/**
 * CarouselDots
 *
 * Renders a row of dot indicators that reflect the current slide position
 * in a GSAP-pinned horizontal carousel. The active dot is determined by
 * reading the ScrollTrigger progress on every scroll tick.
 *
 * Usage:
 *   <CarouselDots count={5} triggerEl={scrollContainerRef.current} />
 *
 * The component is self-contained — it creates its own ScrollTrigger
 * observer that mirrors the parent carousel's trigger element, so no
 * changes to the parent's GSAP context are required.
 */
export default function CarouselDots({ count, triggerEl, className = "" }: CarouselDotsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!triggerEl || count < 2) return;

    // Create a read-only ScrollTrigger that mirrors the carousel's pinned section.
    // We use onUpdate to map the 0–1 progress to a discrete slide index.
    stRef.current = ScrollTrigger.create({
      trigger: triggerEl,
      start: "top top",
      end: () => "+=" + triggerEl.offsetWidth,
      onUpdate: (self) => {
        // Clamp to avoid floating-point overshoot
        const clamped = Math.min(Math.max(self.progress, 0), 1);
        const index = Math.round(clamped * (count - 1));
        setActiveIndex(index);
      },
    });

    return () => {
      stRef.current?.kill();
      stRef.current = null;
    };
  }, [triggerEl, count]);

  if (count < 2) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 pointer-events-none ${className}`}
      aria-label={`Slide ${activeIndex + 1} of ${count}`}
      role="status"
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`block rounded-full transition-all duration-300 ${
            i === activeIndex
              ? "w-5 h-2 bg-white"
              : "w-2 h-2 bg-white/30"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
