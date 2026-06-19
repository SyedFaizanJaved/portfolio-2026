import { cn } from "@/utils/cn";

interface GradientCoverProps {
  gradient: [string, string];
  label: string;
  sublabel?: string;
  className?: string;
}

/**
 * Tasteful placeholder "cover" image rendered with CSS gradients + a mesh
 * overlay. Swap for a real <img> later by replacing this component.
 */
export function GradientCover({
  gradient,
  label,
  sublabel,
  className,
}: GradientCoverProps) {
  const [from, to] = gradient;
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
      }}
      role="img"
      aria-label={`${label} cover`}
    >
      {/* mesh / grid overlay */}
      <div className="absolute inset-0 bg-grid-faint bg-[size:34px_34px] opacity-20 mix-blend-overlay" />
      <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-black/20 blur-2xl" />
      <div className="relative z-10 px-6 text-center">
        <p className="font-display text-3xl font-bold tracking-tight text-white drop-shadow sm:text-4xl">
          {label}
        </p>
        {sublabel && (
          <p className="mt-1 text-sm font-medium text-white/80">{sublabel}</p>
        )}
      </div>
    </div>
  );
}
