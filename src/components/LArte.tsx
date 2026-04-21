import { useState, useRef, type KeyboardEvent } from 'react';import { motion, AnimatePresence } from 'framer-motion';

// Imagem com skeleton de loading
const LazyImg = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [ready, setReady] = useState(false);
  return (
    <div className="relative w-full h-full">
      {!ready && (
        <div className="absolute inset-0 rounded-2xl bg-florenzi-text/8 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setReady(true)}
        className={`transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'} ${className ?? ''}`}
      />
    </div>
  );
};
const FlavorChip = ({ flavor, index }: { flavor: { name: string; notes: string }; index: number }) => {
  const [open, setOpen] = useState(false);
  const chipRef = useRef<HTMLButtonElement>(null);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.04 + index * 0.05 }}
    >
      <button
        ref={chipRef}
        type="button"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="group flex items-center gap-2.5 rounded-full border border-florenzi-text/15 bg-florenzi-bg/60 px-4 py-2.5 text-left transition-all duration-300 hover:border-florenzi-text/40 hover:bg-florenzi-text hover:text-florenzi-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-florenzi-text/30"
        aria-expanded={open}
      >
        <span className="font-sans text-[9px] text-florenzi-text/30 group-hover:text-florenzi-accent/50 tabular-nums transition-colors">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="font-serif text-base text-florenzi-text group-hover:text-florenzi-accent group-hover:italic transition-all duration-300 whitespace-nowrap">
          {flavor.name}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            role="tooltip"
            className="absolute bottom-full left-0 mb-2.5 z-50 w-64 rounded-2xl border border-florenzi-text/12 bg-florenzi-text text-florenzi-accent shadow-2xl shadow-black/20 p-5 pointer-events-none"
          >
            <p className="font-serif text-lg italic mb-2 leading-tight">{flavor.name}</p>
            <p className="font-sans text-[11px] opacity-60 leading-relaxed font-light">{flavor.notes}</p>
            {/* seta */}
            <div className="absolute -bottom-[5px] left-6 w-2.5 h-2.5 rotate-45 bg-florenzi-text border-r border-b border-florenzi-text/12" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

type Flavor = { name: string; notes: string };
type Category = {
  id: string;
  name: string;
  origin: string;
  description: string;
  image: string;
  items: Flavor[];
};

