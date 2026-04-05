import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Experiencia = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const yImage = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const yText = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="experiencia" ref={containerRef} className="relative w-full bg-florenzi-bg py-48 lg:py-64 overflow-hidden flex items-center">
      
      <div className="absolute top-16 md:top-24 left-0 w-full flex items-center justify-center gap-4 md:gap-8 opacity-90 pointer-events-none z-20 px-4 md:px-12">
        <div className="flex items-center gap-4 md:gap-8 flex-1 justify-end">
          <div className="w-full max-w-48 md:max-w-96 h-[1.5px] bg-linear-to-l from-[#F4F5F0] to-transparent" />
          <div className="w-12 md:w-24 h-[1.5px] shrink-0 bg-[#009246]" />
        </div>
        
        <div className="flex flex-col items-center justify-center text-florenzi-text/90 scale-125 md:scale-[1.8] shrink-0">
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8C3 4.5 11 4.5 11 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M2.5 9.5C5 10 9 10 11.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M4 10.5L7 17.5L10 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="flex items-center gap-4 md:gap-8 flex-1 justify-start">
          <div className="w-12 md:w-24 h-[1.5px] shrink-0 bg-[#CE2B37]" />
          <div className="w-full max-w-48 md:max-w-96 h-[1.5px] bg-linear-to-r from-[#F4F5F0] to-transparent" />
        </div>
      </div>

      {/* Absolute minimal geometric accent */}
      <div className="absolute top-32 right-[20%] w-px h-[calc(100%-8rem)] bg-florenzi-text/5 hidden lg:block" />

      <div className="w-full max-w-360 mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-24 lg:gap-32">
          
          {/* Editorial Image Block */}
          <motion.div 
            style={{ y: yImage }} 
            className="w-full md:w-5/12 lg:w-[45%]"
          >
            <div className="w-full aspect-4/5 overflow-hidden relative group">
              <motion.img 
                src="/LOJA-FRENTE.jpg" 
                alt="A Experiência Florenzi Gelateria" 
                loading="lazy"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="w-full h-full object-cover transform-gpu transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="w-16 h-px bg-florenzi-text/20" />
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-florenzi-text/40">
                Experiência física
              </span>
            </div>
          </motion.div>

          {/* Pure Typography Block */}
          <motion.div 
            style={{ y: yText }} 
            className="w-full md:w-6/12 lg:w-[45%] flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[6.5rem] text-florenzi-text tracking-tighter leading-[0.95] mb-16">
                Um espaço <br/>
                <span className="italic font-light opacity-90 pl-12 lg:pl-24 block mt-2">feito para</span>
                <span className="block mt-2">viver momentos.</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <p className="font-sans text-base md:text-xl text-florenzi-text/70 max-w-md leading-relaxed font-light mb-20">
                Cada detalhe pensado para tornar sua visita especial.
              </p>
              
              <a href="#" className="inline-flex items-center gap-8 group">
                <span className="font-sans text-[11px] uppercase tracking-[0.3em] font-medium text-florenzi-text">
                  Como Chegar
                </span>
                <span className="w-12 h-12 flex flex-col items-center justify-center rounded-full border border-florenzi-text/20 group-hover:bg-florenzi-text group-hover:text-florenzi-bg transition-all duration-700 hover:scale-110">
                  <span className="font-serif italic text-xl leading-none group-hover:-rotate-45 transition-transform duration-500">→</span>
                </span>
              </a>
            </motion.div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
};
