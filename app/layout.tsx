import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const DEFAULT_TITLE =
  "NODO Telecom — Conectividad, redes e infraestructura en Salta";
const DEFAULT_DESCRIPTION =
  "Soluciones de internet satelital Starlink, redes y conectividad e infraestructura tecnológica para hogares, comercios y establecimientos rurales en Salta, Argentina.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | NODO Telecom",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Instalación Starlink Salta",
    "Internet satelital Salta",
    "Redes informáticas Salta",
    "Instalación de redes LAN",
    "Cableado estructurado Salta",
    "Soluciones de conectividad rural",
    "Infraestructura tecnológica Salta",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/images/og-image.png",
        width: 1672,
        height: 941,
        alt: DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e2238",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-navy-900 antialiased">
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
