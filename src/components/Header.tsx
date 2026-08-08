import { useState, useEffect } from 'react';
import { Heart, Menu, X, Phone, Mail } from 'lucide-react';

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
    { label: 'Impacto', href: '#impacto' },
    { label: 'Donaciones', href: '#donaciones' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar with mini contacts */}
      <div className="bg-brand-primary text-white text-xs py-1 px-4 hidden md:flex justify-between items-center border-b border-blue-900">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1">
            <Phone size={12} /> +58 (412) 555-0199
          </span>
          <span className="flex items-center gap-1">
            <Mail size={12} /> info@fundacioncorazonhumanitario.org
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="flex items-center gap-1 font-semibold text-rose-300">
            <Heart size={12} className="fill-rose-300" /> Caracas, Venezuela
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 px-4 md:px-8 py-3 flex items-center justify-between ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2 border-b border-slate-100'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-200/50'
      }`}>
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="bg-brand-secondary p-2 rounded-full transition-transform duration-300 group-hover:scale-110">
            <Heart className="text-white fill-white" size={24} />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-lg md:text-xl text-brand-primary leading-tight tracking-tight">
              FUNCOR
            </span>
            <span className="text-[10px] text-brand-secondary font-semibold uppercase tracking-wider leading-none">
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
              className="text-slate-700 hover:text-brand-primary font-medium text-sm transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-brand-secondary after:transition-all after:duration-300 pb-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#donaciones"
            className="bg-brand-secondary hover:bg-rose-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-rose-200 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Donar Ahora
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
        className={`lg:hidden fixed inset-0 top-[52px] md:top-[80px] bg-white/95 backdrop-blur-md z-40 transition-all duration-300 transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-800 hover:text-brand-primary font-semibold text-lg py-2 border-b border-slate-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#donaciones"
            onClick={() => setIsOpen(false)}
            className="bg-brand-secondary hover:bg-rose-600 text-white font-bold text-center py-3.5 rounded-full shadow-lg transition-transform active:scale-95 mt-4"
          >
            Donar Ahora
          </a>
        </div>
      </div>
    </header>
  );
}
