import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {FooterFonctionnement} from '@/components/ui/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata : Metadata = {
  title: "Fonctionnement de notre externalisation",
  description:
    "Découvrez comment Xterna Madagascar accompagne les bureaux d’études et les PME dans le bâtiment avec un processus d’externalisation clair, efficace et sécurisé.",
  keywords: [
    "externalisation bâtiment",
    "fonctionnement externalisation",
    "processus de sous-traitance",
    "bureau d’étude électricité",
    "Revit",
    "ArchiCAD",
    "plans PCM",
    "dessinateur projeteur offshore",
    "collaboration Madagascar France",
    "Xterna Madagascar fonctionnement"
  ],
  openGraph: {
    title: "Fonctionnement de notre externalisation | Xterna Madagascar",
    description:
      "Un processus d’externalisation simple, structuré et adapté aux besoins des professionnels du bâtiment. Découvrez les étapes de notre collaboration.",
    url: "https://xterna-mg.vercel.app/fonctionnement",
    siteName: "Xterna Madagascar",
    images: [
      {
        url: "https://xterna-mg.vercel.app/og-image.jpg", // Remplace si tu as une image spécifique
        width: 1200,
        height: 630,
        alt: "Fonctionnement - Xterna Madagascar",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fonctionnement de notre externalisation | Xterna Madagascar",
    description:
      "Comprenez notre méthode de travail avec les PME du bâtiment. Externalisez vos projets en toute confiance avec Xterna Madagascar.",
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
        {children}
        <Analytics />
        <FooterFonctionnement />
      </body>
    </html>
  );
}
