import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-between items-center p-6 md:p-12 xl:px-[5vw] xl:py-16 text-florenzi-text pointer-events-none mix-blend-color-burn"
    >
      <div className="font-serif text-3xl md:text-5xl xl:text-7xl tracking-[0.05em] font-medium pointer-events-auto cursor-pointer">
        Florenzi.
      </div>
      
      <div className="hidden md:flex items-center gap-20 xl:gap-32 text-base lg:text-lg xl:text-2xl font-sans tracking-[0.3em] uppercase font-medium pointer-events-auto">
        <button className="hover:opacity-60 transition-opacity">L'Arte</button>
        <button className="hover:opacity-60 transition-opacity">Equilíbrio </button>
        <button className="hover:opacity-60 transition-opacity">Experiência</button>
      </div>

      <button className="pointer-events-auto text-base lg:text-lg xl:text-2xl font-sans tracking-[0.2em] uppercase pb-1 border-b-2 border-florenzi-text/30 hover:border-florenzi-text transition-colors">
        Reservar
      </button>
    </motion.nav>
  );
};
