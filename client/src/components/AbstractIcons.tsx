interface IconProps {
  className?: string;
}

export function AgenticIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" />
      <path d="M50 35 L50 25 M50 75 L50 65 M35 50 L25 50 M75 50 L65 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="50" r="5" fill="currentColor" />
    </svg>
  );
}

export function DignityIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 70 L50 30 L70 70 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
      <path d="M40 55 L60 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="40" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

export function AugmentationIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 50 Q40 30, 50 50 T70 50" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="30" cy="50" r="6" fill="currentColor" />
      <circle cx="50" cy="50" r="6" fill="currentColor" />
      <circle cx="70" cy="50" r="6" fill="currentColor" />
      <path d="M30 50 L30 70 M50 50 L50 70 M70 50 L70 70" stroke="currentColor" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
}

export function MestiereIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="35" width="50" height="40" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.05" />
      <path d="M35 45 L45 55 L65 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 25 L75 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IntellectIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 20 L50 80" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      <path d="M20 50 L80 50" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      <circle cx="50" cy="30" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
      <circle cx="30" cy="50" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
      <circle cx="70" cy="50" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
      <circle cx="50" cy="70" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3" />
      <path d="M50 38 L50 42 M50 58 L50 62 M38 50 L42 50 M58 50 L62 50" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function SocialIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="35" r="12" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
      <circle cx="65" cy="35" r="12" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
      <circle cx="50" cy="65" r="12" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
      <path d="M42 42 L50 55 M58 42 L50 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function EthicalIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      <path d="M50 20 L50 50 L70 60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
      <path d="M30 40 L35 45 M70 40 L65 45 M40 70 L45 65 M60 70 L55 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function OperationalIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.05" rx="4" />
      <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" />
      <path d="M50 35 L50 45 M50 55 L50 65 M35 50 L45 50 M55 50 L65 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="50" r="3" fill="currentColor" />
    </svg>
  );
}

export function LoyaltyIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 30 L35 45 L35 70 L50 80 L65 70 L65 45 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
      <path d="M42 50 L48 56 L58 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IntuitionIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 25 L50 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="55" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
      <path d="M35 65 Q50 75, 65 65" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M30 50 L35 55 M70 50 L65 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function GovernanceIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="40" width="40" height="35" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.05" />
      <path d="M25 40 L50 25 L75 40" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M35 50 L35 70 M45 50 L45 70 M55 50 L55 70 M65 50 L65 70" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    </svg>
  );
}

export function DataIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="35" rx="25" ry="10" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
      <path d="M25 35 L25 65 Q25 75, 50 75 Q75 75, 75 65 L75 35" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="50" cy="65" rx="25" ry="10" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.05" />
    </svg>
  );
}

export function ToolingIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 50 L45 35 L55 45 L70 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="45" cy="35" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
      <circle cx="70" cy="30" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2" />
      <path d="M40 60 L60 60 L60 75 L40 75 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
    </svg>
  );
}
