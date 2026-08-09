import { Quote, Heart } from 'lucide-react';
import testimoniosData from '../data/testimonios.json';

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary font-bold text-xs uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100">
            {testimoniosData.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3 mb-4">
            Historias que Inspiran Esperanza
          </h2>
          <div className="h-1.5 w-20 bg-brand-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base">
            {testimoniosData.sectionDesc}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimoniosData.testimonialsList.map((item, idx) => (
            <div
              key={idx}
              className="bg-rose-50/10 p-8 rounded-2xl border border-rose-100/40 relative flex flex-col justify-between text-left hover:shadow-xl hover:bg-rose-50/20 transition-all duration-300"
            >
              <div className="absolute top-6 right-8 text-rose-200/60">
                <Quote size={40} className="fill-rose-100/30" />
              </div>

              <div className="space-y-4">
                <div className="flex gap-1 text-brand-secondary mb-4">
                  <Heart size={14} className="fill-brand-secondary" />
                  <Heart size={14} className="fill-brand-secondary" />
                  <Heart size={14} className="fill-brand-secondary" />
                  <Heart size={14} className="fill-brand-secondary" />
                  <Heart size={14} className="fill-brand-secondary" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  {item.text}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-rose-100/30">
                <h4 className="font-bold text-sm text-brand-primary">
                  {item.name}
                </h4>
                <p className="text-xs text-brand-secondary font-medium">
                  {item.relation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-slate-400 text-xs mt-12 text-center max-w-lg mx-auto">
          * Para resguardar la privacidad e integridad de nuestros beneficiarios, las historias reales y fotografías autorizadas serán publicadas con consentimiento explícito una vez la junta de FUNCOR lo determine de manera oficial.
        </p>

      </div>
    </section>
  );
}
