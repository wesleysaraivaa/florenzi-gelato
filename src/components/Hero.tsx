import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  frameCount: number;
}

export const Hero = ({ frameCount }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<(HTMLImageElement | null)[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const CRITICAL_FRAMES = Math.min(15, frameCount);
    let criticalLoaded = 0;
    let mounted = true;
    const imgArray: (HTMLImageElement | null)[] = new Array(frameCount).fill(null);

    const loadFrame = (i: number) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = `/imagens/frame (${i}).webp`;
      img.onload = () => {
        if (!mounted) return;
        imgArray[i - 1] = img;
        if (i <= CRITICAL_FRAMES) {
          criticalLoaded++;
          if (criticalLoaded === CRITICAL_FRAMES) setLoaded(true);
        }
      };
      img.onerror = () => {
        if (!mounted) return;
        imgArray[i - 1] = null;
        if (i <= CRITICAL_FRAMES) {
          criticalLoaded++;
          if (criticalLoaded === CRITICAL_FRAMES) setLoaded(true);
        }
      };
    };

    for (let i = 1; i <= CRITICAL_FRAMES; i++) loadFrame(i);

    const scheduleRest = () => {
      let i = CRITICAL_FRAMES + 1;
      const chunk = () => {
        const end = Math.min(i + 6, frameCount);
        for (; i <= end; i++) loadFrame(i);
        if (i <= frameCount) {
          const w = window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout?: number }) => number };
          if (w.requestIdleCallback) {
            w.requestIdleCallback(chunk, { timeout: 200 });
          } else {
            setTimeout(chunk, 50);
          }
        }
      };
      chunk();
    };

    scheduleRest();
    setImages(imgArray);

    return () => {
      mounted = false;
    };
  }, [frameCount]);

  useEffect(() => {
    if (!loaded || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    const dpr = window.devicePixelRatio || 1;
    let rect = canvas.parentElement!.getBoundingClientRect();

    const playhead = { frame: 0 };

    const renderFrame = (index: number) => {
      let img = images[index];
      let currentIndex = index;
      
      while (!img && currentIndex >= 0) {
        currentIndex--;
        img = images[currentIndex];
      }
      
      if (!img) return;
      
      const scale = Math.max(rect.width / img.width, rect.height / img.height);
      let x = (rect.width - (img.width * scale)) / 2;
      
      const isPortrait = rect.width < rect.height;
      if (isPortrait || rect.width <= 1024) {
        // Na renderização original, o gelato fica à direita.
        // Alinhando o X com * 1 garantimos que o copo inteiro toque a borda direita da tela,
        // removendo a parte morta do centro que corta o objeto em viewports apertados.
        x = (rect.width - (img.width * scale)) * 0.95;
      }

      const y = (rect.height - (img.height * scale)) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const updateCanvasSize = () => {
      rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
      renderFrame(Math.round(playhead.frame));
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const endValue = window.innerWidth < 768 ? "+=120%" : "+=180%";
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: endValue,
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onRefresh: () => updateCanvasSize()
      }
    });

    tl.to(playhead, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => renderFrame(Math.round(playhead.frame))
    }, 0);

    tl.to(textRef.current, { 
      opacity: 0, 
      y: window.innerWidth < 768 ? -80 : -120, 
      filter: "blur(10px)",
      ease: "power2.in" 
    }, 0.4);


    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      tl.kill();
    };
  }, [loaded, images, frameCount]);

  return (
    <section ref={containerRef} className="relative w-full h-dvh overflow-hidden bg-florenzi-bg flex items-center">
      
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-florenzi-bg">
            <span className="text-[10px] tracking-[0.5em] uppercase opacity-30 animate-pulse font-sans font-medium">...</span>
          </div>
        )}
        <canvas ref={canvasRef} className="block absolute inset-0 z-0" />
      </div>

      <div className="absolute inset-0 z-1 bg-linear-to-b md:bg-linear-to-r from-florenzi-bg/95 via-florenzi-bg/50 to-transparent pointer-events-none" />

      <div ref={textRef} className="relative z-10 w-full h-full px-6 md:px-16 lg:px-32 xl:px-[5vw] flex flex-col justify-center items-start pt-24 md:pt-0 xl:pt-[20vh]">
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="block font-sans text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.4em] font-medium text-florenzi-text/60 mb-6 md:mb-8 ml-1">
            L'Arte del Gelato
          </span>
          <h1 className="font-serif text-[clamp(4rem,15vw,11rem)] leading-[0.85] text-florenzi-text tracking-tighter font-medium drop-shadow-xl">
            Gelato <br/>
            <span className="italic font-light sm:pl-16 xl:pl-32">Vero</span>
          </h1>
          
          <div className="mt-10 md:mt-16 flex flex-col items-start gap-8">
            <p className="font-sans text-[clamp(1rem,2vw,1.5rem)] text-florenzi-text/80 max-w-xs md:max-w-xl lg:max-w-2xl leading-relaxed">
              Florenzi quem prova,volta!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
