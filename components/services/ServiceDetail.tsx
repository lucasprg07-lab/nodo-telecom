import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceDetail({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;
  const reverse = index % 2 === 1;

  return (
    <Reveal>
      <article
        id={service.slug}
        className="grid scroll-mt-24 gap-10 lg:grid-cols-2 lg:items-center"
      >
      <div className={cn("space-y-6", reverse && "lg:order-2")}>
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-electric-400">
          <Icon className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
          {service.name}
        </h2>
        <p className="text-slate-600">{service.description}</p>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-500">
            Beneficios
          </h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2 text-sm text-slate-700"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-500">
            Aplicaciones habituales
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {service.applications.map((application) => (
              <span
                key={application}
                className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700"
              >
                {application}
              </span>
            ))}
          </div>
        </div>

        <Button href="/presupuesto" size="lg">
          Solicitar presupuesto
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className={cn(reverse && "lg:order-1")}>
        {service.image ? (
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-navy-100 bg-navy-950">
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-navy-100 bg-navy-950 sm:h-80">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #22d3ee 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-500/10 blur-2xl"
              aria-hidden="true"
            />
            <Icon className="relative h-24 w-24 text-electric-400" strokeWidth={1.2} />
          </div>
        )}
      </div>
      </article>
    </Reveal>
  );
}
