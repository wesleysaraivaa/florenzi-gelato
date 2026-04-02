import { useState } from 'react';
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

  const activeCategory = menuCategories.find(c => c.id === activeTab) || menuCategories[0];

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

      <div className="w-full relative border-b border-florenzi-text/10 mb-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] pb-4 snap-x snap-mandatory px-6 md:px-12 lg:px-24">
            <div className="flex items-center gap-8 md:gap-12 w-max shrink-0">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative cursor-pointer snap-start font-sans text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-500 py-2 shrink-0 ${
                    activeTab === cat.id ? 'text-florenzi-text scale-105' : 'text-florenzi-text/30 hover:text-florenzi-text/60 hover:scale-105'
                  }`}
                >
                  {cat.id}
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

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center">
        <div className="w-full min-h-[700px] md:min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-24 w-full"
            >
              
              <div className="w-full md:w-5/12 flex flex-col items-center md:items-start group">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative flex items-center justify-center mb-8 pointer-events-none">
                  <motion.img 
                    src={activeCategory.image} 
                    alt={activeCategory.name}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="w-full h-full object-contain object-center drop-shadow-2xl mix-blend-lighten md:mix-blend-normal"
                    style={{ 
                      WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                      maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
                    }}
                  />
                </div>
                
                <div className="text-center md:text-left">
                  <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-florenzi-text/40 mb-3 block">
                    {activeCategory.origin}
                  </span>
                  <h3 className="font-serif text-3xl md:text-5xl text-florenzi-text mb-6 italic font-medium">
                    {activeCategory.name}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-florenzi-text/60 leading-relaxed font-light max-w-sm">
                    {activeCategory.description}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-7/12 flex flex-col pt-4 md:pt-16 lg:pt-24 border-t md:border-t-0 border-florenzi-text/10 mt-8 md:mt-0">
                <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-florenzi-text/30 mb-8 md:border-b md:border-florenzi-text/10 pb-4 hidden md:block">
                  As Nossas Variações Oficiais
                </span>
                
                <div className="flex flex-col gap-10">
                  {activeCategory.items.map((flavor, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                      className="group/item flex flex-col cursor-pointer"
                    >
                      <h4 className="font-serif text-2xl md:text-3xl lg:text-4xl text-florenzi-text group-hover/item:italic transition-all duration-500 mb-2">
                        {flavor.name}
                      </h4>
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-px bg-florenzi-text/20 group-hover/item:w-12 transition-all duration-500" />
                        <p className="font-sans text-[10px] md:text-xs text-florenzi-text/50 uppercase tracking-widest font-light">
                          {flavor.notes}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
