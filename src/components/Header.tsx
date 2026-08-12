import { useState, useEffect } from 'react';
import { Heart, Menu, X, Phone, Mail } from 'lucide-react';
import contactoData from '../data/contacto.json';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre Nosotros', href: '#nosotros' },
    { label: 'Qué Hacemos', href: '#que-hacemos' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Noticias', href: '#noticias' },
    { label: 'Cómo Ayudar', href: '#como-ayudar' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar with mini contacts (using placeholder values) */}
      <div className="bg-brand-primary text-white text-xs py-1.5 px-4 hidden md:flex justify-between items-center border-b border-rose-900/30">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5">
            <Phone size={12} className="text-brand-accent" /> Teléfono: <span className="font-semibold text-rose-100">{contactoData.phone}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Mail size={12} className="text-brand-accent" /> Correo: <span className="font-semibold text-rose-100">{contactoData.email}</span>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="flex items-center gap-1 font-semibold text-rose-200">
            <Heart size={12} className="fill-brand-accent text-brand-accent" /> {contactoData.location}
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 px-4 md:px-8 py-3.5 flex items-center justify-between ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-rose-100'
          : 'bg-white/80 backdrop-blur-sm border-b border-rose-50/50'
      }`}>
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <div className="bg-brand-secondary p-2 rounded-full transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
            {/* Visual concept of heart + ribbon represented by a lovely Heart filled icon */}
            <Heart className="text-white fill-white" size={24} />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-lg md:text-xl text-brand-primary leading-tight tracking-tight uppercase">
              FUNCOR
            </span>
            <span className="text-[9px] text-brand-secondary font-bold uppercase tracking-wider leading-none">
              Corazón Humanitario
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-700 hover:text-brand-primary font-bold text-sm transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-brand-secondary after:transition-all after:duration-300 pb-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#como-ayudar"
            className="bg-brand-secondary hover:bg-brand-primary text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-pink-100 transition-all duration-300 hover:scale-105"
          >
            Cómo Ayudar
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-primary p-2 focus:outline-none"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[52px] md:top-[84px] bg-white/98 backdrop-blur-md z-40 transition-all duration-300 transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-800 hover:text-brand-primary font-bold text-lg py-3.5 border-b border-rose-50 text-left block"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#como-ayudar"
            onClick={() => setIsOpen(false)}
            className="bg-brand-secondary hover:bg-brand-primary text-white font-bold text-center py-4 rounded-full shadow-lg transition-transform active:scale-95 mt-4 block"
          >
            Cómo Ayudar
          </a>
        </div>
      </div>
    </header>
  );
}
