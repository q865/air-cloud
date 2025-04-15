// pages/catalog.tsx

import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Шарики на День Рождения',
    image: '/images/birthday.jpg',
    price: 'от 1500₽',
    description: 'Яркие композиции из шаров с цифрами, звездами и фольгированными элементами.'
  },
  {
    id: 2,
    name: 'Love-композиции',
    image: '/images/love.jpg',
    price: 'от 1800₽',
    description: 'Романтичные связки для свиданий, годовщин и предложений.'
  },
  {
    id: 3,
    name: 'Оформление мероприятий',
    image: '/images/event.jpg',
    price: 'от 2500₽',
    description: 'Шары для вечеринок, фотозон и корпоративов — с доставкой и установкой.'
  }
];

export default function Catalog() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 font-sans px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-10">Каталог композиций</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-xl mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-blue-700 mb-1">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <span className="text-blue-600 font-bold mb-4">{product.price}</span>
            <Link
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Заказать
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
