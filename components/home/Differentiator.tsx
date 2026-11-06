import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  "Relevamiento del lugar antes de instalar.",
  "Instalación y fijación profesional de equipos.",
  "Integración con tu red y tus dispositivos.",
  "Organización de cableado e infraestructura.",
  "Configuración de Wi-Fi y optimización de cobertura.",
  "Acompañamiento y soporte técnico.",
];

export function Differentiator() {
  return (
    <section className="bg-navy-950 py-16 sm:py-24">
      <Reveal>
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-electric-400">
            Nuestro enfoque
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            No solo instalamos una antena
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Integramos la conectividad con la infraestructura de red del
            cliente, buscando una solución completa y funcional.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-400" />
              <span className="text-sm text-slate-200">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
      </Reveal>
    </section>
  );
}
