import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftRight, ExternalLink } from 'lucide-react';

const cases = [
  {
    title: 'Financial Cloud Migration',
    client: 'Global Bank Inc.',
    description: 'Transitioned a legacy on-premise mainframe to a distributed hybrid-cloud architecture, improving transaction speeds by 300%.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3c07da4d-d0a4-48a8-9667-1d65f083ecaa/case-study-1-comparison-7940713f-1777559190686.webp',
    stats: [
      { label: 'Latency Reducation', value: '70%' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Cost Savings', value: '$2M/yr' },
    ],
  },
  {
    title: 'Supply Chain AI',
    client: 'Logisys Global',
    description: 'Implemented predictive demand forecasting using deep learning, reducing inventory waste by 40% across 50 warehouses.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3c07da4d-d0a4-48a8-9667-1d65f083ecaa/blog-1-ui-d81c128e-1777559190682.webp',
    stats: [
      { label: 'Forecast Accuracy', value: '+35%' },
      { label: 'Inventory Turnover', value: '2x' },
      { label: 'Efficiency Gain', value: '25%' },
    ],
  },
];

export function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section id="case-studies" className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">Case Studies</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real Results for Real Businesses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Navigation */}
          <div className="lg:col-span-4 space-y-4">
            {cases.map((c, i) => (
              <button
                key={c.title}
                onClick={() => setActiveCase(i)}
                className={`w-full text-left p-6 rounded-2xl transition-all ${
                  activeCase === i 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 ring-1 ring-primary' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${activeCase === i ? 'text-white/80' : 'text-primary'}`}>
                  {c.client}
                </p>
                <h3 className="text-xl font-bold">{c.title}</h3>
              </button>
            ))}
          </div>

          {/* Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="relative aspect-video">
                  <img
                    src={cases[activeCase].image}
                    alt="Case Study Detail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-8 flex items-center gap-2 text-white/90 text-sm font-medium">
                    <ArrowLeftRight size={16} /> Before & After Transformation
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                    <div className="max-w-md">
                      <h4 className="text-2xl font-bold text-slate-900 mb-4">{cases[activeCase].title}</h4>
                      <p className="text-slate-600 leading-relaxed">
                        {cases[activeCase].description}
                      </p>
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                      Read Full Story <ExternalLink size={16} />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                    {cases[activeCase].stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-3xl font-extrabold text-slate-900">{stat.value}</p>
                        <p className="text-sm font-medium text-slate-500 mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}