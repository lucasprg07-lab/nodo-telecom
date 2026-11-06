import { CheckCircle2 } from "lucide-react";
import { experienceAreas } from "@/lib/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function ExperienceAreas() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Experiencia profesional"
          title="Cuatro áreas de experiencia técnica"
          description="Trayectoria previa de los profesionales detrás de NODO Telecom, aplicada a proyectos exigentes."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {experienceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} delay={index * 75} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
                  <ImagePlaceholder
                    src={area.image}
                    alt={area.imageAlt}
                    aspect="aspect-[16/9]"
                    className="shrink-0"
                    label={area.title}
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-electric-50 text-electric-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-navy-900">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {area.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {area.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
