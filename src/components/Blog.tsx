import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'The Role of Generative AI in Corporate Strategy',
    excerpt: 'Explore how large language models are reshaping decision-making processes for executive boards.',
    category: 'Technology',
    author: 'Marcus Thorne',
    date: 'Oct 12, 2023',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3c07da4d-d0a4-48a8-9667-1d65f083ecaa/blog-3-tech-80678d47-1777559191030.webp',
  },
  {
    id: 2,
    title: 'Scaling Distributed Engineering Teams',
    excerpt: 'Lessons learned from managing high-performance remote teams across five time zones.',
    category: 'Management',
    author: 'David Aris',
    date: 'Oct 8, 2023',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3c07da4d-d0a4-48a8-9667-1d65f083ecaa/blog-2-collaboration-72732475-1777559197254.webp',
  },
  {
    id: 3,
    title: 'Securing the Modern Cloud Infrastructure',
    excerpt: 'Essential security protocols for protecting enterprise data in a multi-cloud environment.',
    category: 'Security',
    author: 'Sarah Chen',
    date: 'Sep 25, 2023',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/3c07da4d-d0a4-48a8-9667-1d65f083ecaa/blog-1-ui-d81c128e-1777559190682.webp',
  },
];

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = useMemo(() => {
    return articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <section id="blog" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-base font-semibold leading-7 text-primary">Insights</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Thought Leadership & News
            </p>
          </div>
          <div className="relative max-w-xs w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-slate-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="block w-full rounded-full border-0 py-2.5 pl-10 pr-4 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-slate-50/50"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <motion.article
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-start"
                >
                  <div className="relative w-full aspect-[16/9] mb-8 group overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/50 shadow-sm">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-slate-900 uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4 text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} /> {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} /> {article.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 hover:text-primary transition-colors cursor-pointer mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <a href="#" className="mt-auto flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} />
                  </a>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-lg text-slate-500">No articles found matching your search.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}