import { useState, useRef, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      { name: 'Cioccolato Belga', notes: 'Cacau 80% intenso e frutado.' }
    ]
  },
  {
    id: 'açaí',
    name: 'Açaí Amazônico',
    origin: 'Pureza Selvagem',
    description: 'Açaí de altíssima concentração, batido sem xaropes para manter o dulçor e acidez original da fruta.',
    image: '/images/menu/acai.png',
    items: [
      { name: 'Açaí Puro', notes: 'Apenas a superfruta, batida com guaraná natural.' },
      { name: 'Açaí & Morango', notes: 'Mesclado com morangos frescos batidos na hora.' },
      { name: 'Açaí & Banana', notes: 'Cremoso, denso, finalizado com flor de sal.' }
    ]
  },
  {
    id: 'cafés',
    name: 'Cafés Especiais',
    origin: 'Grãos Selecionados',
    description: 'Torra média a clara, destacando notas frutadas e corpo aveludado da nossa seleção mensal.',
    image: '/images/menu/cafes.png',
    items: [
      { name: 'Espresso Naturale', notes: 'Tiro curto, crema espessa e notas de caramelo.' },
      { name: 'Latte Artigiano', notes: 'Leite vaporizado perfeitamente liso.' },
      { name: 'Americano', notes: 'Espresso alongado suave com notas minerais.' }
    ]
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
      { name: 'Mocaccino Florenzi', notes: 'Infundido com chocolate belga fundido no vaporizador.' }
    ]
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
      { name: 'Bianco Naturale', notes: 'Chocolate branco puro derretido lentamente no leite integral.' }
    ]
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
      { name: 'Amêndoas', notes: 'Coberto com lâminas rústicas e farto creme frangipane.' }
    ]
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
      { name: 'Com Queijo Coalho', notes: 'Maçaricado, crosta dourada envolta em queijo derretido.' }
    ]
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
      { name: 'Florenzi Doce', notes: 'Coco fresco ralado na hora com um fio de leite condensado artesanal.' }
    ]
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
      { name: 'Shake Nocciola', notes: 'Coroado com pedaços graúdos de praliné de avelãs trituradas.' }
    ]
  }
];

