/** Divisor decorativo entre bloques de la home. */
export function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-br from-cyan-400 to-violet-500" />
    </div>
  );
}
