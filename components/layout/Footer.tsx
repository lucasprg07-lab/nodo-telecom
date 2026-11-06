import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { services } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/icons";

const socialItems: {
  key: keyof typeof siteConfig.social;
  label: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    key: "facebook",
    label: "Facebook",
    href: siteConfig.social.facebook,
    icon: Facebook,
  },
  {
    key: "instagram",
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: Instagram,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo inverted />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {siteConfig.descriptor}. {siteConfig.slogan}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
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
                    className="text-sm text-slate-400 transition hover:text-electric-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
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
                    className="text-sm text-slate-400 transition hover:text-electric-400"
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
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
                {siteConfig.location}
              </li>
              <li>
                <a
                  href={buildWhatsAppLink(siteConfig.whatsappDefaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-electric-400"
                >
                  <WhatsAppIcon className="h-4 w-4 text-electric-400" />
                  WhatsApp
                </a>
              </li>
              {siteConfig.email ? (
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition hover:text-electric-400"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              ) : null}
            </ul>

            {socialItems.some((item) => item.href) ? (
              <div className="mt-5 flex gap-3">
                {socialItems
                  .filter((item) => item.href)
                  .map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.key}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-electric-400"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
              </div>
            ) : null}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p>Aviso de privacidad · {siteConfig.location}</p>
        </Container>
      </div>
    </footer>
  );
}
