'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Wrench, Settings, CreditCard, FileText, Truck, Shield } from 'lucide-react';
import { servicios } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  Wrench, Settings, CreditCard, FileText, Truck, Shield,
};

export default function Servicios() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicios" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 text-red-600 font-bold text-xs tracking-widest uppercase mb-4 anim-fade-up ${isVisible ? 'is-visible' : ''}`}>
            <span className="w-8 h-0.5 bg-red-600 rounded-full" />
            Lo Que Hacemos
            <span className="w-8 h-0.5 bg-red-600 rounded-full" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-black text-gray-900 tracking-tight anim-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '80ms' }}>
            Nuestros <span className="text-red-600">Servicios</span>
          </h2>
          <p className={`text-gray-500 text-lg mt-4 max-w-xl mx-auto anim-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '160ms' }}>
            Todo lo que necesitás para tu moto, en un solo lugar. Tres sucursales en Río Cuarto.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((srv, i) => {
            const Icon = iconMap[srv.icono] || Wrench;
            return (
              <div
                key={srv.id}
                className={`group p-8 rounded-2xl border border-gray-100 hover:border-red-200 bg-white hover:bg-red-50/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-50 hover:-translate-y-1 anim-fade-up ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${200 + i * 70}ms` }}
              >
                <div className="w-14 h-14 bg-red-600/10 group-hover:bg-red-600 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-3 tracking-tight">{srv.titulo}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{srv.descripcion}</p>
              </div>
            );
          })}
        </div>

        {/* Banner strip */}
        <div className={`mt-16 bg-[#0a0a0a] rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-gray-700 anim-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '700ms' }}>
          {[
            { icon: CreditCard, label: 'TU PRIMERA MOTO', sub: 'Solo con tu DNI' },
            { icon: Truck, label: '3 SUCURSALES', sub: 'Río Cuarto, Córdoba' },
            { icon: Shield, label: 'GARANTÍA OFICIAL', sub: 'Respaldo de fábrica' },
          ].map(({ icon: Icon, label, sub }, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6">
              <Icon className="w-8 h-8 text-red-500 mb-3" />
              <span className="text-white font-black text-sm tracking-wide">{label}</span>
              <span className="text-gray-400 text-xs mt-1">{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
