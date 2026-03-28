import React, { useState } from 'react';
import { Mail, MapPin, Instagram, Calendar } from 'lucide-react';
import { SERVICES } from '../constants';

const Contact: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = `${data.get('firstName') || ''} ${data.get('lastName') || ''}`.trim();
    const email = data.get('email') || '';
    const service = data.get('service') || 'Not specified';
    const message = data.get('message') || '';
    const subject = `Bonjour Bébé inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`;
    window.location.href = `mailto:bonjour@bonjourbebe.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="pt-24 animate-fade-in">
       <div className="container mx-auto px-6 py-12">
         <div className="text-center mb-12">
            <h1 className="font-serif text-5xl text-taupe mb-4">Get in Touch</h1>
            <p className="text-lg text-taupe/70">Ready to start your infant massage journey? Send me a message or book a session.</p>
         </div>

         <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="w-full md:w-5/12 bg-taupe text-cream p-12 flex flex-col justify-between relative overflow-hidden">
               <div className="relative z-10">
                  <h2 className="font-serif text-3xl mb-2">Contact Info</h2>
                  <p className="text-cream/60 mb-10">Je suis l&agrave; pour vous aider. I'm here to support you and your b&eacute;b&eacute;.</p>

                  <div className="space-y-8">
                     <div className="flex items-start gap-4">
                        <Mail className="text-pacific mt-1" />
                        <div>
                           <p className="font-medium">Email</p>
                           <a href="mailto:bonjour@bonjourbebe.com" className="text-cream/70 hover:text-cream transition-colors">bonjour@bonjourbebe.com</a>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Instagram className="text-pacific mt-1" />
                        <div>
                           <p className="font-medium">Instagram</p>
                           <a href="https://www.instagram.com/bonjourbebe.infantmassage/" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-cream transition-colors">@bonjourbebe.infantmassage</a>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <MapPin className="text-pacific mt-1" />
                        <div>
                           <p className="font-medium">Location</p>
                           <p className="text-cream/70">Bellevue, WA</p>
                           <p className="text-cream/50 text-sm">Serving Greater Seattle Area</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Calendar className="text-pacific mt-1" />
                        <div>
                           <p className="font-medium">Availability</p>
                           <p className="text-cream/70">Mon - Fri: 9am - 4pm</p>
                           <p className="text-cream/70">Sat: 10am - 2pm</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="relative z-10 mt-12">
                  <p className="text-cream/40 text-sm italic">Sessions available in English & French</p>
               </div>

               {/* Decorative Circles */}
               <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pacific/10 rounded-full blur-3xl"></div>
               <div className="absolute -top-24 -left-24 w-64 h-64 bg-blush/10 rounded-full blur-3xl"></div>
            </div>

            {/* Form */}
            <div className="w-full md:w-7/12 bg-white p-12">
               <h2 className="font-serif text-2xl text-taupe mb-6">Send a Message</h2>
               <form
                 className="space-y-4"
                 onSubmit={handleSubmit}
               >
                  <div className="grid grid-cols-2 gap-4">
                     <input name="firstName" type="text" placeholder="First Name" required className="w-full bg-cream/30 border border-sage rounded-lg px-4 py-3 focus:outline-none focus:border-pacific" />
                     <input name="lastName" type="text" placeholder="Last Name" className="w-full bg-cream/30 border border-sage rounded-lg px-4 py-3 focus:outline-none focus:border-pacific" />
                  </div>
                  <input name="email" type="email" placeholder="Email Address" required className="w-full bg-cream/30 border border-sage rounded-lg px-4 py-3 focus:outline-none focus:border-pacific" />

                  {/* Service Selection */}
                  <div>
                     <label className="text-sm text-taupe/60 uppercase tracking-wide mb-2 block">Interested in (optional)</label>
                     <div className="space-y-2">
                        {SERVICES.map((service) => (
                          <label key={service.id} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${selectedService === service.id ? 'border-pacific bg-pacific/5' : 'border-sage/50 hover:border-sage'}`}>
                            <input
                              type="radio"
                              name="service"
                              value={service.title}
                              checked={selectedService === service.id}
                              onChange={() => setSelectedService(service.id)}
                              className="accent-pacific"
                            />
                            <div className="flex-1">
                              <span className="font-medium text-taupe">{service.title}</span>
                              <span className="text-taupe/50 text-sm ml-2">{service.duration} &middot; {service.price}</span>
                            </div>
                          </label>
                        ))}
                     </div>
                  </div>

                  <textarea name="message" rows={4} placeholder="Tell me about your baby and any questions you have..." className="w-full bg-cream/30 border border-sage rounded-lg px-4 py-3 focus:outline-none focus:border-pacific"></textarea>
                  <button type="submit" className="bg-taupe text-white px-8 py-3 rounded-full hover:bg-pacific transition-colors w-full md:w-auto">
                    Send Message
                  </button>
               </form>
            </div>
         </div>

         {/* Map */}
         <div className="max-w-5xl mx-auto mt-8 h-64 rounded-2xl overflow-hidden shadow-sm">
            <iframe
              title="Map of Bellevue"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.0!2d-122.2015!3d47.6101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906c8e50791501%3A0x3e0f47d2a7e5b80c!2sBellevue%2C%20WA!5e0!3m2!1sen!2sus!4v1697500000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{border:0}}
              loading="lazy"
              className="opacity-80 grayscale-[50%] hover:grayscale-0 transition-all duration-500"
            ></iframe>
         </div>
       </div>
    </div>
  );
};

export default Contact;
