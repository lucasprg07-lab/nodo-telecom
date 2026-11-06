import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { LOCALITIES } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CallToAction } from "@/components/home/CallToAction";
import { ExperienceAreas } from "@/components/home/ExperienceAreas";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "NODO Telecom es una empresa de servicios tecnológicos de Salta, Argentina, especializada en conectividad, redes e infraestructura.",
};

const values = [
  "Profesionalismo y conocimiento técnico.",
  "Calidad de instalación y prolijidad.",
  "Seguridad en cada trabajo.",
  "Atención personalizada.",
  "Resolución de problemas de conectividad.",
];

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 sm:py-20">
        <Container>
          <SectionHeading
            dark
            eyebrow="Nosotros"
            title="Una empresa tecnológica, no una instalación improvisada"
            description="Conectividad, redes e infraestructura con criterio profesional en Salta y alrededores."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6 text-slate-600">
            <p className="text-lg leading-relaxed">
              NODO Telecom es una empresa de servicios tecnológicos de Salta,
              Argentina, orientada a brindar soluciones de conectividad e
              infraestructura de redes para clientes residenciales, comerciales,
              rurales e industriales.
            </p>
            <p className="leading-relaxed">
              Creemos que una buena conexión no depende solo del proveedor:
              depende de una instalación correcta, una red bien planificada y un
              mantenimiento prolijo. Por eso trabajamos de forma integral, desde
              el relevamiento inicial hasta el soporte posterior.
            </p>
            <p className="leading-relaxed">
              Buscamos transmitir profesionalismo, confiabilidad y conocimiento
              técnico, con una atención cercana y directa en cada caso.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-navy-100">
              <Image
                src="/images/nosotros.png"
                alt="Técnico de NODO Telecom instalando equipos de conectividad en Salta"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl border border-navy-100 bg-slate-50 p-6">
              <h2 className="text-lg font-bold text-navy-900">
                Transparencia sobre el modelo Starlink
              </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              NODO Telecom no es un proveedor de internet ni un revendedor de
              planes Starlink. Vos contratás y mantenés tu propia suscripción de
              Starlink; nosotros realizamos el trabajo técnico: relevamiento,
              instalación, configuración, integración con tu red y soporte.
            </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Trayectoria"
            title="Experiencia que conecta. Soluciones que responden."
          />
          <div className="mt-6 space-y-4 text-slate-600">
            <p className="text-lg leading-relaxed">
              Detrás de NODO Telecom hay profesionales con más de cinco años de
              experiencia en el sector de las telecomunicaciones, participando
              en proyectos de conectividad e infraestructura tecnológica para
              entornos empresariales, industriales y mineros.
            </p>
            <p className="leading-relaxed">
              Nuestra trayectoria incluye trabajos de análisis, planificación
              técnica, documentación de proyectos, infraestructura de redes,
              sistemas de energía para telecomunicaciones y soluciones
              desarrolladas para entornos operativos exigentes.
            </p>
            <p className="leading-relaxed">
              Esta experiencia nos permite abordar cada proyecto con una visión
              integral: desde el relevamiento y el diseño de la solución hasta
              su implementación, configuración y puesta en servicio.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Cómo trabajamos"
              title="Criterios que nos definen"
            />
            <ul className="mt-6 space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-500" />
                  <span className="text-slate-700">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Cobertura"
              title="Zona de cobertura inicial"
              description="Localidades del Valle de Lerma y alrededores. Otras localidades del interior sujetas a disponibilidad y coordinación."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {LOCALITIES.map((locality) => (
                <span
                  key={locality}
                  className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-navy-700 ring-1 ring-navy-100"
                >
                  {locality}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ExperienceAreas />
      <CallToAction />
    </>
  );
}