const menuCategories: Category[] = [
  {
    id: 'gelato',
    name: 'Gelato Artigianale',
    origin: 'Clássico Italiano',
    description: 'Nossa base de receita italiana, feita do zero com ingredientes em estado bruto. Sem pastas artificiais.',
    image: '/images/menu/gelato.png',
    items: [
      { name: 'Pistacchio Puro', notes: 'Pistache 100% Bronte, notas terrosas e textura sedosa.' },
      { name: 'Fior di Latte', notes: 'Leite fresco da fazenda local e creme. Sabor limpo.' },
      { name: 'Nocciola Piemonte', notes: 'Avelãs puras tostadas lentamente.' },
      { name: 'Cioccolato Belga', notes: 'Cacau 80% intenso e frutado.' },
    ],
  },
  {
    id: 'acai',
    name: 'Açaí Amazônico',
    origin: 'Pureza Selvagem',
    description: 'Açaí de altíssima concentração, batido sem xaropes para manter o dulçor e acidez original da fruta.',
    image: '/images/menu/acai.png',
    items: [
      { name: 'Açaí Puro', notes: 'Apenas a superfruta, batida com guaraná natural.' },
      { name: 'Açaí & Morango', notes: 'Mesclado com morangos frescos batidos na hora.' },
      { name: 'Açaí & Banana', notes: 'Cremoso, denso, finalizado com flor de sal.' },
    ],
  },
  {
    id: 'cafes',
    name: 'Cafés Especiais',
    origin: 'Grãos Selecionados',
    description: 'Torra média a clara, destacando notas frutadas e corpo aveludado da nossa seleção mensal.',
    image: '/images/menu/cafes.png',
    items: [
      { name: 'Espresso Naturale', notes: 'Tiro curto, crema espessa e notas de caramelo.' },
      { name: 'Latte Artigiano', notes: 'Leite vaporizado perfeitamente liso.' },
      { name: 'Americano', notes: 'Espresso alongado suave com notas minerais.' },
    ],
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino Cremoso',
    origin: 'A Arte do Leite',
    description: 'A proporção perfeita entre o amargor do café especial e a doçura natural da crema do leite de fazenda.',
    image: '/images/menu/cappuccino.png',
    items: [
      { name: 'Cappuccino Clássico', notes: '1/3 espresso, 1/3 leite, 1/3 crema rica e aveludada.' },
      { name: 'Cappuccino Avelã', notes: 'Com um toque da nossa própria nocciola tostada.' },
      { name: 'Mocaccino Florenzi', notes: 'Infundido com chocolate belga fundido no vaporizador.' },
    ],
  },
  {
    id: 'chocolate',
    name: 'Chocolate Quente',
    origin: 'Cacau Premium',
    description: 'Densidade absurda. Uma bebida feita para abraçar, cozida lentamente em pequenas batedeiras de cobre.',
    image: '/images/menu/chocolate.png',
    items: [
      { name: 'Europeu Clássico', notes: 'Extremamente grosso, com textura de veludo negro.' },
      { name: 'Spicy Aztec', notes: 'Toque de canela fina e especiarias sutis de inverno.' },
      { name: 'Bianco Naturale', notes: 'Chocolate branco puro derretido lentamente no leite integral.' },
    ],
  },
  {
    id: 'croissant',
    name: 'Croissant Duplo',
    origin: 'Lievito Madre',
    description: 'Massa folhada fermentada lentamente. Amanteigado no ponto exato para esfarelar na primeira mordida.',
    image: '/images/menu/croissant.png',
    items: [
      { name: 'Tradicional (Puro)', notes: 'Simplicidade crocante, alvéolos gigantes e dourados.' },
      { name: 'Recheio de Pistacchio', notes: 'Transbordando nosso creme artesanal de pistache.' },
      { name: 'Amêndoas', notes: 'Coberto com lâminas rústicas e farto creme frangipane.' },
    ],
  },
  {
    id: 'cuscuz',
    name: 'Cuscuz Raiz',
    origin: 'Tradição do Sertão',
    description: 'Milho hidratado na medida, soltinho e aromático, elevando a identidade afetuosa da nossa terra cearense.',
    image: '/images/menu/cuscuz.png',
    items: [
      { name: 'Na Manteiga da Terra', notes: 'Úmido, perfumado, raiz e banhado em manteiga dourada.' },
      { name: 'Com Carne de Sol', notes: 'Desfiada fininha, puxada na manteiga com cebola roxa.' },
      { name: 'Com Queijo Coalho', notes: 'Maçaricado, crosta dourada envolta em queijo derretido.' },
    ],
  },
  {
    id: 'tapiocas',
    name: 'Tapiocas Finas',
    origin: 'Goma Fresca',
    description: 'Peneirada na hora da entrega, fina e leve. Recheios pensados para não esconderem o frescor originário da mandioca.',
    image: '/images/menu/tapioca.png',
    items: [
      { name: 'Marguerita Ceará', notes: 'Generoso queijo coalho, tomatinhos confit e manjericão fresco.' },
      { name: 'Carne e Nata', notes: 'A clássica carne de sol mergulhada gentilmente na nata fresca.' },
      { name: 'Florenzi Doce', notes: 'Coco fresco ralado na hora com um fio de leite condensado artesanal.' },
    ],
  },
  {
    id: 'milkshake',
    name: 'Milkshake',
    origin: 'Gelato Batido',
    description: 'Esqueça totalmente os xaropes sintéticos. Nosso milkshake é nosso próprio gelato artesanal batido com leite puro.',
    image: '/images/menu/milkshake.png',
    items: [
      { name: 'Shake de Pistacchio', notes: 'O clássico mais pedido. Verde vibrante natural e incrivelmente denso.' },
      { name: 'Shake de Fior di Latte', notes: 'Puro, limpo, realçando as ricas proteínas do leite integral.' },
      { name: 'Shake Cioccolato Ouro', notes: 'Chocolate tão denso que quase serve como um mousse frio no canudo.' },
      { name: 'Shake Nocciola', notes: 'Coroado com pedaços graúdos de praliné de avelãs trituradas.' },
            { name: 'Shake Cioccolato Ouro', notes: 'Chocolate tão denso que quase serve como um mousse frio no canudo.' },
      { name: 'Shake Nocciola', notes: 'Coroado com pedaços graúdos de praliné de avelãs trituradas.' },
            { name: 'Shake Cioccolato Ouro', notes: 'Chocolate tão denso que quase serve como um mousse frio no canudo.' },
      { name: 'Shake Nocciola', notes: 'Coroado com pedaços graúdos de praliné de avelãs trituradas.' },
    ],
  },
];

