import Header from './components/Header';
import Hero from './components/Hero';
import Valores from './components/Valores';
import Nosotros from './components/Nosotros';
import Programas from './components/Programas';
import Frase from './components/Frase';
import Estadisticas from './components/Estadisticas';
import Testimonios from './components/Testimonios';
import Noticias from './components/Noticias';
import Donaciones from './components/Donaciones';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-rose-50/5 text-slate-800 font-sans selection:bg-brand-secondary selection:text-white">
      {/* Header / Navegación */}
      <Header />

      {/* Main Container */}
      <main className="w-full">
        {/* Sección de Bienvenida (Hero) */}
        <Hero />

        {/* Tarjetas de Valores superiores */}
        <Valores />

        {/* Sección Sobre Nosotros */}
        <Nosotros />

        {/* Sección Qué Hacemos (Programas) */}
        <Programas />

        {/* Frase Inspiradora Banner */}
        <Frase />

        {/* Sección Estadísticas */}
        <Estadisticas />

        {/* Sección Noticias ("Mantente Informado" con categoría badges) */}
        <Noticias />

        {/* Sección Testimonios */}
        <Testimonios />

        {/* Sección de Llamado a la Acción final (CTA) */}
        <CTA />

        {/* Sección Cómo Ayudar (Donaciones) */}
        <Donaciones />

        {/* Sección Contacto */}
        <Contacto />
      </main>

      {/* Footer / Pie de Página */}
      <Footer />
    </div>
  );
}

export default App;
