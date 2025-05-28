"use client"
import { Globe, Clock, DollarSign, Users, TrendingUp, Shield, Headphones, Award, MapPin, Languages, CheckCircle, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

export default function Fonctionnement() {
      
        const [activeAdvantage, setActiveAdvantage] = useState(0);
      
        const avantagesMadagascar = [
          {
            icon: <Users className="w-8 h-8" />,
            title: "Agents Professionnels et Opérationnels",
            description: "Une main-d'œuvre hautement qualifiée et immédiatement opérationnelle grâce à notre processus de formation continue et notre culture d'excellence.",
            details: [
              "Formation spécialisée selon les standards internationaux",
              "Certification continue des compétences",
              "Équipes dédiées et spécialisées par secteur",
              "Accompagnement personnalisé pour chaque projet"
            ]
          },
          {
            icon: <Languages className="w-8 h-8" />,
            title: "Partenaire Francophone de Référence",
            description: "Madagascar se positionne comme l'un des collaborateurs privilégiés des pays francophones, offrant une parfaite maîtrise linguistique et culturelle.",
            details: [
              "Maîtrise parfaite du français écrit et parlé",
              "Compréhension culturelle des marchés francophones",
              "Communication fluide et naturelle",
              "Adaptation aux codes professionnels européens"
            ]
          },
          {
            icon: <DollarSign className="w-8 h-8" />,
            title: "Tarifs Compétitifs, Rendements Exceptionnels",
            description: "Un ratio qualité-prix imbattable qui vous permet d'optimiser vos coûts tout en maintenant un niveau de service premium.",
            details: [
              "Réduction des coûts opérationnels jusqu'à 60%",
              "ROI mesurable dès les premiers mois",
              "Transparence tarifaire sans frais cachés",
              "Modèles de pricing flexibles et adaptés"
            ]
          },
          {
            icon: <Clock className="w-8 h-8" />,
            title: "Accessibilité et Flexibilité Horaire",
            description: "Une disponibilité optimale grâce à des fuseaux horaires compatibles et une organisation flexible adaptée à vos besoins.",
            details: [
              "Fuseau horaire GMT+3 compatible avec l'Europe",
              "Équipes disponibles en horaires étendus",
              "Service client 24/7 selon les besoins",
              "Adaptation aux pics d'activité saisonniers"
            ]
          }
        ];
      
        const avantagesCollaboration = [
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Sécurité et Confidentialité",
            description: "Protection maximale de vos données et respect strict des accords de confidentialité"
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Scalabilité Immédiate",
            description: "Adaptation rapide des ressources selon l'évolution de vos besoins"
          },
          {
            icon: <Award className="w-6 h-6" />,
            title: "Qualité Certifiée",
            description: "Processus qualité rigoureux et certifications internationales"
          },
          {
            icon: <Headphones className="w-6 h-6" />,
            title: "Support Dédié",
            description: "Accompagnement personnalisé avec un chef de projet attitré"
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Vision Globale",
            description: "Approche internationale avec une expertise locale approfondie"
          },
          {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "Résultats Garantis",
            description: "Engagement sur les livrables avec SLA définis et respectés"
          }
        ];
      
        const processusExternalisation = [
          {
            step: "01",
            title: "Audit Initial",
            description: "Analyse approfondie de vos processus actuels et identification des opportunités d'optimisation"
          },
          {
            step: "02",
            title: "Stratégie Personnalisée",
            description: "Conception d'une solution sur-mesure adaptée à vos objectifs et contraintes spécifiques"
          },
          {
            step: "03",
            title: "Transition Sécurisée",
            description: "Migration progressive et sécurisée de vos activités avec accompagnement complet"
          },
          {
            step: "04",
            title: "Optimisation Continue",
            description: "Amélioration constante des performances grâce au monitoring et aux ajustements réguliers"
          }
        ];
      
        return (
        <div>
          <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
              <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Xterna Madagascar</div>
                <div className="hidden md:flex space-x-8">
                  <a href="#" className="hover:text-blue-200 transition-colors">Accueil</a>
                  <a href="#" className="text-blue-200 border-b-2 border-blue-200">Fonctionnement</a>
                  <a href="#" className="hover:text-blue-200 transition-colors">Services</a>
                  <a href="#" className="hover:text-blue-200 transition-colors">Contact</a>
                  <a href="#" className="hover:text-blue-200 transition-colors">Recrutement</a>
                </div>
              </nav>
            </header>
      
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  L&apos; Externalisation
                  <span className="block text-blue-600">Réinventée</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Découvrez comment Xterna Madagascar transforme l&apos; externalisation globale 
                  en partenariat stratégique pour votre succès durable.
                </p>
              </div>
            </section>
      
            {/* Description de l'Externalisation Globale */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">
                    L&apos; Externalisation Globale Nouvelle Génération
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    L&apos; externalisation globale moderne va bien au-delà de la simple délégation de tâches. 
                    Chez Xterna Madagascar, nous créons de véritables extensions de votre entreprise, 
                    intégrées seamlessly à vos processus existants pour amplifier vos capacités 
                    sans compromettre la qualité ou la cohérence de votre marque.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Notre approche holistique combine expertise technique, compréhension culturelle 
                    et innovation technologique pour créer des synergies qui propulsent votre 
                    croissance vers de nouveaux sommets.
                  </p>
                </div>
      
                {/* Processus d'Externalisation */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {processusExternalisation.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl h-full">
                        <div className="text-4xl font-bold text-blue-600 mb-4">{item.step}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                      {index < processusExternalisation.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                          <ArrowRight className="w-8 h-8 text-blue-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* Avantages de Madagascar */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Pourquoi Choisir Madagascar ?
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Madagascar offre un écosystème unique combinant excellence technique, 
                    avantages économiques et compatibilité culturelle parfaite.
                  </p>
                </div>
      
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Navigation des avantages */}
                  <div className="space-y-4">
                    {avantagesMadagascar.map((avantage, index) => (
                      <div
                        key={index}
                        className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                          activeAdvantage === index
                            ? 'bg-blue-600 text-white shadow-xl scale-105'
                            : 'bg-white hover:bg-blue-50 border border-gray-200'
                        }`}
                        onClick={() => setActiveAdvantage(index)}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`${activeAdvantage === index ? 'text-white' : 'text-blue-600'}`}>
                            {avantage.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold mb-2">{avantage.title}</h3>
                            <p className={`text-sm ${activeAdvantage === index ? 'text-blue-100' : 'text-gray-600'}`}>
                              {avantage.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
      
                  {/* Détails de l'avantage sélectionné */}
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="text-blue-600 mb-4">
                      {avantagesMadagascar[activeAdvantage].icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {avantagesMadagascar[activeAdvantage].title}
                    </h3>
                    <p className="text-gray-700 mb-6">
                      {avantagesMadagascar[activeAdvantage].description}
                    </p>
                    <ul className="space-y-3">
                      {avantagesMadagascar[activeAdvantage].details.map((detail, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Avantages de Collaborer avec Xterna */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Les Avantages Clés de Notre Collaboration
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Au-delà de l&apos; externalisation traditionnelle, nous créons un véritable 
                    partenariat stratégique pour votre croissance.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {avantagesCollaboration.map((avantage, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                      <div className="text-blue-600 mb-4">{avantage.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{avantage.title}</h3>
                      <p className="text-gray-600">{avantage.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* Madagascar en Chiffres */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Madagascar : L&apos; Île de l&apos; Excellence</h2>
                  <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                    Des atouts naturels et humains qui font de Madagascar votre destination 
                    d&apos; externalisation de choix.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                    <div className="text-3xl font-bold mb-2">GMT+3</div>
                    <div className="text-blue-200">Fuseau Horaire Compatible Europe</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                    <Languages className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-blue-200">Population Francophone</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                    <Users className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                    <div className="text-3xl font-bold mb-2">65%</div>
                    <div className="text-blue-200">Population Jeune et Dynamique</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                    <div className="text-3xl font-bold mb-2">+15%</div>
                    <div className="text-blue-200">Croissance Secteur Services</div>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Call to Action */}
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
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Planifier une Consultation
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Voir nos Services
                  </button>
                </div>
              </div>
            </section>
      
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Xterna Madagascar</h3>
                    <p className="text-gray-400 mb-4">
                      L&apos; externalisation globale réinventée pour votre succès.
                    </p>
                    <div className="flex space-x-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">X</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Solutions</h4>
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
                      <li className="flex items-center">
                        <Languages className="w-4 h-4 mr-2" />
                        Français / Anglais
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                  <p>&copy; 2025 Xterna Madagascar. L&apos; excellence en externalisation globale.</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
        )
}
