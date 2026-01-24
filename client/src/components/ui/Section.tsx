import { cn } from "@/lib/utils";
import { ReactNode, forwardRef } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, fullHeight = false, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full py-24 md:py-32 overflow-hidden",
          fullHeight && "min-h-screen flex flex-col justify-center",
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
