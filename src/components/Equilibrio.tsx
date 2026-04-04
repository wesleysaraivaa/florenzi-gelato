import { motion } from 'framer-motion';

export const Equilibrio = () => {
  return (
    <section id="equilibrio" className="relative w-full py-48 bg-florenzi-text text-florenzi-accent">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-florenzi-accent/15 blur-[140px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="text-center max-w-2xl">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-80 mb-6 inline-block">
            Equilíbrio
          </span>
          <h2 className="font-serif text-4xl md:text-6xl italic tracking-tight">
            Energia & Natureza
          </h2>
        </div>

        <div className="relative mt-16 w-full max-w-5xl">
          <svg
            viewBox="0 0 1000 260"
            className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 opacity-40"
            aria-hidden
          >
            <motion.path
              d="M 40 160 C 260 20, 480 260, 960 120"
              fill="none"
              stroke="currentColor"
              className="text-florenzi-accent/30"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
          </svg>
        </div>

        <div className="relative mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-5xl" role="list" aria-label="Eixos de equilíbrio Florenzi">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group relative -mt-6 md:-mt-8 rounded-3xl border border-florenzi-accent/15 bg-florenzi-accent/5 p-8 md:p-10 backdrop-blur-sm z-10"
            role="listitem"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/images/menu/cafes.png"
                alt="Cafés de Origem"
                className="w-10 h-10 rounded-full object-contain object-center ring-1 ring-florenzi-accent/20"
                loading="lazy"
                decoding="async"
              />
              <span className="font-sans text-[10px] uppercase tracking-[0.35em] opacity-70">
                Energia
              </span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl italic mb-4">
              Cafés de Origem
            </h3>
            <p className="font-sans text-sm md:text-base opacity-90 leading-relaxed font-light max-w-md">
              Micro-lotes torrados artesanalmente. Notas complexas que complementam a doçura gelada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="group relative md:mt-8 rounded-3xl border border-florenzi-accent/15 bg-florenzi-accent/5 p-8 md:p-10 backdrop-blur-sm z-10"
            role="listitem"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/images/menu/acai.png"
                alt="Açaí Puro"
                className="w-10 h-10 rounded-full object-contain object-center ring-1 ring-florenzi-accent/20"
                loading="lazy"
                decoding="async"
              />
              <span className="font-sans text-[10px] uppercase tracking-[0.35em] opacity-70">
                Natureza
              </span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl italic mb-4">
              Açaí Puro
            </h3>
            <p className="font-sans text-sm md:text-base opacity-90 leading-relaxed font-light max-w-md">
              Batido na hora, livre de xaropes artificiais. Apenas a polpa da fruta em sua essência.
            </p>
          </motion.div>
        </div>

        <a
          href="#menu"
          className="mt-16 md:mt-20 inline-flex items-center gap-3 rounded-full border border-florenzi-accent/30 px-8 py-3 hover:bg-florenzi-accent hover:text-florenzi-text transition-all duration-300"
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.25em] font-medium">
            Descobrir Menu Completo
          </span>
          <span className="font-serif italic text-xl">→</span>
        </a>
      </div>
    </section>
  );
};
