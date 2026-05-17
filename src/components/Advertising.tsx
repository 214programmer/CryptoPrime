import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Users, Eye, Megaphone, ShieldCheck, Zap } from 'lucide-react';
import { AnimatedBarChart } from './AnimatedBarChart';
import { AnimatedPieChart } from './AnimatedPieChart';
import promoPostCrypto from '../assets/images/promo_post_crypto_1779032746413.png';
import promoPackage from '../assets/images/promo_package_3days_1779032764988.png';
import promoPartnership from '../assets/images/promo_partnership_1779032780222.png';

const stats = [
  { value: '29 900+', label: 'Активных подписчиков', icon: <Users className="text-blue-400" /> },
  { value: '5 700+', label: 'Просмотров на пост', icon: <Eye className="text-emerald-400" /> },
  { value: '92%', label: 'Русскоязычная аудитория', icon: <BarChart3 className="text-purple-400" /> },
  { value: '24/7', label: 'Поддержка менеджеров', icon: <ShieldCheck className="text-yellow-400" /> },
];

const formats = [
  {
    title: "Обычный пост",
    desc: "Разовая публикация рекламного креатива.",
    price: "$150",
    time: "День публикации / 24ч закреп",
    image: promoPostCrypto
  },
  {
    title: "Пакет на 3 дня",
    desc: "Многократная публикация вашего промо-поста.",
    price: "$300",
    time: "3 дня публикации / 24ч закреп",
    image: promoPackage
  },
  {
    title: "Долгосрочное сотрудничество",
    desc: "Комплексное ведение рекламной кампании в течение месяца.",
    price: "$500",
    time: "От месяца / 15 постов (без удаления)",
    image: promoPartnership
  }
];

export const Advertising: React.FC = () => {
  return (
    <section id="advertising" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Megaphone size={14} /> Для рекламодателей
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Высококонверсионная реклама</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Мы предлагаем доступ к премиальной аудитории крипто-инвесторов, трейдеров и энтузиастов. 
            Наши подписчики доверяют нам, поэтому выбирают проекты, которые мы рекомендуем.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-neutral-900 border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none" />
            <h3 className="text-xl font-bold mb-2">Источники просмотров (неделя)</h3>
            <p className="text-sm text-neutral-500 mb-8">5.7K просмотров на пост в среднем</p>
            <div className="h-64 w-full">
              <AnimatedBarChart />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-neutral-900 border border-white/5 shadow-2xl relative overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-emerald-600/5 to-transparent pointer-events-none" />
            <h3 className="text-xl font-bold mb-2">Гео аудитории</h3>
            <p className="text-sm text-neutral-500 mb-8">Премиальная СНГ-аудитория с высоким достатком</p>
            <div className="flex-1 w-full relative">
              <AnimatedPieChart />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-neutral-900 border border-white/5 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/5 rounded-2xl">
                  {stat.icon}
                </div>
              </div>
              <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-sm text-neutral-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-center mb-10">Рекламные форматы</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {formats.map((format, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-[2rem] bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all flex flex-col h-full overflow-hidden"
            >
              <div className="h-48 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-neutral-900/50 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={format.image} 
                  alt={format.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h4 className="text-2xl font-bold mb-4">{format.title}</h4>
                <p className="text-neutral-400 text-sm mb-6 flex-1">{format.desc}</p>
                
                <div className="space-y-4 pt-6 border-t border-white/5 mt-auto">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-neutral-500">Условия:</span>
                    <span className="text-white font-medium">{format.time}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-neutral-500">Стоимость:</span>
                    <span className="text-emerald-400 font-bold text-lg">{format.price}</span>
                  </div>
                  <a href="#managers" className="w-full block text-center py-3 mt-4 rounded-xl bg-white/5 hover:bg-blue-600 hover:text-white transition-all text-sm font-bold text-neutral-300">
                    Связаться с менеджером
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
