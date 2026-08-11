import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Heart, Ribbon } from 'lucide-react';
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
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Programas', href: '#programas' },
    { label: 'Actividades', href: '#noticias' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Cómo Ayudar', href: '#como-ayudar' },
    { label: 'Noticias', href: '#noticias' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top mini-bar - White/Pink style */}
      <div className="bg-rose-50 text-slate-700 text-xs py-2 px-4 hidden md:flex justify-between items-center border-b border-rose-100/60">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5 hover:text-brand-secondary transition-colors font-medium">
            <Phone size={13} className="text-brand-secondary" /> {contactoData.phone}
          </span>
          <span className="flex items-center gap-1.5 hover:text-brand-secondary transition-colors font-medium">
            <Mail size={13} className="text-brand-secondary" /> {contactoData.email}
          </span>
        </div>
        <div className="flex items-center space-x-2 font-bold text-brand-primary text-[11px] uppercase tracking-wider">
          <span className="flex items-center gap-1 text-brand-secondary">
            <Heart size={13} className="fill-brand-secondary" /> Caracas, Venezuela
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 px-4 md:px-8 py-3 flex items-center justify-between ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-rose-100'
          : 'bg-white/90 backdrop-blur-sm border-b border-rose-100/40'
      }`}>
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <div className="bg-gradient-to-tr from-brand-primary to-brand-secondary p-2 rounded-full transition-transform duration-300 group-hover:scale-105 flex items-center justify-center shadow-md">
            {/* Lazo rosa logo icon */}
            <Ribbon className="text-white" size={24} />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-black text-lg md:text-xl text-brand-primary leading-tight tracking-tight">
              FUN<span className="text-brand-secondary">COR</span>
            </span>
            <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest leading-none">
              Un Nuevo Renacer
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-5">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-700 hover:text-brand-secondary font-bold text-sm transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-brand-secondary after:transition-all after:duration-300 pb-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#como-ayudar"
            className="bg-brand-secondary hover:bg-brand-primary text-white font-extrabold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-pink-100 transition-all duration-300 hover:scale-105 uppercase tracking-wider flex items-center gap-1.5"
          >
            <Heart size={14} className="fill-white" /> Donar
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
        <div className="flex flex-col p-6 space-y-4 shadow-inner">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-800 hover:text-brand-secondary font-bold text-lg py-3 border-b border-rose-50 text-left block"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#como-ayudar"
            onClick={() => setIsOpen(false)}
            className="bg-brand-secondary hover:bg-brand-primary text-white font-black text-center py-4 rounded-full shadow-lg transition-transform active:scale-95 mt-4 block uppercase tracking-widest"
          >
            Donar
          </a>
        </div>
      </div>
    </header>
  );
}
