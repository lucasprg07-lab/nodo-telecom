import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Solicitar presupuesto",
  description:
    "Solicitá un presupuesto para instalación de Starlink, redes y conectividad o infraestructura tecnológica en Salta, Argentina.",
};

export default function PresupuestoPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Presupuesto"
            title="Solicitá tu presupuesto"
            description="Completá el formulario y coordinamos una evaluación para tu caso."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <QuoteForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-bold text-white">Cómo funciona</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-300">
                <li>Completás el formulario.</li>
                <li>Se abre WhatsApp con tu consulta.</li>
                <li>Coordinamos evaluación y propuesta.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-bold text-white">Importante</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                NODO Telecom no es proveedor de internet. Vos mantenés tu propia
                suscripción de Starlink y nosotros realizamos el trabajo técnico.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-bold text-white">Privacidad</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                En esta versión, tu consulta se envía por WhatsApp y no se
                guarda en una base de datos.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
