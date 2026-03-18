import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
 * in a GSAP-pinned horizontal carousel.
 *
 * Uses a React Portal to render into document.body, which keeps the dots
 * completely outside the GSAP-pinned DOM subtree. This prevents the
 * "insertBefore" React reconciler error caused by GSAP moving pinned nodes.
 *
 * Usage:
 *   <CarouselDots count={5} triggerEl={scrollContainerRef.current} />
 */
export default function CarouselDots({ count, triggerEl, className = "" }: CarouselDotsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!triggerEl || count < 2) return;

    // Mirror the carousel's pinned section with a read-only ScrollTrigger.
    // onUpdate maps 0–1 progress to a discrete slide index.
    stRef.current = ScrollTrigger.create({
      trigger: triggerEl,
      start: "top top",
      end: () => "+=" + triggerEl.offsetWidth,
      onUpdate: (self) => {
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

  if (count < 2 || !triggerEl) return null;

  // Portal renders into document.body — completely outside any GSAP-pinned subtree.
  return createPortal(
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-2 pointer-events-none ${className}`}
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
    </div>,
    document.body
  );
}
