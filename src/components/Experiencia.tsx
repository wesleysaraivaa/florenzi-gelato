import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Experiencia = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-florenzi-bg py-48 px-6 md:px-12 flex flex-col items-center">

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
        <h2 className="font-serif text-[30vw] italic text-florenzi-text whitespace-nowrap">
          Puro
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">

        <motion.div style={{ y: yImage }} className="w-full md:w-1/2 aspect-3/4 border border-florenzi-text/20 p-4 relative overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center gap-8">
            <span className="font-serif text-7xl md:text-9xl italic text-florenzi-text/10 leading-none select-none">
              FL
            </span>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-px bg-florenzi-text/20" />
              <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-florenzi-text/30">
                Ubajara-Ce
              </span>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-l border-b border-florenzi-text/30" />
          <div className="absolute -top-6 -right-6 w-24 h-24 border-r border-t border-florenzi-text/30" />
        </motion.div>

        <motion.div style={{ y: yText }} className="w-full md:w-1/2 flex flex-col text-center md:text-left mt-16 md:mt-0">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-florenzi-text/50 mb-8">
            A Experiência Física
          </span>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.1] text-florenzi-text mb-12">
            Um lugar feito<br/>
            <span className="italic font-light">para parar</span> e<br/>
            prestar atenção.
          </h2>
          <p className="font-sans text-sm md:text-base text-florenzi-text/70 leading-relaxed font-light max-w-md">
            Não há pressa na Florenzi. O espaço foi pensado para que o silêncio trabalhe a favor do gosto — cada detalhe afasta o ruído e aproxima o sabor.
          </p>

          <div className="mt-16 self-center md:self-start">
            <button className="flex items-center gap-4 group">
              <span className="font-sans text-xs uppercase tracking-widest font-medium border-b border-transparent group-hover:border-florenzi-text transition-colors">
                Como chegar
              </span>
              <span className="font-serif italic text-xl group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
