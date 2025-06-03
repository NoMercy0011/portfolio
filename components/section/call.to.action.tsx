import { ArrowRight, Globe, Mail, Phone } from "lucide-react"
import Link from "next/link"



export function CallToActionHome(){
    return(
        <div>
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
                    <div className="container mx-auto px-4 text-center">
                      <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Prêt à Transformer Votre Business ?
                      </h2>
                      <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        Contactez-nous dès aujourd&apos; hui pour découvrir comment Xterna Madagascar 
                        peut accélérer votre croissance.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 mr-2" />
                          <a href="tel:+261347808657"> Nous Contacter</a>
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                          <Mail className="w-5 h-5 mr-2" />
                          <a href="mailto:xterna.madagascar@gmail.com"> Demander un Devis </a>
                        </button>
                      </div>
                    </div>
                  </section>
        </div>
    )
}

export function CallToActionFonctionnement(){
    return(
        <div>
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Prêt à Révolutionner Votre Approche ?
                </h2>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Découvrez comment notre modèle d&apos; externalisation globale peut 
                  transformer votre entreprise dès aujourd&apos; hui.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                  <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Planifier une Consultation
                  </button></Link>
                  <Link href="/services">
                  <button className="cursor-pointer border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Voir nos Services
                  </button></Link>
                </div>
              </div>
            </section>
        </div>
    )
}

export function CallToActionService(){
    return(
        <div>
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
                    <div className="container mx-auto px-4 text-center">
                      <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Prêt à Transformer Votre Business ?
                      </h2>
                      <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        Contactez-nous dès aujourd&apos; hui pour découvrir comment Xterna Madagascar 
                        peut accélérer votre croissance.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 mr-2" />
                          Nous Contacter
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                          <Mail className="w-5 h-5 mr-2" />
                          Demander un Devis
                        </button>
                      </div>
                    </div>
                  </section>
        </div>
    )
}