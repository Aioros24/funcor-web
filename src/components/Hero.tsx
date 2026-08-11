import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, Ribbon, Heart } from 'lucide-react';
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
      className="relative min-h-[92vh] flex items-center pt-32 pb-16 overflow-hidden bg-gradient-to-b from-rose-50/20 via-white to-white"
    >
      {/* Decorative fuchsia curves/waves inspired by the flyer background */}
      <div className="absolute top-1/3 -left-48 w-[400px] h-[400px] bg-gradient-to-tr from-brand-secondary/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 -right-48 w-[500px] h-[500px] bg-gradient-to-br from-pink-300/10 to-transparent rounded-full blur-3xl -z-10" />

      {/* Decorative ribbon shape behind content */}
      <div className="absolute top-10 right-10 text-rose-100/40 -z-10 pointer-events-none transform rotate-12 animate-pulse hidden md:block">
        <Ribbon size={240} className="stroke-[0.5]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Direct and Emotional Copywriting from the Flyer */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-brand-secondary/30 text-brand-secondary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Ribbon size={14} className="animate-spin-slow text-brand-secondary" /> FUNCOR: Apoyo Contra el Cáncer
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-black text-slate-800 leading-tight tracking-tight mt-0">
              Transformamos vidas <br />
              <span className="text-brand-secondary bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent relative">
                con amor y esperanza
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl text-justify md:text-left">
              Acompañamos a personas con cáncer y sus familias, brindando apoyo integral para un nuevo renacer.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#nosotros"
                className="bg-brand-secondary hover:bg-brand-primary text-white font-extrabold text-center px-8 py-4 rounded-full shadow-lg shadow-pink-200 transition-all duration-300 hover:scale-105 flex items-center gap-2 uppercase text-sm tracking-wider"
              >
                <Heart size={16} className="fill-white" /> Conoce más
              </a>
              <a
                href="#como-ayudar"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-rose-50/30 text-brand-secondary font-extrabold border-2 border-brand-secondary/40 hover:border-brand-secondary px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 uppercase text-sm tracking-wider"
              >
                Cómo Ayudar
              </a>
            </div>

            {/* Micro stats under CTA matching the placeholder approach */}
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
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[32px] bg-gradient-to-tr from-brand-primary via-brand-secondary to-rose-500 shadow-2xl overflow-hidden group border-4 border-white"
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
                    ) : (
                      /* Elegant fallback image placeholder: Representing a doctor holding a cancer patient's hand as seen in the flyer top portion */
                      <div
                        className="absolute inset-0 bg-cover bg-center -z-20 transition-transform duration-1000 transform scale-100 group-hover:scale-105"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800')` }}
                      />
                    )}

                    {/* Rich fuchsia overlay for perfect text contrast and flyer visual alignment */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/95 via-brand-secondary/40 to-transparent -z-10" />

                    {/* Top slide indicator */}
                    <div className="flex justify-between items-start">
                      <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <Ribbon size={20} className="text-white fill-white/10" />
                      </div>
                      <span className="bg-black/30 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md border border-white/10">
                        {slide.id.toUpperCase()}
                      </span>
                    </div>

                    {/* Slider Text Content */}
                    <div className="space-y-3 text-left">
                      <div className="inline-flex items-center gap-1.5 text-rose-200 text-xs font-bold uppercase tracking-wider">
                        <Sparkles size={14} className="animate-pulse" /> Un Nuevo Renacer
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white drop-shadow-md">
                        {slide.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-rose-100 leading-relaxed max-w-md drop-shadow-sm text-justify line-clamp-3">
                        {slide.description}
                      </p>

                      <div className="pt-2">
                        <a
                          href={slide.buttonLink}
                          className="inline-flex items-center gap-2 bg-white text-brand-primary hover:text-brand-secondary font-black px-6 py-3 rounded-full text-xs shadow-md transition-all duration-300 hover:scale-105 uppercase tracking-wider"
                        >
                          {slide.buttonText} <ChevronRight size={14} />
                        </a>
                      </div>
                    </div>

                    {/* Spacer at bottom */}
                    <div className="h-4" />
                  </div>
                ))}
              </div>

              {/* Slider Manual Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Siguiente"
              >
                <ChevronRight size={18} />
              </button>

              {/* Slider Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {activeSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIdx ? 'w-6 bg-white' : 'w-2 bg-white/40'
                    }`}
                    aria-label={`Diapositiva ${idx + 1}`}
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
