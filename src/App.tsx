/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Managers } from './components/Managers';
import { Footer } from './components/Footer';
import { Advertising } from './components/Advertising';
import { AnimatedLineChart } from './components/AnimatedLineChart';
import { AnimatedPieChart } from './components/AnimatedPieChart';
import { Send } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-neutral-950">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="py-24 border-y border-white/5 bg-neutral-900/20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-neutral-900 border-t-neutral-800"
            >
              <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-neutral-950">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="mx-auto flex h-full items-center">
                  <span className="text-[10px] text-neutral-600 font-mono">BTC/USD - CryptoPrime Live Terminal</span>
                </div>
              </div>
              <div className="absolute inset-0 top-10 p-6 flex flex-col justify-end">
                <div className="absolute top-6 left-6 z-10">
                  <p className="text-xl font-bold text-white flex items-center gap-2">
                    28.4K <span className="text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">+119 (0.4%)</span>
                  </p>
                  <p className="text-sm text-neutral-500">Подписчики</p>
                </div>
                <div className="w-full h-4/5 relative z-0">
                  <AnimatedLineChart />
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay pointer-events-none" />
            </motion.div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Самая платежеспособная аудитория</h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                За годы работы канала мы собрали уникальное комьюнити крипто-инвесторов, CEO проектов и профессиональных трейдеров. Это не боты и не мотивированный трафик — это люди, которые принимают финансовые решения на миллионы долларов.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-3xl font-bold text-emerald-400">70%</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mt-1">Депозит от $10k+</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-3xl font-bold text-blue-400">92%</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mt-1">Доверие каналу</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <Advertising />
        <Managers />

        {/* CTA Section */}
        <section className="py-24 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-500/5 bg-gradient-to-br from-neutral-900 to-black text-white"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_#1d4ed850,_transparent)]" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">Готовы к кратному росту?</h2>
            <p className="text-neutral-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative">
              Купите рекламу и получите качественный трафик, или присоединяйтесь к нашему приватному комьюнити для доступа к лучшей аналитике.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <a 
                href="#managers"
                className="px-10 py-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2"
              >
                Купить рекламу
              </a>
              <a 
                href="https://t.me/hhCryptoPrime"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2"
              >
                <Send size={24} />
                Перейти в канал
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

