'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ArrowRight, Tag } from 'lucide-react';
import { motos } from '@/lib/data';

const categorias = ['Todos', 'Urbana', 'Sport', 'Naked', 'Trail'];

export default function Motos() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered =
    activeCategory === 'Todos' ? motos : motos.filter((m) => m.categoria === activeCategory);

  return (
    <section id="motos" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 text-red-600 font-bold text-xs tracking-widest uppercase mb-4 anim-fade-up ${isVisible ? 'is-visible' : ''}`}>
            <span className="w-8 h-0.5 bg-red-600 rounded-full" />
            Nuestros Modelos
            <span className="w-8 h-0.5 bg-red-600 rounded-full" />
          </div>
          <h2 className={`text-4xl md:text-6xl font-black text-gray-900 tracking-tight anim-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '80ms' }}>
            Conocé los
            <br />
            <span className="text-red-600">Nuevos Modelos</span>
          </h2>
          <p className={`text-gray-500 text-lg mt-4 max-w-xl mx-auto anim-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '160ms' }}>
            Stock permanente en nuestras 3 sucursales. Motomel, Corven, Bajaj, Honda, Suzuki y más.
          </p>
        </div>

        {/* Category filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 anim-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '240ms' }}>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-red-600 text-white shadow-md shadow-red-200'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-red-300 hover:text-red-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((moto, i) => (
            <div
              key={moto.id}
              className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-50 transition-all duration-300 anim-fade-up ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
                <img
                  src={moto.imagen}
                  alt={moto.nombre}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {moto.badge && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {moto.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{moto.categoria}</span>
                  <span className="text-xs font-semibold text-gray-400">{moto.marca}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight">{moto.nombre}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{moto.descripcion}</p>
                <button
                  onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all group/btn"
                >
                  Consultar precio
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-14 anim-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '680ms' }}>
          <p className="text-gray-500 text-sm mb-4">¿No encontrás el modelo que buscás?</p>
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-4 rounded-xl transition-all"
          >
            Consultanos
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
