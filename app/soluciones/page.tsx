import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { solutions } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FlotasEmbarcaciones } from "@/components/home/FlotasEmbarcaciones";
import { AltaCapacidad } from "@/components/home/AltaCapacidad";
import { CallToAction } from "@/components/home/CallToAction";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "Soluciones de conectividad por tipo de cliente: hogares, comercios, cabañas, viviendas rurales, establecimientos productivos y empresas.",
};

export default function SolucionesPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Soluciones"
            title="Conectividad para cada tipo de cliente"
            description="Cada espacio tiene necesidades distintas. Estas son las soluciones que podemos adaptar a tu caso."
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Reveal key={solution.title} delay={index * 75} className="h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    {solution.image ? (
                      <div className="relative aspect-[16/9] w-full shrink-0">
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="mt-4 text-lg font-bold text-white">
                        {solution.title}
                      </h2>
                      <p className="mt-2 text-sm text-slate-300">
                        {solution.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {solution.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-slate-300"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
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

      <FlotasEmbarcaciones />
      <AltaCapacidad />
      <CallToAction />
    </>
  );
}
