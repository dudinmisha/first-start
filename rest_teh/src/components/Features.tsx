import { Zap, Shield, Globe, Sparkles, Users, BarChart } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Молниеносная скорость',
    description: 'Оптимизированная производительность для мгновенной загрузки и плавной работы',
  },
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Защита корпоративного уровня для ваших данных и конфиденциальности',
  },
  {
    icon: Globe,
    title: 'Глобальная доступность',
    description: 'Работайте из любой точки мира с полной синхронизацией',
  },
  {
    icon: Sparkles,
    title: 'Умная автоматизация',
    description: 'ИИ-помощник автоматизирует рутинные задачи и ускоряет работу',
  },
  {
    icon: Users,
    title: 'Командная работа',
    description: 'Совместная работа в реальном времени с вашей командой',
  },
  {
    icon: BarChart,
    title: 'Аналитика',
    description: 'Подробная аналитика и отчеты для принятия решений',
  },
];

export function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Все необходимое для успеха
          </h2>
          <p className="text-xl text-gray-600">
            Мощные функции, которые помогут вам работать эффективнее
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
