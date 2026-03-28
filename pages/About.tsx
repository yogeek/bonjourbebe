import React, { useState, useEffect } from 'react';
import { Heart, CheckCircle } from 'lucide-react';
import { FOUNDER_IMAGE_FUN, FOUNDER_IMAGE_PRO } from '../constants';

const ElfsightInstagram: React.FC = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div className="elfsight-app-9b94480d-8541-43d3-bf22-a59446692e10" data-elfsight-app-lazy></div>;
};

const About: React.FC = () => {
  const [showFun, setShowFun] = useState(false);

  return (
    <div className="pt-24 animate-fade-in">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl text-taupe mb-4">My Story</h1>
            <p className="text-xl text-pacific font-light italic">French softness meets Pacific Northwest serenity.</p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
             <div className="w-full md:w-1/2 relative cursor-pointer group" onClick={() => setShowFun(!showFun)}>
                <img
                  src={showFun ? FOUNDER_IMAGE_FUN : FOUNDER_IMAGE_PRO}
                  alt="Marion, Founder of Bonjour Bébé"
                  className="rounded-2xl shadow-lg w-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white/80 backdrop-blur-sm text-taupe text-xs px-3 py-1 rounded-full">
                    {showFun ? 'See the pro side' : 'See the fun side'}
                  </span>
                </div>
             </div>
             <div className="w-full md:w-1/2 space-y-6 text-lg text-taupe/80 leading-relaxed">
                <p>
                  <span className="font-serif text-3xl text-pacific mr-2">Bonjour,</span>
                  I am Marion Malbec, a mom of two young boys and a Certified Educator of Infant Massage (CEIM). Originally from France, I lived in Southeast Asia for 10 years, including Singapore, before my family moved to the US in 2024.
                </p>
                <p>
                  My infant massage journey began in 2019, when I learned to massage my eldest son. What started as a beautiful bonding moment quickly became a passion! After taking IAIM classes, I knew I wanted to learn more and eventually became a CEIM so I could share this practice with other families.
                </p>
                <p>
                  I put my career as an architect on pause to follow my heart and launch <span className="font-serif italic">Bonjour Bébé</span>. It's an exciting and meaningful step, allowing me to build a community in this new chapter of life. I believe touch is our first language, and my mission is to give you the tools to speak it fluently, with confidence and joy.
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
                        Certified Educator of Infant Massage (CEIM) by the International Association of Infant Massage (IAIM) and Infant Massage USA (IMUSA).
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-pacific mt-2"></span>
                        Trained in pediatric First Aid & CPR.
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

          {/* Instagram Feed (Elfsight Widget) */}
          <ElfsightInstagram />
        </div>
      </div>
    </div>
  );
};

export default About;