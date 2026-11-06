import { globalReach } from "@/lib/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function GlobalReach() {
  return (
    <section className="bg-navy-950 py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              dark
              align="left"
              eyebrow="Alcance"
              title="Conectividad local. Alcance global."
              description="Desde nuestra base en Salta, Argentina, coordinamos soluciones de conectividad para proyectos locales, nacionales e internacionales. Evaluamos cada necesidad y articulamos los recursos técnicos y tecnológicos necesarios para conectar empresas, establecimientos y ubicaciones remotas."
            />
            <div className="mt-8 space-y-4">
              {globalReach.map((level) => {
                const Icon = level.icon;
                return (
                  <div
                    key={level.title}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-500/15 text-electric-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{level.title}</p>
                      <p className="text-sm text-slate-300">
                        {level.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <ImagePlaceholder
              src=""
              alt="Conectividad satelital y alcance global"
              aspect="aspect-[16/10]"
              className="rounded-2xl border border-white/10"
              label="Conectividad satelital y alcance global"
            />
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              <p className="font-semibold text-white">Sobre Starlink</p>
              <p className="mt-1 leading-relaxed">
                Starlink opera a nivel internacional con cobertura en numerosos
                países y mercados. La disponibilidad del servicio, los planes y
                las condiciones de contratación dependen del país y la
                ubicación del proyecto. Cada solicitud está sujeta a verificación
                de cobertura, condiciones regulatorias y disponibilidad
                comercial.
              </p>
              <p className="mt-2 text-slate-400">
                NODO Telecom no es distribuidor oficial, representante autorizado
                ni instalador oficial de Starlink, ni proveedor de internet ni
                revendedor de planes.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
