// pages/delivery.tsx

import Head from 'next/head';
import { FaTruck, FaMoneyBillWave, FaClock, FaQuestionCircle } from 'react-icons/fa';

export default function Delivery() {
  return (
    <>
      <Head>
        <title>Доставка и оплата | Air Cloud</title>
      </Head>

      <main className="min-h-screen bg-blue-50 text-gray-800 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">Доставка и оплата</h1>

          {/* Блок: Условия доставки */}
          <section className="space-y-6 mb-10">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
              <FaTruck /> Условия доставки
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Доставка по Москве в пределах МКАД — от 500 ₽</li>
              <li>За МКАД — +30 ₽/км от МКАД</li>
              <li>Возможность срочной доставки — уточняйте у менеджера</li>
              <li>Доставка осуществляется ежедневно с 9:00 до 21:00</li>
            </ul>
          </section>

          {/* Блок: Оплата */}
          <section className="space-y-6 mb-10">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
              <FaMoneyBillWave /> Способы оплаты
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Наличный расчет при получении</li>
              <li>Перевод на карту Сбербанк / Тинькофф</li>
              <li>Онлайн-оплата по ссылке (по запросу)</li>
            </ul>
          </section>

          {/* Блок: Время заказа */}
          <section className="space-y-6 mb-10">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
              <FaClock /> Время оформления заказа
            </h2>
            <p>Прием заказов: ежедневно с 8:00 до 22:00 через Telegram, Instagram или по телефону.</p>
          </section>

          {/* Блок: FAQ */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-blue-600">
              <FaQuestionCircle /> Часто задаваемые вопросы
            </h2>
            <div className="space-y-4">
              <div>
                <strong>Можно ли заказать на сегодня?</strong>
                <p>Да, если вы оформите заказ до 17:00 и есть свободные курьеры.</p>
              </div>
              <div>
                <strong>Как долго летают шарики?</strong>
                <p>Обычно от 2 до 7 дней в зависимости от условий хранения. Мы используем качественный гелий и обрабатываем шары Hi-Float.</p>
              </div>
              <div>
                <strong>Можно ли выбрать время доставки?</strong>
                <p>Да, при оформлении заказа укажите желаемый временной интервал.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

