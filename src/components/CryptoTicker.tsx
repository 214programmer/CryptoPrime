import React from 'react';
import { motion } from 'motion/react';

const cryptos = [
  { sym: 'BTC', price: '$64,230', chg: '+2.4%' },
  { sym: 'ETH', price: '$3,450', chg: '+1.8%' },
  { sym: 'SOL', price: '$145.20', chg: '+5.6%' },
  { sym: 'TON', price: '$6.40', chg: '+0.5%' },
  { sym: 'BNB', price: '$590', chg: '-0.2%' },
  { sym: 'XRP', price: '$0.58', chg: '+1.1%' },
  { sym: 'DOGE', price: '$0.12', chg: '-1.4%' },
  { sym: 'AVAX', price: '$35.40', chg: '+4.2%' },
];

export const CryptoTicker = () => {
  // Duplicate enough times to ensure seamless infinite scroll
  const items = [...cryptos, ...cryptos, ...cryptos, ...cryptos, ...cryptos];

  return (
    <div className="fixed top-20 left-0 w-full h-8 bg-neutral-950/90 backdrop-blur-md border-b border-white/10 flex items-center overflow-hidden z-30">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
      
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-10 px-4"
      >
        {items.map((c, i) => (
          <div key={i} className="flex gap-2 flex-shrink-0 items-center text-xs font-mono font-bold tracking-wide">
            <span className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{c.sym}</span>
            <span className="text-neutral-300">{c.price}</span>
            <span className={c.chg.startsWith('+') ? 'text-emerald-300 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'text-red-300 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]'}>{c.chg}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
