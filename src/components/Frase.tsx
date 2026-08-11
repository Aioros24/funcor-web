import { Heart, Quote } from 'lucide-react';
import fraseData from '../data/frase.json';

export default function Frase() {
  const resolveImageUrl = (path: string) => {
    if (!path) return '';
    if (path.startsWith('/')) {
      return path.substring(1);
    }
    return path;
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-brand-secondary via-rose-600 to-pink-500 text-white">
      {/* Decorative vector assets */}
      {fraseData.backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center -z-20 opacity-15"
          style={{ backgroundImage: `url(${resolveImageUrl(fraseData.backgroundImage)})` }}
        />
      ) : null}

      {/* Circular backdrop shapes */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-white/5 rounded-full opacity-40 blur-2xl" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-black/5 rounded-full opacity-30 blur-2xl" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10 flex flex-col items-center space-y-6">
        {/* Quote symbol */}
        <div className="text-white/30 transform rotate-180">
          <Quote size={64} className="fill-white/10 stroke-[1.5]" />
        </div>

        {/* Big quote text from the flyer */}
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug drop-shadow-sm max-w-3xl italic">
          "{fraseData.quote}"
        </blockquote>

        {/* Heart centered detail under quote */}
        <div className="flex items-center justify-center pt-2">
          <div className="h-0.5 w-12 bg-white/30 rounded-full" />
          <Heart size={24} className="mx-4 text-white fill-white/20 animate-pulse-slow" />
          <div className="h-0.5 w-12 bg-white/30 rounded-full" />
        </div>

        <p className="text-rose-100 text-sm font-bold uppercase tracking-widest">
          {fraseData.author}
        </p>
      </div>
    </section>
  );
}
