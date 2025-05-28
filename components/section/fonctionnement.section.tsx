import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function FonctionnementSection() {
  return (
    <div>
      {/* Fonctionnement */}
      <section id="fonctionnement" className="space-y-6">
        <h2 className="text-3xl font-bold text-center">
          Comment fonctionne l&apos;externalisation avec Xterna&nbsp;?
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
    </div>
  )
}
