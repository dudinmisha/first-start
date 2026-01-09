import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: 'Проектирование', href: '/projects' },
      { name: 'Снабжение', href: '/supply' },
      { name: 'Обучение', href: '/training' },
    ],
    company: [
      { name: 'О компании', href: '#about' },
      { name: 'Наши проекты', href: '#portfolio' },
      { name: 'Вакансии', href: '#careers' },
      { name: 'Контакты', href: '#contact' },
    ],
    support: [
      { name: 'Гарантия', href: '#warranty' },
      { name: 'Сервис', href: '#service' },
      { name: 'Документация', href: '#docs' },
      { name: 'FAQ', href: '#faq' },
    ],
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      href: 'tel:+74951234567',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@рест-тех.рф',
      href: 'mailto:info@рест-тех.рф',
    },
    {
      icon: MapPin,
      title: 'Адрес',
      content: 'г. Москва, ул. Примерная, д. 1',
      href: '#',
    },
    {
      icon: Clock,
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00-18:00',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Основной контент футера */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* О компании */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">РТ</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">РЕСТ-ТЕХ</div>
                <div className="text-xs text-gray-400">Технологии будущего</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Комплексные решения для ресторанного бизнеса: проектирование, снабжение и обучение.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Услуги</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Компания</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Поддержка</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Контактная информация */}
        <div className="border-t border-gray-700 pt-12 mb-12">
          <h3 className="text-white font-bold text-xl mb-6 text-center">Контакты</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <contact.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">{contact.title}</div>
                  <div className="text-sm text-white font-medium">{contact.content}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-gray-400">
              © {currentYear} РЕСТ-ТЕХ. Все права защищены.
            </div>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Условия использования
              </a>
              <a href="#cookies" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Декоративный градиент снизу */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
    </footer>
  );
}
