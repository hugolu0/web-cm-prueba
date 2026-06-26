import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Centro Motos — Concesionaria Oficial en Río Cuarto',
  description: 'Más de 30 años en el mercado. Honda, Bajaj, Corven, Zanella, Suzuki y más. 3 sucursales en Río Cuarto, Córdoba. Tu primera moto solo con tu DNI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
