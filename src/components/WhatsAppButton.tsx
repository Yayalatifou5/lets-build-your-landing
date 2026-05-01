import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/27682416710"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-5 rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.5)] flex items-center justify-center hover:bg-[#128C7E] transition-all duration-300 group border-4 border-white"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-9 h-9 fill-white shadow-sm" />
      <span className="absolute right-full mr-8 bg-white text-slate-900 px-6 py-4 rounded-[2rem] text-sm font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap pointer-events-none border border-slate-100 translate-x-10 group-hover:translate-x-0 uppercase tracking-widest">
        Need Expert Help? Chat Now!
      </span>
      <span className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white animate-pulse flex items-center justify-center">
        <span className="w-2 h-2 bg-white rounded-full animate-ping" />
      </span>
    </motion.a>
  );
}