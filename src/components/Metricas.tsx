import { Award, Soup, HeartHandshake, Home } from 'lucide-react';

export default function Metricas() {
  const metrics = [
    {
      icon: <Soup className="text-white" size={32} />,
      count: '5,000+',
      label: 'Almuerzos Servidos',
      desc: 'Platos cargados de nutrición y cariño entregados a niños y ancianos.'
    },
    {
      icon: <Award className="text-white" size={32} />,
      count: '1,200+',
      label: 'Medicinas & Consultas',
      desc: 'Atención médica primaria y medicamentos suministrados sin costo.'
    },
    {
      icon: <HeartHandshake className="text-white" size={32} />,
      count: '150+',
      label: 'Voluntarios Activos',
      desc: 'Corazones solidarios movilizados en cada rincón para tender una mano.'
    },
    {
      icon: <Home className="text-white" size={32} />,
      count: '25+',
      label: 'Comunidades Atendidas',
      desc: 'Presencia continua en sectores vulnerables de Caracas y zonas aledañas.'
    }
  ];

  return (
    <section id="impacto" className="relative py-24 bg-brand-primary text-white overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-blue-900 rounded-full opacity-50 blur-2xl" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-rose-900 rounded-full opacity-30 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-300 font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
            Nuestro Impacto Real
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4">
            El valor del esfuerzo colectivo en números
          </h2>
          <div className="h-1.5 w-20 bg-brand-secondary mx-auto rounded-full mb-6" />
          <p className="text-blue-100 text-base leading-relaxed">
            Cada aporte se traduce en sonrisas y en un alivio real para cientos de familias venezolanas. No solo entregamos insumos, sembramos oportunidades de un nuevo renacer.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center group hover:scale-105"
            >
              {/* Icon */}
              <div className="bg-brand-secondary p-4 rounded-2xl mb-6 shadow-md shadow-rose-900/40 group-hover:bg-rose-500 transition-colors duration-300">
                {metric.icon}
              </div>

              {/* Count */}
              <div className="text-4xl font-extrabold text-white mb-2 tracking-tight">
                {metric.count}
              </div>

              {/* Label */}
              <div className="text-lg font-bold text-rose-300 mb-2">
                {metric.label}
              </div>

              {/* Desc */}
              <p className="text-blue-100 text-sm leading-relaxed">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
