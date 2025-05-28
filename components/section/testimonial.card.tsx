'use client';

interface Testimonial {
  name: string;
  quote: string;
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-muted p-4 rounded-lg shadow">
      <p className="text-sm italic">“{testimonial.quote}”</p>
      <p className="text-xs mt-2 text-right">– {testimonial.name}</p>
    </div>
  );
}
