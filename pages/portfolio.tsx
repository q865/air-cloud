// pages/portfolio.tsx
import Head from 'next/head';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Портфолио - Air Cloud</title>
        <meta name="description" content="Примеры оформлений мероприятий от Air Cloud" />
      </Head>
      <main className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Наши работы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Пример изображения */}
          <div className="overflow-hidden rounded-lg shadow">
            <Image
              src="/portfolio/event1.jpg"
              alt="Оформление мероприятия"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
          {/* Добавь больше изображений по аналогии */}
        </div>
      </main>
    </>
  );
}

