import { Heart, Home, Gift, Globe } from 'lucide-react';
import statsData from '../data/estadisticas.json';

export default function Estadisticas() {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'heart':
        return <Heart className="text-white fill-white/10" size={32} />;
      case 'home':
        return <Home className="text-white" size={32} />;
      case 'gift':
        return <Gift className="text-white" size={32} />;
      default:
        return <Globe className="text-white" size={32} />;
    }
  };

  return (
    <section className="py-20 bg-brand-secondary text-white relative overflow-hidden">
      {/* Curved background aura decoration */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-12">
        {/* Section header */}
        <div className="max-w-2xl mx-auto">
          <span className="text-rose-100 font-bold text-xs uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
            {statsData.sectionTitle}
          </span>
          <p className="text-rose-50 text-sm mt-3.5 leading-relaxed">
            {statsData.sectionDesc}
          </p>
        </div>

        {/* 4-Column Stat Grid exactly like the deep fuchsia card in the flyer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.statsList.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/10 p-8 rounded-3xl border border-white/10 flex flex-col items-center space-y-4 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
            >
              {/* Icon Container */}
              <div className="bg-white/10 p-4 rounded-2xl flex items-center justify-center">
                {getIcon(stat.icon)}
              </div>

              {/* Big bold statistic figure */}
              <div className="text-4xl sm:text-5xl font-black tracking-tight drop-shadow-sm">
                {stat.value}
              </div>

              {/* Stat label */}
              <p className="text-rose-100 text-sm font-bold uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
