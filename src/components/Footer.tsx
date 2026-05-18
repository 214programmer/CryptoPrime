import React from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10 shadow-lg" />
              <span className="text-2xl font-bold font-display tracking-tight text-white">CryptoPrime</span>
            </div>
            <p className="text-neutral-500 max-w-sm">
              Помогаем инвесторам в цифровые активы институциональными данными, сигналами в реальном времени и непревзойденным сообществом.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-blue-600 transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] relative group">
                <Send size={20} className="group-hover:animate-pulse" />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-emerald-600 transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] relative group">
                <Mail size={20} className="group-hover:animate-pulse" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs">Платформа</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Преимущества</a></li>
              <li><a href="#managers" className="hover:text-white transition-colors">Команда</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Документация API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Партнерская программа</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs">Правовая информация</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Политика файлов cookie</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Отказ от ответственности</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-600 text-xs">
          <p>© 2026 CryptoPrime Capital Group. Все права защищены.</p>
          <div className="flex items-center gap-2">
            <MapPin size={12} />
            <span>Распространяется по всему миру через Telegram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
