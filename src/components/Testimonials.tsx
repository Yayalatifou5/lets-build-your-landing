import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function Testimonials() {
  const reviews = [
    {
      name: "Sarah Matlou",
      role: "Sandton Homeowner",
      content: "Excellent service from Olawale Refrigeration! My fridge stopped working on a Sunday and they were here within 2 hours. Fast, clean, and very professional repair.",
      rating: 5
    },
    {
      name: "David Khumalo",
      role: "Restaurant Owner",
      content: "We use Olawale for all our cold room maintenance. They are a reliable team that understands the urgency of commercial refrigeration. Highly recommended for any JHB business.",
      rating: 5
    },
    {
      name: "Thabo Nkosi",
      role: "Facility Manager",
      content: "Great experience with their aircon installation in our office. The team was punctual and the pricing was very competitive. Punctuality is hard to find, but these guys have it.",
      rating: 5
    },
    {
      name: "Linda Williams",
      role: "Business Manager",
      content: "Very impressed with the regassing service for our HVAC units. Our building is finally at the right temperature again. Transparent pricing and friendly staff.",
      rating: 4
    }
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-blue-600 text-sm font-black uppercase tracking-[0.3em] mb-6">Testimonials</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">Trusted By <span className="text-blue-600">Johannesburg</span></h3>
          <p className="text-xl text-slate-500 font-medium">
            Our reputation is built on reliability and fast service for every customer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-[2.5rem] relative border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:bg-white transition-all duration-500 group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-100/30 group-hover:text-blue-200/50 transition-colors" />
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`} 
                  />
                ))}
              </div>
              <p className="text-slate-600 mb-10 italic leading-relaxed text-base font-medium">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-900 rounded-2xl flex items-center justify-center font-black text-white text-lg shadow-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-slate-900 text-base uppercase tracking-tight">{review.name}</p>
                  <p className="text-xs text-blue-600 uppercase tracking-widest font-black">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}