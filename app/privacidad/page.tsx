import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { buildWhatsAppLink } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo NODO Telecom trata los datos personales de quienes consultan, piden un presupuesto o solicitan una instalación.",
};

const whatsappLink = buildWhatsAppLink(
  "Hola, NODO Telecom. Quisiera consultar sobre el tratamiento de mis datos personales."
);

const linkClass =
  "underline decoration-white/25 underline-offset-2 transition hover:text-electric-400";

export default function PrivacidadPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Privacidad"
            title="Política de privacidad"
            description="Última actualización: 24 de noviembre de 2026."
          />
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container className="max-w-3xl">
          <div className="space-y-8 text-slate-300">
            <div>
              <h2 className="text-lg font-bold text-white">1. Quiénes somos</h2>
              <p className="mt-3 text-sm leading-relaxed">
                NODO Telecom brinda servicios de conectividad, redes e
                infraestructura tecnológica, con base en Salta, Argentina. Podés
                contactarnos por WhatsApp al{" "}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {siteConfig.whatsappDisplay}
                </a>
                .
                {siteConfig.email ? (
                  <>
                    {" "}
                    También podés escribirnos a{" "}
                    <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                      {siteConfig.email}
                    </a>
                    .
                  </>
                ) : null}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                2. Qué datos recopilamos
              </h2>
              <p className="mt-3 text-sm leading-relaxed">
                Los datos que nos brindás cuando nos contactás o pedís un
                presupuesto: nombre, teléfono o WhatsApp, ubicación, tipo de
                servicio que te interesa y el mensaje que escribas. El
                formulario de presupuesto de este sitio no guarda tus datos en
                nuestros servidores: prepara un mensaje que se abre en WhatsApp
                en tu dispositivo, y vos decidís si lo enviás. Este sitio está
                alojado en Vercel, que puede registrar datos técnicos (como la
                dirección IP y el navegador) para su funcionamiento y seguridad.
                Actualmente no usamos cookies de seguimiento ni herramientas de
                analítica.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                3. Para qué usamos los datos
              </h2>
              <p className="mt-3 text-sm leading-relaxed">
                Para responder tus consultas, preparar presupuestos, coordinar
                instalaciones y brindar soporte. No vendemos tus datos. Solo los
                compartimos cuando es necesario para prestar el servicio
                solicitado o cuando una norma lo exige.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                4. Cuánto tiempo los conservamos
              </h2>
              <p className="mt-3 text-sm leading-relaxed">
                Durante el tiempo necesario para atender tu consulta, ejecutar
                el servicio y cumplir obligaciones legales.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">5. Tus derechos</h2>
              <p className="mt-3 text-sm leading-relaxed">
                Podés solicitar el acceso, la rectificación, la actualización o
                la supresión de tus datos escribiéndonos por WhatsApp. El
                titular de los datos personales tiene la facultad de ejercer el
                derecho de acceso a los mismos en forma gratuita a intervalos no
                inferiores a seis meses, salvo que se acredite un interés
                legítimo al efecto, conforme lo establecido en el artículo 14,
                inciso 3 de la Ley N° 25.326. La Agencia de Acceso a la
                Información Pública, en su carácter de Órgano de Control de la
                Ley N° 25.326, tiene la atribución de atender las denuncias y
                reclamos que interpongan quienes resulten afectados en sus
                derechos por incumplimiento de las normas vigentes en materia de
                protección de datos personales.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                6. Enlaces y redes sociales
              </h2>
              <p className="mt-3 text-sm leading-relaxed">
                Este sitio puede enlazar a WhatsApp, Instagram, Facebook u otros
                sitios de terceros, que tienen sus propias políticas de
                privacidad.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                7. Cambios en esta política
              </h2>
              <p className="mt-3 text-sm leading-relaxed">
                Podemos actualizar esta política. La fecha de la última
                actualización figura al inicio de la página.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
