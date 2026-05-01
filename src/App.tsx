import React from 'react';
import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-900 selection:text-white font-sans text-slate-900">
      <Toaster position="top-center" richColors closeButton />
      
      <Header />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;