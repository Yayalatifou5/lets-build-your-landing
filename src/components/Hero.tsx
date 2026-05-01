import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[750px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: 'url("https://storage.googleapis.com/dala-prod-public-storage/generated-images/3c07da4d-d0a4-48a8-9667-1d65f083ecaa/jhb-hero-bg-9e6372cc-1777606515021.webp")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-900/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-blue-500/20 text-blue-200 text-sm font-bold mb-8 backdrop-blur-md border border-blue-400/30">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Trusted Cooling Experts in Johannesburg, South Africa
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tight">
              Fast & Reliable <br />
              <span className="text-blue-400">Cooling Solutions</span> <br />
              <span className="text-4xl md:text-5xl font-bold text-blue-100/80 leading-tight">in Johannesburg, South Africa</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-50/90 mb-10 max-w-2xl leading-relaxed font-medium">
              Olawale Refrigeration & Air Conditioning brings over a decade of expertise to your doorstep. 
              From emergency fridge repairs to professional AC installations, we keep Johannesburg, South Africa cool.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white h-16 px-10 text-xl font-bold gap-3 shadow-2xl shadow-blue-900/50 transition-all active:scale-95 group"
                onClick={() => window.location.href = 'tel:0839675954'}
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/40 h-16 px-10 text-xl font-bold gap-3 backdrop-blur-md transition-all active:scale-95 group"
                onClick={() => window.location.href = 'https://wa.me/27682416710'}
              >
                <MessageCircle className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                WhatsApp Us
              </Button>
            </div>
            
            <div className="mt-20 flex flex-wrap items-center gap-10 md:gap-16 text-blue-100/80">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">10+</span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold opacity-70">Years Experience</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-blue-100/20" />
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">24/7</span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold opacity-70">Emergency Care</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-blue-100/20" />
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">100%</span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold opacity-70">Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-7 h-12 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-blue-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}