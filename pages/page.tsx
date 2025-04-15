'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Оформление и доставка гелиевых шаров<br />по Москве и области
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Создаём атмосферу праздника для любого повода — от детского дня рождения до стильной свадьбы 🎉
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/catalog"
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            Смотреть каталог
          </Link>
          <Link
            href="/contacts"
            className="bg-white border border-pink-500 text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition"
          >
            Связаться с нами
          </Link>
        </div>

        {/* Картинка с шарами (можно заменить на свою позже) */}
        <div className="mt-12">
          <Image
            src="/balloons-hero.png"
            alt="Гелиевые шары"
            width={600}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </main>
  );
}

