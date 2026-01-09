import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/projects', label: 'Проектирование' },
    { path: '/supply', label: 'Снабжение' },
    { path: '/training', label: 'Обучение' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Логотип */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-xl">РТ</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                РЕСТ-ТЕХ
              </div>
              <div className="text-xs text-gray-500 -mt-1">Технологии будущего</div>
            </div>
          </Link>

          {/* Навигация для десктопа */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Кнопка контакта */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
            >
              Связаться
            </a>
          </div>

          {/* Мобильное меню кнопка */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-medium text-center mt-2"
              >
                Связаться
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
