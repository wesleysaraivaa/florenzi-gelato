import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
          // Ativa a seção quando  a margem superior passar de 40% da tela
          if (rect.top <= window.innerHeight * 0.4) {
            currentActive = el!.id;
          }
        }
        setActive(prev => currentActive !== prev ? currentActive : prev);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      role="navigation"
      aria-label="Navegação flutuante"
    >
      <div className="flex items-center gap-3 rounded-full border border-florenzi-text/15 bg-florenzi-bg/90 backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.1)] px-3 py-3 md:px-4 md:py-3">
        {items.map((it) => {
          const isActive = active === it.id;
          if (it.cta) {
            return (
              <a
                key={it.id}
                href={it.href}
                className="ml-1 inline-flex items-center rounded-full bg-florenzi-accent text-florenzi-text px-5 py-3 font-sans text-[12px] md:text-[13px] uppercase tracking-[0.25em] hover:opacity-90 transition-opacity"
              >
                {it.label}
              </a>
            );
          }
          return (
            <a
              key={it.id}
              href={it.href}
              className={`relative px-5 py-3 rounded-full font-sans text-[12px] md:text-[13px] uppercase tracking-[0.22em] transition-colors ${
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
  );
};
