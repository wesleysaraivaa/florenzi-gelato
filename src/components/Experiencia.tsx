import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Experiencia = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="experiencia" ref={containerRef} className="relative w-full overflow-hidden bg-florenzi-text py-48 px-6 md:px-12 flex flex-col items-center">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:36px_36px]" />
        <div className="absolute -top-40 -left-32 w-[40rem] h-[40rem] rounded-full bg-florenzi-accent/20 blur-[140px]" />
        <div className="absolute -bottom-48 -right-40 w-[34rem] h-[34rem] rounded-full bg-florenzi-accent/10 blur-[120px]" />
        <h2 aria-hidden className="absolute inset-0 flex items-center justify-center font-serif text-[30vw] italic text-florenzi-accent/30 whitespace-nowrap select-none">
          Puro
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">

        <motion.div style={{ y: yImage }} className="w-full md:w-1/2 aspect-3/4 relative">
          <div className="absolute -z-10 inset-0 rounded-[2.2rem] bg-florenzi-accent/10 blur-2xl" />
          <div className="w-full h-full rounded-[2rem] border border-florenzi-accent/20 p-3 bg-white/0 backdrop-blur-[1.5px] relative overflow-hidden">
            <img 
              src="/LOJA-FRENTE.jpg" 
              alt="Fachada Florenzi Gelateria em Ubajara-Ce" 
              loading="lazy"
              className="w-full h-full object-cover rounded-[1.6rem] transition-transform duration-[1.5s] ease-out hover:scale-105"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -left-6 w-24 h-24 border-l border-b border-florenzi-accent/30" />
          <div className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 border-r border-t border-florenzi-accent/30" />
        </motion.div>

        <motion.div style={{ y: yText }} className="w-full md:w-1/2 flex flex-col text-center md:text-left mt-16 md:mt-0 text-florenzi-accent">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-60 mb-6">
            A Experiência Física
          </span>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.1]">
            Um lugar feito<br/>
            <span className="italic font-light">para parar</span> e<br/>
            prestar atenção.
          </h2>
          <div className="mt-6 rounded-2xl border border-florenzi-accent/15 bg-florenzi-accent/5 p-6 backdrop-blur-sm">
            <p className="font-sans text-sm md:text-base opacity-80 leading-relaxed font-light max-w-xl">
              Não há pressa na Florenzi. O espaço foi pensado para que o silêncio trabalhe a favor do gosto — cada detalhe afasta o ruído e aproxima o sabor.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-full border border-florenzi-accent/20 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.25em] text-florenzi-accent/80 text-center">
                Silêncio
              </div>
              <div className="rounded-full border border-florenzi-accent/20 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.25em] text-florenzi-accent/80 text-center">
                Luz Natural
              </div>
              <div className="rounded-full border border-florenzi-accent/20 px-4 py-2 font-sans text-[10px] uppercase tracking-[0.25em] text-florenzi-accent/80 text-center">
                Ritmo Lento
              </div>
            </div>
          </div>

          <div className="mt-16 self-center md:self-start">
            <a href="#" className="inline-flex items-center gap-3 rounded-full border border-florenzi-accent/30 px-6 py-3 hover:bg-florenzi-accent hover:text-florenzi-text transition-all duration-300">
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] font-medium">
                Como chegar
              </span>
              <span className="font-serif italic text-xl">→</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
