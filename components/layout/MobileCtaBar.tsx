import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { buildWhatsAppLink } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/icons";

/** Barra inferior fija solo en celular: WhatsApp y presupuesto. */
export function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#070d17]/90 px-4 pt-3 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={buildWhatsAppLink(siteConfig.whatsappDefaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition active:scale-[0.98]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
        <Link
          href="/presupuesto"
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-400 to-electric-500 px-4 py-3 text-sm font-semibold text-navy-950 transition active:scale-[0.98]"
        >
          Pedir presupuesto
        </Link>
      </div>
    </div>
  );
}
