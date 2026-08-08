import { Calendar, User, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Noticias() {
  const newsPlaceholders = [
    {
      title: '[Noticia por confirmar - Título de artículo institucional]',
      date: '[Fecha por confirmar]',
      author: 'FUNCOR Prensa',
      excerpt: '[Espacio reservado para describir los eventos recientes de la fundación, como la planificación de jornadas sociales, inauguración de programas o hitos de solidaridad.]',
      tag: 'Institucional'
    },
    {
      title: '[Noticia por confirmar - Planificación de jornadas de apoyo]',
      date: '[Fecha por confirmar]',
      author: 'FUNCOR Prensa',
      excerpt: '[Detalles de las próximas entregas de insumos alimentarios o acompañamiento de bienestar familiar coordinadas en conjunto con nuestros valiosos voluntarios.]',
      tag: 'Jornadas'
    },
    {
      title: '[Noticia por confirmar - Alianzas y redes de colaboración]',
      date: '[Fecha por confirmar]',
      author: 'FUNCOR Prensa',
      excerpt: '[Información sobre la articulación de esfuerzos con aliados nacionales y colaboradores internacionales comprometidos con brindar un nuevo renacer en el país.]',
      tag: 'Alianzas'
    }
  ];

  return (
    <section id="noticias" className="py-20 bg-rose-50/10 border-t border-rose-100/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary font-bold text-xs uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100">
            Noticias y Actualidad
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3 mb-4">
            Boletín Informativo y Novedades
          </h2>
          <div className="h-1.5 w-20 bg-brand-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base">
            Mantente al tanto de nuestras acciones, planificación de jornadas y las últimas actualizaciones institucionales de la fundación.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsPlaceholders.map((news, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-rose-100/40 hover:border-brand-secondary/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >

              {/* Card Header Media Placeholder */}
              <div className="aspect-video w-full bg-gradient-to-br from-rose-50 to-pink-100 relative flex items-center justify-center text-rose-300 p-4">
                <Sparkles size={36} className="text-brand-accent/50 group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute bottom-3 left-3 bg-white/90 text-brand-secondary text-[10px] font-bold px-2 py-0.5 rounded-md uppercase border border-rose-50">
                  {news.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 text-left flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {news.date}
                    </span>
                    <span className="flex items-center gap-1">
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

                <div className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 cursor-not-allowed border-t border-rose-100/30 pt-4 w-full">
                  Próximamente disponible <ArrowUpRight size={14} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
