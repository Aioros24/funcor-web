import { Heart, Handshake, Users, Sparkles, Globe } from 'lucide-react';
import valoresData from '../data/valores.json';

export default function Valores() {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'heart':
        return <Heart className="text-brand-secondary fill-brand-secondary/10" size={24} />;
      case 'handshake':
        return <Handshake className="text-brand-secondary" size={24} />;
      case 'users':
        return <Users className="text-brand-secondary" size={24} />;
      case 'sparkles':
        return <Sparkles className="text-brand-secondary fill-brand-secondary/10" size={24} />;
      default:
        return <Globe className="text-brand-secondary" size={24} />;
    }
  };

  return (
    <section className="relative py-12 bg-white -mt-16 z-20 max-w-7xl mx-auto px-4 md:px-8">
      {/* 5-Card Horizontal Grid exactly like the flyer top portion */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {valoresData.valoresList.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-3xl shadow-lg border border-rose-100/40 hover:border-brand-secondary/60 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group transform hover:-translate-y-1"
          >
            {/* Round Icon Container in Fuchsia/Pink accents */}
            <div className="bg-rose-50 p-4 rounded-full mb-4 group-hover:bg-brand-secondary/10 transition-colors duration-300 flex items-center justify-center shadow-inner">
              {getIcon(item.icon)}
            </div>

            <h3 className="font-extrabold text-slate-800 text-base mb-2 group-hover:text-brand-secondary transition-colors duration-200">
              {item.title}
            </h3>

            <p className="text-slate-500 text-xs sm:text-xs leading-relaxed max-w-[200px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
