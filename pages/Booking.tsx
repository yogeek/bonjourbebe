import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { SERVICES } from '../constants';

const Booking: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  if (formStatus === 'success') {
    return (
      <div className="pt-32 min-h-screen flex flex-col items-center px-6 text-center animate-fade-in">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl">🌿</span>
        </div>
        <h1 className="font-serif text-4xl text-taupe mb-4">Merci!</h1>
        <p className="text-lg text-taupe/80 max-w-md">
          Your request has been received. I will be in touch shortly to confirm your appointment time.
        </p>
        <button 
          onClick={() => setFormStatus('idle')}
          className="mt-8 text-pacific underline hover:text-taupe"
        >
          Book another session
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 animate-fade-in">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-taupe mb-4">Reserve a Session</h1>
          <p className="text-taupe/70">Select your preferred service and time. Sessions available in English & French.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Mock Calendar/Info Sidebar */}
          <div className="w-full lg:w-1/3 bg-white p-8 rounded-2xl shadow-sm h-fit">
             <h3 className="font-serif text-2xl mb-6">Availability</h3>
             <div className="flex items-start gap-4 mb-6">
                <CalendarIcon className="text-pacific mt-1" />
                <div>
                  <p className="font-bold text-taupe">Mon - Fri</p>
                  <p className="text-sm text-taupe/70">9:00 AM - 4:00 PM</p>
                </div>
             </div>
             <div className="flex items-start gap-4 mb-8">
                <CalendarIcon className="text-pacific mt-1" />
                <div>
                  <p className="font-bold text-taupe">Saturday</p>
                  <p className="text-sm text-taupe/70">10:00 AM - 2:00 PM</p>
                </div>
             </div>
             <div className="bg-blush/30 p-4 rounded-lg text-sm text-taupe/80 italic">
               "The environment is calm, warm, and perfectly set up for baby's comfort."
             </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-sage/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-taupe mb-2">Parent's Name</label>
                  <input required type="text" className="w-full border border-sage rounded-lg px-4 py-3 focus:outline-none focus:border-pacific focus:ring-1 focus:ring-pacific transition-colors" placeholder="Julie Dupont" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-taupe mb-2">Email Address</label>
                  <input required type="email" className="w-full border border-sage rounded-lg px-4 py-3 focus:outline-none focus:border-pacific focus:ring-1 focus:ring-pacific transition-colors" placeholder="julie@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-sm font-medium text-taupe mb-2">Baby's Age (Months)</label>
                   <input type="number" className="w-full border border-sage rounded-lg px-4 py-3 focus:outline-none focus:border-pacific" placeholder="3" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-taupe mb-2">Phone Number</label>
                   <input type="tel" className="w-full border border-sage rounded-lg px-4 py-3 focus:outline-none focus:border-pacific" placeholder="(206) 555-0123" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-taupe mb-2">Select Service</label>
                <div className="grid grid-cols-1 gap-3">
                  {SERVICES.map((service) => (
                    <label key={service.id} className="flex items-center p-4 border border-sage rounded-lg cursor-pointer hover:bg-cream transition-colors">
                      <input type="radio" name="service" value={service.id} className="w-5 h-5 text-pacific focus:ring-pacific" required />
                      <div className="ml-4 flex-grow">
                        <span className="block font-medium text-taupe">{service.title}</span>
                        <span className="block text-xs text-taupe/60">{service.duration} • {service.price}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                 <label className="block text-sm font-medium text-taupe mb-2">Preferred Date & Time</label>
                 <input type="datetime-local" className="w-full border border-sage rounded-lg px-4 py-3 text-taupe/80 focus:outline-none focus:border-pacific" />
              </div>

              <div>
                <label className="block text-sm font-medium text-taupe mb-2">Any specific concerns? (Colic, sleep, etc.)</label>
                <textarea rows={4} className="w-full border border-sage rounded-lg px-4 py-3 focus:outline-none focus:border-pacific transition-colors" placeholder="Tell me a little about your baby..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full bg-pacific text-white font-medium text-lg py-4 rounded-full hover:bg-pacific/90 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {formStatus === 'submitting' ? 'Sending Request...' : 'Request Appointment'}
              </button>
              <p className="text-xs text-center text-taupe/50 mt-4">
                No payment required now. Payment is collected at the time of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;