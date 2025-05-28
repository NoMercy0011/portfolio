import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cyan-950 text-gray-100 py-16">
            <div className="container mx-auto px-4 ">
              <div className='grid sm:grid-cols-2 gap-1 justify-between sm:flex-wrap'>
                <div className='animate-pulse mx-10'>
                  <Logo />
                </div>
                <div>
                <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
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
                </div>
              </div>
              
              <div className="border-t border-gray-400 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Xterna Madagascar. Tous droits réservés.</p>
              </div>
            </div>
          </footer>
  )
}

//       <footer className="bg-cyan-800 shadow-sm dark:bg-gray-900 mx-auto">
//         <div className='bg-orange-500 h-1 m-auto'> &nbsp;</div>
//     <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
//         <div className="sm:flex sm:items-center sm:justify-around">
//             <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
//                 <Logo />
//             </Link>
//             <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0 dark:text-gray-400">
//                 <li className='flex flex-col'>
//                     <Link href="#/fonctionnement" className="hover:underline me-4 md:me-6">Fonctionnement</Link>
//                     <Link href="#/fonctionnement" className="hover:underline me-4 md:me-6 font-light text-xs">Externalisation</Link>
//                     <Link href="#/fonctionnement" className="hover:underline me-4 md:me-6 font-light text-xs">Obtenir un devis</Link>
//                 </li>
//                 <li>
//                     <Link href="#/service" className="hover:underline me-4 md:me-6">Services</Link>
//                 </li>
//                 <li>
//                     <Link href="/recrutement" className="hover:underline me-4 md:me-6">Recrutement</Link>
//                 </li>
//                 <li>
//                     <Link href="/contact" className="hover:underline">Contact</Link>
//                 </li>
//             </ul>
//         </div>
//         <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
//         <span className="block text-sm text-gray-100 sm:text-center dark:text-gray-400">© 2025 <Link href="https://xterna-mg.vercel.app" className="hover:underline">Xterna Madagascar</Link>. Tout Droit Réservé.</span>
//     </div>
// </footer>