import { Heart, Phone, Mail, MapPin, Send, Ribbon } from 'lucide-react';
import contactoData from '../data/contacto.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-brand-primary via-brand-secondary to-rose-600 text-white pt-20 pb-8 relative overflow-hidden border-t-4 border-white">
      {/* Decorative vector background aura */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">

        {/* Brand/About column */}
        <div className="flex flex-col space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="bg-white p-2.5 rounded-full flex items-center justify-center shadow-md">
              <Ribbon className="text-brand-secondary" size={20} />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-black text-lg text-white leading-tight uppercase tracking-tight">
                FUN<span className="text-rose-200">COR</span>
              </span>
              <span className="text-[8px] text-rose-100 font-bold uppercase tracking-widest leading-none">
                Un Nuevo Renacer
              </span>
            </div>
          </div>
          <p className="text-sm text-rose-50 leading-relaxed text-justify">
            La <strong>Fundación Corazón Humanitario – Un Nuevo Renacer (FUNCOR)</strong> es una organización sin fines de lucro en Venezuela, dedicada a brindar acompañamiento integral y esperanza a personas con cáncer y sus familias.
          </p>
          <p className="text-xs font-semibold text-rose-200 italic">
            "Transformamos vidas con amor y esperanza."
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div>
          <h4 className="text-white font-black text-base mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-10 after:bg-white pb-2 uppercase tracking-wider">
            Enlaces Rápidos
          </h4>
          <ul className="space-y-3.5 text-sm font-semibold">
            <li>
              <a href="#inicio" className="text-rose-50 hover:text-white hover:underline transition-colors block">Inicio</a>
            </li>
            <li>
              <a href="#nosotros" className="text-rose-50 hover:text-white hover:underline transition-colors block">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#programas" className="text-rose-50 hover:text-white hover:underline transition-colors block">Nuestros Programas</a>
            </li>
            <li>
              <a href="#testimonios" className="text-rose-50 hover:text-white hover:underline transition-colors block">Testimonios</a>
            </li>
            <li>
              <a href="#noticias" className="text-rose-50 hover:text-white hover:underline transition-colors block">Noticias y Actividades</a>
            </li>
          </ul>
        </div>

        {/* Contact Info from the Flyer */}
        <div className="space-y-4">
          <h4 className="text-white font-black text-base mb-6 relative after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-10 after:bg-white pb-2 uppercase tracking-wider">
            Contáctanos
          </h4>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="text-rose-200 shrink-0 mt-1" size={18} />
            <span className="text-rose-50 leading-relaxed">{contactoData.address}</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <Phone className="text-rose-200 shrink-0" size={18} />
            <span className="text-rose-50">{contactoData.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <Mail className="text-rose-200 shrink-0" size={18} />
            <span className="text-rose-50 break-all">{contactoData.email}</span>
          </div>
        </div>

        {/* Newsletter Subscription field styled exactly like the flyer footer */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-black text-base mb-2 relative after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-10 after:bg-white pb-2 uppercase tracking-wider">
            Suscríbete
          </h4>
          <p className="text-xs text-rose-100 leading-relaxed">
            Recibe noticias, actividades y novedades de nuestra fundación.
          </p>

          {/* Email input field with send button as seen in the flyer */}
          <div className="relative w-full max-w-[280px]">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full bg-white/10 border border-white/20 focus:border-white focus:bg-white/15 focus:outline-none rounded-full py-3 px-5 pr-12 text-xs text-white placeholder-rose-200/80 transition-all font-semibold"
            />
            <button
              className="absolute right-1 top-1 bg-white hover:bg-rose-50 text-brand-secondary p-2 rounded-full shadow-md transition-all duration-300 flex items-center justify-center"
              aria-label="Suscribirme"
            >
              <Send size={12} className="fill-brand-secondary stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/15 pt-8 mt-8 text-center text-xs text-rose-100/70 px-4 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          &copy; {currentYear} Fundación Corazón Humanitario – Un Nuevo Renacer (FUNCOR). Todos los derechos reservados.
        </p>
        <p className="text-[10px]">
          RIF: <span className="font-bold italic">[Por confirmar]</span> | Diseñado con <Heart size={10} className="inline fill-white text-white mx-0.5" /> para servir.
        </p>
      </div>
    </footer>
  );
}
