import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

const owner = {
  name: "Владелец",
  role: "Основатель канала",
  bio: "Основатель и главный администратор проекта CryptoPrime. По вопросам сотрудничества и крупным сделкам.",
  gradient: "from-blue-600 to-emerald-600",
  initials: "ZH",
  telegram: "@zhasik_manager"
};

const managers = [
  "@reklama_nikita", "@reklama_lana", "@admanagery", "@ga11hm", 
  "@vitaliy_crypto", "@Martynov_nikita", "@ownerpremiumdao", 
  "@Nos0k_TON", "t.me/chepuha", "@E777KX20", "@amcintosh7426"
];

export const Managers: React.FC = () => {
  return (
    <section id="managers" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5 blur-[100px] pointer-events-none" />
      
      {/* Animated background blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Связь с нами
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg"
          >
            Наши менеджеры готовы ответить на все ваши вопросы и подобрать лучшие условия для сотрудничества.
          </motion.p>
        </div>

        {/* Owner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="animate-float"
        >
          <div className="relative group bg-neutral-900 border border-white/10 rounded-[2rem] overflow-hidden hover:border-emerald-500/50 transition-all shadow-[0_0_40px_rgba(0,0,0,0.5)] mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className={`w-32 h-32 shrink-0 rounded-full bg-gradient-to-br ${owner.gradient} p-1 shadow-2xl`}>
                <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-white">{owner.initials}</span>
                </div>
              </div>
              
              <div className="text-center md:text-left flex-1 space-y-4">
                <div>
                  <h3 className="text-3xl font-bold mb-1">{owner.name}</h3>
                  <p className="text-emerald-400 font-semibold uppercase tracking-wider text-sm">{owner.role}</p>
                </div>
                <p className="text-neutral-400 text-lg">
                  {owner.bio}
                </p>
              </div>

              <div className="flex-shrink-0">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://t.me/${owner.telegram.substring(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                >
                  <Send size={20} />
                  Написать
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Managers */}
        <div className="pt-8 border-t border-white/5">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-neutral-500 font-semibold uppercase tracking-widest mb-8"
          >
            Менеджеры по рекламе
          </motion.h4>
          <div className="flex flex-wrap justify-center gap-4">
            {managers.map((manager, index) => {
              const link = manager.startsWith('t.me/') ? `https://${manager}` : `https://t.me/${manager.substring(1)}`;
              const text = manager.startsWith('t.me/') ? `@${manager.split('/')[1]}` : manager;
              return (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all text-neutral-300 hover:text-white group"
                >
                  <Send size={14} className="text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                  <span className="font-medium">{text}</span>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
