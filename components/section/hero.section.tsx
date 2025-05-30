'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {BgImageFonctionnement, BgImageHome} from '../ui/bgImage';

const typedTextHome = "X_terna Madagascar transforme vos défis en opportunités grâce à notre expertise multisectorielle et notre engagement vers l'excellence opérationnelle.";
const typedTextFonctionnement = "D_écouvrez comment Xterna Madagascar transforme l'externalisation globale en partenariat stratégique pour votre succès durable.";

export function HeroSectionHome() {
  const [displayedText, setDisplayedText] = useState('');
  
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + typedTextHome[i]);
      i++;
      if (i >= typedTextHome.length - 1) clearInterval(interval);
    }, 40); // vitesse du texte
    return () => clearInterval(interval);


  }, []);

  return (
    <section className="relative text-center py-24 overflow-hidden bg-stone-700 text-gray-700 border border-b-4 border-cyan-800">
      
      <BgImageHome />
        <div className='inline-grid md:grid-cols-2 '>
          <div> 
            &nbsp;
          </div>
          <div className="relative z-10 max-w-lg mx-20 p-2 space-y-6 bg-neutral-300 block border border-gray-300 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <motion.h1
        className="text-3xl md:text-3xl font-bold text-gray-900 mb-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Votre Partenaire d&apos; Excellence
          <motion.span
          className="block text-blue-600"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          >
            à Madagascar
          </motion.span>
            
        </motion.h1>

        <motion.p
          className="text-lg lg:text-3xs text-center tracking-wider text-stone-800"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          {displayedText}
        </motion.p>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button asChild className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-light text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
            <Link href="/services">Découvrir nos services</Link>
          </Button>
        </motion.div>
          </div>
        </div>

    </section>
  );
}

export function HeroSectionFonctionnement() {
  const [displayedText, setDisplayedText] = useState('');
  
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + typedTextFonctionnement[i]);
      i++;
      if (i >= typedTextFonctionnement.length - 1) clearInterval(interval);
    }, 40); // vitesse du texte
    return () => clearInterval(interval);


  }, []);

  return (
    <section className="relative text-center py-24 overflow-hidden  bg-stone-700 text-gray-700 border border-b-4 border-cyan-800">
      
      <BgImageFonctionnement />
        <div className='inline-grid md:grid-cols-2 '>
          <div> 
            &nbsp;
          </div>
          <div className="relative z-10 max-w-lg mx-20 p-2 space-y-6 bg-neutral-300 block border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <motion.h1
        className="text-3xl md:text-3xl font-bold text-gray-900 mb-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          L&apos; Externalisation
          <motion.span
          className="block text-blue-600"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          >
            Réinventée
          </motion.span>
            
        </motion.h1>

        <motion.p
          className="text-lg lg:text-3xs text-center tracking-wider text-stone-800"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          {displayedText}
        </motion.p>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button asChild className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-light text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
            <Link href="/services">Découvrir nos services</Link>
          </Button>
        </motion.div>
          </div>
        </div>

    </section>
  );
}

// {/* Hero Section */}
//             <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
//               <div className="container mx-auto px-4 text-center">
//                 <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//                   L&apos; Externalisation
//                   <span className="block text-blue-600">Réinventée</span>
//                 </h1>
//                 <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
//                   Découvrez comment Xterna Madagascar transforme l&apos; externalisation globale 
//                   en partenariat stratégique pour votre succès durable.
//                 </p>
//               </div>
//             </section>