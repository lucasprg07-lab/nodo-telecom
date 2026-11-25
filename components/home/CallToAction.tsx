import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { buildWhatsAppLink } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/icons";

export function CallToAction() {
  return (
    <section className="py-14 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-400/60 via-white/10 to-violet-500/60 p-px">
            <div className="cta-mesh grain relative overflow-hidden rounded-[calc(1.5rem-1px)] px-5 py-10 sm:px-10 sm:py-14 lg:px-14">
              <Image
                src="/images/solutions/cta-noche.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 1152px, 100vw"
                className="hidden object-cover opacity-30 sm:block"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 hidden bg-gradient-to-r from-[#0a1220] via-[#0a1220]/85 to-[#0a1220]/40 sm:block"
              />
              <div className="relative max-w-2xl">
                <h2 className="font-display text-[1.75rem] font-bold leading-tight text-white sm:text-4xl">
                  ¿Listo para conectar tu próximo proyecto?
                </h2>
                <p className="mt-3 text-base text-slate-300 sm:mt-4 sm:text-lg">
                  Contanos dónde necesitás la conexión y te proponemos la mejor
                  solución satelital o de red.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                  <Button
                    href={buildWhatsAppLink(siteConfig.whatsappDefaultMessage)}
                    external
                    size="lg"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Escribinos por WhatsApp
                  </Button>
                  <Button href="/presupuesto" variant="outline" size="lg">
                    Pedir presupuesto
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
