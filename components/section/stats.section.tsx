"use client"

import { useEffect, useState } from "react";

export default function StatsSection() {
      const [stats, setStats] = useState({
        projects: 0,
        clients: 0,
        satisfaction: 0,
        experience: 0
      });
    
      // Animation des statistiques
      useEffect(() => {
        const timer = setTimeout(() => {
          setStats({
            projects: 450,
            clients: 120,
            satisfaction: 98,
            experience: 8
          });
        }, 1000);
        return () => clearTimeout(timer);
      }, []);
  return (
    <div>
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Résultats Parlent</h2>
            <p className="text-xl text-blue-200">Des chiffres qui témoignent de notre excellence</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-4xl font-bold mb-2">{stats.projects}+</div>
              <div className="text-blue-200">Projets Réalisés</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-4xl font-bold mb-2">{stats.clients}+</div>
              <div className="text-blue-200">Clients Satisfaits</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-4xl font-bold mb-2">{stats.satisfaction}%</div>
              <div className="text-blue-200">Taux de Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-4xl font-bold mb-2">{stats.experience}+</div>
              <div className="text-blue-200">Années d&apos; Expérience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
