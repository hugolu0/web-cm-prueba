'use client';

import { marcas } from '@/lib/data';

const doubled = [...marcas, ...marcas];

export default function Marcas() {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Marcas oficiales que representamos
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((marca, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-10 flex-shrink-0"
            >
              <span className="text-2xl font-black text-gray-200 hover:text-red-500 transition-colors duration-300 tracking-wider uppercase cursor-default">
                {marca.nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
