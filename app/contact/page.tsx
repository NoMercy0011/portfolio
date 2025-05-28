'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';

type ServiceOption = {
  id: string;
  name: string;
};

type FormData = {
  company: string;
  contact: string;
  email: string;
  phone: string;
  country: string;
  projectType: string;
  services: string[]; // array of service ids
  message: string;
  timeline: string;
  budget: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    company: '',
    contact: '',
    email: '',
    phone: '',
    country: 'France',
    projectType: '',
    services: [],
    message: '',
    timeline: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const services: ServiceOption[] = [
    { id: 'electrical', name: 'Bureau d\'étude électricité bâtiment' },
    { id: 'drawing', name: 'Dessinateur projeteur (ArchiCAD/Revit)' },
    { id: 'admin', name: 'Assistance administrative mairie' },
    { id: 'workforce', name: 'Main d\'œuvre spécialisée' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // simulate API call
      console.log('Données du formulaire:', formData);
      setSubmitStatus('success');

      setTimeout(() => {
        setFormData({
          company: '',
          contact: '',
          email: '',
          phone: '',
          country: 'France',
          projectType: '',
          services: [],
          message: '',
          timeline: '',
          budget: ''
        });
        setSubmitStatus(null);
      }, 3000);

    } catch (error) {
      console.error('Erreur envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec navigation simple */}

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Démarrons votre projet ensemble
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Parlez-nous de vos besoins en externalisation bâtiment. 
            Notre équipe vous recontactera sous 24h pour discuter de votre projet.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Informations de contact */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Contactez-nous directement
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-cyan-600 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <a href="mailto:contact@xterna-madagascar.com" className="text-cyan-600 hover:underline">
                      contact@xterna-madagascar.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-cyan-600 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-800">Téléphone</p>
                    <a href="tel:+261123456789" className="text-cyan-600 hover:underline">
                      +261 12 345 67 89
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-cyan-600 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-800">Localisation</p>
                    <p className="text-gray-600">Antananarivo, Madagascar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                Pourquoi nous choisir ?
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={16} />
                  Agents déjà opérationnels
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={16} />
                  Économies de 40-60%
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={16} />
                  Expertise normes européennes
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={16} />
                  Collaboration long terme
                </li>
              </ul>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom de votre entreprise *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Ex: Entreprise Dupont"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Votre nom *
                    </label>
                    <input
                      type="text"
                      name="contact"
                      required
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Jean Dupont"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="j.dupont@entreprise.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="+33 1 23 45 67 89"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pays *
                    </label>
                    <select
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="France">France</option>
                      <option value="Belgique">Belgique</option>
                      <option value="Suisse">Suisse</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de projet
                    </label>
                    <input
                      type="text"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Résidentiel, commercial, industriel..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Services qui vous intéressent *
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {services.map(service => (
                      <label key={service.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {service.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Délai souhaité
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner</option>
                      <option value="urgent">Urgent (moins d&apos; une semaine)</option>
                      <option value="court">Court terme (2-4 semaines)</option>
                      <option value="moyen">Moyen terme (1-3 mois)</option>
                      <option value="long">Long terme (3+ mois)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget estimé
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner</option>
                      <option value="small">Moins de 5 000€</option>
                      <option value="medium">5 000€ - 15 000€</option>
                      <option value="large">15 000€ - 50 000€</option>
                      <option value="enterprise">Plus de 50 000€</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Décrivez votre projet *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Décrivez vos besoins, contraintes techniques, volume de travail attendu..."
                  />
                </div>

                {/* Status messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <Check className="text-green-600" size={20} />
                    <p className="text-green-800 font-medium">
                      Message envoyé avec succès ! Nous vous recontacterons sous 24h.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="text-red-600" size={20} />
                    <p className="text-red-800 font-medium">
                      Erreur lors de l&apos; envoi. Veuillez réessayer ou nous contacter directement.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting || formData.services.length === 0}
                  className="w-full md:w-auto px-12 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer ma demande
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
