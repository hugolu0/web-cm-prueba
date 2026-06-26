'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { heroSlides } from '@/lib/data';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback((idx: number) => {
    if (animating || idx === current) return;
    setPrev(current);
    setCurrent(idx);
    setAnimating(true);
    setTimeout(() => { setPrev(null); setAnimating(false); }, 750);
  }, [animating, current]);

  const next = useCallback(() => goTo((current + 1) % heroSlides.length), [current, goTo]);
  const previous = useCallback(() => goTo((current - 1 + heroSlides.length) % heroSlides.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next, paused]);

  return (
    <section
      id="inicio"
      className="relative h-[92vh] min-h-[580px] max-h-[900px] overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {heroSlides.map((slide, idx) => {
        const isActive = idx === current;
        const isPrev  = idx === prev;
        return (
          <div
            key={slide.id}
            className="absolute inset-0 hero-slide"
            style={{
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center hero-slide-bg"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: isActive ? 'scale(1)' : 'scale(1.07)',
                transition: isActive ? 'transform 6.5s ease-out' : 'none',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        );
      })}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div
            key={current}
            className="max-w-2xl hero-content-enter"
          >
            <div className="inline-flex items-center gap-2 bg-red-600/90 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-white rounded-full" style={{ animation: 'wa-ping 2s ease-out infinite' }} />
              Concesionaria Oficial
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-4">
              {heroSlides[current].title}{' '}
              <span className="text-red-500">{heroSlides[current].titleHighlight}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 font-normal leading-relaxed mb-10 max-w-xl">
              {heroSlides[current].subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#motos"
                onClick={(e) => { e.preventDefault(); document.querySelector('#motos')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm px-8 py-4 rounded-xl transition-colors group"
              >
                {heroSlides[current].cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold text-sm px-8 py-4 rounded-xl transition-all hover:bg-white/10"
              >
                {heroSlides[current].ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={previous}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/25 border border-white/20 rounded-full flex items-center justify-center text-white transition-all group"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/25 border border-white/20 rounded-full flex items-center justify-center text-white transition-all group"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Slide ${idx + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: idx === current ? '32px' : '12px',
              height: '4px',
              background: idx === current ? '#dc2626' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute bottom-8 right-8 z-20 text-white/50 text-xs font-semibold tracking-wider">
        <span className="text-white font-black">{String(current + 1).padStart(2, '0')}</span>
        {' / '}
        {String(heroSlides.length).padStart(2, '0')}
      </div>
    </section>
  );
}
