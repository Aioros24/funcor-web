import { User, ArrowUpRight } from 'lucide-react';
import noticiasData from '../data/noticias.json';

export default function Noticias() {
  const getBadgeStyles = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'noticia':
        return 'bg-brand-secondary text-white';
      case 'evento':
        return 'bg-purple-600 text-white';
      case 'testimonio':
        return 'bg-teal-500 text-white';
      default:
        return 'bg-brand-primary text-white';
    }
  };

  const getFallbackImage = (title: string) => {
    if (title.toLowerCase().includes('medicamentos')) {
      return 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400';
    }
    if (title.toLowerCase().includes('valientes')) {
      return 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400';
    }
    return 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400';
  };

  const resolveImageUrl = (path: string) => {
    if (!path) return '';
    if (path.startsWith('/')) {
      return path.substring(1);
    }
    return path;
  };

  return (
    <section id="noticias" className="py-20 bg-rose-50/10 border-t border-rose-100/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading from the Flyer */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary font-bold text-xs uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100">
            NOTICIAS Y ACTIVIDADES
          </span>
          <h2 className="text-3xl md:text-4.5xl font-black text-brand-primary mt-3 mb-4">
            {noticiasData.sectionTitle}
          </h2>
          <div className="h-1.5 w-20 bg-brand-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base">
            {noticiasData.sectionDesc}
          </p>
        </div>

        {/* News Grid exactly matching the cards of the flyer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {noticiasData.newsList.map((news, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] overflow-hidden border border-rose-100/40 hover:border-brand-secondary/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >

              {/* Card Header with Category Badge and Image */}
              <div className="aspect-[4/3] w-full relative overflow-hidden flex items-center justify-center text-rose-300 bg-rose-50">
                <img
                  src={news.image ? resolveImageUrl(news.image) : getFallbackImage(news.title)}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating category badge styled like the flyer */}
                <span className={`absolute bottom-4 left-4 text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase tracking-wider z-10 shadow-sm ${getBadgeStyles(news.tag)}`}>
                  {news.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 text-left flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1 font-semibold text-brand-secondary">
                      {news.date}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-slate-500">
                      <User size={12} /> {news.author}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base md:text-lg text-brand-primary mb-2 line-clamp-2 leading-snug group-hover:text-brand-secondary transition-colors duration-200">
                    {news.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-500 line-clamp-4 leading-relaxed text-justify mb-4">
                    {news.excerpt}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1 text-xs font-bold text-brand-secondary hover:text-brand-primary cursor-pointer border-t border-rose-100/30 pt-4 w-full transition-colors">
                  Leer más <ArrowUpRight size={14} />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View all news button from the flyer */}
        <div className="text-center pt-12">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center bg-brand-secondary hover:bg-brand-primary text-white font-extrabold text-center px-8 py-3.5 rounded-full shadow-lg shadow-pink-100 transition-all duration-300 hover:scale-105 uppercase text-xs tracking-wider"
          >
            Ver todas las noticias
          </a>
        </div>

      </div>
    </section>
  );
}
