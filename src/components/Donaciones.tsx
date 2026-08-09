import { Heart, Landmark, Smartphone, DollarSign, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import donacionesData from '../data/donaciones.json';

export default function Donaciones() {
  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('pago móvil')) {
      return <Smartphone className="text-brand-secondary" size={28} />;
    }
    if (title.toLowerCase().includes('transferencia')) {
      return <Landmark className="text-brand-secondary" size={28} />;
    }
    return <DollarSign className="text-brand-secondary" size={28} />;
  };

  return (
    <section id="como-ayudar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary font-bold text-xs uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100">
            {donacionesData.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3 mb-4">
            Tu generosidad es la semilla del cambio
          </h2>
          <div className="h-1.5 w-20 bg-brand-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base leading-relaxed text-justify md:text-center">
            {donacionesData.sectionDesc}
          </p>
        </div>

        {/* Important Notice Board regarding Confirmation */}
        <div className="mb-12 bg-rose-50 border-l-4 border-brand-secondary p-6 rounded-r-2xl max-w-4xl mx-auto text-left flex gap-4 items-start">
          <div className="bg-white p-2 rounded-full text-brand-secondary shrink-0 shadow-sm">
            <AlertCircle size={24} />
          </div>
          <div>
            <h3 className="font-bold text-brand-primary text-base mb-1">{donacionesData.noticeTitle}</h3>
            <p className="text-slate-600 text-sm leading-relaxed text-justify">
              {donacionesData.noticeContent}
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">

          {/* Donation Methods Cards (Left / 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {donacionesData.donationMethods.map((method, index) => (
              <div
                key={index}
                className="bg-rose-50/10 p-6 rounded-2xl border border-rose-100/40 flex flex-col sm:flex-row gap-5 items-start text-left hover:border-brand-secondary/30 transition-all duration-300 hover:shadow-md"
              >
                <div className="bg-white p-3.5 rounded-xl shadow-sm shrink-0 text-brand-secondary">
                  {getIcon(method.title)}
                </div>
                <div className="w-full">
                  <h3 className="font-extrabold text-lg text-brand-primary mb-3">
                    {method.title}
                  </h3>
                  <div className="grid grid-cols-1 gap-2 text-sm text-slate-600 bg-white p-4 rounded-xl border border-rose-100/30">
                    {method.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex flex-col sm:flex-row sm:justify-between border-b border-rose-50 last:border-none pb-1.5 last:pb-0">
                        <span className="font-semibold text-slate-400 text-xs uppercase">{detail.label}:</span>
                        <span className="font-bold text-slate-500 break-all sm:text-right italic">{detail.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Box (Right / 5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-secondary to-rose-700 rounded-3xl p-8 text-white flex flex-col justify-between text-left shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-44 h-44 bg-white/10 rounded-full blur-xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-44 h-44 bg-white/10 rounded-full blur-xl" />

            <div className="relative z-10 space-y-6">
              <div className="bg-white/20 p-3 rounded-2xl w-fit backdrop-blur-md">
                <Heart className="text-white fill-white" size={28} />
              </div>

              <h3 className="text-2xl font-extrabold">¿Prefieres donar alimentos o ropa?</h3>

              <p className="text-rose-100 text-sm leading-relaxed text-justify">
                Una vez oficializada la sede física en Caracas, recibiremos donativos de alimentos no perecederos, prendas de vestir en buen estado, calzado, material pedagógico y de apoyo escolar o insumos de asistencia básica.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                  <ShieldCheck size={18} className="text-rose-200 shrink-0" />
                  <span>Se registrará constancia digital del recibo del donativo.</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 sm:pt-4">
              <a
                href="#contacto"
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-brand-secondary hover:bg-rose-50 font-bold px-6 py-4 rounded-full shadow-lg transition-transform hover:scale-103"
              >
                Coordinar Donación <ArrowRight size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="bg-rose-50/10 p-8 rounded-2xl border border-rose-100/40 flex flex-col sm:flex-row justify-between items-center gap-6 text-left">
          <div>
            <h4 className="font-extrabold text-lg text-brand-primary mb-1">¿Quieres registrarte como patrocinador o voluntario recurrente?</h4>
            <p className="text-sm text-slate-500">Haz la diferencia y sé parte del equipo que ayuda a tender puentes de solidaridad.</p>
          </div>
          <a
            href="#contacto"
            className="bg-brand-primary hover:bg-brand-secondary text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-colors whitespace-nowrap"
          >
            Unirme como Voluntario
          </a>
        </div>

      </div>
    </section>
  );
}
