import { Package, ChefHat, Refrigerator, Flame, UtensilsCrossed, Snowflake, Wind, Coffee, Star, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function Supply() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Всё оборудование', icon: Package },
    { id: 'cooking', name: 'Тепловое', icon: Flame },
    { id: 'cold', name: 'Холодильное', icon: Snowflake },
    { id: 'prep', name: 'Подготовка', icon: ChefHat },
    { id: 'beverage', name: 'Напитки', icon: Coffee },
    { id: 'ventilation', name: 'Вентиляция', icon: Wind },
  ];

  const equipment = [
    {
      category: 'cooking',
      name: 'Профессиональная плита',
      brand: 'TECNOINOX',
      description: '4 конфорки, электрическая, с духовкой',
      price: 'от 180 000 ₽',
      features: ['Мощность 14 кВт', 'Нержавеющая сталь', 'Духовка GN 2/1'],
      image: '🔥',
    },
    {
      category: 'cooking',
      name: 'Конвекционная печь',
      brand: 'UNOX',
      description: 'Печь с парогенератором, 10 уровней GN 1/1',
      price: 'от 450 000 ₽',
      features: ['Сенсорное управление', 'Wi-Fi подключение', '100 программ'],
      image: '🍞',
    },
    {
      category: 'cold',
      name: 'Холодильный шкаф',
      brand: 'POLAIR',
      description: 'Двухдверный шкаф, 1400 л',
      price: 'от 95 000 ₽',
      features: ['Температура -2...+8°C', 'LED освещение', 'Экономичный'],
      image: '❄️',
    },
    {
      category: 'cold',
      name: 'Морозильная камера',
      brand: 'GASTRORAG',
      description: 'Низкотемпературная камера, 600 л',
      price: 'от 110 000 ₽',
      features: ['Температура до -22°C', 'Автоматическое оттаивание', 'Стальной корпус'],
      image: '🧊',
    },
    {
      category: 'prep',
      name: 'Планетарный миксер',
      brand: 'FIMAR',
      description: 'Миксер 20 литров, 3 насадки',
      price: 'от 85 000 ₽',
      features: ['3 скорости', 'Защита от перегрева', 'Итальянское качество'],
      image: '🥣',
    },
    {
      category: 'prep',
      name: 'Слайсер',
      brand: 'SIRMAN',
      description: 'Профессиональный слайсер, лезвие 300 мм',
      price: 'от 42 000 ₽',
      features: ['Регулировка толщины', 'Легкая очистка', 'Компактный'],
      image: '🔪',
    },
    {
      category: 'beverage',
      name: 'Кофемашина',
      brand: 'LA MARZOCCO',
      description: 'Профессиональная эспрессо-машина, 2 группы',
      price: 'от 750 000 ₽',
      features: ['Двойной бойлер', 'PID контроль', 'Итальянский дизайн'],
      image: '☕',
    },
    {
      category: 'beverage',
      name: 'Соковыжималка',
      brand: 'SANTOS',
      description: 'Цитрусовая соковыжималка, автоматическая',
      price: 'от 95 000 ₽',
      features: ['Производительность 40 шт/мин', 'Автоматическая подача', 'Нержавеющая сталь'],
      image: '🍊',
    },
    {
      category: 'ventilation',
      name: 'Вытяжной зонт',
      brand: 'RATIONAL',
      description: 'Зонт пристенный с жироуловителями, 2000x1100 мм',
      price: 'от 75 000 ₽',
      features: ['Съёмные фильтры', 'Подсветка LED', 'Нержавеющая сталь AISI 304'],
      image: '🌪️',
    },
  ];

  const filteredEquipment = activeCategory === 'all' 
    ? equipment 
    : equipment.filter(item => item.category === activeCategory);

  const services = [
    {
      icon: Star,
      title: 'Официальный дилер',
      description: 'Работаем напрямую с ведущими производителями',
    },
    {
      icon: CheckCircle,
      title: 'Гарантия качества',
      description: 'Официальная гарантия на всё оборудование',
    },
    {
      icon: Package,
      title: 'Доставка и установка',
      description: 'Доставим и установим оборудование под ключ',
    },
    {
      icon: UtensilsCrossed,
      title: 'Сервисное обслуживание',
      description: 'Постгарантийное обслуживание и ремонт',
    },
  ];

  const brands = [
    'RATIONAL', 'UNOX', 'TECNOINOX', 'POLAIR', 'GASTRORAG',
    'FIMAR', 'SIRMAN', 'LA MARZOCCO', 'SANTOS', 'ELECTROLUX'
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero секция */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
            <Package className="w-4 h-4" />
            <span className="text-sm font-medium">Профессиональное оборудование</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Снабжение
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Поставка профессионального оборудования для ресторанов, кафе и предприятий общественного питания
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Официальный дилер</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Гарантия от производителя</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Доставка по всей России</span>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Категории */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Каталог оборудования */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 flex items-center justify-center text-8xl">
                {item.image}
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-medium mb-1">
                  {item.brand}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                <div className="space-y-2 mb-4">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-2xl font-bold text-purple-600">
                    {item.price}
                  </div>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Бренды */}
      <section className="bg-white/50 backdrop-blur-sm py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши партнёры</h2>
            <p className="text-gray-600">Работаем с ведущими мировыми производителями</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow font-bold text-gray-700"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Нужна консультация?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Поможем подобрать оптимальное оборудование для вашего заведения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all"
            >
              Получить расчёт
            </a>
            <a
              href="tel:+74951234567"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all"
            >
              Позвонить нам
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
