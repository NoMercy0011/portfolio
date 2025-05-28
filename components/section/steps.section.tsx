import React from 'react'

export default function StepsSection() {


    const collaborationSteps = [
    { title: "Analyse", description: "Étude approfondie de vos besoins", icon: "📊" },
    { title: "Proposition", description: "Présentation de solutions personnalisées", icon: "💡" },
    { title: "Planification", description: "Définition du planning et des ressources", icon: "📅" },
    { title: "Équipe", description: "Attribution d'experts dédiés", icon: "👥" },
    { title: "Démarrage", description: "Lancement officiel du projet", icon: "🚀" },
    { title: "Suivi", description: "Monitoring continu des performances", icon: "📈" },
    { title: "Livraison", description: "Finalisation et remise des livrables", icon: "✅" },
    { title: "Support", description: "Accompagnement post-projet", icon: "🔧" }
  ];
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              8 Étapes Clés de Collaboration
            </h2>
            <p className="text-xl text-gray-600">Un processus rodé comme un mécanisme d&apo; horlogerie</p>
          </div>
          
          <div className="grid md:grid-cols-4 lg:grid-cols-8 gap-8">
            {collaborationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl">{step.icon}</div>
                <h3 className={`font-semibold mb-2 transition-colors duration-500`}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
