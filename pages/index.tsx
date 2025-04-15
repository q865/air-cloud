import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Air Cloud - Облачные решения</title>
        <meta name="description" content="Динамичные облачные решения для бизнеса." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="pt-20">
        <section className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
          <div className="flex flex-col items-center justify-center h-full bg-black/40">
            <h1 className="text-5xl font-bold text-white mb-4 animate-fadeInDown">Air Cloud</h1>
            <p className="text-xl text-white mb-8 animate-fadeInUp">Динамичное облачное решение для вашего бизнеса</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Связаться сейчас
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
