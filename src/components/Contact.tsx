import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, Send, Clock, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request sent! Olawale Cooling will contact you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 text-sm font-black uppercase tracking-[0.3em] mb-6">Contact Information</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">Ready To Solve <br />Your Cooling Woes</h3>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Need immediate assistance? Our expert technicians are standing by to restore your cooling systems in Johannesburg. Contact us today for a free quote.
            </p>

            <div className="space-y-10 mb-16">
              <div className="group flex gap-8 items-start">
                <div className="bg-blue-900 p-5 rounded-3xl text-white shadow-xl shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg mb-2 uppercase tracking-wide">Call Us</h4>
                  <a href="tel:0839675954" className="text-blue-600 font-black text-3xl hover:text-blue-800 transition-colors">
                    083 967 5954
                  </a>
                  <p className="text-slate-500 font-bold text-sm mt-2">24/7 Emergency Support Available</p>
                </div>
              </div>

              <div className="group flex gap-8 items-start">
                <div className="bg-green-600 p-5 rounded-3xl text-white shadow-xl shadow-green-900/20 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg mb-2 uppercase tracking-wide">WhatsApp Us</h4>
                  <a href="https://wa.me/27682416710" className="text-green-600 font-black text-3xl hover:text-green-800 transition-colors">
                    068 241 6710
                  </a>
                  <p className="text-slate-500 font-bold text-sm mt-2">Fast response & photo assessments</p>
                </div>
              </div>

              <div className="group flex gap-8 items-start">
                <div className="bg-blue-600 p-5 rounded-3xl text-white shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg mb-2 uppercase tracking-wide">Email Support</h4>
                  <a href="mailto:olawalerefrigeration@gmail.com" className="text-blue-600 font-black text-2xl md:text-3xl hover:text-blue-800 transition-colors break-all">
                    olawalerefrigeration@gmail.com
                  </a>
                  <p className="text-slate-500 font-bold text-sm mt-2">For quotes & formal inquiries</p>
                </div>
              </div>

              <div className="group flex gap-8 items-start">
                <div className="bg-blue-900 p-5 rounded-3xl text-white shadow-xl shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg mb-2 uppercase tracking-wide">Our Location</h4>
                  <p className="text-slate-700 font-black text-2xl">13 Gloucester road kensington Johannesburg</p>
                  <p className="text-slate-500 font-bold text-sm mt-2">Serving Sandton, Midrand, and all JHB Suburbs</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-[3rem] overflow-hidden h-[400px] shadow-2xl border-[12px] border-slate-50 group">
              <iframe
                title="Olawale Cooling Johannesburg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.73584852029!2d27.936873100000003!3d-26.171504600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0c6948d%3A0x69657a485f57920!2sJohannesburg!5e0!3m2!1sen!2sza!4v1716198542385!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-12 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100/50 rounded-bl-[6rem] -z-0" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-2 h-10 bg-blue-600 rounded-full" />
                <h4 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Get A Quote</h4>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-900 uppercase tracking-widest ml-1">Full Name</label>
                    <Input placeholder="e.g. John Smith" required className="h-16 bg-white border-slate-200 rounded-3xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg px-6 shadow-sm shadow-slate-200/50" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-900 uppercase tracking-widest ml-1">Phone Number</label>
                    <Input placeholder="e.g. 083 123 4567" type="tel" required className="h-16 bg-white border-slate-200 rounded-3xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg px-6 shadow-sm shadow-slate-200/50" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-widest ml-1">Service Needed</label>
                  <div className="relative">
                    <select className="w-full h-16 px-6 rounded-3xl border border-slate-200 bg-white text-slate-900 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all appearance-none shadow-sm shadow-slate-200/50 cursor-pointer">
                      <option>Fridge Repair (Domestic)</option>
                      <option>Fridge Repair (Commercial)</option>
                      <option>Aircon Installation</option>
                      <option>Aircon Repair & Service</option>
                      <option>Cold Room Maintenance</option>
                      <option>Regas/Recharging</option>
                      <option>Emergency Repair</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Clock className="w-6 h-6 text-slate-400" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-widest ml-1">Message Details</label>
                  <Textarea placeholder="Tell us about the issue..." className="min-h-[180px] bg-white border-slate-200 rounded-3xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all resize-none text-lg p-6 shadow-sm shadow-slate-200/50" required />
                </div>
                <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white h-20 text-2xl font-black gap-4 rounded-3xl shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] mt-4 uppercase tracking-widest">
                  <Send className="w-7 h-7" />
                  Submit Request
                </Button>
                <p className="text-center text-slate-400 text-xs mt-6 font-bold uppercase tracking-widest">
                  Fastest response times in Johannesburg
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}