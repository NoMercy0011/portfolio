'use client';

interface ServiceSelectorProps {
  services: Record<string, {
    title: string;
    icon: React.ElementType;
  }>;
  activeService: string;
  onSelect: (key: string) => void;
}

export default function ServiceSelector({
  services,
  activeService,
  onSelect,
}: ServiceSelectorProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {Object.entries(services).map(([key, value]) => {
        const Icon = value.icon;
        const isActive = key === activeService;
        return (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition
              ${isActive ? 'bg-primary text-white border-primary' : 'bg-white text-black border-gray-300'}`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm">{value.title}</span>
          </button>
        );
      })}
    </div>
  );
}
