import { Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

const items = [
  {
    key: "instagram",
    label: "Instagram de NODO Telecom",
    href: siteConfig.social.instagram,
    Icon: Instagram,
  },
  {
    key: "facebook",
    label: "Facebook de NODO Telecom",
    href: siteConfig.social.facebook,
    Icon: Facebook,
  },
];

/** Íconos de redes sociales. Los que no tengan URL configurada no se muestran. */
export function SocialLinks({ className }: { className?: string }) {
  const visible = items.filter((item) => item.href);
  if (visible.length === 0) return null;

  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {visible.map(({ key, label, href, Icon }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-300"
          >
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
