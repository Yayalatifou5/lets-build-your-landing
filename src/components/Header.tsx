import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Snowflake } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between font-sans">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-blue-900 p-2 rounded-lg group-hover:bg-blue-800 transition-colors shadow-lg">
            <Snowflake className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col -gap-1">
            <span className={cn(
              "text-lg font-black tracking-tighter transition-colors leading-none",
              isScrolled ? "text-blue-900" : "text-white drop-shadow-md"
            )}>
              OLAWALE
            </span>
            <span className={cn(
              "text-[10px] font-bold tracking-[0.2em] transition-colors leading-none",
              isScrolled ? "text-blue-600" : "text-blue-200 drop-shadow-sm"
            )}>
              REFRIGERATION
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold uppercase tracking-wider hover:text-blue-600 transition-colors",
                isScrolled ? "text-slate-700" : "text-white drop-shadow-sm"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-blue-900 hover:bg-blue-800 text-white gap-2 border-none shadow-lg px-6 h-11"
            onClick={() => window.location.href = 'tel:0839675954'}
          >
            <Phone className="w-4 h-4" />
            083 967 5954
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-7 h-7", isScrolled ? "text-blue-900" : "text-white")} />
          ) : (
            <Menu className={cn("w-7 h-7", isScrolled ? "text-blue-900" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-slate-900 py-4 border-b border-slate-100 hover:text-blue-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-blue-900 hover:bg-blue-800 text-white w-full gap-3 py-7 text-xl mt-4 shadow-xl font-bold"
              onClick={() => window.location.href = 'tel:0839675954'}
            >
              <Phone className="w-6 h-6" />
              Call 083 967 5954
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}