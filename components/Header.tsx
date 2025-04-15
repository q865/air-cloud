import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Логотип */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Air Cloud
        </Link>

        {/* Навигация */}
        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Главная
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
            О нас
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
            Услуги
          </Link>
          <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
            Портфолио
          </Link>
          <Link href="/contacts" className="text-gray-700 hover:text-blue-600 transition-colors">
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

