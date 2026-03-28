import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ChevronRight } from 'lucide-react';
import { SERVICES, TESTIMONIALS, FOUNDER_IMAGE } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1920"
            alt="Mother massaging baby"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/40 to-cream/90"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <h1 className="font-serif text-5xl md:text-7xl text-taupe mb-6 tracking-tight">
            Gentle Touch. <br />
            <span className="italic font-light text-pacific">Deep Connection.</span>
          </h1>
          <p className="text-lg md:text-xl text-taupe/90 mb-8 font-light tracking-wide max-w-2xl mx-auto">
            Bonjour Bébé brings the art of infant massage to Seattle.
            Nurturing confidence and calm for you and your little one.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-pacific text-white px-8 py-4 rounded-full font-serif italic text-lg shadow-lg hover:bg-pacific/90 transition-transform hover:-translate-y-1"
            >
              Book a Session
            </Link>
            <Link
              to="/about"
              className="bg-white/80 backdrop-blur-sm text-taupe border border-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Intro (Short) */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[3/4] rounded-t-full overflow-hidden shadow-xl bg-sage/20 p-2">
                <img
                    src={FOUNDER_IMAGE}
                    alt="Marion, Founder of Bonjour Bébé"
                    className="w-full h-full object-cover rounded-t-full"
                />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blush rounded-full p-8 shadow-lg hidden md:block">
               <p className="font-script text-3xl text-taupe -rotate-6">Bonjour!</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-serif text-4xl text-taupe mb-6">A Touch of French Warmth</h2>
            <p className="text-lg leading-relaxed mb-6 text-taupe/80">
              I am a French mother living in the beautiful Pacific Northwest, certified in infant massage and dedicated to empowering new parents.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-taupe/80">
              My philosophy blends the gentle, time-honored traditions of French childcare with modern, evidence-based practices. Together, we create a sanctuary of calm for you and your bébé.
            </p>
            <Link to="/about" className="text-pacific font-medium hover:text-taupe inline-flex items-center gap-2 border-b border-pacific pb-1">
              Read my story <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-taupe mb-16">Why Infant Massage?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6">
              <div className="bg-blush/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-pacific">
                <Star size={32} />
              </div>
              <h3 className="font-serif text-xl mb-3">Deep Bonding</h3>
              <p className="text-taupe/70">Strengthen the emotional connection through the language of touch, releasing oxytocin for both parent and baby.</p>
            </div>
            <div className="p-6">
              <div className="bg-sage/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-pacific">
                <MapPin size={32} />
              </div>
              <h3 className="font-serif text-xl mb-3">Relief & Relaxation</h3>
              <p className="text-taupe/70">Alleviate common discomforts like gas, colic, and teething pain while promoting better sleep patterns.</p>
            </div>
            <div className="p-6">
              <div className="bg-cream w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-pacific shadow-inner">
                <Star size={32} />
              </div>
              <h3 className="font-serif text-xl mb-3">Parental Confidence</h3>
              <p className="text-taupe/70">Learn to read your baby's cues effectively, feeling more empowered and capable in your parenting journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-28 bg-sage/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-taupe mb-4">Our Services</h2>
            <p className="text-taupe/70 max-w-xl mx-auto">Offering private sessions, group workshops, and prenatal consultations tailored to your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-full h-48 mb-6 overflow-hidden rounded-xl">
                   <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
                <p className="text-taupe/70 mb-6 text-sm">{service.description}</p>
                <Link to="/services" className="text-pacific font-medium text-sm uppercase tracking-wider hover:text-taupe">
                  View Details
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
             <Link to="/services" className="inline-block border border-taupe text-taupe px-8 py-3 rounded-full hover:bg-taupe hover:text-white transition-colors">
               See Full Service Menu
             </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blush/20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl text-center mb-12">Love from Families</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm max-w-lg relative">
                <div className="text-pacific opacity-20 absolute top-4 left-4 text-6xl font-serif">"</div>
                <p className="text-taupe/80 italic mb-6 relative z-10">{t.text}</p>
                <div>
                  <p className="font-bold font-serif text-taupe">{t.parentName}</p>
                  <p className="text-xs text-taupe/60 uppercase tracking-wide">{t.babyInfo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             <h2 className="font-serif text-4xl mb-6">Serving Seattle Families</h2>
             <p className="text-lg text-taupe/80 mb-8">
               Based in the heart of Seattle, offering both in-studio sessions and travel-to-home appointments for your comfort.
             </p>
             <div className="flex items-center gap-2 text-pacific font-medium mb-8">
                <MapPin /> Seattle, WA
             </div>
             <Link to="/booking" className="bg-taupe text-white px-8 py-4 rounded-full shadow hover:bg-pacific transition-colors text-lg">
               Reserve Your First Session
             </Link>
          </div>
          <div className="w-full md:w-1/2 h-80 bg-sage rounded-2xl overflow-hidden relative">
             <iframe
               title="Map of Seattle"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.616250726362!2d-122.3320708!3d47.6062095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1697500000000!5m2!1sen!2sus"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               loading="lazy"
               className="grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
             ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;