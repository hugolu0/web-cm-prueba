'use client';

import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { sucursales, marcas } from '@/lib/data';

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'Motos', href: '#motos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Ubicación', href: '#ubicacion' },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 flex-shrink-0">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-black text-sm leading-none">CM</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#0a0a0a] rounded-full border-2 border-gray-800" />
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight leading-none block">
                  CENTRO<span className="text-red-500">MOTOS</span>
                </span>
                <span className="text-[10px] font-semibold text-gray-500 tracking-widest uppercase">Río Cuarto · Desde 1990</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Empresa familiar con más de 30 años de trayectoria en la comercialización de
              motovehículos en el sur del país. Tu confianza, nuestra pasión.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4 text-gray-300" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-gray-300" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4 text-gray-300" />
              </a>
              <a href="https://wa.me/5493584643840" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4 text-gray-300" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-5">Navegación</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-red-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-black text-sm uppercase tracking-wider mb-3">Marcas</h4>
              <div className="flex flex-wrap gap-1.5">
                {marcas.map((m) => (
                  <span key={m.id} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-md">{m.nombre}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Sucursales */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-5">Nuestras Sucursales</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {sucursales.map((suc) => (
                <div key={suc.id} className="space-y-2">
                  <p className="text-xs font-black text-red-500 uppercase tracking-wider">{suc.nombre}</p>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight">{suc.direccion}</p>
                      {suc.referencia && (
                        <p className="text-xs text-gray-500 mt-0.5 italic">{suc.referencia}</p>
                      )}
                    </div>
                  </div>
                  {suc.telefonos.map((tel) => (
                    <a
                      key={tel}
                      href={`tel:${tel.replace(/\s|\(|\)|-/g, '')}`}
                      className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      <Phone className="w-3 h-3 text-red-500 flex-shrink-0" />
                      {tel}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gray-800/60 rounded-xl border border-gray-700">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Horarios</p>
              <p className="text-sm text-white font-semibold">Lun — Vie: 8:00 a 19:00</p>
              <p className="text-sm text-gray-400">Sábado: 9:00 a 13:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Centro Motos — Río Cuarto, Córdoba. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Empresa familiar desde <span className="text-red-500">1990</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
