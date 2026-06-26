'use client';

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { MapPin, Phone, ExternalLink, Clock } from 'lucide-react';
import { sucursales } from '@/lib/data';

export default function Ubicacion() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="ubicacion" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 text-red-600 font-bold text-xs tracking-widest uppercase mb-4 anim-fade-up ${isVisible ? 'is-visible' : ''}`}>
            <span className="w-8 h-0.5 bg-red-600 rounded-full" />
            Dónde Estamos
            <span className="w-8 h-0.5 bg-red-600 rounded-full" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-black text-gray-900 tracking-tight anim-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '80ms' }}>
            Visitá nuestras{' '}
            <span className="text-red-600">sucursales</span>
          </h2>
          <p className={`text-gray-500 text-lg mt-4 max-w-xl mx-auto anim-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '160ms' }}>
            Tres puntos de atención en Río Cuarto, Córdoba. Encontranos cerca tuyo.
          </p>
        </div>

        {/* Branch cards with maps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {sucursales.map((suc, i) => (
            <div
              key={suc.id}
              className={`rounded-2xl overflow-hidden border border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-50 transition-all duration-300 group anim-fade-up ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Map */}
              <div className="relative h-52 bg-gray-100">
                <iframe
                  src={suc.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={suc.nombre}
                  className="w-full h-full"
                />
                {/* Open in Maps overlay button */}
                <a
                  href={suc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 flex items-center gap-1.5 bg-white text-gray-700 hover:text-red-600 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Abrir en Maps
                </a>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{suc.nombre}</span>
                </div>
                <h3 className="text-lg font-black text-gray-900 mt-2 mb-1 tracking-tight">{suc.direccion}</h3>
                <p className="text-sm text-gray-400 mb-3">{suc.ciudad}</p>
                {suc.referencia && (
                  <p className="text-xs text-gray-400 italic mb-3">{suc.referencia}</p>
                )}
                <div className="flex flex-col gap-1.5">
                  {suc.telefonos.map((tel) => (
                    <a
                      key={tel}
                      href={`tel:${tel.replace(/\s|\(|\)|-/g, '')}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors font-medium"
                    >
                      <Phone className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      {tel}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Horario + WhatsApp strip */}
        <div className={`bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100 anim-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '500ms' }}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="font-black text-gray-900 text-sm">Horario de atención</p>
              <p className="text-sm text-gray-500">Lun — Vie: 8:00 a 19:00 · Sáb: 9:00 a 13:00</p>
            </div>
          </div>
          <a
            href="https://wa.me/5493584643840"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1fb95a] active:bg-[#18a34e] text-white font-bold px-8 py-4 rounded-xl transition-colors text-sm flex-shrink-0"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
