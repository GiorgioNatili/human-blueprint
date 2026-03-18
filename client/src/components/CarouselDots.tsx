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
 * Renders a row of dot indicators for a GSAP-pinned horizontal carousel.
 *
 * Key behaviours:
 * - Only visible while its own carousel is pinned in the viewport (isActive).
 *   All other carousels' dots are hidden, preventing the overlap issue.
 * - Uses a React Portal into document.body to stay outside GSAP-pinned DOM.
 * - Active dot expands to a pill shape; inactive dots are small circles.
 */
export default function CarouselDots({ count, triggerEl, className = "" }: CarouselDotsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const stRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!triggerEl || count < 2) return;

    stRef.current = ScrollTrigger.create({
      trigger: triggerEl,
      start: "top top",
      end: () => "+=" + triggerEl.offsetWidth,
      onEnter: () => setIsActive(true),
      onLeave: () => setIsActive(false),
      onEnterBack: () => setIsActive(true),
      onLeaveBack: () => setIsActive(false),
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

  return createPortal(
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-2 pointer-events-none
        transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"} ${className}`}
      aria-label={`Slide ${activeIndex + 1} of ${count}`}
      role="status"
      aria-hidden={!isActive}
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
