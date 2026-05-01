import React from 'react';
import { Snowflake, Facebook, Instagram, Phone, MapPin, Mail, ArrowUpCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-950 text-white pt-24 pb-12 font-sans overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-3 rounded-2xl shadow-xl shadow-blue-600/30">
                <Snowflake className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col -gap-1">
                <span className="text-2xl font-black tracking-tighter uppercase leading-none">OLAWALE</span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase leading-none text-blue-400">REFRIGERATION</span>
              </div>
            </div>
            <p className="text-blue-100/60 leading-relaxed text-lg font-medium">
              Johannesburg's leading cooling and refrigeration specialists. Dedicated to reliable, fast, and professional service since day one.
            </p>
            <div className="flex gap-5">
              <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/20">
                <Facebook className="w-7 h-7" />
              </a>
              <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/20">
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-6 text-blue-100/70 text-lg font-bold">
              <li><a href="#home" className="hover:text-blue-400 transition-colors flex items-center gap-2">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors flex items-center gap-2">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2">Our Services</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors flex items-center gap-2">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors flex items-center gap-2">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full" />
              Our Services
            </h4>
            <ul className="space-y-6 text-blue-100/70 text-lg font-bold">
              <li className="hover:text-white transition-colors cursor-default">Fridge Repairs</li>
              <li className="hover:text-white transition-colors cursor-default">Aircon Installation</li>
              <li className="hover:text-white transition-colors cursor-default">AC Repairs & Service</li>
              <li className="hover:text-white transition-colors cursor-default">Cold Room Support</li>
              <li className="hover:text-white transition-colors cursor-default">Regassing Service</li>
              <li className="hover:text-white transition-colors cursor-default">Emergency Repair</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full" />
              Get In Touch
            </h4>
            <ul className="space-y-8 text-blue-100/70">
              <li className="flex gap-5">
                <div className="bg-white/5 p-4 rounded-2xl">
                  <Phone className="w-6 h-6 text-blue-400 shrink-0" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-400/80 mb-2">Call Us Now</p>
                  <a href="tel:0839675954" className="text-white hover:text-blue-400 transition-colors font-black text-xl tracking-tight">083 967 5954</a>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="bg-white/5 p-4 rounded-2xl">
                  <Mail className="w-6 h-6 text-blue-400 shrink-0" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-400/80 mb-2">Email Support</p>
                  <a href="mailto:olawalerefrigeration@gmail.com" className="text-white hover:text-blue-400 transition-colors font-black text-xl tracking-tight">olawalerefrigeration@gmail.com</a>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="bg-white/5 p-4 rounded-2xl">
                  <MapPin className="w-6 h-6 text-blue-400 shrink-0" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-400/80 mb-2">Location</p>
                  <span className="text-white font-black text-xl tracking-tight">13 Gloucester road kensington Johannesburg</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-10 text-blue-100/40 text-sm font-bold uppercase tracking-widest">
          <p>© {currentYear} Olawale Refrigeration & Air Conditioning. All rights reserved.</p>
          <div className="flex items-center gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 group text-blue-400/60 hover:text-white transition-colors"
            >
              Back to Top 
              <ArrowUpCircle className="w-8 h-8 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}