import React from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const data = [
  { name: '12 Май', followers: 29800 },
  { name: '13 Май', followers: 29950 },
  { name: '14 Май', followers: 30100 },
  { name: '15 Май', followers: 30220 },
  { name: '16 Май', followers: 30390 },
  { name: '17 Май', followers: 30450 },
  { name: '18 Май', followers: 30540 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-900 border border-white/10 px-4 py-2 rounded-xl shadow-xl">
        <p className="text-neutral-400 text-xs mb-1">{label}</p>
        <p className="text-emerald-400 font-bold">{payload[0].value?.toLocaleString('ru-RU')} подписчиков</p>
      </div>
    );
  }
  return null;
};

export const AnimatedLineChart: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.6}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 1 }} />
          <YAxis domain={['dataMin - 100', 'dataMax + 100']} hide />
          <Area 
            type="monotone" 
            dataKey="followers" 
            stroke="#60a5fa" 
            strokeWidth={4}
            fillOpacity={1} 
            fill="url(#colorFollowers)" 
            isAnimationActive={true}
            animationDuration={2500}
            animationEasing="ease-in-out"
            filter="url(#glow)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
