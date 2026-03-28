import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Check, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What oils do you use?", a: "We use high-quality, organic, cold-pressed vegetable oils (like sunflower or grapeseed) that are safe and edible for baby." },
    { q: "When is the best age to start?", a: "You can start as early as birth! However, for classes, we recommend babies be between 4 weeks and 12 months old." },
    { q: "Do you offer gift certificates?", a: "Oui! Infant massage classes make a perfect baby shower gift. Contact us to purchase." },
    { q: "What if my baby cries during class?", a: "Crying is welcome. It is their way of communicating. Our classes are baby-led, so you can stop, feed, or cuddle anytime." }
  ];

  return (
    <div className="pt-24 animate-fade-in">
      <div className="bg-sage/20 py-16 text-center px-6">
        <h1 className="font-serif text-5xl text-taupe mb-4">Our Offerings</h1>
        <p className="text-lg text-taupe/70 max-w-2xl mx-auto">
          Thoughtfully designed experiences to nurture the bond between you and your little one.
        </p>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        
        <div className="space-y-12">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
               <div className="w-full md:w-1/2 h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg">
                 <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                     <service.icon className="text-pacific" size={28} />
                     <h2 className="font-serif text-3xl text-taupe">{service.title}</h2>
                  </div>
                  <p className="text-taupe/80 mb-6 text-lg leading-relaxed">{service.description}</p>
                  
                  <div className="bg-cream rounded-xl p-6 mb-6 border border-sage/30">
                    <h3 className="font-bold text-sm uppercase tracking-wide text-taupe/60 mb-3">Benefits</h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-taupe/90">
                          <Check size={16} className="text-pacific" /> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between border-t border-sage pt-6">
                     <div>
                       <p className="text-xs uppercase tracking-wider text-taupe/60">Duration</p>
                       <p className="font-medium">{service.duration}</p>
                     </div>
                     <div>
                       <p className="text-xs uppercase tracking-wider text-taupe/60">Investment</p>
                       <p className="font-serif text-2xl text-pacific">{service.price}</p>
                     </div>
                     <Link to="/contact" className="bg-taupe text-white px-6 py-2 rounded-full hover:bg-pacific transition-colors">
                       Book
                     </Link>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Add-on Section */}
        <div className="mt-24 bg-blush/20 rounded-3xl p-8 md:p-12 text-center">
           <h3 className="font-serif text-2xl mb-4">Home Travel Add-on</h3>
           <p className="mb-6 text-taupe/80 max-w-2xl mx-auto">
             For your ultimate comfort, I can bring the session to your living room. <br/>
             <span className="italic text-sm text-taupe/60">Available in the Bellevue and Greater Seattle area. Additional travel fee of $30 applies.</span>
           </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
           <h2 className="font-serif text-3xl text-center mb-12">Common Questions</h2>
           <div className="space-y-4">
             {faqs.map((item, index) => (
               <div key={index} className="border border-sage/50 rounded-lg overflow-hidden">
                 <button 
                   className="w-full flex justify-between items-center p-6 bg-white hover:bg-cream/50 transition-colors text-left"
                   onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                 >
                   <span className="font-medium text-lg text-taupe">{item.q}</span>
                   {expandedFaq === index ? <Minus size={20} className="text-pacific"/> : <Plus size={20} className="text-pacific"/>}
                 </button>
                 {expandedFaq === index && (
                   <div className="p-6 bg-cream/30 border-t border-sage/30 text-taupe/80 leading-relaxed animate-fade-in">
                     {item.a}
                   </div>
                 )}
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;