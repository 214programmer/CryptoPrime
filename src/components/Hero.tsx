import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, ShieldCheck, Zap, Send } from 'lucide-react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-[pulse_6s_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-[pulse_8s_infinite]" />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-500/50"
          animate={{
            y: [Math.random() * 800, Math.random() * -800],
            x: [Math.random() * 400, Math.random() * -400],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`emerald-${i}`}
          className="absolute w-3 h-3 rounded-full bg-emerald-500/40 blur-[1px]"
          animate={{
            y: [Math.random() * 800, Math.random() * -800],
            x: [Math.random() * 400, Math.random() * -400],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 12 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Живая крипто-аналитика</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold leading-tight tracking-tight"
          >
            Премиум <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 animate-gradient bg-[length:200%_auto]">
              Крипто Трафик
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-neutral-400 max-w-xl leading-relaxed"
          >
            CryptoPrime — ведущий Telegram-канал с самой платежеспособной и вовлеченной аудиторией криптоинвесторов в СНГ.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a 
              href="#advertising"
              className="px-8 py-4 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] text-center flex justify-center items-center h-14"
            >
              Условия рекламы
            </a>
            <a 
              href="https://t.me/hhCryptoPrime"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2 h-14"
            >
              <Send size={18} />
              Перейти в канал
            </a>
          </motion.div>

          <div className="flex items-center gap-8 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-neutral-950 bg-neutral-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Advertiser" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
              <div className="h-10 w-10 rounded-full border-2 border-neutral-950 bg-emerald-600 flex items-center justify-center text-xs font-bold text-white">
                50+
              </div>
            </div>
            <p className="text-sm text-neutral-500">
              Постоянных <br /> рекламодателей.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative aspect-square flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full animate-[pulse_8s_infinite]" />
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <Logo className="relative h-64 w-64 md:h-96 md:w-96 rounded-full border border-white/10 shadow-2xl bg-neutral-900 drop-shadow-[0_0_50px_rgba(34,197,94,0.3)]" />
          </div>

          {/* Stats Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-4 px-4 py-3 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <TrendingUp className="text-emerald-500" size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-500">Уровень ER</p>
                <p className="font-bold text-white">35%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 -left-10 px-4 py-3 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <ShieldCheck className="text-blue-500" size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-500">Доверие аудитории</p>
                <p className="font-bold text-white">92%</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
