import { Heart, ChevronRight, HelpCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-rose-50/20"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-rose-100/80 border border-rose-200 text-brand-secondary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider animate-pulse">
              <Heart size={14} className="fill-brand-secondary" /> Un Nuevo Renacer en Venezuela
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-primary leading-tight tracking-tight mt-0">
              Transformando vidas con <span className="text-brand-secondary relative after:absolute after:bottom-1 after:left-0 after:h-[6px] after:w-full after:bg-rose-100 after:-z-10">amor y esperanza</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              En la <strong>Fundación Corazón Humanitario – Un Nuevo Renacer (FUNCOR)</strong>, tendemos puentes de solidaridad en Caracas y el interior del país. Trabajamos activamente para erradicar el hambre, restaurar la salud y abrir caminos educativos para quienes más lo necesitan.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#donaciones"
                className="bg-brand-secondary hover:bg-rose-600 text-white font-bold text-center px-8 py-4 rounded-full shadow-lg shadow-rose-200 hover:shadow-rose-300 transition-all duration-300 hover:scale-105"
              >
                ¿Cómo puedo ayudar?
              </a>
              <a
                href="#nosotros"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-brand-primary font-semibold border border-slate-200 hover:border-slate-300 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Conócenos <ChevronRight size={18} />
              </a>
            </div>

            {/* Micro stats under CTA */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 w-full text-slate-500 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-brand-primary font-bold text-lg leading-none">+5,000</span>
                <span>Platos Servidos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-brand-accent font-bold text-lg leading-none">+25</span>
                <span>Comunidades</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-brand-secondary font-bold text-lg leading-none">100%</span>
                <span>Transparencia</span>
              </div>
            </div>
          </div>

          {/* Hero Right Graphic */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Main illustrative card stack simulating visual proof of impact */}
            <div className="relative w-full max-w-[400px] aspect-square rounded-2xl bg-gradient-to-tr from-brand-primary to-blue-800 p-8 shadow-2xl flex flex-col justify-between text-white overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-rose-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-brand-accent/20 rounded-full blur-2xl" />

              <div className="flex justify-between items-start">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                  <Heart size={32} className="text-rose-400 fill-rose-400" />
                </div>
                <span className="bg-emerald-500/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Activo en Venezuela
                </span>
              </div>

              <div className="space-y-4">
                <blockquote className="text-lg md:text-xl font-medium italic text-left leading-relaxed">
                  "Un nuevo renacer es posible si cada uno de nosotros aporta un grano de arena lleno de amor."
                </blockquote>
                <div className="text-left">
                  <p className="font-bold text-sm">Fundación Corazón Humanitario</p>
                  <p className="text-xs text-blue-200">Caracas, Venezuela</p>
                </div>
              </div>
            </div>

            {/* Overlapping small badge cards for extra interactive layout */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce-slow">
              <div className="bg-rose-100 p-2 rounded-full text-brand-secondary">
                <Heart size={20} className="fill-brand-secondary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 leading-none">Solidaridad</p>
                <p className="text-sm font-bold text-slate-800 leading-tight">Donar Amor</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
              <div className="bg-emerald-100 p-2 rounded-full text-brand-accent">
                <HelpCircle size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 leading-none">Compromiso</p>
                <p className="text-sm font-bold text-slate-800 leading-tight">100% Voluntarios</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
