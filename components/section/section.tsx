'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import bg_image from "@/public/bg_image.jpg"; // Remplace par ton image

const typedText = `Société d'externalisation en bâtiment au service des PME en France, Belgique et Suisse. Agents déjà opérationnels, collaboration mutuelle et efficacité garantie.`;

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + typedText[i]);
      i++;
      if (i >= typedText.length) clearInterval(interval);
    }, 30); // vitesse du texte
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-center py-24 overflow-hidden bg-lime-400">
      {/* Background image */}
      <Image
        src={bg_image}
        alt="background image"
        fill
        className="object-cover opacity-40"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-6 border">
        <motion.h3
          className="text-2xl lg:text-3xl md:text-xl font-bold"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          XTERNA Madagascar
        </motion.h3>

        <motion.p
          className="text-lg lg:text-xl text-white"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {displayedText}
        </motion.p>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button asChild>
            <Link href="#services">Voir nos services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
