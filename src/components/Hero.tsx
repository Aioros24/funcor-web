import { Heart, ChevronRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center pt-28 pb-12 overflow-hidden bg-gradient-to-br from-rose-50/50 via-white to-pink-50/30"
    >
      {/* Background decorations with pink and magenta tones */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-rose-100/60 border border-rose-200 text-brand-secondary px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse">
              <Heart size={14} className="fill-brand-secondary" /> Esperanza y Humanidad en Venezuela
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-primary leading-tight tracking-tight mt-0">
              Un Nuevo Renacer lleno de <span className="text-brand-secondary relative after:absolute after:bottom-1 after:left-0 after:h-[6px] after:w-full after:bg-rose-100/50 after:-z-10">amor y solidaridad</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              En la <strong>Fundación Corazón Humanitario – Un Nuevo Renacer (FUNCOR)</strong>, nos dedicamos a sembrar esperanza en Venezuela. Nuestro concepto visual representa el <strong>lazo rosado</strong> de la lucha por el bienestar, la <strong>silueta femenina</strong> que personifica la vida, y el <strong>corazón</strong> de la solidaridad activa. Acompañamos a quienes más lo necesitan en su camino hacia un nuevo renacer.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#como-ayudar"
                className="bg-brand-secondary hover:bg-brand-primary text-white font-bold text-center px-8 py-4 rounded-full shadow-lg shadow-pink-100 transition-all duration-300 hover:scale-105"
              >
                ¿Cómo puedo ayudar?
              </a>
              <a
                href="#nosotros"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-rose-50/30 text-brand-primary font-bold border border-rose-200 hover:border-brand-accent px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Sobre Nosotros <ChevronRight size={18} />
              </a>
            </div>

            {/* Micro stats under CTA (Using clear confirm placeholders instead of invented statistics) */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-rose-100 w-full text-slate-500 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-brand-primary font-bold text-base leading-none">[Cifra por confirmar]</span>
                <span>Platos Servidos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-brand-secondary font-bold text-base leading-none">[Por confirmar]</span>
                <span>Comunidades</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-brand-accent font-bold text-base leading-none">100%</span>
                <span>Compromiso Humano</span>
              </div>
            </div>
          </div>

          {/* Hero Right Graphic */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Visual illustrative card reflecting the brand concept (ribbon, female silhouette, heart) */}
            <div className="relative w-full max-w-[400px] aspect-square rounded-2xl bg-gradient-to-tr from-brand-primary to-rose-700 p-8 shadow-2xl flex flex-col justify-between text-white overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-brand-accent/20 rounded-full blur-2xl" />

              <div className="flex justify-between items-start">
                {/* Simulated emblem matching the design sketch of FUNCOR */}
                <div className="bg-white/20 p-3.5 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Outer heart */}
                    <Heart size={36} className="text-rose-200 fill-white" />
                    {/* Inner spark of rebirth / female silhouette reference */}
                    <Sparkles size={16} className="text-brand-secondary absolute" />
                  </div>
                </div>
                <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md border border-white/10">
                  Fundación Venezolana
                </span>
              </div>

              <div className="space-y-4 text-left">
                {/* Concept message */}
                <blockquote className="text-lg md:text-xl font-medium italic leading-relaxed text-rose-50">
                  "Un nuevo renacer es posible con solidaridad, humanidad y esperanza."
                </blockquote>
                <div className="text-left border-t border-white/10 pt-3">
                  <p className="font-extrabold text-sm tracking-wide">FUNCOR</p>
                  <p className="text-xs text-rose-200">Sello de Solidaridad</p>
                </div>
              </div>
            </div>

            {/* Overlapping small badge cards */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-rose-100 flex items-center gap-3 animate-bounce-slow">
              <div className="bg-rose-50 p-2 rounded-full text-brand-secondary">
                <Heart size={20} className="fill-brand-secondary text-brand-secondary" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 leading-none">Inspiración</p>
                <p className="text-xs font-bold text-slate-800 leading-tight">Lazo Rosado</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-rose-100 flex items-center gap-3">
              <div className="bg-pink-50 p-2 rounded-full text-brand-secondary">
                <Sparkles size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 leading-none">Concepto</p>
                <p className="text-xs font-bold text-slate-800 leading-tight">Un Nuevo Renacer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
