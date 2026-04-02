export const Equilibrio = () => {
  return (
    <section className="relative w-full py-48 bg-florenzi-text text-florenzi-accent flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-24">
        
        <div className="flex flex-col items-center text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-50 mb-8 border-b border-florenzi-accent/20 pb-4">
            Energia
          </span>
          <h2 className="font-serif text-4xl md:text-6xl italic tracking-tight mb-6">
            Cafés de<br/> Origem
          </h2>
          <p className="font-sans text-sm max-w-xs opacity-70 leading-relaxed font-light">
            Micro-lotes torrados artesanalmente. Notas complexas que complementam a doçura gelada.
          </p>
        </div>

        <div className="hidden md:block w-px h-64 bg-florenzi-accent/10" />

        <div className="flex flex-col items-center text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-50 mb-8 border-b border-florenzi-accent/20 pb-4">
            Natureza
          </span>
          <h2 className="font-serif text-4xl md:text-6xl italic tracking-tight mb-6">
            Açaí<br/> Puro
          </h2>
          <p className="font-sans text-sm max-w-xs opacity-70 leading-relaxed font-light">
            Batido na hora, livre de xaropes artificiais. Apenas a polpa da fruta em sua essência.
          </p>
        </div>

      </div>

      <a href="#menu" className="mt-32 px-12 py-4 border border-florenzi-accent/20 rounded-full font-sans text-xs uppercase tracking-widest hover:bg-florenzi-accent hover:text-florenzi-text transition-all duration-500">
        Descobrir Menu Completo
      </a>
    </section>
  );
};
