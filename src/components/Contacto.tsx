import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import contactoData from '../data/contacto.json';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Donación / Voluntariado',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API Submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'Donación / Voluntariado', message: '' });
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 bg-rose-50/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary font-bold text-xs uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100">
            {contactoData.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary mt-3 mb-4">
            Escríbenos o haz tu consulta
          </h2>
          <div className="h-1.5 w-20 bg-brand-secondary mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-base leading-relaxed">
            {contactoData.sectionDesc}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left: Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-brand-primary text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
            {/* Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-44 h-44 bg-rose-950 rounded-full blur-2xl opacity-50" />

            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl font-extrabold mb-4 text-left">Información de la Fundación</h3>
              <p className="text-rose-100 text-sm leading-relaxed text-justify">
                {contactoData.cardDesc}
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 text-left">
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-md">
                    <MapPin size={20} className="text-rose-200" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-rose-200">Ubicación</h4>
                    <p className="text-sm text-slate-100">{contactoData.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-left">
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-md">
                    <Phone size={20} className="text-rose-200" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-rose-200">Teléfono Directo</h4>
                    <p className="text-sm text-slate-100 italic">{contactoData.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-left">
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-md">
                    <Mail size={20} className="text-rose-200" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-rose-200">Correo Electrónico</h4>
                    <p className="text-sm text-slate-100 italic break-all">{contactoData.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-rose-900/30">
              <p className="text-xs text-rose-200 mb-3 text-left">Contacto vía WhatsApp:</p>
              {contactoData.whatsappLink ? (
                <a
                  href={contactoData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-full shadow-lg transition-transform hover:scale-103 text-sm"
                >
                  <MessageSquare size={18} /> Chat de WhatsApp Activo
                </a>
              ) : (
                <div
                  className="w-full inline-flex items-center justify-center gap-2 bg-rose-500/50 text-white/70 font-semibold py-3.5 rounded-full cursor-not-allowed border border-rose-400/20 text-sm"
                  title="Enlace de WhatsApp en espera de confirmación de número de teléfono oficial"
                >
                  <MessageSquare size={18} /> Enlace por confirmar
                </div>
              )}
            </div>
          </div>

          {/* Right: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-md border border-rose-100/40 flex flex-col justify-center">
            {status === 'success' ? (
              <div className="text-center py-12 space-y-4">
                <div className="inline-flex items-center justify-center bg-rose-100 p-4 rounded-full text-brand-secondary animate-bounce">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary">¡Mensaje Enviado con Éxito!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Gracias por comunicarte con la Fundación Corazón Humanitario. Este formulario funciona de manera simulada y el mensaje se procesa correctamente en la demostración visual.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-sm px-6 py-2.5 rounded-full transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      className="bg-slate-50 border border-rose-100 focus:border-brand-secondary focus:bg-white focus:outline-none rounded-xl px-4 py-3 text-sm transition-colors text-slate-800"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Correo Electrónico</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ej. juan@correo.com"
                      className="bg-slate-50 border border-rose-100 focus:border-brand-secondary focus:bg-white focus:outline-none rounded-xl px-4 py-3 text-sm transition-colors text-slate-800"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Asunto del Mensaje</label>
                  <select
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-slate-50 border border-rose-100 focus:border-brand-secondary focus:bg-white focus:outline-none rounded-xl px-4 py-3 text-sm transition-colors text-slate-800"
                  >
                    <option value="Donación / Voluntariado">Quiero Donar o ser Voluntario</option>
                    <option value="Duda General">Preguntas / Dudas Generales</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tu Mensaje</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos en qué podemos ayudarte o cómo deseas colaborar..."
                    className="bg-slate-50 border border-rose-100 focus:border-brand-secondary focus:bg-white focus:outline-none rounded-xl px-4 py-3 text-sm transition-colors text-slate-800 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-primary disabled:bg-rose-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-100 transition-all duration-300 active:scale-98"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Procesando envío...
                    </span>
                  ) : (
                    <>
                      Enviar Mensaje Directo <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
