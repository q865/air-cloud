// components/OrderModal.tsx

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export default function OrderModal({ isOpen, onClose, productName }: OrderModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch('/api/sendOrder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, comment, product: productName }),
      });

      if (res.ok) {
        setSubmitted(true);
        setName('');
        setPhone('');
        setComment('');
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 p-4 flex items-center justify-center">
      <Dialog.Overlay className="fixed inset-0 bg-black/30" />

      <div className="relative bg-white rounded-2xl p-6 max-w-md w-full z-10 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <Dialog.Title className="text-xl font-semibold text-blue-700 mb-4">
          Заказать: {productName}
        </Dialog.Title>

        {submitted ? (
          <div className="text-green-600 text-center">
            🎉 Заказ отправлен! Мы свяжемся с вами в ближайшее время.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border rounded-xl px-4 py-2"
              required
            />
            <input
              type="tel"
              placeholder="Телефон"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full border rounded-xl px-4 py-2"
              required
            />
            <textarea
              placeholder="Комментарий (необязательно)"
              value={comment}
              onChange={e => setComment(e.target.value)}
              className="w-full border rounded-xl px-4 py-2"
              rows={3}
            />
            {error && <p className="text-red-500 text-sm">Ошибка отправки. Попробуйте позже.</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white rounded-xl py-2 hover:bg-blue-700 transition"
            >
              {loading ? 'Отправка...' : 'Отправить заказ'}
            </button>
          </form>
        )}
      </div>
    </Dialog>
  );
}

