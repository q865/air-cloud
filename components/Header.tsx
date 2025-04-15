import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          Air Cloud
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#about">
                <a className="text-gray-700 hover:text-blue-600 transition-colors">О нас</a>
              </Link>
            </li>
            <li>
              <Link href="#services">
                <a className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              </Link>
            </li>
            <li>
              <Link href="#portfolio">
                <a className="text-gray-700 hover:text-blue-600 transition-colors">Портфолио</a>
              </Link>
            </li>
            <li>
              <Link href="#contacts">
                <a className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
