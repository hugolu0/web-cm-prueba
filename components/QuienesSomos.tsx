'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { CheckCircle, ArrowRight } from 'lucide-react';

const valores = [
  'Empresa familiar con más de 30 años de trayectoria',
  'Atención transparente, seria y cercana',
  'Financiación accesible: tu primera moto solo con el DNI',
  'Técnicos especializados y repuestos originales',
];

export default function QuienesSomos() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <div className={`relative anim-fade-left ${isVisible ? 'is-visible' : ''}`}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=1"
                alt="Taller Centro Motos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating stat */}
            <div
              className={`absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 anim-scale-in ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="text-4xl font-black text-red-600 leading-none">1990</div>
              <div className="text-sm font-semibold text-gray-700 mt-1">Fundada por Aldo</div>
              <div className="text-xs text-gray-400 mt-0.5">+30 años de historia</div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gray-100 rounded-full -z-10" />
          </div>

          {/* Content Side */}
          <div className={`anim-fade-right ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs tracking-widest uppercase mb-4">
              <span className="w-8 h-0.5 bg-red-600 rounded-full" />
              Quiénes Somos
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              Una empresa familiar
              <br />
              <span className="text-red-600">con historia real</span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              En <strong>Centro Motos</strong> no solo vendemos motos: construimos relaciones de confianza
              que duran toda la vida, con nuestros clientes, colaboradores y con proveedores.
              Somos una empresa familiar ubicada en <strong>Río Cuarto, Córdoba</strong>, con más de
              30 años de trayectoria, nacida en 1990 de la mano de nuestro fundador, <strong>Aldo</strong>,
              y seguimos adelante con la misma pasión de siempre, pero con una mirada moderna y dinámica.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Desde nuestros inicios, nos propusimos ofrecer soluciones reales a nuestros clientes. Hoy
              representamos a las mejores marcas del mercado y contamos con un equipo comprometido que
              entiende tus necesidades, te acompaña en cada paso y te garantiza una atención
              transparente, seria y cercana.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              Nos especializamos en la comercialización al por mayor y al por menor de motovehículos
              en el sur del país, con una amplia gama de productos que se adaptan a las necesidades
              de nuestros clientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {valores.map((v, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 anim-fade-up ${isVisible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${450 + i * 80}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-700">{v}</span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold px-8 py-4 rounded-xl transition-colors group"
            >
              Contactanos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 anim-fade-up ${isVisible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '700ms' }}
        >
          {[
            { value: '+30', label: 'Años de experiencia' },
            { value: '1990', label: 'Año de fundación' },
            { value: '9', label: 'Marcas oficiales' },
            { value: '3', label: 'Sucursales en Río Cuarto' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-600">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
