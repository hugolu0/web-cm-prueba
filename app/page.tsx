import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuienesSomos from '@/components/QuienesSomos';
import Motos from '@/components/Motos';
import Servicios from '@/components/Servicios';
import Marcas from '@/components/Marcas';
import Testimonios from '@/components/Testimonios';
import CTABanner from '@/components/CTABanner';
import Contacto from '@/components/Contacto';
import Ubicacion from '@/components/Ubicacion';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <QuienesSomos />
      <Motos />
      <Marcas />
      <Servicios />
      <Testimonios />
      <CTABanner />
      <Contacto />
      <Ubicacion />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
