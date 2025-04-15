// pages/about.tsx

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>О нас | Air Cloud</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 p-6">
        <div className="max-w-4xl mx-auto space-y-10">

          <section className="text-center">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">О нас</h1>
            <p className="text-lg max-w-xl mx-auto">
              Air Cloud — это команда, которая превращает любое событие в праздник. Мы оформляем дни рождения, свадьбы, корпоративы и просто дни, когда хочется поднять настроение. Всё с душой и по-настоящему.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Наша миссия</h2>
            <p>
              Мы верим, что один яркий шар может изменить настроение человека. Поэтому мы тщательно подбираем цвет, форму и композиции, чтобы ваши моменты стали запоминающимися.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-blue-600">Наши ценности</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Оперативность и пунктуальность</li>
                <li>Индивидуальный подход</li>
                <li>Свежие и качественные шары</li>
                <li>Настроение клиента — на первом месте</li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/about-balloon.jpg"
                alt="Команда Air Cloud"
                width={600}
                height={400}
                className="rounded-xl shadow-md"
              />
            </div>
          </section>

          <section className="bg-blue-100 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Контакты</h2>
            <p>📍 Москва и МО</p>
            <p>📞 <a href="tel:+79999999999" className="text-blue-600">+7 (999) 999-99-99</a></p>
            <div className="flex justify-center gap-4 mt-4">
              <Link href="https://t.me/air_cloud_msk" target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded-xl">Telegram</Link>
              <Link href="https://instagram.com/air_cloud_msk" target="_blank" className="bg-pink-500 text-white px-4 py-2 rounded-xl">Instagram</Link>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

