import React from 'react';
import { motion } from 'framer-motion';

export function Timeline() {
  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl font-bold mb-4">100%</div>
            <div className="text-blue-200">Satisfaction Rate</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl font-bold mb-4">24/7</div>
            <div className="text-blue-200">Emergency Support</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl font-bold mb-4">15+</div>
            <div className="text-blue-200">Certified Experts</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}