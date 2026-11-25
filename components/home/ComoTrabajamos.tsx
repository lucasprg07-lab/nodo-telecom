import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const pasos = [
  {
    titulo: "Relevamiento",
    desc: "Evaluamos el lugar, la visibilidad del cielo y las necesidades reales.",
  },
  {
    titulo: "Propuesta",
    desc: "Te presentamos una solución clara con alcance, materiales y costos.",
  },
  {
    titulo: "Instalación",
    desc: "Instalamos, integramos y configuramos todo con criterio profesional.",
  },
  {
    titulo: "Soporte",
    desc: "Te acompañamos después de la instalación para que todo siga funcionando.",
  },
];

export function ComoTrabajamos() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso claro, de punta a punta"
          description="Cuatro pasos para llevar conectividad confiable a tu espacio."
        />
        <div className="relative mt-12">
          <div
            className="pointer-events-none absolute left-6 right-6 top-[2.625rem] hidden h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pasos.map((paso, i) => (
              <Reveal key={paso.titulo} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <span className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/40 bg-navy-950 font-mono text-sm text-cyan-300">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-semibold text-white">{paso.titulo}</h3>
                  <p className="mt-2 text-sm text-slate-300">{paso.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}