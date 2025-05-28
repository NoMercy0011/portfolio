import { LayoutTemplate, Cable, Construction, LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

type serviveDataType = {
  plan: {
    title: string,
    description: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    features: string[],
    testimonials: [
      {
        name: string,
        quote: string,
      },
      {
        name: string,
        quote: string,
      },
    ],
  },
  etude: {
    title: string,
    description: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    features: string[],
    testimonials: [
      {
        name: string,
        quote: string,
      },
    ],
  },
  suivi: {
    title: string,
    description: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    features: string[],
    testimonials: [
      {
        name: string,
        quote: string,
      },
    ],
  },
}
export const servicesData : serviveDataType = {
  plan: {
    title: 'Plans de conception',
    description: 'Nous réalisons des plans précis et conformes aux normes en vigueur.',
    icon: LayoutTemplate,
    features: [
      'Plans d’éclairage et de prises',
      'Plan de tableau électrique',
      'Schéma unifilaire et multifilaire',
    ],
    testimonials: [
      {
        name: 'Jean Dupont',
        quote: 'Travail rapide et très professionnel.',
      },
      {
        name: 'Claire Fontaine',
        quote: 'Le plan de mon logement était parfait !',
      },
    ],
  },
  etude: {
    title: 'Études électriques',
    description: 'Analyse complète des besoins et dimensionnement électrique optimal.',
    icon: Cable,
    features: [
      'Bilan de puissance',
      'Choix des protections',
      'Études de sélectivité',
    ],
    testimonials: [
      {
        name: 'Paul Martin',
        quote: 'Très bon service, équipe à l’écoute.',
      },
    ],
  },
  suivi: {
    title: 'Suivi de chantier',
    description: 'Assistance pendant la réalisation du projet pour assurer la conformité.',
    icon: Construction,
    features: [
      'Visites techniques',
      'Réunions de chantier',
      'Contrôle de conformité',
    ],
    testimonials: [
      {
        name: 'Sophie Leroy',
        quote: 'Ils ont vraiment assuré le suivi de A à Z.',
      },
    ],
  },
};
