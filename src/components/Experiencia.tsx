import { motion } from 'framer-motion';

export const Experiencia = () => {
  return (
    <section
      id="experiencia"
      className="relative w-full overflow-hidden"
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(500px, 55vw, 75vh)' }}
      >
      {/* FOTO */}
      <img
        src="/images/LOJA-FRENTE.jpg"
        alt="Interior da Florenzi Gelateria"
        loading="lazy"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '70% 30%' }}
      />

      {/* gradiente */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/50 to-black/10 md:from-black/80 md:via-black/40 md:to-black/5 pointer-events-none" />

      {/* CONTEÚDO */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-12 md:pb-20">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-6 h-px bg-white/50" />
          <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-white/70">
            La Gelateria · Ubajara, CE
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2rem,7vw,6.5rem)] text-white leading-[0.95] tracking-tighter mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
        >
          Um espaço<br />
          <span className="italic font-light pl-5 ">feito para</span><br />
          viver momentos.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-12"
        >
          <p className="font-sans text-xs md:text-base text-white/70 font-light leading-relaxed max-w-[240px] md:max-w-xs">
            Conforto, sabor e experiência em cada detalhe.
          </p>

          <a
            href="#"
            className="self-start inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 text-white px-6 py-3 font-sans text-[10px] uppercase tracking-[0.25em] transition-all duration-300 hover:bg-white hover:text-black hover:border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Como chegar
            <span className="font-serif italic text-base">→</span>
          </a>
        </motion.div>

      </div>
      </div>
    </section>
  );
};
