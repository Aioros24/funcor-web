import { Heart, HeartPulse, Gift, Sparkles, ArrowRight } from 'lucide-react';
import programasData from '../data/programas.json';

export default function Programas() {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'heartpulse':
        return <HeartPulse className="text-brand-secondary" size={24} />;
      case 'gift':
        return <Gift className="text-brand-secondary" size={24} />;
      case 'heart':
        return <Heart className="text-brand-secondary fill-brand-secondary/10" size={24} />;
      default:
        return <Sparkles className="text-brand-secondary" size={24} />;
    }
  };

  const getFallbackImage = (title: string) => {
    if (title.toLowerCase().includes('psicológico')) {
      return 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=400';
    }
    if (title.toLowerCase().includes('humanitaria')) {
      return 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400';
    }
    if (title.toLowerCase().includes('grupos')) {
      return 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400';
    }
    return 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400';
  };

  const resolveImageUrl = (path: string) => {
    if (!path) return '';
    if (path.startsWith('/')) {
      return path.substring(1);
    }
    return path;
  };

  return (
    <section id="programas" className="py-20 bg-rose-50/10 border-y border-rose-100/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading from the Flyer */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary font-bold text-xs uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100">
            {programasData.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4.5xl font-black text-brand-primary mt-3 mb-4">
            {programasData.sectionDesc}
          </h2>
          <div className="h-1.5 w-20 bg-brand-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base">
            Cada uno de nuestros programas está enfocado en acompañar a las personas afectadas por el cáncer de manera responsable y con profundo amor.
          </p>
        </div>

        {/* 4-Card Program Grid styled exactly like the flyer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programasData.programsList.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-rose-100/30 hover:shadow-xl hover:border-brand-secondary/40 transition-all duration-300 flex flex-col justify-between group"
            >

              {/* Image Header with smooth zoom */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-rose-50 flex items-center justify-center">
                <img
                  src={program.image ? resolveImageUrl(program.image) : getFallbackImage(program.title)}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Round Icon in Fuchsia */}
                <div className="absolute -bottom-6 left-6 bg-white p-3.5 rounded-full shadow-lg border border-rose-100/40 text-brand-secondary z-10 flex items-center justify-center">
                  {getIcon(program.icon)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-10 text-left flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] text-brand-secondary font-bold uppercase tracking-wider block">
                    {program.subtitle}
                  </span>
                  <h3 className="text-lg font-extrabold text-brand-primary mt-1 mb-2 group-hover:text-brand-secondary transition-colors duration-200">
                    {program.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-xs leading-relaxed text-justify line-clamp-4">
                    {program.desc}
                  </p>
                </div>

                {/* Arrow link exactly matching the flyer */}
                <div className="border-t border-rose-50 pt-4 w-full">
                  <a
                    href={program.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-secondary hover:text-brand-primary transition-colors duration-200"
                  >
                    Ver más <ArrowRight size={14} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
