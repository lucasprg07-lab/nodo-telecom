import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  const Icon = service.icon;

  if (service.featured) {
    return (
      <Link
        href={`/servicios#${service.slug}`}
        className={cn(
          "group block h-full rounded-2xl bg-gradient-to-br from-cyan-400/70 via-white/10 to-violet-500/70 p-px shadow-[0_0_48px_rgba(34,211,238,0.12)] transition-shadow duration-300 md:hover:shadow-[0_0_64px_rgba(139,92,246,0.22)]",
          className
        )}
      >
        <div className="spotlight flex h-full flex-col overflow-hidden rounded-[calc(1rem-1px)] bg-[#0a1220]">
          {service.image ? (
            <div className="relative hidden w-full overflow-hidden md:block md:aspect-[21/9] lg:aspect-auto lg:min-h-[14rem] lg:flex-1">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 md:group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0a1220] via-[#0a1220]/30 to-transparent"
              />
            </div>
          ) : null}
          <div className="relative flex flex-1 flex-col p-6 lg:flex-none lg:p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-300">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-white lg:text-2xl">
              {service.name}
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-300 lg:text-base">
              {service.shortDescription}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.applications.map((app) => (
                <li
                  key={app}
                  className="rounded-full border border-cyan-400/30 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-cyan-300"
                >
                  {app}
                </li>
              ))}
            </ul>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300">
              Ver detalles
              <ArrowRight className="h-4 w-4 transition-transform md:group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/servicios#${service.slug}`}
      className={cn(
        "spotlight group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 md:hover:border-cyan-400/40 md:hover:-translate-y-1",
        className
      )}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition duration-300 md:group-hover:bg-cyan-400/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white transition md:group-hover:text-cyan-300">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm text-slate-300">
        {service.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400">
        Ver detalles
        <ArrowRight className="h-4 w-4 transition-transform md:group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

