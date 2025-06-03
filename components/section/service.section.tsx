import { BarChart3, Building2, Calculator, ChevronRight, Code } from 'lucide-react'
import React from 'react'

export default function ServiceSection() {
      const services = [
        {
          title: "Construction & Bâtiment",
          icon: <Building2 className="w-8 h-8" />,
          items: ["Dessinateur/Projeteur Électricité", "Dessinateur/Projeteur ArchiCAD & Revit", "Assistance administrative mairie"]
        },
        {
          title: "IT & Design",
          icon: <Code className="w-8 h-8" />,
          items: ["Développement Web", "Applications mobiles", "Solutions complètes"]
        },
        {
          title: "Marketing & Commerce",
          icon: <BarChart3 className="w-8 h-8" />,
          items: ["Téléprospection", "Rédaction web", "Stratégies commerciales"]
        },
        {
          title: "Comptabilité",
          icon: <Calculator className="w-8 h-8" />,
          items: ["Gestion financière", "Audit comptable", "Reporting"]
        }
      ];
  return (
    <div>
      <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Domaines d&apos; Expertise</h2>
                  <p className="text-xl text-gray-600">Des solutions complètes pour tous vos besoins</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {services.map((service, index) => (
                    <div key={index} className="bg-gradient-to-br min-w-55 from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                      <div className="text-orange-600 mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-blue-600 cursor-pointer">{service.title}</h3>
                      <ul className="space-y-2">
                        {service.items.map((item, i) => (
                          <li key={i} className="text-gray-600 flex items-center">
                            <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    </div>
  )
}
