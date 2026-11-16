import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={`/servicios#${service.slug}`}
      className={`group flex h-full flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
        service.featured
          ? "border-cyan-400/40 bg-cyan-400/5 hover:border-cyan-300 hover:shadow-cyan-500/10"
          : "border-white/10 bg-white/5 hover:border-cyan-400/40"
      }`}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white transition group-hover:text-cyan-300">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm text-slate-300">
        {service.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400">
        Ver detalles
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
