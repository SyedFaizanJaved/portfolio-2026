import { cn } from "@/utils/cn";

/** Ambient animated aurora-gradient field used behind sections. */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute -left-1/4 top-0 h-[40rem] w-[40rem] rounded-full bg-brand-blue/10 blur-[130px] animate-aurora" />
      <div className="absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-brand-violet/10 blur-[130px] animate-aurora [animation-delay:-9s]" />
    </div>
  );
}
