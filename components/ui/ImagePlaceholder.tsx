import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  aspect?: string;
  className?: string;
  label?: string;
}

/**
 * Espacio de imagen intencional y elegante, listo para reemplazar por una
 * fotografía definitiva. Si `src` está vacío muestra una superficie visual
 * de marca (gradiente + motivo de nodos). En desarrollo puede mostrar una
 * etiqueta identificadora del área.
 */
export function ImagePlaceholder({
  src,
  alt = "",
  aspect = "aspect-[3/2]",
  className,
  label,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-navy-950",
          aspect,
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-navy-950",
        aspect,
        className
      )}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-950 to-electric-900/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #22d3ee 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 200 140"
        className="absolute inset-0 m-auto h-2/3 w-2/3 opacity-20"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round">
          <path d="M100 70 L50 40" />
          <path d="M100 70 L150 40" />
          <path d="M100 70 L50 100" />
          <path d="M100 70 L150 100" />
          <path d="M100 70 L100 20" />
        </g>
        <circle cx="100" cy="70" r="10" fill="#22d3ee" />
        <circle cx="50" cy="40" r="5" fill="#67e8f9" />
        <circle cx="150" cy="40" r="5" fill="#67e8f9" />
        <circle cx="50" cy="100" r="5" fill="#67e8f9" />
        <circle cx="150" cy="100" r="5" fill="#67e8f9" />
        <circle cx="100" cy="20" r="5" fill="#67e8f9" />
      </svg>
      <div
        className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-electric-500/20 blur-2xl"
        aria-hidden="true"
      />
      {label && process.env.NODE_ENV === "development" ? (
        <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-navy-950/90 to-transparent p-4">
          <span className="text-xs font-medium text-slate-300">{label}</span>
        </div>
      ) : null}
    </div>
  );
}
