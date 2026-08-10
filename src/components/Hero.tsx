import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, Ribbon } from 'lucide-react';
import slidesData from '../data/carousel.json';

interface Slide {
  id: string;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  active: boolean;
}

export default function Hero() {
  const activeSlides: Slide[] = slidesData.slides.filter((slide) => slide.active);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Automatic change after 5 seconds
  useEffect(() => {
    if (!isAutoplay || activeSlides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % activeSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoplay, activeSlides.length]);

  const handlePrev = () => {
    setCurrentIdx((prevIdx) => (prevIdx === 0 ? activeSlides.length - 1 : prevIdx - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prevIdx) => (prevIdx + 1) % activeSlides.length);
  };

  const handleSelectSlide = (idx: number) => {
    setCurrentIdx(idx);
  };

  // Helper to resolve absolute upload paths to relative paths for subfolder hosting (e.g. GitHub Pages)
  const resolveImageUrl = (path: string) => {
    if (!path) return '';
    if (path.startsWith('/')) {
      return path.substring(1);
    }
    return path;
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[95vh] flex items-center pt-28 pb-12 overflow-hidden bg-gradient-to-br from-rose-50/40 via-white to-pink-50/30"
    >
      {/* Background decorations with soft pink/magenta tones */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-rose-300/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Institutional welcome & branding */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-rose-100/60 border border-rose-200 text-brand-secondary px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              {/* Lazo rosa symbol (represented by Ribbon icon) */}
              <Ribbon size={14} className="text-brand-secondary" /> Lazo Rosado: Apoyo Contra el Cáncer
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-primary leading-tight tracking-tight mt-0">
              Un Nuevo Renacer con <span className="text-brand-secondary relative after:absolute after:bottom-1 after:left-0 after:h-[6px] after:w-full after:bg-rose-100/50 after:-z-10">amor y solidaridad</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl text-justify md:text-left">
              En la <strong>Fundación Corazón Humanitario – Un Nuevo Renacer (FUNCOR)</strong>, tendemos puentes de esperanza para personas y familias afectadas por el cáncer en Venezuela. Nuestra labor está simbolizada por el <strong>lazo rosado</strong> de la lucha, el <strong>corazón</strong> de la solidaridad, y la <strong>silueta femenina</strong> que representa el renacer y la vida.
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
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-rose-50/20 text-brand-primary font-bold border border-rose-200 hover:border-brand-secondary px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Conócenos <ChevronRight size={18} />
              </a>
            </div>

            {/* Micro stats under CTA using placeholders to prevent invented data */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-rose-100 w-full text-slate-500 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-brand-primary font-bold text-base leading-none">[Por confirmar]</span>
                <span>Pacientes Orientados</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-brand-secondary font-bold text-base leading-none">[Por confirmar]</span>
                <span>Jornadas Realizadas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-brand-primary font-bold text-base leading-none">100%</span>
                <span>Compromiso Transparente</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Dynamic Content Carousel */}
          <div className="lg:col-span-6 w-full">
            <div
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden group border border-rose-100/10"
              onMouseEnter={() => setIsAutoplay(false)}
              onMouseLeave={() => setIsAutoplay(true)}
            >
              {/* Slides Container */}
              <div className="relative w-full h-full">
                {activeSlides.map((slide, idx) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out flex flex-col justify-between p-8 sm:p-12 text-white ${
                      idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    {/* Visual Backdrop dynamic image layer */}
                    {slide.image ? (
                      <div
                        className="absolute inset-0 bg-cover bg-center -z-20 transition-transform duration-1000 transform scale-100 group-hover:scale-105"
                        style={{ backgroundImage: `url(${resolveImageUrl(slide.image)})` }}
                      />
                    ) : null}

                    {/* Gradient Overlay for superior accessibility, contrast, and visual brand identity */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/95 via-rose-950/70 to-brand-secondary/45 -z-10" />

                    {/* Visual Backdrop extra decorative shapes */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl -z-10" />

                    {/* Slide Top Badge & Icon */}
                    <div className="flex justify-between items-start">
                      <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <Ribbon size={24} className="text-rose-100" />
                      </div>
                      <span className="bg-white/25 text-white text-[10px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md border border-white/10">
                        {slide.id.toUpperCase()}
                      </span>
                    </div>

                    {/* Slide Text Content */}
                    <div className="space-y-4 text-left">
                      <div className="inline-flex items-center gap-1.5 text-rose-200 text-xs font-bold uppercase tracking-wider">
                        <Sparkles size={14} /> Esperanza de un Nuevo Renacer
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm">
                        {slide.title}
                      </h2>
                      <p className="text-sm sm:text-base text-rose-50 leading-relaxed max-w-md drop-shadow-sm text-justify">
                        {slide.description}
                      </p>

                      <div className="pt-2">
                        <a
                          href={slide.buttonLink}
                          className="inline-flex items-center gap-2 bg-white text-brand-primary hover:bg-rose-50 font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-105"
                        >
                          {slide.buttonText} <ChevronRight size={14} />
                        </a>
                      </div>
                    </div>

                    {/* Extra space at bottom to prevent indicator overlay */}
                    <div className="h-4" />
                  </div>
                ))}
              </div>

              {/* Slider Manual Controls (Visible on hover on computer, always visible on mobile) */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-2.5 rounded-full backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Diapositiva anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-2.5 rounded-full backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Siguiente diapositiva"
              >
                <ChevronRight size={20} />
              </button>

              {/* Slider Dots/Position Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {activeSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIdx ? 'w-6 bg-white' : 'w-2.5 bg-white/40'
                    }`}
                    aria-label={`Ir a la diapositiva ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
