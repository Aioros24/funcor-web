import { Heart, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-rose-950/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

        {/* About column */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-brand-secondary p-2 rounded-full">
              <Heart className="text-white fill-white" size={20} />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-lg text-white leading-tight uppercase">
                FUNCOR
              </span>
              <span className="text-[9px] text-brand-secondary font-semibold uppercase tracking-wider leading-none">
                Corazón Humanitario
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed text-justify">
            La <strong>Fundación Corazón Humanitario – Un Nuevo Renacer (FUNCOR)</strong> es una organización sin fines de lucro en Venezuela, inspirada en brindar esperanza, solidaridad y apoyo integral a familias y personas en situación de vulnerabilidad social y de salud.
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-brand-secondary pb-1 text-left">
            Enlaces Rápidos
          </h4>
          <ul className="space-y-2 text-sm text-left">
            <li>
              <a href="#inicio" className="hover:text-white hover:underline transition-colors">Inicio</a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-white hover:underline transition-colors">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#que-hacemos" className="hover:text-white hover:underline transition-colors">Qué Hacemos</a>
            </li>
            <li>
              <a href="#testimonios" className="hover:text-white hover:underline transition-colors">Testimonios</a>
            </li>
            <li>
              <a href="#noticias" className="hover:text-white hover:underline transition-colors">Noticias</a>
            </li>
            <li>
              <a href="#como-ayudar" className="hover:text-white hover:underline transition-colors">Cómo Ayudar</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-base mb-4 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-brand-secondary pb-1 text-left">
            Contacto
          </h4>
          <div className="flex items-start gap-2.5 text-sm">
            <MapPin className="text-brand-secondary shrink-0 mt-1" size={18} />
            <span className="text-left">Caracas, Venezuela. <br /><span className="text-xs text-slate-500 italic">(Dirección física exacta por confirmar)</span></span>
          </div>
          <div className="flex items-center gap-2.5 text-sm">
            <Phone className="text-brand-secondary shrink-0" size={18} />
            <span className="text-slate-400 font-semibold">[Teléfono por confirmar]</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm">
            <Mail className="text-brand-secondary shrink-0" size={18} />
            <span className="text-slate-400 font-semibold break-all">[Correo por confirmar]</span>
          </div>
        </div>

        {/* Social Networks & Messaging */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-bold text-base mb-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-brand-secondary pb-1 text-left">
            Redes Sociales
          </h4>
          <p className="text-sm text-slate-400 text-left">
            Acompáñanos y sigue la labor diaria de nuestra fundación. <span className="text-xs text-slate-500 block italic mt-1">(Enlaces oficiales por confirmar)</span>
          </p>
          <div className="flex items-center gap-3">
            {/* Instagram placeholder link */}
            <span className="bg-slate-800 p-2.5 rounded-full text-slate-500 cursor-not-allowed flex items-center justify-center" title="Enlace por confirmar">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </span>
            {/* WhatsApp placeholder link */}
            <span className="bg-slate-800 p-2.5 rounded-full text-slate-500 cursor-not-allowed flex items-center justify-center" title="Enlace por confirmar">
              <MessageSquare size={20} />
            </span>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-slate-900 pt-8 mt-8 text-center text-xs text-slate-500 px-4">
        <p className="mb-2">
          &copy; {currentYear} Fundación Corazón Humanitario – Un Nuevo Renacer (FUNCOR). Todos los derechos reservados.
        </p>
        <p>
          RIF: <span className="font-semibold italic">[Por confirmar]</span> | Organismo sin fines de lucro en proceso de registro definitivo en Caracas, Venezuela.
        </p>
      </div>
    </footer>
  );
}
