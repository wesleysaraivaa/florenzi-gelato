import { useRef } from 'react';
import { motion } from 'framer-motion';

export const Experiencia = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: '3/2', maxHeight: '90vh' }}
    >
      {/* ── FOTO — cobre 100% sem parallax ── */}
      <img
        src="/LOJA-FRENTE.jpg"
        alt="Interior da Florenzi Gelateria"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
      />

      {/* ── GRADIENTE — escurece só a esquerda onde fica o texto ── */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-black/5 pointer-events-none" />

      {/* ── CONTEÚDO ── */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-10 md:px-16 lg:px-24 pb-16 md:pb-24">

        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-5 md:mb-7"
        >
          <div className="w-8 md:w-12 h-px bg-white/50" />
          <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/70">
            La Gelateria · Ubajara, CE
          </span>
        </motion.div>

        {/* título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2.8rem,7vw,6.5rem)] text-white leading-[0.95] tracking-tighter mb-6 md:mb-8 max-w-2xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        >
          Um espaço<br />
          <span className="italic font-light pl-8 md:pl-16">feito para</span><br />
          viver momentos.
        </motion.h2>

        {/* linha divisória + subtexto + cta lado a lado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12 max-w-2xl"
        >
          <p className="font-sans text-sm md:text-base text-white/70 font-light leading-relaxed max-w-xs">
            Conforto, sabor e experiência em cada detalhe.
          </p>

          <a
            href="#"
            className="group shrink-0 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 text-white px-7 py-3.5 font-sans text-[11px] uppercase tracking-[0.25em] transition-all duration-400 hover:bg-white hover:text-black hover:border-transparent hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Como chegar
            <span className="font-serif italic text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
