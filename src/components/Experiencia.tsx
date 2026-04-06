import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Experiencia = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  // Parallax muito sutil e seguro para evitar recortes (bounding limits)
  const yImage = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="experiencia" className="relative w-full flex flex-col items-center overflow-hidden">
      
      <div className="w-full bg-florenzi-bg py-16 md:py-24 relative z-20 flex justify-center">
        <div className="w-full flex items-center justify-center gap-3 md:gap-8 opacity-90 pointer-events-none px-4 md:px-12">
          <div className="flex items-center gap-2 md:gap-8 flex-1 justify-end min-w-0">
            <div className="w-full max-w-20 sm:max-w-48 md:max-w-96 h-[1.5px] bg-linear-to-l from-[#F4F5F0] to-transparent shrink" />
            <div className="w-6 sm:w-12 md:w-24 h-[1.5px] shrink-0 bg-[#009246]" />
          </div>
          
          <div className="flex flex-col items-center justify-center text-florenzi-text/90 scale-[1.1] md:scale-[1.8] shrink-0 mx-2 md:mx-0">
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8C3 4.5 11 4.5 11 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M2.5 9.5C5 10 9 10 11.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M4 10.5L7 17.5L10 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex items-center gap-2 md:gap-8 flex-1 justify-start min-w-0">
            <div className="w-6 sm:w-12 md:w-24 h-[1.5px] shrink-0 bg-[#CE2B37]" />
            <div className="w-full max-w-20 sm:max-w-48 md:max-w-96 h-[1.5px] bg-linear-to-r from-[#F4F5F0] to-transparent shrink" />
          </div>
        </div>
      </div>

      <div ref={containerRef} className="relative w-full h-[85vh] md:h-screen min-h-[500px] md:min-h-[600px] overflow-hidden flex items-center bg-[#0a0a0a]">
        
        <motion.div 
          style={{ y: yImage }}
          className="absolute inset-0 w-full h-[110%] -top-[5%]" 
        >
          <motion.img 
            src="/LOJA-FRENTE.jpg" 
            alt="Interior da Florenzi Gelateria"
            loading="lazy"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full h-full object-cover object-[70%_center] md:object-center origin-center"
          />
        </motion.div>

        <div className="absolute inset-0 z-10 w-full h-full pointer-events-none bg-linear-to-r from-black/80 via-black/50 md:via-black/40 to-transparent backdrop-blur-[2px]" />

        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-24 flex items-center h-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="w-full max-w-full md:max-w-3xl lg:max-w-4xl pl-2 sm:pl-8 md:pl-20 lg:pl-32 pb-16 md:pb-32 lg:pb-48"
          >
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10"
            >
              <div className="w-8 md:w-12 h-px bg-[#F4F5F0]/60 shadow-lg" />
              <span className="font-sans text-[9px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#F4F5F0]/90 drop-shadow-md">
                La Gelateria
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-[clamp(2.5rem,8vw,7.5rem)] text-[#F4F5F0] tracking-tighter leading-[1.05] md:leading-[0.95] mb-8 md:mb-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] selection:bg-florenzi-text selection:text-florenzi-bg"
            >
              Um espaço <br className="hidden md:block" />
              <span className="italic font-light opacity-90 pl-6 sm:pl-10 lg:pl-16 block mt-1 lg:mt-2">feito para</span>
              <span className="block mt-1 lg:mt-2">viver momentos.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-[#F4F5F0]/90 font-light max-w-xs md:max-w-xl leading-relaxed mb-10 md:mb-16 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
            >
              Conforto, sabor e experiência em cada detalhe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <a href="#" className="inline-flex items-center gap-4 md:gap-6 group bg-black/10 backdrop-blur-md border border-[#F4F5F0]/30 text-[#F4F5F0] px-6 sm:px-8 md:px-10 py-3.5 md:py-5 rounded-full transition-all duration-500 hover:bg-[#F4F5F0] hover:text-black hover:transform hover:-translate-y-1 hover:border-transparent hover:shadow-[0_15px_40px_rgba(244,245,240,0.15)] focus:outline-none focus:ring-2 focus:ring-[#F4F5F0]/50 active:scale-95">
                <span className="font-sans text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.25em] font-medium transition-colors duration-500">
                  Como chegar
                </span>
                <span className="font-serif italic text-xl md:text-2xl group-hover:translate-x-2 transition-transform duration-700 ease-[0.25,0.1,0.25,1]">
                  →
                </span>
              </a>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
