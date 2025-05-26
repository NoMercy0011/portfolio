import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Xtrena Madagascar",
    template: "%s | Xtrena Madagascar",
  },
  description:
    "Xtrena Madagascar est une société d’externalisation spécialisée dans le bâtiment. Nous accompagnons les PME en France, Belgique et Suisse avec des services compétitifs et fiables.",
  keywords: [
    "externalisation bâtiment",
    "bureau d’étude électricité",
    "dessinateur projeteur",
    "plans PCM",
    "Revit",
    "ArchiCAD",
    "sous-traitance BTP",
    "main-d'œuvre compétitive",
    "Xtrena Madagascar",
  ],
  authors: [{ name: "Xtrena Madagascar", url: "https://madatechnologie.vercel.app" }],
  creator: "Xtrena Madagascar",
  metadataBase: new URL("https://madatechnologie.vercel.app"),

  openGraph: {
    title: "Xtrena Madagascar",
    description:
      "Partenaire d'externalisation bâtiment pour les PME francophones. Bureau d’étude, dessin technique et assistance administrative.",
    url: "https://madatechnologie.vercel.app",
    siteName: "Xtrena Madagascar",
    images: [
      {
        url: "https://madatechnologie.vercel.app/og-image.jpg", // à adapter
        width: 1200,
        height: 630,
        alt: "Xtrena Madagascar - Externalisation bâtiment",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Xtrena Madagascar",
    description:
      "Externalisation de services bâtiment pour PME en France, Belgique et Suisse.",
    images: ["https://madatechnologie.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
