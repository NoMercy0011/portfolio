import React from 'react'
import Logo from './logo'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-cyan-950 text-gray-100 py-16">
            <div className="container mx-auto px-4 ">
              <div className='grid md:grid-cols-4 gap-8 justify-between sm:flex-wrap'>
                <div className='animate-pulse w-100 mx-0 m-auto'>
                  <Logo />
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 m-auto">Services</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Construction & Bâtiment</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">IT & Design</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Marketing & Commerce</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Comptabilité</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Fonctionnement</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Recrutement</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Antananarivo, Madagascar
                    </li>
                    <li className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      +261 XX XXX XXXX
                    </li>
                    <li className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      contact@xterna.mg
                    </li>
                  </ul>
                </div>

              </div>
              
              <div className="border-t border-gray-400 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Xterna Madagascar. Tous droits réservés.</p>
              </div>
            </div>
    </footer>
  )
}

export function FooterFonctionnement(){
  return(
  <footer className="bg-cyan-950 text-gray-50 py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div className='animate-pulse mx-0 w-100 m-auto'>
          <Logo />
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4 m-auto">Solutions</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Externalisation Complète</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Services Ponctuels</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Consulting Stratégique</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Formation Équipes</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Avantages</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Réduction des Coûts</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Expertise Technique</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Flexibilité Horaire</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Scalabilité</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Antananarivo, Madagascar
            </li>
            <li className="flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              GMT+3 (Compatible Europe)
            </li>
          </ul>
        </div>

      </div>
      
      <div className="border-t border-gray-400 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Xterna Madagascar. L&apos; excellence en externalisation globale.</p>
      </div>
    </div>
  </footer>
  )
}