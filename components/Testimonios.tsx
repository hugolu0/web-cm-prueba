'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Star } from 'lucide-react';
import { testimonios } from '@/lib/data';

export default function Testimonios() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 text-red-600 font-bold text-xs tracking-widest uppercase mb-4 anim-fade-up ${isVisible ? 'is-visible' : ''}`}>
            <span className="w-8 h-0.5 bg-red-600 rounded-full" />
            Lo Que Dicen
            <span className="w-8 h-0.5 bg-red-600 rounded-full" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-black text-gray-900 tracking-tight anim-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '80ms' }}>
            Nuestros <span className="text-red-600">Clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((t, i) => (
            <div
              key={t.id}
              className={`bg-white rounded-2xl p-8 border border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-50 hover:-translate-y-1 transition-all duration-300 anim-fade-up ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${160 + i * 100}ms` }}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.calificacion }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-red-500 text-red-500" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.comentario}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <img src={t.imagen} alt={t.nombre} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.nombre}</p>
                  <p className="text-xs text-gray-400">Cliente verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
