// pages/api/sendOrder.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { name, phone, comment, product } = req.body;

  const message = `
💬 Новый заказ!
🎈 Товар: ${product}
🙋‍♂️ Имя: ${name}
📞 Телефон: ${phone}
📝 Комментарий: ${comment || '—'}
`;

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    if (!telegramRes.ok) {
      console.error(await telegramRes.text());
      return res.status(500).json({ success: false });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Telegram Error:', error);
    res.status(500).json({ success: false });
  }
}

