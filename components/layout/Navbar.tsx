"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 transition-[background-color,box-shadow] duration-300 lg:backdrop-blur-md",
        scrolled
          ? "bg-[#070d17]/95 shadow-[0_8px_30px_rgba(0,0,0,0.35)] lg:bg-[#070d17]/85"
          : "bg-[#070d17]/95 lg:bg-[#070d17]/60"
      )}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-16 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="NODO Telecom — Inicio">
          <Logo inverted />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white",
                  active ? "text-white" : "text-slate-300"
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-x-3 bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Espacio reservado para el selector de idioma ES/EN (futuro) */}

        <div className="hidden lg:block">
          <Button href="/presupuesto" size="sm">
            Solicitar presupuesto
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 transition hover:bg-white/5 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div
          aria-hidden="true"
          className="fixed inset-x-0 bottom-0 top-14 -z-10 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <div
        id="menu-movil"
        className={cn(
          "absolute inset-x-0 top-full max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-white/10 bg-[#070d17] shadow-[0_24px_48px_rgba(0,0,0,0.5)] transition-[opacity,transform,visibility] duration-300 ease-out lg:hidden",
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        )}
      >
        <div className="space-y-1 px-4 py-4">
          {siteConfig.nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-base font-medium transition hover:bg-white/5",
                  active ? "bg-white/5 text-white" : "text-slate-200"
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-4 w-0.5 rounded-full",
                    active
                      ? "bg-gradient-to-b from-cyan-400 to-violet-400"
                      : "bg-transparent"
                  )}
                />
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Button
              href="/presupuesto"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Solicitar presupuesto
            </Button>
          </div>
        </div>
      </div>

      <div className="scroll-progress" aria-hidden="true" />
    </header>
  );
}
