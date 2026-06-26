'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, Facebook, Youtube, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Motos', href: '#motos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Ubicación', href: '#ubicacion' },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0a0a0a] text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <a
              href="tel:+543584643840"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              (0358) 464-3840
            </a>
            <a
              href="https://wa.me/5493584643840"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              WhatsApp
            </a>
            <span className="text-gray-600 text-xs">Río Cuarto, Córdoba</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-xs">Seguinos:</span>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Sticky main nav */}
      <header
        className="sticky top-0 z-50 bg-white border-b border-gray-100"
        style={{
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.10)' : '0 1px 4px rgba(0,0,0,0.04)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="flex items-center justify-between transition-all duration-300"
            style={{ height: scrolled ? '60px' : '72px' }}
          >
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); scrollTo('#inicio'); }}
              className="flex items-center gap-3 flex-shrink-0 hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center gap-2">
                {/* CM badge */}
                <div className="relative w-10 h-10 flex-shrink-0">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-sm leading-none">CM</span>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#0a0a0a] rounded-full border-2 border-white" />
                </div>
                <div>
                  <span className="text-xl font-black text-gray-900 tracking-tight leading-none block">
                    CENTRO<span className="text-red-600">MOTOS</span>
                  </span>
                  <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">Río Cuarto · Desde 1990</span>
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="relative px-4 py-2 text-sm font-semibold text-gray-700 rounded-lg transition-all hover:text-red-600 hover:bg-red-50 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                </a>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); scrollTo('#contacto'); }}
                className="hidden md:flex items-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Consultar
              </a>
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-red-600 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Abrir menú"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="lg:hidden border-t border-gray-100 bg-white overflow-hidden transition-all duration-300"
          style={{ maxHeight: mobileOpen ? '420px' : '0', opacity: mobileOpen ? 1 : 0 }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollTo(link.href); }}
                className="px-4 py-3 text-sm font-semibold text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollTo('#contacto'); }}
              className="mt-2 flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3 rounded-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar
            </a>
            <div className="flex items-center justify-center gap-6 mt-3 pt-3 border-t border-gray-100">
              <a href="tel:+543584643840" className="flex items-center gap-1.5 text-xs text-gray-500">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                (0358) 464-3840
              </a>
              <a href="https://wa.me/5493584643840" className="flex items-center gap-1.5 text-xs text-green-600">
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
