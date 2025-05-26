"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LucideBolt, LucideHandshake, LucideBuilding2 } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/ui/logo";
import HeroSection from "@/components/section/section";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-gray-50">
      {/* Navbar */}
      <nav className="bg-cyan-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-18 items-center justify-between">
            {/* Logo à gauche */}
            
            <div>
              <Logo />
            </div>
            {/* Desktop navigation à droite */}
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <Link
                  href="#fonctionnement"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Fonctionnement
                </Link>
                <Link
                  href="#services"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Contact
                </Link>
                <Link
                href="/recrutement"
                className="border block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Recrutement
              </Link>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((open) => !open)}
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`${
                    mobileOpen ? "hidden" : "block"
                  } size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${
                    mobileOpen ? "block" : "hidden"
                  } size-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Link
                href="#fonctionnement"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Fonctionnement
              </Link>
              <Link
                href="#services"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/recrutement"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Recrutement
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* <section className="text-center space-y-6 bg-orange-400">
        <Image className="w-full bg-background blur-xs" alt="background image" src={bg_image}/>
        <div className="">
          <h3 className="text-2xl lg:text-3xl md:text-xl sm:text-md font-bold ">XTERNA Madagascar</h3>
          <p className="text-xl lg:text-2xl md:text-md sm:text-xs max-w-3xl mx-auto">
            Société d'externalisation en bâtiment au service des PME en France,
            Belgique et Suisse. Agents déjà opérationnels, collaboration mutuelle et
            efficacité garantie.
          </p>
          <Button asChild>
          <Link href="#services">Voir nos services</Link>
        </Button>
        </div>
        
      </section> */}
      <HeroSection />

      {/* Pourquoi externaliser */}
      <section className="grid md:grid-cols-3 gap-8 py-4">
        
        <div className="bg-white shadow rounded-2xl p-6">
          <LucideBolt className="text-blue-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Productivité accrue</h3>
          <p>
            Nos équipes prennent en charge vos tâches techniques avec rigueur,
            réduisant vos délais de production.
          </p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6">
          <LucideHandshake className="text-green-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Collaboration fiable</h3>
          <p>
            Partenariat basé sur la confiance, l’écoute et l’engagement mutuel à
            long terme.
          </p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6">
          <LucideBuilding2 className="text-orange-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Expertise locale</h3>
          <p>
            Accès à des professionnels formés, encadrés et expérimentés dans les
            normes européennes.
          </p>
        </div>
      </section>

      {/* Fonctionnement */}
      <section id="fonctionnement" className="space-y-6">
        <h2 className="text-3xl font-bold text-center">
          Comment fonctionne l'externalisation avec Xtrena&nbsp;?
        </h2>
        <ol className="space-y-4 max-w-3xl mx-auto list-decimal list-inside text-lg">
          <li>Vous nous exposez vos besoins.</li>
          <li>Nous sélectionnons les agents les plus qualifiés.</li>
          <li>Nous validons ensemble le processus et les outils de travail.</li>
          <li>Le travail est réalisé et suivi depuis Madagascar.</li>
          <li>Vous recevez les livrables dans les temps.</li>
        </ol>
      </section>

      {/* Extraits de services */}
      <section id="services" className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Nos Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Bureau d’étude en électricité bâtiment
            </h3>
            <p>
              Réalisation de schémas, dimensionnement et études techniques
              conformes aux normes.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Dessinateur projeteur en bâtiment
            </h3>
            <p>
              Plans d’exécution et PCM fournis avec ArchiCAD ou Revit selon votre
              cahier de charges.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Assistance administrative
            </h3>
            <p>
              Accompagnement pour la préparation des dossiers à la mairie ou autres
              administrations locales.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Main d’œuvre spécialisée</h3>
            <p>
              Personnel qualifié avec tarifs compétitifs pour renforcer vos équipes
              à distance.
            </p>
          </div>
        </div>
        <div className="text-center">
          <Button asChild>
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}