export const LArte = () => {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeCategory = menuCategories.find(c => c.id === activeTab) || menuCategories[0];

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const ids = menuCategories.map(c => c.id);
    const currentIndex = ids.indexOf(activeTab);
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % ids.length;
      const nextId = ids[nextIndex];
      setActiveTab(nextId);
      queueMicrotask(() => tabRefs.current[nextId]?.focus());
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + ids.length) % ids.length;
      const prevId = ids[prevIndex];
      setActiveTab(prevId);
      queueMicrotask(() => tabRefs.current[prevId]?.focus());
    } else if (e.key === 'Home') {
      e.preventDefault();
      const firstId = ids[0];
      setActiveTab(firstId);
      queueMicrotask(() => tabRefs.current[firstId]?.focus());
    } else if (e.key === 'End') {
      e.preventDefault();
      const lastId = ids[ids.length - 1];
      setActiveTab(lastId);
      queueMicrotask(() => tabRefs.current[lastId]?.focus());
    }
  };

  return (
    <section id="menu" className="py-24 md:py-32 w-full bg-florenzi-bg overflow-hidden relative min-h-screen flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center mb-16 z-10 relative px-6 text-center">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-florenzi-text/50 mb-6">
          La Nostra Selezione
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-florenzi-text font-medium italic">
          Cardápio Editorial
        </h2>
      </div>

      <div className="w-full relative border-b border-florenzi-text/10 mb-16 md:hidden">
        <div className="w-full max-w-7xl mx-auto">
          <div
            className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] pb-4 snap-x snap-mandatory px-6 md:px-12 lg:px-24"
          >
            <div
              className="flex items-center gap-8 md:gap-12 w-max shrink-0"
              role="tablist"
              aria-orientation="horizontal"
              aria-label="La Nostra Selezione"
              onKeyDown={onKeyDown}
            >
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative cursor-pointer snap-start font-sans text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-500 py-2 shrink-0 ${
                    activeTab === cat.id ? 'text-florenzi-text scale-105' : 'text-florenzi-text/30 hover:text-florenzi-text/60 hover:scale-105'
                  }`}
                  role="tab"
                  aria-selected={activeTab === cat.id}
                  aria-controls={`panel-${cat.id}`}
                  id={`tab-${cat.id}`}
                  ref={(el) => { tabRefs.current[cat.id] = el; }}
                  tabIndex={activeTab === cat.id ? 0 : -1}
                  type="button"
                  title={cat.name}
                >
                  {cat.name}
                  <span className={`ml-2 hidden md:inline-flex items-center justify-center rounded-full border border-current/20 px-2 py-0.5 text-[10px] tracking-widest ${activeTab === cat.id ? 'opacity-70' : 'opacity-40'}`}>
                    {cat.items.length}
                  </span>
                  {activeTab === cat.id && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute left-0 right-0 -bottom-[17px] h-px bg-florenzi-text z-20"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
              <div className="w-6 md:w-12 shrink-0"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-16 h-full bg-linear-to-l from-florenzi-bg to-transparent pointer-events-none xl:hidden" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <aside className="hidden md:flex md:col-span-3 flex-col sticky top-24 self-start">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-florenzi-text/50 mb-6">
              La Nostra Selezione
            </span>
            <div
              className="flex flex-col gap-2"
              role="tablist"
              aria-orientation="vertical"
              aria-label="La Nostra Selezione"
              onKeyDown={onKeyDown}
            >
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center justify-between rounded-full px-5 py-3 text-left font-sans text-[11px] uppercase tracking-[0.2em] transition-all border ${
                    activeTab === cat.id
                      ? 'bg-florenzi-text/5 border-florenzi-text/20 text-florenzi-text'
                      : 'bg-transparent border-florenzi-text/10 text-florenzi-text/50 hover:text-florenzi-text/80 hover:border-florenzi-text/20'
                  }`}
                  role="tab"
                  aria-selected={activeTab === cat.id}
                  aria-controls={`panel-${cat.id}`}
                  id={`tab-${cat.id}`}
                  ref={(el) => { tabRefs.current[cat.id] = el; }}
                  tabIndex={activeTab === cat.id ? 0 : -1}
                  type="button"
                  title={cat.name}
                >
                  <span className="flex items-center gap-3">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-6 h-6 rounded-full object-contain object-center"
                      loading="lazy"
                      decoding="async"
                    />
                    {cat.name}
                  </span>
                  <span className="ml-4 inline-flex items-center justify-center rounded-full border border-current/20 px-2 py-0.5 text-[10px] tracking-widest opacity-60">
                    {cat.items.length}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="md:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                role="tabpanel"
                id={`panel-${activeCategory.id}`}
                aria-labelledby={`tab-${activeCategory.id}`}
              >
                <div className="relative rounded-3xl border border-florenzi-text/10 bg-florenzi-text/5 overflow-hidden p-8 md:p-12">
                  <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-florenzi-accent/30 blur-3xl opacity-40 pointer-events-none" />
                  <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-6">
                    <div className="md:col-span-7">
                      <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-florenzi-text/40 mb-3 block">
                        {activeCategory.origin}
                      </span>
                      <h3 className="font-serif text-3xl md:text-5xl text-florenzi-text mb-6 italic font-medium">
                        {activeCategory.name}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-florenzi-text/60 leading-relaxed font-light max-w-xl">
                        {activeCategory.description}
                      </p>
                    </div>
                    <div className="md:col-span-5 flex justify-center md:justify-end">
                      <div className="w-56 h-56 md:w-72 md:h-72 relative">
                        <motion.img 
                          src={activeCategory.image} 
                          alt={activeCategory.name}
                          loading="lazy"
                          decoding="async"
                          sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 14rem"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                          className="w-full h-full object-contain object-center drop-shadow-2xl"
                          style={{ 
                            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-florenzi-text/40 mb-4 block">
                    As Nossas Variações Oficiais
                  </span>
                  <span className="sr-only">
                    Variações oficiais para {activeCategory.name}
                  </span>
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    role="list"
                    aria-label={`Variações de ${activeCategory.name}`}
                  >
                    {activeCategory.items.map((flavor, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 + (index * 0.07), ease: "easeOut" }}
                        className="group rounded-2xl border border-florenzi-text/10 bg-florenzi-bg/60 p-6 hover:border-florenzi-text/30 transition-all duration-500"
                        role="listitem"
                      >
                        <div className="flex items-start justify-between">
                          <h4 className="font-serif text-2xl md:text-3xl text-florenzi-text group-hover:italic transition-all duration-500">
                            {flavor.name}
                          </h4>
                          <span className="mt-1 w-2 h-2 rounded-full bg-florenzi-text/20 group-hover:bg-florenzi-text/40 transition-all duration-300" />
                        </div>
                        <p className="mt-3 font-sans text-[10px] md:text-xs text-florenzi-text/50 uppercase tracking-widest font-light">
                          {flavor.notes}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
