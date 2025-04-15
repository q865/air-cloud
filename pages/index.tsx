import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Логотип */}
        <Link href="/" className="text-2xl font-bold text-pink-500">
          🎈 Air Cloud
        </Link>

        {/* Навигация */}
        <nav className="space-x-6 text-sm font-medium">
          <Link href="/" className="text-gray-700 hover:text-pink-500 transition-colors">
            Главная
          </Link>
          <Link href="/catalog" className="text-gray-700 hover:text-pink-500 transition-colors">
            Каталог
          </Link>
          <Link href="/portfolio" className="text-gray-700 hover:text-pink-500 transition-colors">
            Работы
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-pink-500 transition-colors">
            Услуги
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-pink-500 transition-colors">
            О нас
          </Link>
          <Link href="/contacts" className="text-gray-700 hover:text-pink-500 transition-colors">
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

