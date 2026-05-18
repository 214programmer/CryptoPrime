import React from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { ChartNoAxesColumnIncreasing, Send } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-40 bg-neutral-900/60 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <Logo className="h-10 w-10 shadow-[0_0_15px_rgba(34,197,94,0.4)] drop-shadow-md rounded-full bg-neutral-900 border border-white/20" />
          <span className="text-xl font-bold font-display tracking-tight text-white drop-shadow-sm">
            CryptoPrime
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-bold text-neutral-300 hover:text-white transition-colors drop-shadow-sm">Преимущества</a>
          <a href="#advertising" className="text-sm font-bold text-emerald-300 hover:text-emerald-200 transition-colors flex items-center gap-1 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
            <ChartNoAxesColumnIncreasing size={16} />
            Рекламодателям
          </a>
          <a href="#managers" className="text-sm font-bold text-neutral-300 hover:text-white transition-colors drop-shadow-sm">Контакты</a>
          <a href="#about" className="text-sm font-bold text-neutral-300 hover:text-white transition-colors drop-shadow-sm">Аудитория</a>
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://t.me/cryptoprime_channel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white text-sm font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
          >
            <Send size={16} />
            <span className="hidden sm:inline">Перейти в канал</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};
