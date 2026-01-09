import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl text-white mb-6">
          Готовы начать?
        </h2>
        <p className="text-xl text-blue-100 mb-10">
          Присоединяйтесь к тысячам команд, которые уже используют нашу платформу
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center group">
            Начать бесплатно
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors w-full sm:w-auto">
            Связаться с нами
          </button>
        </div>
      </div>
    </section>
  );
}
