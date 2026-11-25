import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const DEFAULT_TITLE =
  "NODO Telecom — Conectividad, redes e infraestructura tecnológica";
const DEFAULT_DESCRIPTION =
  "Internet satelital Starlink e infraestructura de redes en Salta: hogares, empresas, minería, flotas y embarcaciones. Instalación profesional y soporte.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | NODO Telecom",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "NODO Telecom",
    "Conectividad en Salta",
    "Instalación Starlink en Salta",
    "Redes empresariales",
    "Infraestructura de telecomunicaciones",
    "Conectividad para empresas",
    "Conectividad rural",
    "Redes LAN y Wi-Fi",
    "Infraestructura tecnológica",
    "Soluciones de conectividad industrial",
    "Conectividad para minería",
    "Internet satelital para flotas",
    "Conectividad para embarcaciones",
    "Internet satelital para minería",
    "Redundancia satelital",
    "Starlink Salta",
    "Alta capacidad satelital",
    "Servicio itinerante Starlink",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/images/og-image.jpg",
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
    images: ["/images/og-image.jpg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#negocio`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/images/og-image.jpg`,
      description: DEFAULT_DESCRIPTION,
      telephone: `+${siteConfig.whatsappNumber}`,
      areaServed: "Argentina",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salta",
        addressRegion: "Salta",
        addressCountry: "AR",
      },
      sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(
        Boolean,
      ),
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#servicio`,
      name: "Conectividad satelital y redes",
      serviceType:
        "Instalación y soporte de conectividad satelital, redes e infraestructura tecnológica",
      provider: { "@id": `${siteConfig.url}/#negocio` },
      areaServed: "Argentina",
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
        <div className="h-20 lg:hidden" aria-hidden="true" />
        <WhatsAppButton />
        <MobileCtaBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
