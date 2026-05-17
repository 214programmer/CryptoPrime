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
      className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <Logo className="h-10 w-10 shadow-lg" />
          <span className="text-xl font-bold font-display tracking-tight text-white">
            CryptoPrime
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Преимущества</a>
          <a href="#advertising" className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">
            <ChartNoAxesColumnIncreasing size={16} />
            Рекламодателям
          </a>
          <a href="#managers" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Контакты</a>
          <a href="#about" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Аудитория</a>
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://t.me/hhCryptoPrime"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          >
            <Send size={16} />
            <span className="hidden sm:inline">Перейти в канал</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};
