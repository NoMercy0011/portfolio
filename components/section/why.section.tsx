import { LucideBolt, LucideBuilding2, LucideHandshake } from 'lucide-react'
import React from 'react'

export default function WhySection() {
  return (
    <div>
      {/* Pourquoi externaliser */}
      <section className="grid md:grid-cols-3 gap-8 py-4">
        
        <div className="bg-white shadow rounded-2xl m-5 p-6 text-center">
          <LucideBolt className="text-blue-600 mb-4 " size={40} />
          <h3 className="text-xl font-semibold mb-2">Productivité accrue</h3>
          <p>
            Nos équipes prennent en charge vos tâches techniques avec rigueur,
            réduisant vos délais de production.
          </p>
        </div>
        <div className="bg-white shadow rounded-2xl m-5 p-6 text-center">
          <LucideHandshake className="text-green-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Collaboration fiable</h3>
          <p>
            Partenariat basé sur la confiance, l’écoute et l’engagement mutuel à
            long terme.
          </p>
        </div>
        <div className="bg-white shadow rounded-2xl m-5 p-6 flex-wrap text-center">
          <LucideBuilding2 className="text-orange-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Expertise locale</h3>
          <p>
            Accès à des professionnels formés, encadrés et expérimentés dans les
            normes européennes.
          </p>
        </div>
      </section>
    </div>
  )
}
