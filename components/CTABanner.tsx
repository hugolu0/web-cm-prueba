'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ArrowRight, MapPin } from 'lucide-react';

export default function CTABanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 bg-red-600 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 border-2 border-white rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative max-w-7xl mx-auto px-4 text-center"
      >
        <div className={`anim-fade-up ${isVisible ? 'is-visible' : ''}`}>
          <div className="inline-flex items-center gap-2 text-white/80 font-bold text-xs tracking-widest uppercase mb-6">
            <span className="w-8 h-0.5 bg-white/60 rounded-full" />
            Tu próxima moto te espera
            <span className="w-8 h-0.5 bg-white/60 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Tu primera moto
            <br />
            <span className="text-white/90">solo con tu DNI</span>
          </h2>
          <p className="text-white/80 text-xl font-normal max-w-xl mx-auto mb-10">
            Visitanos en cualquiera de nuestras 3 sucursales en Río Cuarto
            o escribinos y te asesoramos sin compromiso.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-gray-100 font-black px-10 py-4 rounded-xl transition-colors text-sm group"
            >
              Contactanos ahora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#ubicacion"
              onClick={(e) => { e.preventDefault(); document.querySelector('#ubicacion')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 border-2 border-white/60 hover:border-white text-white font-bold px-10 py-4 rounded-xl transition-all hover:bg-white/10 text-sm"
            >
              <MapPin className="w-4 h-4" />
              Ver sucursales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
