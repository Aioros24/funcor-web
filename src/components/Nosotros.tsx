import { Eye, Award, Sparkles, ShieldCheck } from 'lucide-react';
import nosotrosData from '../data/nosotros.json';

export default function Nosotros() {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'transparencia':
        return <Award className="text-brand-secondary shrink-0" size={24} />;
      case 'empatía y amor':
        return <Sparkles className="text-brand-secondary shrink-0" size={24} />;
      default:
        return <ShieldCheck className="text-brand-secondary shrink-0" size={24} />;
    }
  };

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary font-bold text-xs uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100">
            {nosotrosData.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3 mb-4 leading-tight">
            Fundación Corazón Humanitario – Un Nuevo Renacer
          </h2>
          <div className="h-1.5 w-20 bg-brand-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify md:text-center">
            {nosotrosData.description}
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Misión */}
          <div className="bg-rose-50/20 p-8 rounded-2xl border border-rose-100/50 flex flex-col items-start text-left hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-brand-primary text-white p-3.5 rounded-xl mb-6 shadow-md shadow-pink-900/10">
              <Award size={28} />
            </div>
            <h3 className="text-2xl font-bold text-brand-primary mb-3">{nosotrosData.misionTitle}</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              {nosotrosData.misionContent}
            </p>
          </div>

          {/* Visión */}
          <div className="bg-rose-50/20 p-8 rounded-2xl border border-rose-100/50 flex flex-col items-start text-left hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-brand-secondary text-white p-3.5 rounded-xl mb-6 shadow-md shadow-pink-500/10">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-bold text-brand-primary mb-3">{nosotrosData.visionTitle}</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              {nosotrosData.visionContent}
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-gradient-to-br from-brand-secondary/5 via-white to-brand-primary/5 rounded-3xl p-8 md:p-12 border border-rose-100/30">
          <h3 className="text-2xl font-extrabold text-brand-primary text-center mb-10">
            {nosotrosData.valuesTitle}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {nosotrosData.valuesList.map((v, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-rose-100/50 flex gap-4 text-left hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-rose-50 p-3 rounded-lg h-fit text-brand-secondary">
                  {getIcon(v.title)}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-primary mb-2">{v.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
