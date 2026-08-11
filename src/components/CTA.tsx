import { Heart, HeartHandshake, Share2 } from 'lucide-react';
import ctaData from '../data/cta.json';

export default function CTA() {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'heart-handshake':
        return <HeartHandshake className="text-brand-secondary" size={28} />;
      case 'share-2':
        return <Share2 className="text-brand-secondary" size={28} />;
      default:
        return <Heart className="text-brand-secondary fill-brand-secondary/10" size={28} />;
    }
  };

  return (
    <section className="py-20 bg-white border-t border-rose-100/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-12">
        {/* Heading from the flyer */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-primary leading-tight">
            {ctaData.title}
          </h2>
          <div className="h-1.5 w-20 bg-brand-secondary mx-auto rounded-full mt-4 mb-3" />
          <p className="text-slate-500 text-sm leading-relaxed">
            {ctaData.subtitle}
          </p>
        </div>

        {/* 3 Interactive Pathway Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ctaData.actionsList.map((action, idx) => (
            <div
              key={idx}
              className="bg-rose-50/5 p-8 rounded-[32px] border border-rose-100/40 hover:border-brand-secondary/40 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center group transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Fuchsia Circular Icon Container */}
                <div className="bg-rose-50 p-5 rounded-full group-hover:bg-brand-secondary/15 transition-all duration-300 flex items-center justify-center shadow-inner">
                  {getIcon(action.icon)}
                </div>

                <h3 className="font-extrabold text-slate-800 text-lg group-hover:text-brand-secondary transition-colors duration-200">
                  {action.title}
                </h3>

                <p className="text-slate-500 text-xs sm:text-xs leading-relaxed max-w-[240px]">
                  {action.desc}
                </p>
              </div>

              {/* Redirection button */}
              <div className="pt-6 w-full">
                <a
                  href={action.link}
                  className="w-full inline-flex items-center justify-center bg-brand-secondary hover:bg-brand-primary text-white font-extrabold py-3.5 px-6 rounded-full text-xs shadow-md transition-all duration-300 hover:scale-103 uppercase tracking-wider"
                >
                  Participar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
