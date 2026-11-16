import type { Metadata } from "next";
import { MapPin, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { buildWhatsAppLink } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a NODO Telecom por WhatsApp o el formulario para solicitar una evaluación o presupuesto en Salta, Argentina.",
};

const steps = [
  "Relevamiento y evaluación técnica.",
  "Instalación e integración profesional.",
  "Acompañamiento y soporte posterior.",
];

export default function ContactoPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Contacto"
            title="Hablemos de tu proyecto"
            description="Coordinemos una evaluación o presupuesto para tu caso, sin compromiso."
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a
              href={buildWhatsAppLink(siteConfig.whatsappDefaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/15 text-green-400">
                <WhatsAppIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <p className="text-sm text-slate-400">
                  {siteConfig.whatsappDisplay}
                </p>
              </div>
            </a>

            {siteConfig.email ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-white">Correo electrónico</p>
                  <p className="text-sm text-slate-400">{siteConfig.email}</p>
                </div>
              </a>
            ) : null}

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-slate-300">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-white">Ubicación</p>
                <p className="text-sm text-slate-400">{siteConfig.location}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-white">
              Solicitá una evaluación o presupuesto
            </h2>
            <p className="mt-4 text-slate-300">
              Contanos qué necesitás y coordinamos una visita o relevamiento
              para darte una propuesta clara.
            </p>
            <ul className="mt-6 space-y-2">
              {steps.map((step) => (
                <li
                  key={step}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  {step}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/presupuesto" size="lg">
                Ir al formulario de presupuesto
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
