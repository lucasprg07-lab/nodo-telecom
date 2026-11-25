import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { NetworkDiagram } from "@/components/ui/NetworkDiagram";
import { CountUp } from "@/components/ui/CountUp";

type Caso = {
  titulo: string;
  zona: string;
  situacion: string;
  solucion: string;
  resultado: string;
  image: string;
  alt?: string;
};

const casos: Caso[] = [
  {
    titulo: "Monitoreo remoto de un nodo VHF en un cerro",
    zona: "Zona remota",
    situacion:
      "Nodo VHF de una minera, sin conectividad a internet, imposible de monitorear a distancia.",
    solucion: "Starlink más un router que crea un túnel seguro hasta la empresa.",
    resultado: "El cliente pudo monitorear el nodo en forma remota.",
    image: "/images/solutions/caso-nodo-vhf.webp",
    alt: "Nodo VHF de comunicaciones en un cerro con conectividad satelital",
  },
  {
    titulo: "Repetidoras VHF integradas por internet (trunking)",
    zona: "Zonas remotas",
    situacion: "Repetidoras VHF aisladas en zonas remotas.",
    solucion:
      "Conectividad satelital en cada repetidora y enlace entre ellas a través de internet.",
    resultado:
      "Las repetidoras se ven entre sí y operan integradas, ampliando la cobertura de comunicación.",
    image: "/images/solutions/vhf.webp",
  },
  {
    titulo: "Puntos de monitoreo con cámaras",
    zona: "Valle de Lerma",
    situacion:
      "Necesidad de monitorear puntos remotos donde no había infraestructura de datos disponible.",
    solucion:
      "Poste o gabinete con cámaras y Starlink, más un router que crea un túnel seguro hasta la central de monitoreo.",
    resultado: "Las imágenes y el video llegan a la central de monitoreo del cliente.",
    image: "/images/solutions/monitoreo.webp",
  },
];

const metodo = [
  "Relevamiento",
  "Proyecto con materiales, personal, tiempo y costeo",
  "Cotización",
  "Aprobación del cliente",
  "Intervención",
];

export function CasosExperiencia() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Experiencia en proyectos reales"
          title="Casos de experiencia"
          description="Proyectos realizados por la gente detrás de NODO durante su trayectoria profesional en telecomunicaciones."
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
          Más de <CountUp to={5} suffix=" años" /> de experiencia
          profesional en telecomunicaciones e infraestructura para empresas del
          sector.
        </p>
        <Reveal>
          <article className="mt-12 overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/5">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-8">
                <p className="text-xs uppercase tracking-widest text-cyan-400">
                  Caso destacado
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Tercer camino satelital para operaciones mineras (Puna salteña)
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-medium text-cyan-400">Situación</dt>
                    <dd className="text-slate-300">
                      Minera con servicio por dos radioenlaces terrestres, uno
                      principal y uno de respaldo.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-cyan-400">Solución</dt>
                    <dd className="text-slate-300">
                      Se sumó un tercer camino independiente con Starlink, un
                      router donde convergen los servicios y salida hacia el
                      equipo del cliente.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-cyan-400">Resultado</dt>
                    <dd className="text-slate-300">
                      Si la red terrestre se cae, la operación sigue conectada
                      por vía satelital de alta velocidad.
                    </dd>
                  </div>
                </dl>
                <p className="mt-3 text-xs text-slate-400">
                  Realizado en 3 proyectos similares.
                </p>
              </div>

              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <div className="relative h-44 w-full overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src="/images/solutions/mineria.webp"
                    alt="Tercer camino satelital para operaciones mineras"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <NetworkDiagram
                  inputs={[
                    { label: "Radioenlace 1", kind: "radio" },
                    { label: "Radioenlace 2", kind: "radio" },
                    { label: "Satélite (Starlink)", kind: "sat" },
                  ]}
                  outputLabel="Cliente"
                  ariaLabel="Dos radioenlaces y un enlace satelital convergen en un router y salen hacia el cliente"
                />
              </div>
            </div>
          </article>
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {casos.map((caso, i) => (
            <Reveal key={caso.titulo} delay={i * 75}>
              <article className="card h-full">
                <div className="relative h-40 w-full overflow-hidden rounded-xl bg-white/5">
                  <Image
                    src={caso.image}
                    alt={caso.alt ?? caso.titulo}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {caso.titulo}
                </h3>
                <p className="text-sm text-slate-400">Zona: {caso.zona}</p>
                <dl className="mt-3 space-y-2 text-sm">
                  <div>
                    <dt className="font-medium text-cyan-400">Situación</dt>
                    <dd className="text-slate-300">{caso.situacion}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-cyan-400">Solución</dt>
                    <dd className="text-slate-300">{caso.solucion}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-cyan-400">Resultado</dt>
                    <dd className="text-slate-300">{caso.resultado}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white">Método de trabajo</h3>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {metodo.map((m, i) => (
                <li
                  key={m}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="font-mono text-sm text-cyan-400">0{i + 1}</span>
                  <span className="text-sm text-slate-300">{m}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}