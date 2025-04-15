// pages/portfolio.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Portfolio: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Air Cloud - Портфолио</title>
        <meta name="description" content="Примеры наших выполненных проектов" />
      </Head>

      <Header />

      <main className="pt-20 max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Портфолио</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Пример карточки проекта */}
          <div className="border rounded-lg overflow-hidden">
            <img src="/images/project1.jpg" alt="Проект 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">Проект 1</h2>
              <p className="mt-2">Краткое описание проекта.</p>
            </div>
          </div>
          {/* Добавьте больше карточек по аналогии */}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;

