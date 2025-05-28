// app/services/page.tsx
'use client';

import { servicesData } from '@/components/data/services';
import ServiceCard from '@/components/section/service.card';
import ServiceSelector from '@/components/section/service.selector';
import TestimonialCard from '@/components/section/testimonial.card';
import { useState } from 'react';

type ServiceKey = keyof typeof servicesData ;

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<ServiceKey>('plan');
  const service = servicesData[activeService];

  return (
    <div className="p-6 md:p-12">
      <header className="text-center space-y-2">
        <h1 className="text-3xl md:text-5xl">Nos Services</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Découvrez notre gamme de services en conception et études d&apos; électricité.
        </p>
      </header>

      <section className="mt-8">
        <ServiceCard service={service} />
      </section>

      <section className="mt-10">
        <h2 className="text-xl mb-4">Voir nos autres services</h2>
        <ServiceSelector
          services={servicesData}
          activeService={activeService}
          onSelect={setActiveService}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-xl mb-4">Ce que disent nos clients</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {service.testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </section>
    </div>
  );
}
