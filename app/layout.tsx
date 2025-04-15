// app/layout.tsx
import './globals.css';
import { Rubik } from 'next/font/google';
import Link from 'next/link';

const rubik = Rubik({ subsets: ['cyrillic'], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: 'Air Cloud | Гелиевые шары',
  description: 'Легче, чем воздух. Ярче, чем радуга',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${rubik.className} bg-blue-50 text-gray-800`}>
        <header className="sticky top-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
            <Link href="/" className="text-xl font-bold text-blue-700">air_cloud_msk</Link>
            <nav className="space-x-4 text-sm">
              <Link href="/catalog" className="hover:text-blue-700">Каталог</Link>
              <Link href="/delivery" className="hover:text-blue-700">Доставка и оплата</Link>
              <Link href="/contacts" className="hover:text-blue-700">Контакты</Link>
            </nav>
          </div>
        </header>

        <main className="min-h-screen px-4 pt-6 pb-12 max-w-6xl mx-auto">
          {children}
        </main>

        <footer className="text-center text-sm text-gray-500 border-t py-4">
          © 2025 air_cloud_msk. Все права защищены.
        </footer>
      </body>
    </html>
  );
}

