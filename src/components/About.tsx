import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, ShieldCheck, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Response",
      description: "We understand that cooling failures are emergencies. We prioritize quick turnarounds across Johannesburg, South Africa."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Reliable Service",
      description: "Our technicians are fully trained and use high-quality parts for all repairs and installations."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Affordable Rates",
      description: "Professional cooling service doesn't have to be expensive. Competitive pricing guaranteed for every client."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Expert Team",
      description: "Decades of combined experience in both domestic and commercial refrigeration systems in Johannesburg, South Africa."
    }
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative px-4"
          >
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/3c07da4d-d0a4-48a8-9667-1d65f083ecaa/technician-portrait-4c10b451-1777606515288.webp" 
                alt="Olawale Cooling Technician" 
                className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-900/5 rounded-[4rem] -z-0 hidden xl:block" />
              <div className="absolute -top-10 -left-10 w-48 h-48 border-8 border-blue-600/10 rounded-[3rem] -z-0 hidden xl:block" />
              
              <div className="absolute bottom-10 left-10 right-10 bg-blue-900/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl z-20">
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-black text-white">10+</div>
                  <div className="text-blue-100 leading-tight font-bold text-lg">
                    Years of Professional <br /> Service in Johannesburg, South Africa
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-black tracking-widest uppercase mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              About Olawale Cooling
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">Reliability You Can <br /><span className="text-blue-600">Trust To Keep You Cool</span></h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Founded on the principles of speed, affordability, and unwavering quality, <strong>Olawale Refrigeration & Air Conditioning</strong> has become a household name in Johannesburg, South Africa for all cooling needs.
            </p>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed italic">
              "We don't just fix cooling systems; we restore comfort to your home and peace of mind to your business operations. Our small business story is one of dedication to our local community."
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              {highlights.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 text-blue-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-600/20 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-slate-900 text-lg mb-2 uppercase tracking-wide">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}