// pages/contacts.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Contacts: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Air Cloud - Контакты</title>
        <meta name="description" content="Свяжитесь с нами" />
      </Head>

      <Header />

      <main className="pt-20 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Контакты</h1>
        <p className="mb-4">Если у вас есть вопросы или предложения, заполните форму ниже:</p>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Имя" className="p-3 border rounded" />
          <input type="email" placeholder="Email" className="p-3 border rounded" />
          <textarea placeholder="Сообщение" className="p-3 border rounded" rows={4}></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Отправить
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Наши соцсети</h2>
          <ul className="mt-2">
            <li>
              <a href="https://www.instagram.com/air_cloud_msk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://t.me/air_cloud_msk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
