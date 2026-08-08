import { Apple, HeartPulse, GraduationCap, Users } from 'lucide-react';

export default function Programas() {
  const activePrograms = [
    {
      icon: <Apple className="text-brand-secondary" size={32} />,
      title: 'Alimentación y Nutrición',
      subtitle: 'Apoyo Nutricional',
      desc: 'Colaboramos en jornadas comunitarias de alimentación y canalización de insumos nutricionales para mitigar la vulnerabilidad en niños y adultos mayores.',
      impact: '[Cifra por confirmar - Impacto en proceso de registro]'
    },
    {
      icon: <HeartPulse className="text-brand-secondary" size={32} />,
      title: 'Acompañamiento en Salud',
      subtitle: 'Orientación y Bienestar',
      desc: 'Brindamos orientación básica de salud, acompañamiento social a personas enfermas y canalización para la donación de insumos básicos. Es un programa de apoyo humanitario complementario que no sustituye tratamientos médicos profesionales.',
      impact: '[Consultas y medicamentos por confirmar]'
    },
    {
      icon: <GraduationCap className="text-brand-secondary" size={32} />,
      title: 'Formación y Educación',
      subtitle: 'Sembrando Conocimiento',
      desc: 'Desarrollamos talleres de apoyo escolar, actividades recreativas para el fomento de valores y fortalecimiento de habilidades para incentivar el sano crecimiento.',
      impact: '[Beneficiarios por confirmar]'
    },
    {
      icon: <Users className="text-brand-secondary" size={32} />,
      title: 'Fortalecimiento Familiar',
      subtitle: 'Solidaridad Familiar',
      desc: 'Fomentamos el empoderamiento personal de padres y madres de familia en las comunidades mediante talleres informativos y apoyo grupal.',
      impact: '[Familias por confirmar]'
    }
  ];

  return (
    <section id="que-hacemos" className="py-20 bg-rose-50/10 border-y border-rose-100/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary font-bold text-xs uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100">
            Qué Hacemos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3 mb-4">
            Ejes de Apoyo Humanitario y Social
          </h2>
          <div className="h-1.5 w-20 bg-brand-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base">
            Cada una de nuestras actividades está orientada a aliviar la vulnerabilidad mediante soluciones de soporte social y acompañamiento humano responsable.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activePrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-rose-100/40 hover:border-brand-secondary/30 transition-all duration-300 flex flex-col md:flex-row gap-6 text-left group"
            >
              {/* Icon Container */}
              <div className="bg-rose-50/50 p-4 rounded-xl h-fit w-fit shrink-0 group-hover:bg-rose-100 transition-colors duration-300">
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
