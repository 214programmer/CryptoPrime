import React from 'react';
import { motion } from 'motion/react';
import { Zap, Target, Users, Globe, LineChart, MessageSquareCode } from 'lucide-react';

const advantages = [
  {
    icon: <Zap className="text-yellow-400" />,
    title: "Мгновенные сигналы",
    description: "Получайте торговые сигналы в реальном времени прямо на ваше устройство с уровнями входа, цели и стоп-лосса."
  },
  {
    icon: <Target className="text-red-400" />,
    title: "Точная аналитика",
    description: "Глубокий технический и фундаментальный анализ, основанный на наших собственных алгоритмах."
  },
  {
    icon: <Users className="text-blue-400" />,
    title: "Элитное комьюнити",
    description: "Общайтесь с тысячами серьезных трейдеров в эксклюзивной среде."
  },
  {
    icon: <Globe className="text-emerald-400" />,
    title: "Контекст рынка",
    description: "Глобальные макроэкономические обновления, объясняющие, как мировые события влияют на ваш криптопортфель."
  },
  {
    icon: <LineChart className="text-purple-400" />,
    title: "Управление портфелем",
    description: "Экспертные советы по использованию риск-менеджмента и долгосрочному распределению активов."
  },
  {
    icon: <MessageSquareCode className="text-teal-400" />,
    title: "Поддержка 24/7",
    description: "Прямой доступ к нашим старшим менеджерам по любым вопросам вашего торгового пути."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-neutral-950 to-neutral-950 blur-[120px] pointer-events-none" />
      
      {/* Decorative Lights */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-[pulse_6s_infinite]" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-emerald-600/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 animate-[pulse_8s_infinite]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 blur-[120px] pointer-events-none"
          />
          <h2 className="text-4xl md:text-6xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-blue-300 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">
            Почему CryptoPrime?
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg relative z-10">
            Мы не следуем за рынком. Мы его предвосхищаем. Присоединяйтесь к каналу, который изменил подход к аналитике цифровых активов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group p-8 rounded-3xl bg-neutral-900/80 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all shadow-xl hover:shadow-[0_0_40px_rgba(37,99,235,0.2)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all group-hover:scale-110 group-hover:rotate-3 shadow-lg relative z-10">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10 text-white group-hover:text-blue-100 transition-colors">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed relative z-10 transition-colors group-hover:text-neutral-300">
                {item.description}
              </p>
              
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
