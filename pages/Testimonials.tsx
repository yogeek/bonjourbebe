import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Generate more mock testimonials for the grid
  const extendedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => ({...t, id: `ext-${i}`}));

  return (
    <div className="pt-24 animate-fade-in">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-taupe mb-6">Words of Love</h1>
          <p className="text-taupe/70 max-w-2xl mx-auto">
            Nothing brings me more joy than seeing parents connect deeply with their babies. Here are some of their stories.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {extendedTestimonials.map((t, index) => (
            <div key={t.id} className="break-inside-avoid bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-sage/20">
              <Quote className="text-blush fill-current mb-4 transform scale-x-[-1]" size={40} />
              <p className="text-taupe/80 text-lg italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-sage/50 flex items-center justify-center text-taupe font-bold font-serif">
                  {t.parentName.charAt(0)}
                </div>
                <div>
                   <p className="font-bold text-taupe text-sm">{t.parentName}</p>
                   <p className="text-xs text-pacific uppercase tracking-wide font-medium">{t.babyInfo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;