import { CheckCircle2 } from "lucide-react";
import { benefits } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const enfoque = [
  "Relevamiento del lugar antes de instalar.",
  "Instalación y fijación profesional de equipos.",
  "Integración con tu red y tus dispositivos.",
  "Organización de cableado e infraestructura.",
  "Configuración de Wi-Fi y optimización de cobertura.",
  "Acompañamiento y soporte técnico.",
];

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

export function PorQueNodo() {
  return (
    <section className="section-glow py-14 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Por qué NODO Telecom"
          title="Beneficios de trabajar con nosotros"
          description="Un servicio técnico integral que va más allá de la instalación de un equipo."
        />

        <Reveal>
          <ul className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <li key={b.title} className="card flex gap-4">
                  <Icon className="h-6 w-6 shrink-0 text-cyan-400" />
                  <div>
                    <h3 className="font-semibold text-white">{b.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{b.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal>
          <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-violet-500/10 p-5 sm:mt-14 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
              No solo instalamos una antena
            </h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 sm:gap-3">
              {enfoque.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 sm:mt-14">
            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
              Un proceso claro, de punta a punta
            </h3>
            <ol className="no-scrollbar -mx-4 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4">
              {pasos.map((paso, i) => (
                <li
                  key={paso.titulo}
                  className="min-w-[13rem] shrink-0 snap-start rounded-xl border border-white/10 bg-white/5 p-4 md:min-w-0"
                >
                  <span className="font-mono text-sm text-cyan-400">0{i + 1}</span>
                  <h4 className="mt-1 font-semibold text-white">{paso.titulo}</h4>
                  <p className="mt-1 text-sm text-slate-300">{paso.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
