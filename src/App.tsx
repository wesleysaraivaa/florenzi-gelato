
import { ReactLenis } from 'lenis/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LArte } from './components/LArte';
import { Equilibrio } from './components/Equilibrio';
import { Experiencia } from './components/Experiencia';
import { Footer } from './components/Footer';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main id="inicio" className="bg-florenzi-bg min-h-screen text-florenzi-text selection:bg-florenzi-accent selection:text-white">
        <Navbar />
        <Hero frameCount={63} />
        <Equilibrio />
        <LArte />
        <Experiencia />
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
