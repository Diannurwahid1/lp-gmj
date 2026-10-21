import './globals.css';

export const metadata = {
  title: 'PT Gadai Murah Jogja — Solusi Dana Cepat dan Terpercaya',
  description: 'PT Gadai Murah Jogja menawarkan solusi gadai yang aman, cepat, dan terpercaya di Yogyakarta. Berizin dan diawasi OJK.',
  metadataBase: new URL('https://gadai-murah-jogja-landing.jourday14.chatgpt.site'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'PT Gadai Murah Jogja — Solusi Dana Cepat dan Terpercaya',
    description: 'Gadai aman, cepat, dan resmi di Yogyakarta. Berizin dan diawasi OJK.',
    type: 'website',
    url: '/',
  },
  icons: { icon: '/assets/gmj-logo.jpg' },
};

export default function RootLayout({ children }) {
  return <html lang="id"><body>{children}</body></html>;
}
