import Image from "next/image";
import {
  Gauge,
  ShieldCheck,
  Layers,
  SatelliteDish,
  Activity,
  LifeBuoy,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { NetworkDiagram } from "@/components/ui/NetworkDiagram";

const beneficios = [
  { titulo: "Mayor capacidad", desc: "Se suma la capacidad de los enlaces.", icon: Gauge },
  { titulo: "Redundancia", desc: "Si un terminal falla, la conexión sigue.", icon: ShieldCheck },
  { titulo: "Escalable", desc: "Se agregan terminales según la necesidad.", icon: Layers },
  {
    titulo: "Sin infraestructura terrestre",
    desc: "Ideal para zonas sin cobertura de red.",
    icon: SatelliteDish,
  },
  { titulo: "Monitoreo remoto", desc: "Seguimiento de la operación a distancia.", icon: Activity },
  { titulo: "Soporte técnico", desc: "Acompañamiento continuo.", icon: LifeBuoy },
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
    <section id="alta-capacidad" className="section-glow scroll-mt-24 py-14 sm:py-24">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-violet-300 sm:text-sm">
            Servicio destacado
          </p>
          <h2 className="mt-2 font-display text-[1.75rem] font-bold leading-tight md:text-5xl">
            Alta capacidad satelital:{" "}
            <span className="grad-text">múltiples Starlink en una sola conexión</span>
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Sumamos la capacidad de varios terminales Starlink para operaciones
            que necesitan más velocidad y continuidad, en zonas sin
            infraestructura terrestre.
          </p>
        </Reveal>

        <Reveal>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 md:mt-12 md:gap-6 lg:grid-cols-3">
            {beneficios.map((b) => {
              const Icon = b.icon;
              return (
                <li
                  key={b.titulo}
                  className="flex flex-col gap-2 md:rounded-2xl md:border md:border-white/10 md:bg-white/5 md:p-6"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 md:h-10 md:w-10">
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                  </span>
                  <h3 className="text-sm font-semibold text-white md:text-base">
                    {b.titulo}
                  </h3>
                  <p className="text-xs text-slate-400 md:text-sm md:text-slate-300">
                    {b.desc}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <div className="mt-10 grid gap-8 md:mt-12 lg:grid-cols-2 lg:items-center lg:gap-10">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:aspect-[4/3]">
              <Image
                src="/images/solutions/alta-capacidad.webp"
                alt="Solución de alta capacidad satelital con múltiples terminales (imagen ilustrativa)"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <p className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-xs text-slate-200">
                Imagen ilustrativa
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Cómo lo hacemos
              </h3>
              <div className="relative mt-5">
                <span
                  aria-hidden="true"
                  className="absolute bottom-2 left-[0.4375rem] top-2 w-px bg-gradient-to-b from-cyan-400 to-violet-500"
                />
                <ol className="space-y-4">
                  {pasos.map((p, i) => (
                    <li key={p} className="relative flex items-center gap-3 pl-7">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-cyan-400 bg-[#070d17]"
                      />
                      <span className="font-mono text-sm text-cyan-400">
                        0{i + 1}
                      </span>
                      <span className="text-slate-300">{p}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <p className="mt-6 text-xs text-slate-500">
                La capacidad final depende de la cantidad de terminales, la
                ubicación, el plan y las condiciones de cada sitio. Los planes de
                Starlink se contratan directamente con Starlink.
              </p>
            </div>

            <NetworkDiagram
              className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4"
              inputs={[
                { label: "Starlink 1", kind: "sat" },
                { label: "Starlink 2", kind: "sat" },
                { label: "Starlink 3", kind: "sat" },
                { label: "Starlink 4", kind: "sat" },
                { label: "Starlink 5", kind: "sat" },
                { label: "Starlink 6", kind: "sat" },
              ]}
              outputLabel="Operación"
              ariaLabel="Varios terminales satelitales convergen en un router central y salen hacia la operación"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
