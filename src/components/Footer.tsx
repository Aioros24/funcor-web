import { Heart, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

        {/* About column */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-brand-secondary p-2 rounded-full">
              <Heart className="text-white fill-white" size={20} />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-lg text-white leading-tight">
                FUNCOR
              </span>
              <span className="text-[9px] text-brand-secondary font-semibold uppercase tracking-wider leading-none">
                Corazón Humanitario
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed text-justify">
            Fundación Corazón Humanitario – Un Nuevo Renacer es una organización sin fines de lucro en Venezuela, dedicada a brindar alimentación, salud, educación y desarrollo comunitario a las familias en situación de vulnerabilidad extrema.
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-brand-secondary pb-1">
            Enlaces Rápidos
          </h4>
          <ul className="space-y-2 text-sm text-left">
            <li>
              <a href="#inicio" className="hover:text-white hover:underline transition-colors">Inicio</a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-white hover:underline transition-colors">Quiénes Somos</a>
            </li>
            <li>
              <a href="#programas" className="hover:text-white hover:underline transition-colors">Programas de Acción</a>
            </li>
            <li>
              <a href="#impacto" className="hover:text-white hover:underline transition-colors">Métricas de Impacto</a>
            </li>
            <li>
              <a href="#donaciones" className="hover:text-white hover:underline transition-colors">Cómo Ayudar / Donar</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-base mb-4 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-brand-secondary pb-1">
            Contacto
          </h4>
          <div className="flex items-start gap-2.5 text-sm">
            <MapPin className="text-brand-secondary shrink-0 mt-1" size={18} />
            <span className="text-left">Distrito Capital, Caracas, Venezuela.</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm">
            <Phone className="text-brand-secondary shrink-0" size={18} />
            <a href="tel:+584125550199" className="hover:text-white transition-colors">+58 (412) 555-0199</a>
          </div>
          <div className="flex items-center gap-2.5 text-sm">
            <Mail className="text-brand-secondary shrink-0" size={18} />
            <a href="mailto:info@fundacioncorazonhumanitario.org" className="hover:text-white transition-colors break-all">info@fundacioncorazonhumanitario.org</a>
          </div>
        </div>

        {/* Social Networks & Messaging */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-white font-bold text-base mb-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-brand-secondary pb-1">
            Síguenos
          </h4>
          <p className="text-sm text-slate-400 text-left">
            Acompáñanos en nuestras redes sociales y sé parte de nuestro voluntariado y labor diaria.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 p-2.5 rounded-full text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-115 flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://wa.me/584125550199"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-green-600 p-2.5 rounded-full text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-115 flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-slate-800 pt-8 mt-8 text-center text-xs text-slate-500 px-4">
        <p className="mb-2">
          &copy; {currentYear} Fundación Corazón Humanitario – Un Nuevo Renacer (FUNCOR). Todos los derechos reservados.
        </p>
        <p>
          Rif: J-12345678-9 | Organismo sin fines de lucro registrado en Caracas, Venezuela.
        </p>
      </div>
    </footer>
  );
}
