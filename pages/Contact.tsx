import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 animate-fade-in">
       <div className="container mx-auto px-6 py-12">
         <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl">
            {/* Contact Info */}
            <div className="w-full md:w-5/12 bg-taupe text-cream p-12 flex flex-col justify-between relative overflow-hidden">
               <div className="relative z-10">
                  <h1 className="font-serif text-4xl mb-2">Get in Touch</h1>
                  <p className="text-cream/60 mb-12">Je suis là pour vous aider — I’m here to support you and your bébé.</p>
                  
                  <div className="space-y-8">
                     <div className="flex items-start gap-4">
                        <Mail className="text-pacific mt-1" />
                        <div>
                           <p className="font-medium">Email</p>
                           <p className="text-cream/70">bonjour@bonjourbebe.com</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <Phone className="text-pacific mt-1" />
                        <div>
                           <p className="font-medium">Phone</p>
                           <p className="text-cream/70">(206) 555-0199</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <MapPin className="text-pacific mt-1" />
                        <div>
                           <p className="font-medium">Studio</p>
                           <p className="text-cream/70">Queen Anne Ave N,<br/>Seattle, WA 98109</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="relative z-10 mt-12">
                 <div className="flex gap-4">
                   <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-pacific hover:border-pacific transition-colors"><Instagram size={20}/></a>
                 </div>
               </div>

               {/* Decorative Circles */}
               <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pacific/10 rounded-full blur-3xl"></div>
               <div className="absolute -top-24 -left-24 w-64 h-64 bg-blush/10 rounded-full blur-3xl"></div>
            </div>

            {/* Map & Form */}
            <div className="w-full md:w-7/12 bg-white">
               <div className="h-64 w-full bg-sage/20">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.616250726362!2d-122.3320708!3d47.6062095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1697500000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    loading="lazy"
                    className="opacity-80 grayscale-[50%]"
                  ></iframe>
               </div>
               <div className="p-12">
                  <h2 className="font-serif text-2xl text-taupe mb-6">Send a Message</h2>
                  <form className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="w-full bg-cream/30 border border-sage rounded-lg px-4 py-3 focus:outline-none focus:border-pacific" />
                        <input type="text" placeholder="Last Name" className="w-full bg-cream/30 border border-sage rounded-lg px-4 py-3 focus:outline-none focus:border-pacific" />
                     </div>
                     <input type="email" placeholder="Email Address" className="w-full bg-cream/30 border border-sage rounded-lg px-4 py-3 focus:outline-none focus:border-pacific" />
                     <textarea rows={4} placeholder="How can I help you?" className="w-full bg-cream/30 border border-sage rounded-lg px-4 py-3 focus:outline-none focus:border-pacific"></textarea>
                     <button className="bg-taupe text-white px-8 py-3 rounded-full hover:bg-pacific transition-colors w-full md:w-auto">Send Message</button>
                  </form>
               </div>
            </div>
         </div>
       </div>
    </div>
  );
};

export default Contact;