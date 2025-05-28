
'use client';

import { LucideIcon } from 'lucide-react';

interface ServiceData {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  testimonials: {
    name: string;
    quote: string;
  }[];
}

export default function ServiceCard({ service }: { service: ServiceData }) {
  const Icon = service.icon;
  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-8 h-8 text-primary" />
        <h2 className="text-2xl">{service.title}</h2>
      </div>
      <p className="text-muted-foreground mb-4">{service.description}</p>
      <ul className="list-disc list-inside space-y-1 text-sm">
        {service.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
