import { GraduationCap, Clock, Users, Award, BookOpen, CheckCircle, Star, Calendar, Video } from 'lucide-react';
import { useState } from 'react';

export function Training() {
  const [activeTab, setActiveTab] = useState('courses');

  const courses = [
    {
      title: 'Основы работы на профессиональной кухне',
      duration: '40 часов',
      level: 'Начальный',
      students: 'до 12 человек',
      price: '35 000 ₽',
      description: 'Базовый курс для начинающих поваров и персонала кухни',
      topics: [
        'Санитарные нормы и правила',
        'Организация рабочего места',
        'Первичная обработка продуктов',
        'Базовые техники приготовления',
        'Работа с оборудованием',
      ],
      certificate: true,
      icon: '👨‍🍳',
    },
    {
      title: 'Профессиональный повар',
      duration: '120 часов',
      level: 'Продвинутый',
      students: 'до 10 человек',
      price: '95 000 ₽',
      description: 'Полноценная программа подготовки профессиональных поваров',
      topics: [
        'Технология приготовления блюд',
        'Работа с мясом, рыбой, овощами',
        'Соусы и гарниры',
        'Десерты и выпечка',
        'Управление кухней',
      ],
      certificate: true,
      icon: '🍽️',
    },
    {
      title: 'Шеф-повар ресторана',
      duration: '80 часов',
      level: 'Экспертный',
      students: 'до 8 человек',
      price: '150 000 ₽',
      description: 'Программа для руководителей кухни и шеф-поваров',
      topics: [
        'Разработка меню и калькуляция',
        'Управление командой кухни',
        'Контроль качества',
        'Закупки и работа с поставщиками',
        'Финансовое планирование',
      ],
      certificate: true,
      icon: '👨‍🍳',
    },
    {
      title: 'Бариста профессионал',
      duration: '32 часа',
      level: 'Начальный-Средний',
      students: 'до 6 человек',
      price: '28 000 ₽',
      description: 'Искусство приготовления кофе и кофейных напитков',
      topics: [
        'Теория кофе и его разновидности',
        'Работа с эспрессо-машиной',
        'Латте-арт',
        'Альтернативные методы заваривания',
        'Обслуживание гостей',
      ],
      certificate: true,
      icon: '☕',
    },
    {
      title: 'Кондитер-технолог',
      duration: '100 часов',
      level: 'Продвинутый',
      students: 'до 10 человек',
      price: '85 000 ₽',
      description: 'Профессиональная подготовка кондитеров',
      topics: [
        'Технология кондитерских изделий',
        'Работа с тестом',
        'Кремы и начинки',
        'Декорирование тортов',
        'Современные техники',
      ],
      certificate: true,
      icon: '🎂',
    },
    {
      title: 'Управление рестораном',
      duration: '60 часов',
      level: 'Средний-Экспертный',
      students: 'до 15 человек',
      price: '75 000 ₽',
      description: 'Курс для управляющих и владельцев заведений',
      topics: [
        'Бизнес-процессы ресторана',
        'Управление персоналом',
        'Маркетинг и продвижение',
        'Финансовый учёт',
        'Стандарты обслуживания',
      ],
      certificate: true,
      icon: '📊',
    },
  ];

  const corporatePrograms = [
    {
      title: 'Обучение персонала кухни',
      description: 'Комплексное обучение поваров и кухонных работников вашего заведения',
      duration: 'от 2 недель',
      format: 'На вашей территории',
      icon: '🏢',
    },
    {
      title: 'Работа с новым оборудованием',
      description: 'Обучение работе с новым кухонным оборудованием и технологиями',
      duration: 'от 3 дней',
      format: 'На вашей территории или в учебном центре',
      icon: '⚙️',
    },
    {
      title: 'Стандарты качества и сервиса',
      description: 'Внедрение стандартов качества приготовления и обслуживания',
      duration: 'от 1 недели',
      format: 'Индивидуальная программа',
      icon: '⭐',
    },
  ];

  const advantages = [
    {
      icon: Award,
      title: 'Лицензированные программы',
      description: 'Все курсы имеют образовательную лицензию',
    },
    {
      icon: Users,
      title: 'Опытные преподаватели',
      description: 'Практикующие шеф-повара и управляющие',
    },
    {
      icon: BookOpen,
      title: 'Практические занятия',
      description: 'До 80% времени — практика на реальной кухне',
    },
    {
      icon: CheckCircle,
      title: 'Сертификаты',
      description: 'Официальные документы об окончании курса',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero секция */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-medium">Профессиональное образование</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Обучение
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Профессиональное обучение для поваров, барист, управляющих и владельцев заведений общественного питания
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Образовательная лицензия</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Официальные сертификаты</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Практика на реальной кухне</span>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <advantage.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-gray-800">{advantage.title}</h3>
              <p className="text-sm text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Табы */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-8 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'courses'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
            }`}
          >
            Открытые курсы
          </button>
          <button
            onClick={() => setActiveTab('corporate')}
            className={`px-8 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'corporate'
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
            }`}
          >
            Корпоративное обучение
          </button>
        </div>
      </section>

      {/* Открытые курсы */}
      {activeTab === 'courses' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши курсы</h2>
            <p className="text-xl text-gray-600">Выберите программу обучения</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <div className="h-32 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 flex items-center justify-center text-6xl">
                  {course.icon}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                      {course.level}
                    </span>
                    {course.certificate && (
                      <Award className="w-4 h-4 text-orange-600" title="С сертификатом" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {course.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-orange-500" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Программа курса:</div>
                    <ul className="space-y-1">
                      {course.topics.slice(0, 3).map((topic, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                      {course.topics.length > 3 && (
                        <li className="text-sm text-gray-500 italic">
                          + ещё {course.topics.length - 3} тем
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-2xl font-bold text-orange-600">
                      {course.price}
                    </div>
                    <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                      Записаться
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Корпоративное обучение */}
      {activeTab === 'corporate' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Корпоративное обучение</h2>
            <p className="text-xl text-gray-600">Индивидуальные программы для вашей компании</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {corporatePrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-6xl mb-4 text-center">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 text-center">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {program.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>{program.format}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Преимущества корпоративного обучения</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Индивидуальная программа под ваши задачи',
                'Обучение на вашей территории',
                'Гибкий график занятий',
                'Скидки при обучении группы',
                'Практика на вашем оборудовании',
                'Постобучающая поддержка',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Начните обучение
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Получите бесплатную консультацию и подберите подходящую программу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all"
            >
              Записаться на курс
            </a>
            <a
              href="tel:+74951234567"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all"
            >
              Получить консультацию
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
