import Header from './components/Header';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Programas from './components/Programas';
import Testimonios from './components/Testimonios';
import Noticias from './components/Noticias';
import Donaciones from './components/Donaciones';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-rose-50/5 text-slate-800 font-sans selection:bg-brand-secondary selection:text-white">
      {/* Header / Navegación */}
      <Header />

      {/* Main Container */}
      <main className="w-full">
        {/* Sección de Bienvenida (Hero) */}
        <Hero />

        {/* Sección Sobre Nosotros */}
        <Nosotros />

        {/* Sección Qué Hacemos */}
        <Programas />

        {/* Sección Testimonios */}
        <Testimonios />

        {/* Sección Noticias */}
        <Noticias />

        {/* Sección Cómo Ayudar */}
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
