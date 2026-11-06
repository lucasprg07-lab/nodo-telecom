import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={`/servicios#${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-electric-300 hover:shadow-md"
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-electric-400">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-navy-900 transition group-hover:text-electric-600">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm text-slate-600">
        {service.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600">
        Ver detalles
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
