import { Apple, HeartPulse, GraduationCap, Users } from 'lucide-react';
import programasData from '../data/programas.json';

export default function Programas() {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'alimentación y nutrición':
        return <Apple className="text-brand-secondary" size={32} />;
      case 'acompañamiento en salud':
        return <HeartPulse className="text-brand-secondary" size={32} />;
      case 'formación y educación':
        return <GraduationCap className="text-brand-secondary" size={32} />;
      default:
        return <Users className="text-brand-secondary" size={32} />;
    }
  };

  return (
    <section id="que-hacemos" className="py-20 bg-rose-50/10 border-y border-rose-100/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary font-bold text-xs uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100">
            {programasData.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3 mb-4">
            Ejes de Apoyo Humanitario y Social
          </h2>
          <div className="h-1.5 w-20 bg-brand-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base">
            {programasData.sectionDesc}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programasData.programsList.map((program, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-rose-100/40 hover:border-brand-secondary/30 transition-all duration-300 flex flex-col md:flex-row gap-6 text-left group"
            >
              {/* Icon Container */}
              <div className="bg-rose-50/50 p-4 rounded-xl h-fit w-fit shrink-0 group-hover:bg-rose-100 transition-colors duration-300">
                {getIcon(program.title)}
              </div>

              {/* Text content */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs text-brand-secondary font-bold uppercase tracking-wide">
                    {program.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-brand-primary mt-1 mb-2 group-hover:text-brand-secondary transition-colors duration-200">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    {program.desc}
                  </p>
                </div>

                {/* Impact Badge */}
                <div className="bg-rose-50/30 px-4 py-2 rounded-lg border-l-4 border-brand-secondary text-xs font-semibold text-slate-700 flex items-center">
                  Impacto: {program.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
