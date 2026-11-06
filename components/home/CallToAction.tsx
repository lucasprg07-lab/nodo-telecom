import { siteConfig } from "@/lib/config";
import { buildWhatsAppLink } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

export function CallToAction() {
  return (
    <section className="bg-navy-900 py-16 sm:py-20">
      <Reveal>
        <Container className="text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          ¿Listo para conectar tu espacio?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Solicitá una evaluación o presupuesto sin compromiso. Te respondemos
          con una propuesta clara para tu caso.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/presupuesto" size="lg">
            Solicitar presupuesto
          </Button>
          <Button
            href={buildWhatsAppLink(siteConfig.whatsappDefaultMessage)}
            external
            variant="outline"
            size="lg"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Escribinos por WhatsApp
          </Button>
        </div>
      </Container>
      </Reveal>
    </section>
  );
}
