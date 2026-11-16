import { benefits } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Benefits() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Por qué NODO Telecom"
          title="Beneficios de trabajar con nosotros"
          description="Un servicio técnico integral que va más allá de la instalación de un equipo."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.title} delay={index * 75} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