export const LArte = () => {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);
  // mobile: null = grade de categorias, string = id do painel aberto
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeCategory = menuCategories.find(c => c.id === activeTab) ?? menuCategories[0];
  const activeIndex = menuCategories.findIndex(c => c.id === activeTab);
  const mobileCategory = mobileOpen ? (menuCategories.find(c => c.id === mobileOpen) ?? null) : null;
  const mobileIndex = mobileOpen ? menuCategories.findIndex(c => c.id === mobileOpen) : -1;

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    const ids = menuCategories.map(c => c.id);
    const cur = ids.indexOf(activeTab);
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = ids[(cur + 1) % ids.length];
      setActiveTab(next);
      queueMicrotask(() => tabRefs.current[next]?.focus());
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = ids[(cur - 1 + ids.length) % ids.length];
      setActiveTab(prev);
      queueMicrotask(() => tabRefs.current[prev]?.focus());
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveTab(ids[0]);
      queueMicrotask(() => tabRefs.current[ids[0]]?.focus());
    } else if (e.key === 'End') {
      e.preventDefault();
      const last = ids[ids.length - 1];
      setActiveTab(last);
      queueMicrotask(() => tabRefs.current[last]?.focus());
    }
  };

  return (
    <section id="menu" className="w-full bg-florenzi-bg overflow-hidden relative">

      {/* CABEÇALHO */}
      <div className="pt-24 md:pt-32 pb-12 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-florenzi-text/40 mb-4 block">
            La Nostra Selezione
          </span>
          <h2 className="font-serif text-[clamp(2.8rem,6vw,5rem)] text-florenzi-text font-medium italic leading-none">
            Cardápio
          </h2>
        </div>
      </div>

      {/* ══════════════════════════════
          MOBILE  (<lg) — dois estágios
      ══════════════════════════════ */}
      <div className="lg:hidden">
        <AnimatePresence mode="wait">

          {/* ESTÁGIO 1 — grade 2×N de categorias */}
          {!mobileOpen && (
            <motion.div
              key="mobile-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="px-5 pb-16 grid grid-cols-2 gap-3"
            >
              {menuCategories.map((cat, i) => (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.035, ease: 'easeOut' }}
                  onClick={() => setMobileOpen(cat.id)}
                  type="button"
                  className="group relative flex flex-col items-start justify-between rounded-2xl border border-florenzi-text/10 bg-florenzi-text/3 p-5 text-left active:scale-[0.97] transition-transform duration-150 overflow-hidden min-h-[160px]"
                >
                  {/* imagem fantasma de fundo */}
                  <div className="absolute -right-3 -bottom-3 w-20 h-20 opacity-8 pointer-events-none">
                    <img src={cat.image} alt="" aria-hidden className="w-full h-full object-contain" loading="lazy" decoding="async" />
                  </div>
                  <span className="font-sans text-[9px] text-florenzi-text/30 tabular-nums mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <img
                    src={cat.image}
                    alt=""
                    aria-hidden
                    className="w-11 h-11 object-contain mb-3"
                    loading="lazy"
                    decoding="async"
                  />                  <div className="flex-1">
                    <p className="font-serif text-[1.05rem] text-florenzi-text leading-tight">{cat.name}</p>
                    <p className="font-sans text-[9px] text-florenzi-text/40 uppercase tracking-[0.15em] mt-0.5">{cat.origin}</p>
                  </div>
                  <span className="mt-3 text-florenzi-text/25 text-sm">→</span>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* ESTÁGIO 2 — painel da categoria selecionada */}
          {mobileOpen && mobileCategory && (
            <motion.div
              key={`mobile-detail-${mobileOpen}`}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 28 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              role="region"
              aria-label={mobileCategory.name}
            >
              {/* barra superior: voltar + contador */}
              <div className="px-5 py-4 border-b border-florenzi-text/10 flex items-center justify-between">
                <button
                  onClick={() => setMobileOpen(null)}
                  type="button"
                  aria-label="Voltar para categorias"
                  className="flex items-center gap-2 text-florenzi-text/50 active:text-florenzi-text transition-colors"
                >
                  <span>←</span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em]">Cardápio</span>
                </button>
                <span className="font-sans text-[10px] text-florenzi-text/30 uppercase tracking-[0.2em]">
                  {String(mobileIndex + 1).padStart(2, '0')} / {String(menuCategories.length).padStart(2, '0')}
                </span>
              </div>

              {/* imagem + título lado a lado */}
              <div className="relative flex items-center gap-5 px-6 pt-8 pb-7 overflow-hidden">
                <div className="absolute inset-0 bg-radial-[at_80%_50%] from-florenzi-accent/20 to-transparent pointer-events-none" />
                <div className="relative z-10 flex-1 min-w-0">
                  <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-florenzi-text/35 mb-2 block">
                    {mobileCategory.origin}
                  </span>
                  <h3 className="font-serif text-[2rem] text-florenzi-text italic font-medium leading-[1.05] mb-3">
                    {mobileCategory.name}
                  </h3>
                  <p className="font-sans text-xs text-florenzi-text/50 leading-relaxed font-light">
                    {mobileCategory.description}
                  </p>
                </div>
                <motion.img
                  src={mobileCategory.image}
                  alt={mobileCategory.name}
                  loading="lazy"
                  decoding="async"
                  initial={{ scale: 0.82, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-28 h-28 object-contain drop-shadow-xl shrink-0"
                />              </div>

              {/* lista de itens */}
              <div className="px-5 pb-6 border-t border-florenzi-text/10">
                <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-florenzi-text/35 py-4 block">
                  {mobileCategory.items.length} variações
                </span>
                <div role="list" aria-label={`Variações de ${mobileCategory.name}`} className="divide-y divide-florenzi-text/8">
                  {mobileCategory.items.map((flavor, idx) => (
                    <motion.div
                      key={flavor.name}
                      role="listitem"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, delay: 0.04 + idx * 0.055 }}
                      className="flex items-center justify-between gap-4 py-4"
                    >
                      <div className="flex items-baseline gap-4 min-w-0">
                        <span className="font-sans text-[10px] text-florenzi-text/25 shrink-0 tabular-nums">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="min-w-0">
                          <h4 className="font-serif text-lg text-florenzi-text">{flavor.name}</h4>
                          <p className="mt-0.5 font-sans text-[11px] text-florenzi-text/45 leading-relaxed font-light">{flavor.notes}</p>
                        </div>
                      </div>
                      <span className="shrink-0 text-florenzi-text/20 text-base">→</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* navegação anterior / próximo */}
              <div className="px-5 pb-14 pt-4 flex items-center justify-between border-t border-florenzi-text/10">
                <button
                  type="button"
                  onClick={() => {
                    const ids = menuCategories.map(c => c.id);
                    setMobileOpen(ids[(mobileIndex - 1 + ids.length) % ids.length]);
                  }}
                  className="flex items-center gap-2 text-florenzi-text/40 active:text-florenzi-text transition-colors"
                >
                  <span>←</span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em]">Anterior</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const ids = menuCategories.map(c => c.id);
                    setMobileOpen(ids[(mobileIndex + 1) % ids.length]);
                  }}
                  className="flex items-center gap-2 text-florenzi-text/40 active:text-florenzi-text transition-colors"
                >
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em]">Próximo</span>
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* ══════════════════════════════
          DESKTOP  (lg+)
      ══════════════════════════════ */}
      <div className="hidden lg:flex">

        {/* SIDEBAR */}
        <aside
          className="flex flex-col w-72 xl:w-80 2xl:w-96 shrink-0 border-r border-florenzi-text/10 sticky top-0 self-start max-h-screen overflow-y-auto pt-8 pb-16 px-6 xl:px-10"
          aria-label="Categorias do cardápio"
        >
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="La Nostra Selezione"
            onKeyDown={onKeyDown}
            className="flex flex-col gap-1"
          >
            {menuCategories.map((cat, i) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.id}`}
                  id={`tab-desktop-${cat.id}`}
                  ref={el => { tabRefs.current[cat.id] = el; }}
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                  className={`group flex items-center gap-4 px-4 py-4 rounded-2xl text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-florenzi-text text-florenzi-accent'
                      : 'hover:bg-florenzi-text/5 text-florenzi-text/50 hover:text-florenzi-text'
                  }`}
                >
                  <span className={`font-sans text-[10px] w-5 shrink-0 ${isActive ? 'opacity-60' : 'opacity-30'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <img
                    src={cat.image}
                    alt=""
                    aria-hidden="true"
                    className={`w-7 h-7 rounded-full object-contain shrink-0 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="font-sans text-[11px] xl:text-xs uppercase tracking-[0.15em] leading-tight">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* PAINEL DESKTOP */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              role="tabpanel"
              id={`panel-${activeCategory.id}`}
              aria-labelledby={`tab-desktop-${activeCategory.id}`}
            >
              {/* hero */}
              <div className="relative flex flex-row items-stretch border-b border-florenzi-text/10 overflow-hidden">
                <div className="flex-1 min-w-0 max-w-2xl px-12 lg:px-16 xl:px-20 py-16 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-florenzi-text/35">
                        {String(activeIndex + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px w-10 bg-florenzi-text/20" />
                      <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-florenzi-text/35">
                        {activeCategory.origin}
                      </span>
                    </div>
                    <motion.h3
                      initial={{ y: 18, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="font-serif text-[clamp(2.4rem,4vw,5.5rem)] text-florenzi-text italic font-medium leading-[1.05] mb-6"
                    >
                      {activeCategory.name}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.55, delay: 0.08 }}
                      className="font-sans text-sm xl:text-base text-florenzi-text/55 leading-relaxed font-light max-w-md"
                    >
                      {activeCategory.description}
                    </motion.p>
                  </div>
                  <div className="mt-10 flex items-center gap-2 text-florenzi-text/30">
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em]">
                      {activeCategory.items.length} variações
                    </span>
                    <div className="h-px w-8 bg-florenzi-text/20" />
                  </div>
                </div>
                <div className="relative w-72 lg:w-96 xl:w-md 2xl:w-lg shrink-0 flex items-center justify-center bg-florenzi-text/3 border-l border-florenzi-text/10 overflow-hidden">
                  <div className="absolute inset-0 bg-radial-[at_60%_40%] from-florenzi-accent/20 to-transparent pointer-events-none" />
                  <motion.div
                    key={activeCategory.id}
                    initial={{ scale: 0.88, opacity: 0, rotate: -3 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
                  >
                    <LazyImg
                      src={activeCategory.image}
                      alt={activeCategory.name}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
              </div>

              {/* chips de variações — compacto, sem crescer a seção */}
              <div className="px-12 lg:px-16 xl:px-20 py-6 xl:py-8">
                <span className="sr-only">Variações de {activeCategory.name}</span>
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-florenzi-text/35">
                    {activeCategory.items.length} variações
                  </span>
                  <div className="h-px w-6 bg-florenzi-text/15" />
                  <span className="font-sans text-[9px] text-florenzi-text/25 italic">passe o mouse para ver detalhes</span>
                </div>
                <div
                  role="list"
                  aria-label={`Variações de ${activeCategory.name}`}
                  className="flex flex-wrap gap-2.5"
                >
                  {activeCategory.items.map((flavor, idx) => (
                    <div key={flavor.name} role="listitem">
                      <FlavorChip flavor={flavor} index={idx} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* RODAPÉ — só desktop */}
      <div className="hidden lg:flex border-t border-florenzi-text/10 px-16 lg:px-24 py-6 items-center justify-between">
        <div className="flex items-center gap-3 text-florenzi-text/30">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em]">
            {String(activeIndex + 1).padStart(2, '0')} / {String(menuCategories.length).padStart(2, '0')}
          </span>
          <div className="w-24 h-px bg-florenzi-text/15 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 bg-florenzi-text/50 rounded-full"
              animate={{ width: `${((activeIndex + 1) / menuCategories.length) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              const ids = menuCategories.map(c => c.id);
              setActiveTab(ids[(activeIndex - 1 + ids.length) % ids.length]);
            }}
            className="w-10 h-10 rounded-full border border-florenzi-text/15 flex items-center justify-center text-florenzi-text/50 hover:border-florenzi-text/40 hover:text-florenzi-text transition-all duration-300"
            aria-label="Categoria anterior"
          >←</button>
          <button
            type="button"
            onClick={() => {
              const ids = menuCategories.map(c => c.id);
              setActiveTab(ids[(activeIndex + 1) % ids.length]);
            }}
            className="w-10 h-10 rounded-full border border-florenzi-text/15 flex items-center justify-center text-florenzi-text/50 hover:border-florenzi-text/40 hover:text-florenzi-text transition-all duration-300"
            aria-label="Próxima categoria"
          >→</button>
        </div>
      </div>

    </section>
  );
};
