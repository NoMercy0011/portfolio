"use client";

import HeroSection from "@/components/section/hero.section";
import StepsSection from "@/components/section/steps.section";
import ServiceSection from "@/components/section/service.section";
import StatsSection from "@/components/section/stats.section";
import { CallToActionHome } from "@/components/section/call.to.action";

export default function Home() {
  

  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-gray-50 pb-5">

      <HeroSection />

      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 underline">Notre Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Accompagner les entreprises dans leur croissance en fournissant des solutions 
              d&apos; externalisation de haute qualité, combinant expertise technique, 
              professionnalisme et innovation pour créer une valeur ajoutée durable.
            </p>
          </div>
        </div>
      </section>

      <StepsSection />
      <ServiceSection />
      <StatsSection />
      <CallToActionHome />
      
    </main>
  );
}



