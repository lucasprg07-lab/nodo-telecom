import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M20 20 V8" />
        <path d="M20 20 L31 26" />
        <path d="M20 20 L9 26" />
      </g>
      <circle cx="20" cy="8" r="3.4" fill="currentColor" />
      <circle cx="31" cy="26" r="3.4" fill="currentColor" />
      <circle cx="9" cy="26" r="3.4" fill="currentColor" />
      <circle cx="20" cy="20" r="5.4" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark
        className={cn(
          "h-8 w-8",
          inverted ? "text-electric-400" : "text-electric-500"
        )}
      />
      <span
        className={cn(
          "text-lg font-extrabold tracking-tight",
          inverted ? "text-white" : "text-navy-900"
        )}
      >
        NODO
        <span className={inverted ? "text-electric-400" : "text-electric-600"}>
          {" "}
          Telecom
        </span>
      </span>
    </span>
  );
}
