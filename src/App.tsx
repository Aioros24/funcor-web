import Header from './components/Header';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Programas from './components/Programas';
import Metricas from './components/Metricas';
import Donaciones from './components/Donaciones';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-rose-500 selection:text-white">
      {/* Header / Navegación */}
      <Header />

      {/* Main Container */}
      <main className="w-full">
        {/* Sección de Bienvenida (Hero) */}
        <Hero />

        {/* Sección Quiénes Somos (Nosotros) */}
        <Nosotros />

        {/* Sección de Ejes de Acción (Programas) */}
        <Programas />

        {/* Sección de Logros y Estadísticas (Métricas) */}
        <Metricas />

        {/* Sección de Financiamiento / Donativos (Donaciones) */}
        <Donaciones />

        {/* Sección de Formulario de Contacto / Registro (Contacto) */}
        <Contacto />
      </main>

      {/* Footer / Pie de Página */}
      <Footer />
    </div>
  );
}

export default App;
