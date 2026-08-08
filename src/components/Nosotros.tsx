import { Eye, Award, Sparkles, ShieldCheck } from 'lucide-react';

export default function Nosotros() {
  const values = [
    {
      icon: <Award className="text-rose-500 shrink-0" size={24} />,
      title: 'Transparencia',
      desc: 'Administramos cada recurso de forma honesta, rindiendo cuentas claras a nuestros colaboradores y aliados.'
    },
    {
      icon: <Sparkles className="text-blue-500 shrink-0" size={24} />,
      title: 'Empatía y Amor',
      desc: 'Nuestra motivación nace desde el corazón. Escuchamos, sentimos y actuamos para sanar dolores ajenos.'
    },
    {
      icon: <ShieldCheck className="text-emerald-500 shrink-0" size={24} />,
      title: 'Compromiso Social',
      desc: 'Nos mantenemos firmes en las comunidades más vulnerables, asumiendo la labor social con total responsabilidad.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary font-bold text-xs uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full">
            ¿Quiénes Somos?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3 mb-4 leading-tight">
            Fundación Corazón Humanitario – Un Nuevo Renacer
          </h2>
          <div className="h-1.5 w-20 bg-brand-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify md:text-center">
            Nacimos con la profunda convicción de que el amor al prójimo tiene el poder de restaurar vidas. En un contexto desafiante, nos levantamos como una mano amiga que abraza y sostiene a las comunidades más vulnerables en Venezuela, promoviendo el desarrollo integral de niños, jóvenes, ancianos y familias en general.
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Misión */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-start text-left hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-brand-primary text-white p-3.5 rounded-xl mb-6 shadow-md">
              <Award size={28} />
            </div>
            <h3 className="text-2xl font-bold text-brand-primary mb-3">Nuestra Misión</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              Brindar asistencia humanitaria integral en áreas fundamentales como la alimentación, salud de atención primaria, formación educativa y soporte emocional. Trabajamos hombro a hombro con voluntarios y patrocinadores para devolverle a cada venezolano la dignidad y la esperanza de un renacer próspero.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-start text-left hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-brand-accent text-white p-3.5 rounded-xl mb-6 shadow-md">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-bold text-brand-primary mb-3">Nuestra Visión</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              Consolidarnos como una de las fundaciones de mayor impacto social y transparencia en Venezuela. Buscamos establecer comedores sostenibles, programas formativos auto-sustentables y redes de salud comunitarias que empoderen a las familias para salir de la pobreza extrema de forma autónoma.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 rounded-3xl p-8 md:p-12 border border-slate-100">
          <h3 className="text-2xl font-extrabold text-brand-primary text-center mb-10">
            Nuestros Valores Fundacionales
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-slate-200/50 flex gap-4 text-left hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-slate-50 p-3 rounded-lg h-fit">
                  {v.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-primary mb-2">{v.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
