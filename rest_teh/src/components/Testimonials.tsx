import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Анна Петрова',
    role: 'CEO, TechStart',
    content: 'Эта платформа полностью изменила то, как мы работаем. Производительность команды выросла на 300%.',
    avatar: '👩‍💼',
  },
  {
    name: 'Михаил Соколов',
    role: 'Дизайнер, Creative Lab',
    content: 'Невероятно интуитивный интерфейс. Я смог начать работу без какого-либо обучения.',
    avatar: '👨‍💻',
  },
  {
    name: 'Елена Васильева',
    role: 'Менеджер проектов',
    content: 'Лучший инструмент для управления проектами, который я когда-либо использовала. Рекомендую!',
    avatar: '👩‍🔬',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-xl text-gray-600">
            Тысячи команд уже доверяют нам свой бизнес
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 p-8 rounded-2xl hover:border-blue-300 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
