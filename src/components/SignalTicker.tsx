import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Target, Activity } from 'lucide-react';

const signals = [
  { pair: 'BTC/USDT', type: 'LONG', pnl: '+142%', target: 'T3 Hit' },
  { pair: 'ETH/USDT', type: 'LONG', pnl: '+85%', target: 'T2 Hit' },
  { pair: 'SOL/USDT', type: 'SHORT', pnl: '+210%', target: 'T4 Hit' },
  { pair: 'PEPE/USDT', type: 'LONG', pnl: '+450%', target: 'All Targets' },
  { pair: 'TON/USDT', type: 'LONG', pnl: '+65%', target: 'T1 Hit' },
  { pair: 'DOGE/USDT', type: 'SHORT', pnl: '+120%', target: 'T3 Hit' },
  { pair: 'AVAX/USDT', type: 'LONG', pnl: '+105%', target: 'T2 Hit' },
  { pair: 'LINK/USDT', type: 'SHORT', pnl: '+55%', target: 'T1 Hit' },
];

export const SignalTicker = () => {
  const items = [...signals, ...signals, ...signals, ...signals, ...signals];

  return (
    <div className="fixed bottom-0 left-0 w-full h-10 bg-neutral-950/90 backdrop-blur-md border-t border-white/10 flex items-center overflow-hidden z-50">
      {/* Gradient fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
      
      {/* Static Label Container */}
      <div className="absolute left-0 top-0 bottom-0 bg-neutral-950/90 z-20 flex items-center pr-4 pl-4 border-r border-white/5 border-emerald-500/20">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
          <Activity size={14} className="animate-pulse" />
          VIP Signals Record
        </div>
      </div>

      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-8 pl-64 pr-8 h-full items-center z-10"
      >
        {items.map((s, i) => (
          <div key={i} className="flex gap-3 flex-shrink-0 items-center text-xs font-mono font-bold tracking-wide transition-colors hover:text-emerald-100">
            <span className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{s.pair}</span>
            <span className={s.type === 'LONG' ? 'text-emerald-300 flex items-center gap-1 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'text-red-300 flex items-center gap-1 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]'}>
              {s.type === 'LONG' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {s.type}
            </span>
            <span className="text-emerald-300 bg-emerald-500/20 border border-emerald-400/40 px-2 py-0.5 rounded shadow-[0_0_15px_rgba(16,185,129,0.3)]">{s.pnl}</span>
            <span className="text-neutral-300 flex items-center gap-1"><Target size={12} className="text-neutral-200" /> {s.target}</span>
            <span className="text-white/20 mx-2">|</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
