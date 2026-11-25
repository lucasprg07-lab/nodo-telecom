import Link from "next/link";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { services } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/icons";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#070d17] text-slate-300">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
      />
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo inverted />
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {siteConfig.descriptor}. {siteConfig.slogan}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Soluciones de conectividad, redes e infraestructura tecnológica
              en Salta y alrededores.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition md:hover:text-electric-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-slate-300 transition md:hover:text-electric-400"
                >
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios#${service.slug}`}
                    className="text-sm text-slate-300 transition md:hover:text-electric-400"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                {siteConfig.location}
              </li>
              <li>
                <a
                  href={buildWhatsAppLink(siteConfig.whatsappDefaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition md:hover:text-electric-400"
                >
                  <WhatsAppIcon className="h-4 w-4 text-electric-400" />
                  WhatsApp
                </a>
              </li>
              {siteConfig.email ? (
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition md:hover:text-electric-400"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              ) : null}
            </ul>

            <SocialLinks className="mt-5" />
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p>
            <Link
              href="/privacidad"
              className="transition md:hover:text-electric-400"
            >
              Aviso de privacidad
            </Link>
            {" · "}
            {siteConfig.location}
          </p>
        </Container>
        <Container className="pb-6">
          <p className="text-[11px] leading-relaxed text-slate-400">
            NODO Telecom es una empresa independiente y no es distribuidor
            oficial de Starlink. Starlink es una marca de sus respectivos
            titulares.
          </p>
        </Container>
      </div>
    </footer>
  );
}
