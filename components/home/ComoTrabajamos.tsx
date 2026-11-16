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
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pasos.map((paso, i) => (
            <Reveal key={paso.titulo} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="font-mono text-sm text-cyan-400">0{i + 1}</span>
                <h3 className="mt-3 font-semibold text-white">{paso.titulo}</h3>
                <p className="mt-2 text-sm text-slate-300">{paso.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}