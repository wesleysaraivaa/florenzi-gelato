import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Item = { id: string; label: string; href: string; cta?: boolean };

const items: Item[] = [
  { id: 'inicio', label: 'Início', href: '#inicio' },
  { id: 'equilibrio', label: 'Equilíbrio', href: '#equilibrio' },
  { id: 'menu', label: "L'Arte", href: '#menu' },
  { id: 'experiencia', label: 'Experiência', href: '#experiencia' },
  { id: 'reservar', label: 'Reservar', href: '#', cta: true }
];

export const Navbar = () => {
  const [active, setActive] = useState<string>('inicio');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ids = ['inicio', 'equilibrio', 'menu', 'experiencia'];
    
    const onScroll = () => {
      const elements = ids
        .map(id => document.getElementById(id))
        .filter(el => el !== null);

      elements.sort((a, b) => a!.offsetTop - b!.offsetTop);

      if (elements.length > 0) {
        let currentActive = elements[0]!.id;
        for (const el of elements) {
          const rect = el!.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            currentActive = el!.id;
          }
        }
        setActive(prev => currentActive !== prev ? currentActive : prev);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div id="navigation-root">
      {/* DESKTOP NAVBAR (Pill) */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="hidden lg:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 justify-center"
        role="navigation"
        aria-label="Navegação Desktop"
      >
        <div className="flex items-center gap-3 rounded-full border border-florenzi-text/15 bg-florenzi-bg/95 backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.15)] px-4 py-3 min-w-max mx-auto">
          {items.map((it) => {
            const isActive = active === it.id;
            if (it.cta) {
              return (
                <a
                  key={it.id}
                  href={it.href}
                  className="ml-2 inline-flex items-center rounded-full bg-florenzi-accent text-florenzi-text px-5 py-3 font-sans text-[13px] uppercase tracking-[0.25em] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 pointer-events-auto"
                >
                  {it.label}
                </a>
              );
            }
            return (
              <a
                key={it.id}
                href={it.href}
                className={`relative px-5 py-3 rounded-full font-sans text-[13px] uppercase tracking-[0.22em] whitespace-nowrap transition-colors shrink-0 pointer-events-auto ${
                  isActive ? 'text-florenzi-text' : 'text-florenzi-text/60 hover:text-florenzi-text'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="floatingNavActive"
                    className="absolute inset-0 rounded-full bg-florenzi-text/10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{it.label}</span>
              </a>
            );
          })}
        </div>
      </motion.nav>

      {/* MOBILE/TABLET NAVBAR (Floating Header) */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="lg:hidden fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        role="navigation"
        aria-label="Navegação Mobile"
      >
        <div className="w-full max-w-sm md:max-w-md flex items-center justify-between rounded-full border border-florenzi-text/15 bg-florenzi-bg/95 backdrop-blur-xl shadow-xl px-6 py-4 pointer-events-auto">
          <span className="font-serif italic text-xl text-florenzi-text tracking-wider pt-0.5">
            Florenzi.
          </span>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 text-florenzi-text focus:outline-none"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium pt-0.5">
              {isMobileMenuOpen ? 'Fechar' : 'Menu'}
            </span>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE/TABLET FULLSCREEN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 z-40 bg-florenzi-bg/98 backdrop-blur-sm flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-10">
              {items.map((it, i) => (
                <motion.a
                  key={it.id}
                  href={it.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: 'easeOut' }}
                  className={`font-serif italic text-4xl text-florenzi-text hover:text-florenzi-accent transition-colors ${
                    it.cta ? 'mt-8 border border-florenzi-text/20 rounded-full px-12 py-4 text-2xl not-italic font-sans uppercase tracking-[0.25em]' : ''
                  }`}
                >
                  {it.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
