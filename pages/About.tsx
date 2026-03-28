import React from 'react';
import { Heart, CheckCircle } from 'lucide-react';
import { FOUNDER_IMAGE } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 animate-fade-in">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl text-taupe mb-4">My Story</h1>
            <p className="text-xl text-pacific font-light italic">French softness meets Seattle serenity.</p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
             <div className="w-full md:w-1/2">
                <img 
                  src={FOUNDER_IMAGE}
                  alt="Marion, Founder of Bonjour Bébé" 
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
             </div>
             <div className="w-full md:w-1/2 space-y-6 text-lg text-taupe/80 leading-relaxed">
                <p>
                  <span className="font-serif text-3xl text-pacific mr-2">Bonjour,</span>
                  I am Marion, a mother of two energetic boys and a Certified Educator of Infant Massage. My journey began in France, where the culture of postpartum care deeply honors the mother-baby bond.
                </p>
                <p>
                  Moving to Seattle brought a new adventure, but I noticed a gap in the holistic support available to new parents. The village felt smaller, the pace faster. I founded <span className="font-serif italic">Bonjour Bébé</span> to bridge that gap.
                </p>
                <p>
                  I believe touch is our first language. Before babies understand words, they understand being held, rocked, and soothed. My mission is to give you the tools to speak that language fluently, with confidence and joy.
                </p>
             </div>
          </div>

          {/* Certification & Philosophy */}
          <div className="bg-white rounded-3xl p-10 shadow-sm mb-20">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                   <h2 className="font-serif text-2xl mb-6 flex items-center gap-2">
                     <CheckCircle className="text-pacific" /> Credentials
                   </h2>
                   <ul className="space-y-4 text-taupe/80">
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-pacific mt-2"></span>
                        Certified by the International Association of Infant Massage (IAIM).
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-pacific mt-2"></span>
                        Trained in pediatric First Aid & CPR.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-pacific mt-2"></span>
                        5+ years of experience working with newborns and families.
                      </li>
                   </ul>
                </div>
                <div>
                   <h2 className="font-serif text-2xl mb-6 flex items-center gap-2">
                     <Heart className="text-pacific" /> Philosophy
                   </h2>
                   <p className="text-taupe/80 italic">
                     "We do not massage the baby; we massage <span className="font-bold not-italic">with</span> the baby."
                   </p>
                   <p className="mt-4 text-taupe/80">
                     My approach is strictly baby-led. We listen to cues, respect boundaries, and ensure the experience is pleasurable for both of you. It is not about technique perfection, but connection depth.
                   </p>
                </div>
             </div>
          </div>

          {/* Gallery Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=400" className="rounded-lg hover:opacity-90 transition-opacity aspect-square object-cover" alt="Baby smiling" />
             <img src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?auto=format&fit=crop&q=80&w=400" className="rounded-lg hover:opacity-90 transition-opacity aspect-square object-cover" alt="Holding hands" />
             <img src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80&w=400" className="rounded-lg hover:opacity-90 transition-opacity aspect-square object-cover" alt="Baby feet" />
             <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=400" className="rounded-lg hover:opacity-90 transition-opacity aspect-square object-cover" alt="Calm setting" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;