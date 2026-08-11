import { CheckCircle2, Heart } from 'lucide-react';
import nosotrosData from '../data/nosotros.json';

export default function Nosotros() {
  const resolveImageUrl = (path: string) => {
    if (!path) return '';
    if (path.startsWith('/')) {
      return path.substring(1);
    }
    return path;
  };

  return (
    <section id="nosotros" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Artistic Ribbon & Silhouette SVG Illustration */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {nosotrosData.image ? (
              <div className="relative w-full max-w-[400px] aspect-square rounded-[36px] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={resolveImageUrl(nosotrosData.image)}
                  alt={nosotrosData.sectionTitle}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              /* Premium bespoke SVG Graphic representing pink ribbon forming a female silhouette holding a heart with a dove of hope */
              <div className="relative w-full max-w-[380px] aspect-square bg-gradient-to-tr from-rose-50 to-pink-100/50 rounded-[40px] p-8 flex items-center justify-center border border-rose-100 shadow-xl group hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute top-4 right-4 text-brand-secondary/10 pointer-events-none">
                  <Heart size={140} className="fill-brand-secondary/5 stroke-[0.5]" />
                </div>

                <svg viewBox="0 0 200 200" className="w-full h-full text-brand-secondary max-w-[280px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Decorative circular aura */}
                  <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" />

                  {/* Background heart shape of solidarity */}
                  <path d="M100 145 C60 110, 45 80, 45 60 C45 42, 60 30, 78 30 C90 30, 96 38, 100 42 C104 38, 110 30, 122 30 C140 30, 155 42, 155 60 C155 80, 140 110, 100 145 Z" fill="currentColor" className="opacity-5" stroke="currentColor" strokeWidth="1" />

                  {/* Fuchsia Ribbon flowing elegantly and forming the profile outline */}
                  <path d="M40,160 C50,150 70,120 70,95 C70,75 60,65 75,45 C85,35 105,32 115,45 C125,55 125,75 115,90 C105,105 85,125 100,165" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="drop-shadow-sm" />
                  <path d="M100,165 C108,185 125,180 145,155 C165,130 180,90 140,85 C115,82 105,95 90,115" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="drop-shadow-sm" />

                  {/* Fine female profile silhouette details */}
                  <path d="M73,70 C75,68 83,67 85,73 C87,79 81,85 79,89 C77,93 72,92 72,85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />

                  {/* Heart held in the center of silhouette */}
                  <path d="M100 95 C90 85, 85 75, 85 70 C85 62, 90 58, 97 58 C100 58, 103 62, 105 65 C107 62, 110 58, 113 58 C120 58, 125 62, 125 70 C125 75, 120 85, 100 95 Z" fill="currentColor" />

                  {/* White Dove outline on top of the heart */}
                  <path d="M105,72 C108,68 113,67 114,70 C115,73 110,77 108,79 C104,78 101,74 105,72 Z" fill="white" />
                  <path d="M108,79 C112,82 117,80 119,77" stroke="white" strokeWidth="1" strokeLinecap="round" />
                </svg>

                {/* Simulated emblem badge */}
                <div className="absolute -bottom-4 bg-white px-5 py-2.5 rounded-full shadow-lg border border-rose-100 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-secondary animate-ping" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Un Nuevo Renacer</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Text Copy and Fuchsia Checkmarks */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <span className="text-brand-secondary font-bold text-xs uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100">
              {nosotrosData.sectionTitle}
            </span>
            <h2 className="text-3xl md:text-4.5xl font-black text-brand-primary leading-tight mt-0">
              {nosotrosData.sectionDesc}
            </h2>
            <div className="h-1.5 w-20 bg-brand-secondary rounded-full mb-2" />

            <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
              {nosotrosData.description}
            </p>

            {/* Bullets with Fuchsia checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3.5 w-full pt-2">
              {nosotrosData.bulletPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-left">
                  <div className="text-brand-secondary shrink-0">
                    <CheckCircle2 size={22} className="fill-rose-50 stroke-brand-secondary" />
                  </div>
                  <span className="font-bold text-slate-700 text-base">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={nosotrosData.buttonLink}
                className="bg-brand-secondary hover:bg-brand-primary text-white font-extrabold text-center px-8 py-4 rounded-full shadow-lg shadow-pink-200 transition-all duration-300 hover:scale-105 uppercase text-sm tracking-wider"
              >
                {nosotrosData.buttonText}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
