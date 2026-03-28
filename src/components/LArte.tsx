import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const flavors = [
  { name: 'Pistacchio', origin: 'Puro Bronte', notes: 'Terroso, Salgado', xOffset: '0%' },
  { name: 'Fior di Latte', origin: 'Fazenda Orgânica', notes: 'Creme Fresco', xOffset: '25%' },
  { name: 'Cioccolato', origin: 'Bahia 80%', notes: 'Intenso, Frutado', xOffset: '10%' },
  { name: 'Nocciola', origin: 'Piemonte', notes: 'Amanteigado', xOffset: '40%' },
];

export const LArte = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -200]);

  return (
    <section ref={containerRef} className="py-48 w-full bg-florenzi-bg overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-florenzi-text/5" />

      <div className="flex flex-col items-center justify-center mb-32 z-10 relative">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-florenzi-text/50 mb-6">
          La Nostra Selezione
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-florenzi-text font-medium italic">
          Ingredientes em Estado Bruto
        </h2>
      </div>

      <div className="w-full flex flex-col gap-24 md:gap-40 px-6 md:px-24">
        {flavors.map((flavor, i) => (
          <motion.div 
            key={i}
            style={{ 
              x: flavor.xOffset, 
              y: i % 2 === 0 ? y1 : y2,
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
            }}
            className="flex flex-col max-w-xl group cursor-default"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-40 mb-4 pl-1">
              {String(i + 1).padStart(2, '0')} — {flavor.origin}
            </span>
            <h3 className="font-serif text-5xl md:text-7xl lg:text-[7vw] leading-none tracking-tight text-florenzi-text group-hover:italic transition-all duration-700">
              {flavor.name}
            </h3>
            <div className="mt-6 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-12 h-px bg-florenzi-text/30" />
              <span className="font-sans text-xs uppercase tracking-widest text-florenzi-text/60">
                {flavor.notes}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
