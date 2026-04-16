export const Footer = () => {
  return (
    <footer className="w-full bg-florenzi-text text-florenzi-accent px-6 md:px-24 pt-16 pb-10 md:py-24 flex flex-col items-center">

      {/* TOPO */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start border-b border-florenzi-accent/20 pb-12 mb-10 md:pb-16 md:mb-16 gap-10 md:gap-0">

        {/* Logo + descrição */}
        <div className="flex flex-col items-start max-w-xs">
          <span className="font-serif text-2xl italic tracking-wide mb-4 md:mb-6">
            Florenzi.
          </span>
          <p className="font-sans text-sm opacity-60 leading-relaxed font-light">
            Aqui você encontra o verdadeiro gelato italiano, uma cafeteria refinada, açaí e muitas outras delícias que vão transformar o seu dia em uma experiência única.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-10 md:gap-16 text-left">
          <div className="flex flex-col gap-3 md:gap-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-40 mb-1 md:mb-2">Social</span>
            <a href="#" className="font-serif text-base md:text-lg italic hover:opacity-70 transition-opacity">Instagram</a>
            <a href="#" className="font-serif text-base md:text-lg italic hover:opacity-70 transition-opacity">WhatsApp</a>
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-40 mb-1 md:mb-2">Visite</span>
            <a href="#" className="font-serif text-base md:text-lg italic hover:opacity-70 transition-opacity">Ubajara, CE</a>
            <a href="#" className="font-serif text-base md:text-lg italic hover:opacity-70 transition-opacity">Como Chegar</a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 opacity-40 font-sans text-[10px] uppercase tracking-[0.2em]">
        <span>© 2026 Florenzi Gelato Vero.</span>
        <span>@Uniwersotech - Made with Obsession.</span>
      </div>

    </footer>
  );
};
