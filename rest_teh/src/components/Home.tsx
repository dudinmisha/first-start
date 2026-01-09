import { ArrowRight, Wrench, Package, GraduationCap, CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const services = [
    {
      icon: Wrench,
      title: 'Проектирование',
      description: 'Комплексное проектирование ресторанов и пищевых производств',
      link: '/projects',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Package,
      title: 'Снабжение',
      description: 'Поставка профессионального оборудования для общепита',
      link: '/supply',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: GraduationCap,
      title: 'Обучение',
      description: 'Профессиональное обучение и повышение квалификации',
      link: '/training',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const stats = [
    { icon: Award, value: '200+', label: 'Реализованных проектов' },
    { icon: Users, value: '500+', label: 'Довольных клиентов' },
    { icon: TrendingUp, value: '15+', label: 'Лет на рынке' },
  ];

  const advantages = [
    'Индивидуальный подход к каждому проекту',
    'Современное оборудование от ведущих производителей',
    'Полное сопровождение от проектирования до запуска',
    'Квалифицированная команда специалистов',
    'Гарантия качества и постпродажное обслуживание',
    'Конкурентные цены и гибкие условия сотрудничества',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero секция */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-md">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Ваш надёжный партнёр в ресторанном бизнесе</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                РЕСТ-ТЕХ
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-700 mb-4">
              Проектирование, снабжение и обучение
            </p>

            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Комплексные решения для ресторанов, кафе и предприятий общественного питания.
              От идеи до успешного запуска бизнеса.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center gap-2 w-full sm:w-auto justify-center group"
              >
                Наши услуги
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="bg-white text-gray-700 px-8 py-4 rounded-xl font-medium hover:shadow-xl transition-all border-2 border-gray-200 w-full sm:w-auto text-center"
              >
                Получить консультацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Основные услуги */}
      <section id="services" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный спектр услуг для вашего ресторанного бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                  Подробнее
                  <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 md:py-32 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600">
              Мы предлагаем комплексный подход и высокое качество услуг
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section id="contact" className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Готовы начать проект?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Свяжитесь с нами для бесплатной консультации и обсуждения вашего проекта
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+74951234567"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all w-full sm:w-auto text-center"
              >
                +7 (495) 123-45-67
              </a>
              <a
                href="mailto:info@рест-тех.рф"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all w-full sm:w-auto text-center"
              >
                info@рест-тех.рф
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
