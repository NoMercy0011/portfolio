import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/ui/navBar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata : Metadata = {
  title: {
    default: "XTERNA Madagascar",
    template: "%s | Xterna Madagascar",
  },
  description:
    "Xterna Madagascar est une société d’externalisation spécialisée dans plusieurs domaines tels que l'information digital, commerce et marketing, assistance en télévente et en téléprospection. Nous accompagnons les PME en France, Belgique et Suisse avec des services compétitifs et fiables.",
  keywords: [
    "externalisation bâtiment",
    "bureau d’étude électricité",
    "dessinateur projeteur",
    "plans PCM",
    "Assistance administrative construction et rénovation",
    "Construction et rénovation batiment",
    "Prestataire de services",
    "main-d'œuvre compétitive",
    "Xterna Madagascar",
    "externalisation Madagascar",
    "comment externaliser à Madagascar",
  ],
  authors: [{ name: "Xterna Madagascar", url: "https://xterna-mg.vercel.app" }],
  creator: "Xterna Madagascar",
  metadataBase: new URL("https://xterna-mg.vercel.app"),

  openGraph: {
    title: "Xterna Madagascar",
    description:
      "Partenaire d'externalisation professionnel pour les PME francophones. Bureau d’étude, dessin technique et assistance administrative.",
    url: "https://xterna-mg.vercel.app",
    siteName: "Xterna Madagascar",
    images: [
      {
        url: "https://xterna-mg.vercel.app/og-image.jpg", // à adapter
        width: 1200,
        height: 630,
        alt: "Xterna Madagascar - Externalisation bâtiment",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Xterna Madagascar",
    description:
      "Externalisation de services dans plusieurs domaines pour PME en France, Belgique et Suisse.",
    images: ["https://xterna-mg.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="yGhd3Qzjv9yIQb3Kw0HwgTExiXj4-DnhD2DmfLsowUc" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
