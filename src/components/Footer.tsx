export const Footer = () => {
  return (
    <footer className="w-full bg-florenzi-text text-florenzi-accent py-24 px-6 md:px-24 flex flex-col items-center">
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center md:items-start border-b border-florenzi-accent/20 pb-16 mb-16 gap-16 md:gap-0">
        
        <div className="flex flex-col items-center md:items-start max-w-xs text-center md:text-left">
          <span className="font-serif text-2xl italic tracking-wide mb-6">
            Florenzi.
          </span>
          <p className="font-sans text-sm opacity-60 leading-relaxed font-light">
            Aqui você encontra o verdadeiro gelato italiano, uma cafeteria refinada, açaí e muitas outras delícias que vão transformar o seu dia em uma experiência única.

          </p>
        </div>

        <div className="flex gap-16 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2">Social</span>
            <a href="#" className="font-serif text-lg italic hover:opacity-70 transition-opacity">Instagram</a>
            <a href="#" className="font-serif text-lg italic hover:opacity-70 transition-opacity">WhatsApp</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2">Visite</span>
            <a href="#" className="font-serif text-lg italic hover:opacity-70 transition-opacity">Ubajara-Ce </a>
            <a href="#" className="font-serif text-lg italic hover:opacity-70 transition-opacity">Como Chegar</a>
          </div>
        </div>

      </div>

      <div className="w-full max-w-6xl flex justify-between items-center opacity-40 font-sans text-[10px] uppercase tracking-[0.2em]">
        <span>© 2026 Florenzi Gelato Vero.</span>
        <span>Made with Obsession.</span>
      </div>

    </footer>
  );
};
