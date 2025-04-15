// pages/services.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const services = [
  { id: 1, title: 'Облачная инфраструктура', description: 'Масштабируемые решения для вашего бизнеса.' },
  { id: 2, title: 'Виртуальные серверы', description: 'Надежные виртуальные серверы с высокой производительностью.' },
  { id: 3, title: 'Консалтинг', description: 'Профессиональное сопровождение при переходе в облако.' }
];

const Services: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Air Cloud - Услуги</title>
        <meta name="description" content="Наши услуги по облачным решениям" />
      </Head>

      <Header />

      <main className="pt-20 max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">Услуги</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service.id} className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;
