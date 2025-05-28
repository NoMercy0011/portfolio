'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BgImage from '../ui/bgImage';

const typedText = "X_terna Madagascar transforme vos défis en opportunités grâce à notre expertise multisectorielle et notre engagement vers l'excellence opérationnelle.";
//const typedText = "S ociété d'externalisation en bâtiment au service des PME en France, Belgique et Suisse. Agents déjà opérationnels, collaboration mutuelle et efficacité garantie.";


export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + typedText[i]);
      i++;
      if (i >= typedText.length - 1) clearInterval(interval);
    }, 40); // vitesse du texte
    return () => clearInterval(interval);


  }, []);

  return (
    <section className="relative text-center py-24 overflow-hidden text-gray-700 border border-b-4 border-cyan-800">
      
      <BgImage />
        <div className='inline-grid md:grid-cols-2 '>
          <div> 
            &nbsp;
          </div>
          <div className="relative z-10 max-w-lg mx-20 p-2 space-y-6 block border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
        {/* <motion.h3
          className="text-2xl lg:text-3xl md:text-xl font-bold"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          XTERNA Madagascar
        </motion.h3> */}

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
            <Link href="#services">Découvrir nos services</Link>
          </Button>
        </motion.div>
          </div>
        </div>

    </section>
  );
}
