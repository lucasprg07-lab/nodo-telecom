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
      <section className="bg-navy-950 py-16 sm:py-20">
        <Container>
          <SectionHeading
            dark
            eyebrow="Presupuesto"
            title="Solicitá tu presupuesto"
            description="Completá el formulario y coordinamos una evaluación para tu caso."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
              <QuoteForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-navy-100 bg-slate-50 p-6">
              <h2 className="font-bold text-navy-900">Cómo funciona</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600">
                <li>Completás el formulario.</li>
                <li>Se abre WhatsApp con tu consulta.</li>
                <li>Coordinamos evaluación y propuesta.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-slate-50 p-6">
              <h2 className="font-bold text-navy-900">Importante</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                NODO Telecom no es proveedor de internet ni revendedor de planes
                Starlink. Vos mantenés tu propia suscripción y nosotros
                realizamos el trabajo técnico.
              </p>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-slate-50 p-6">
              <h2 className="font-bold text-navy-900">Privacidad</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
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
