import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Diagram } from "@/components/ui/Diagram";

const beneficios = [
  { titulo: "Mayor capacidad", desc: "Se suma la capacidad de los enlaces." },
  { titulo: "Redundancia", desc: "Si un terminal falla, la conexión sigue." },
  { titulo: "Escalable", desc: "Se agregan terminales según la necesidad." },
  {
    titulo: "Sin infraestructura terrestre",
    desc: "Ideal para zonas sin cobertura de red.",
  },
  { titulo: "Monitoreo remoto", desc: "Seguimiento de la operación a distancia." },
  { titulo: "Soporte técnico", desc: "Acompañamiento continuo." },
];

const pasos = [
  "Relevamiento",
  "Diseño de la solución",
  "Shelter/estructura e instalación",
  "Configuración",
  "Monitoreo y soporte",
];

export function AltaCapacidad() {
  return (
    <section
      id="alta-capacidad"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <Reveal>
        <p className="text-sm uppercase tracking-widest text-violet-400">
          Servicio destacado
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">
          Alta capacidad satelital:{" "}
          <span className="grad-text">múltiples Starlink en una sola conexión</span>
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Sumamos la capacidad de varios terminales Starlink para operaciones
          que necesitan más velocidad y continuidad, en zonas sin
          infraestructura terrestre.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {beneficios.map((b, i) => (
          <Reveal key={b.titulo} delay={i * 60}>
            <div className="card h-full">
              <h3 className="font-semibold text-white">{b.titulo}</h3>
              <p className="mt-2 text-sm text-slate-300">{b.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src="/images/solutions/alta-capacidad.webp"
              alt="Solución de alta capacidad satelital con múltiples terminales (imagen ilustrativa)"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <p className="absolute bottom-3 left-3 rounded bg-black/50 px-2 py-1 text-xs text-slate-200">
              Imagen ilustrativa
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <h3 className="text-xl font-semibold text-white">
              Cómo lo hacemos
            </h3>
            <ol className="mt-4 space-y-3">
              {pasos.map((p, i) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="font-mono text-sm text-cyan-400">
                    0{i + 1}
                  </span>
                  <span className="text-slate-300">{p}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs text-slate-500">
              La capacidad final depende de la cantidad de terminales, la
              ubicación, el plan y las condiciones de cada sitio. Los planes de
              Starlink se contratan directamente con Starlink.
            </p>
          </div>

          <Diagram className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
            <svg
              viewBox="0 0 400 180"
              className="diagram w-full"
              role="img"
              aria-label="Varios terminales satelitales convergen en un router central y salen hacia la operación"
            >
              <circle className="seg" cx="50" cy="40" r="4" fill="#22d3ee" style={{ transitionDelay: "0.1s" }} />
              <path className="seg" d="M40 52 a12 12 0 0 1 20 0" stroke="#22d3ee" fill="none" strokeWidth="1.5" style={{ transitionDelay: "0.1s" }} />
              <circle className="seg" cx="50" cy="90" r="4" fill="#22d3ee" style={{ transitionDelay: "0.2s" }} />
              <path className="seg" d="M40 102 a12 12 0 0 1 20 0" stroke="#22d3ee" fill="none" strokeWidth="1.5" style={{ transitionDelay: "0.2s" }} />
              <circle className="seg" cx="50" cy="140" r="4" fill="#22d3ee" style={{ transitionDelay: "0.3s" }} />
              <path className="seg" d="M40 152 a12 12 0 0 1 20 0" stroke="#22d3ee" fill="none" strokeWidth="1.5" style={{ transitionDelay: "0.3s" }} />
              <line className="seg" x1="74" y1="40" x2="185" y2="90" stroke="#8b5cf6" strokeWidth="1.5" style={{ transitionDelay: "0.35s" }} />
              <line className="seg" x1="74" y1="90" x2="185" y2="90" stroke="#8b5cf6" strokeWidth="1.5" style={{ transitionDelay: "0.45s" }} />
              <line className="seg" x1="74" y1="140" x2="185" y2="90" stroke="#8b5cf6" strokeWidth="1.5" style={{ transitionDelay: "0.55s" }} />
              <rect className="seg" x="185" y="76" width="40" height="28" rx="6" fill="none" stroke="#22d3ee" strokeWidth="1.5" style={{ transitionDelay: "0.6s" }} />
              <line className="seg" x1="225" y1="90" x2="320" y2="90" stroke="#22d3ee" strokeWidth="1.5" style={{ transitionDelay: "0.7s" }} />
              <rect className="seg" x="320" y="70" width="70" height="40" rx="8" fill="none" stroke="#8b5cf6" strokeWidth="1.5" style={{ transitionDelay: "0.8s" }} />
              <text className="seg" x="355" y="94" fill="#e8eef7" fontSize="11" textAnchor="middle" style={{ transitionDelay: "0.8s" }}>
                Operación
              </text>
            </svg>
          </Diagram>
        </Reveal>
      </div>
    </section>
  );
}