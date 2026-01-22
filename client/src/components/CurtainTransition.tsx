import { useEffect, useRef, useState } from "react";

interface CurtainTransitionProps {
  children: React.ReactNode;
  threshold?: number;
}

export default function CurtainTransition({ children, threshold = 0.2 }: CurtainTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div ref={ref} className={isVisible ? "curtain-reveal" : "opacity-0"}>
      {children}
    </div>
  );
}
