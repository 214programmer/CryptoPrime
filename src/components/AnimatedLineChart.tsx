import React from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const data = [
  { name: '24 Apr', followers: 28100 },
  { name: '25 Apr', followers: 28120 },
  { name: '26 Apr', followers: 28200 },
  { name: '27 Apr', followers: 28260 },
  { name: '28 Apr', followers: 28290 },
  { name: '29 Apr', followers: 28450 },
  { name: '30 Apr', followers: 28430 },
  { name: '1 May', followers: 28420 },
  { name: '2 May', followers: 28420 },
  { name: '3 May', followers: 28490 },
  { name: '4 May', followers: 28485 },
  { name: '5 May', followers: 28480 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-900 border border-white/10 px-4 py-2 rounded-xl shadow-xl">
        <p className="text-neutral-400 text-xs mb-1">{label}</p>
        <p className="text-emerald-400 font-bold">{payload[0].value?.toLocaleString()} подписчиков</p>
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
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
          <YAxis domain={['dataMin - 100', 'dataMax + 100']} hide />
          <Area 
            type="monotone" 
            dataKey="followers" 
            stroke="#3b82f6" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorFollowers)" 
            isAnimationActive={true}
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
