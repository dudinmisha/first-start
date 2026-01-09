import { Layout, Ruler, ClipboardCheck, Lightbulb, Cog, FileText, CheckCircle, ArrowRight } from 'lucide-react';

export function Projects() {
  const services = [
    {
      icon: Lightbulb,
      title: 'Концепция и планировка',
      description: 'Разработка концепции заведения с учётом специфики бизнеса и целевой аудитории. Оптимальная планировка помещений.',
    },
    {
      icon: Layout,
      title: 'Технологическое проектирование',
      description: 'Проектирование производственных зон, подбор оборудования, разработка технологических карт.',
    },
    {
      icon: Cog,
      title: 'Инженерные системы',
      description: 'Проектирование вентиляции, водоснабжения, канализации, электроснабжения и других инженерных систем.',
    },
    {
      icon: FileText,
      title: 'Проектная документация',
      description: 'Полный комплект проектной и рабочей документации для согласования и строительства.',
    },
    {
      icon: ClipboardCheck,
      title: 'Согласование',
      description: 'Помощь в согласовании проекта в надзорных органах (Роспотребнадзор, МЧС и др.).',
    },
    {
      icon: Ruler,
      title: 'Авторский надзор',
      description: 'Контроль за соблюдением проектных решений на всех этапах строительства и монтажа.',
    },
  ];

  const stages = [
    {
      number: '01',
      title: 'Встреча и бриф',
      description: 'Знакомимся с вашим видением, изучаем объект, определяем требования и пожелания.',
    },
    {
      number: '02',
      title: 'Концепция',
      description: 'Разрабатываем концепцию заведения, создаём предварительную планировку и расчёты.',
    },
    {
      number: '03',
      title: 'Проектирование',
      description: 'Детальная разработка всех разделов проекта с учётом всех технических требований.',
    },
    {
      number: '04',
      title: 'Согласование',
      description: 'Подготовка документов и согласование проекта во всех необходимых инстанциях.',
    },
    {
      number: '05',
      title: 'Реализация',
      description: 'Сопровождение строительства, авторский надзор и помощь в запуске объекта.',
    },
  ];

  const projects = [
    {
      title: 'Ресторан премиум-класса',
      area: '450 м²',
      location: 'Москва, ЦАО',
      description: 'Полное проектирование ресторана европейской кухни с открытой кухней и винным баром',
      image: '🏛️',
    },
    {
      title: 'Сеть кофеен',
      area: '3 объекта по 80 м²',
      location: 'Санкт-Петербург',
      description: 'Разработка типового проекта для сети кофеен с адаптацией под каждое помещение',
      image: '☕',
    },
    {
      title: 'Производственная кухня',
      area: '800 м²',
      location: 'Московская область',
      description: 'Проектирование центральной производственной кухни для сети доставки питания',
      image: '🏭',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero секция */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Layout className="w-4 h-4" />
            <span className="text-sm font-medium">Профессиональное проектирование</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Проектирование
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Комплексное проектирование предприятий общественного питания от концепции до рабочей документации
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Соответствие всем нормам</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Оптимизация затрат</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Индивидуальный подход</span>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600">Полный спектр проектных работ</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Этапы работы */}
      <section className="bg-white/50 backdrop-blur-sm py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Этапы работы</h2>
            <p className="text-xl text-gray-600">Прозрачный процесс от идеи до реализации</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {stages.map((stage, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow h-full">
                  <div className="text-5xl font-bold text-blue-100 mb-4">
                    {stage.number}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {stage.description}
                  </p>
                </div>
                {index < stages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Реализованные проекты */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Реализованные проекты</h2>
          <p className="text-xl text-gray-600">Примеры наших работ</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center text-8xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="font-medium">{project.area}</span>
                  <span>•</span>
                  <span>{project.location}</span>
                </div>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Начните свой проект
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Получите бесплатную консультацию и расчёт стоимости проектирования
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all"
          >
            Заказать консультацию
          </a>
        </div>
      </section>
    </div>
  );
}
