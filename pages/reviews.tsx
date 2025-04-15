// pages/reviews.tsx

import Head from 'next/head';

export default function Reviews() {
  return (
    <>
      <Head>
        <title>Отзывы | Air Cloud</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-6">Отзывы наших клиентов</h1>
          <p className="text-lg mb-8">Нам доверяют, и это видно по вашим тёплым словам ❤️</p>

          {/* Вставка официального виджета Яндекс.Карт */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://yandex.ru/maps-reviews-widget/226582824761?comments" 
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen={true}
              style={{ border: 'none' }}
              title="Отзывы Air Cloud на Яндекс.Картах"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}

