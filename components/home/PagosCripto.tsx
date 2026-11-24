import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function PagosCripto() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="card text-center md:p-12">
          <p className="text-sm uppercase tracking-widest text-violet-400">
            Formas de pago flexibles
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
            Pagá como te resulte más simple
          </h2>

          <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
            <div className="rounded-xl border border-white/10 p-5">
              <h3 className="font-semibold text-white">En Argentina</h3>
              <p className="mt-2 text-sm text-slate-300">
                Aceptamos transferencia, QR y tarjetas (Mercado Pago). Pago en
                cuotas solo con tarjeta.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 p-5">
              <h3 className="font-semibold text-white">Clientes del exterior</h3>
              <p className="mt-2 text-sm text-slate-300">
                También aceptamos stablecoins (USDC y USDT). Las instrucciones
                de pago se entregan junto con la propuesta.
              </p>
            </div>
          </div>

          <p className="mt-8 text-xs">
            <Link
              href="/faq#pago-cripto"
              className="text-slate-400 underline underline-offset-2 transition hover:text-cyan-400"
            >
              Más información en preguntas frecuentes
            </Link>
          </p>
        </div>
      </Reveal>
    </section>
  );
}