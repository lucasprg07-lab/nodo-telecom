import { benefits } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Benefits() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
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
                <div className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-electric-50 text-electric-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-navy-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
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
