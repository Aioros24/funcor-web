import { Apple, Stethoscope, GraduationCap, Users } from 'lucide-react';

export default function Programas() {
  const activePrograms = [
    {
      icon: <Apple className="text-rose-500" size={32} />,
      title: 'Alimentación y Nutrición',
      subtitle: 'Nutriendo el Futuro',
      desc: 'Realizamos jornadas de alimentación comunitarias y mantenemos comedores sociales en zonas críticas para combatir la desnutrición infantil y brindar sustento a los adultos mayores.',
      impact: 'Más de 5,000 platos servidos en el último año.'
    },
    {
      icon: <Stethoscope className="text-blue-500" size={32} />,
      title: 'Salud y Bienestar',
      subtitle: 'Medicina con Amor',
      desc: 'Coordinamos jornadas de medicina general, pediatría y odontología básica, además de gestionar la donación de medicamentos esenciales que salvan vidas diariamente.',
      impact: '1,200 consultas gratuitas coordinadas.'
    },
    {
      icon: <GraduationCap className="text-emerald-500" size={32} />,
      title: 'Educación y Valores',
      subtitle: 'Sembrando Conocimiento',
      desc: 'Dictamos talleres prácticos, apoyo escolar y actividades recreativas infantiles para mantener a los niños alejados de la calle, inculcando valores éticos y familiares para la vida.',
      impact: '350 niños beneficiados de forma recurrente.'
    },
    {
      icon: <Users className="text-amber-500" size={32} />,
      title: 'Desarrollo Familiar',
      subtitle: 'Emprendimiento Comunitario',
      desc: 'Apoyamos a las madres y padres venezolanos con capacitación técnica en oficios y empoderamiento personal para que generen ingresos y mejoren la calidad de vida de su hogar.',
      impact: '80 emprendedoras locales capacitadas.'
    }
  ];

  return (
    <section id="programas" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary font-bold text-xs uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full">
            Nuestros Programas
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3 mb-4">
            Ejes de Acción Humanitaria
          </h2>
          <div className="h-1.5 w-20 bg-brand-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base">
            Cada una de nuestras actividades está planificada minuciosamente para garantizar un impacto real y duradero. Abordamos los problemas desde la raíz mediante soluciones integrales.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activePrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/50 hover:border-brand-secondary/30 transition-all duration-300 flex flex-col md:flex-row gap-6 text-left group"
            >
              {/* Icon Container */}
              <div className="bg-slate-50 p-4 rounded-xl h-fit w-fit shrink-0 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-slate-100 transition-colors duration-300">
                {program.icon}
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
                <div className="bg-slate-50 px-4 py-2 rounded-lg border-l-4 border-brand-accent text-xs font-semibold text-slate-700 flex items-center">
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
