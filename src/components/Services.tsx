import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Thermometer, Wind, Box, Gauge, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function Services() {
  const services = [
    {
      title: "Fridge Repairs",
      description: "Expert domestic and commercial refrigerator repairs. We fix all major brands and models with genuine replacement parts and rapid response.",
      icon: <Snowflake className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/3c07da4d-d0a4-48a8-9667-1d65f083ecaa/domestic-fridge-repair-9b28fba6-1777606515681.webp"
    },
    {
      title: "Air Conditioning Installation",
      description: "Professional installation of split units and central cooling systems. We ensure optimal placement for maximum energy efficiency.",
      icon: <Wind className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/3c07da4d-d0a4-48a8-9667-1d65f083ecaa/aircon-installation-e11b65fb-1777606514183.webp"
    },
    {
      title: "Aircon Repairs & Servicing",
      description: "Regular maintenance, filter cleaning, and rapid repair services. Keep your AC unit running smoothly and prolong its lifespan.",
      icon: <Thermometer className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/3c07da4d-d0a4-48a8-9667-1d65f083ecaa/aircon-servicing-e64e9db4-1777606515813.webp"
    },
    {
      title: "Cold Room Maintenance",
      description: "Specialized service for industrial cold rooms and walk-in freezers. We minimize downtime to protect your valuable inventory.",
      icon: <Box className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/3c07da4d-d0a4-48a8-9667-1d65f083ecaa/cold-room-maintenance-053ee868-1777606514704.webp"
    },
    {
      title: "Regas & Recharging",
      description: "Professional gas refilling and recharging services for all cooling systems using environmentally safe and compliant refrigerants.",
      icon: <Gauge className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/3c07da4d-d0a4-48a8-9667-1d65f083ecaa/regas-services-c64856ac-1777606515452.webp"
    },
    {
      title: "Emergency Repairs",
      description: "Available 24/7 for critical failures. Whether it's a late-night fridge leak or a business AC breakdown, we are just a call away.",
      icon: <AlertCircle className="w-8 h-8" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/3c07da4d-d0a4-48a8-9667-1d65f083ecaa/commercial-fridge-repair-6fe03f87-1777606514405.webp"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 text-sm font-black uppercase tracking-[0.3em] mb-6">Our Core Services</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">Expert Solutions For <span className="text-blue-600">Every Cooling Need</span></h3>
            <p className="text-xl text-slate-600 font-medium">
              From residential appliances to industrial cooling infrastructure, Olawale Refrigeration provides the standard of excellence Johannesburg deserves.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors" />
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md p-5 rounded-3xl shadow-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-10 font-medium">
                  {service.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-blue-600 font-black uppercase tracking-widest text-xs hover:bg-transparent hover:text-blue-800 flex items-center gap-3 group/btn"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Service 
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}