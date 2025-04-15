// pages/about.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Air Cloud - О нас</title>
        <meta name="description" content="Узнайте больше о компании Air Cloud" />
      </Head>

      <Header />

      <main className="pt-20 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">О нас</h1>
        <p className="text-lg leading-relaxed mb-4">
          Air Cloud – это современный поставщик облачных решений для бизнеса. Мы стремимся предоставить лучшие услуги, сочетая инновационные технологии и профессионализм команды.
        </p>
        <p className="text-lg leading-relaxed">
          Наши преимущества: оперативность, надежность и индивидуальный подход к каждому клиенту.
        </p>
      </main>
    </div>
  );
};

export default About;

