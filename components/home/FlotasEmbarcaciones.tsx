import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const flotas = [
  "Camiones de carga y transporte de larga distancia",
  "Flotas de servicio técnico y utilitarios",
  "Vehículos de campo, agro y minería",
  "Buses y transporte de pasajeros",
];

const embarcaciones = [
  "Yates y embarcaciones de recreo",
  "Barcos de pesca y de trabajo",
  "Embarcaciones comerciales y de carga",
  "Navegación costera y de altura",
];

export function FlotasEmbarcaciones() {
  return (
    <section
      id="flotas-y-embarcaciones"
      className="section-glow scroll-mt-24 py-16 sm:py-24"
    >
      <Container>
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Servicio itinerante
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">
            Conectividad en movimiento para{" "}
            <span className="grad-text">flotas y embarcaciones</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Conectividad en movimiento, en cualquier zona remota. Camiones,
            vehículos de campo, utilitarios, buses, yates, barcos de pesca y
            embarcaciones de toda envergadura.
          </p>
          <p className="mt-4 max-w-3xl text-slate-300">
            Existen planes con límite de datos y planes ilimitados; NODO asesora
            cuál conviene según la operación. El servicio lo factura Starlink
            directamente al cliente: NODO ayuda con la gestión y no es
            intermediario.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="card h-full">
              <div className="relative h-48 w-full overflow-hidden rounded-xl bg-white/5">
                <Image
                  src="/images/solutions/flotas.webp"
                  alt="Flota de camiones con conectividad satelital en ruta"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                Flotas de vehículos
              </h3>
              <ul className="mt-3 space-y-2 text-slate-300">
                {flotas.map((t) => (
                  <li key={t}>• {t}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="card h-full">
              <div className="relative h-48 w-full overflow-hidden rounded-xl bg-white/5">
                <Image
                  src="/images/solutions/embarcaciones.webp"
                  alt="Embarcación con antena satelital instalada en cubierta"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                Embarcaciones de toda envergadura
              </h3>
              <ul className="mt-3 space-y-2 text-slate-300">
                {embarcaciones.map((t) => (
                  <li key={t}>• {t}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-8 space-y-2 text-sm text-slate-400">
            <p>
              En vehículos, la antena se instala en el techo, nunca en el
              parabrisas.
            </p>
            <p>
              Clientes de otros países: el equipo y el plan se contratan en el
              país del cliente y a su nombre; no se envían equipos desde
              Argentina.
            </p>
            <p>
              El uso fuera del país queda sujeto a las condiciones vigentes de
              Starlink (límites de días, registro de viaje y planes según el
              país). Para flotas empresariales o uso internacional continuo,
              NODO evalúa el plan adecuado (categoría Empresas/Prioridad).
            </p>
            <p>
              La disponibilidad del servicio, los planes y las condiciones
              dependen del país, la zona de operación y las regulaciones
              aplicables. Cada caso se evalúa de forma individual.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
