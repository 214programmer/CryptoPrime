import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Tooltip, TooltipProps, Cell } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const data = [
  { name: '28 Apr', views: 2400 },
  { name: '29 Apr', views: 3200 },
  { name: '30 Apr', views: 2800 },
  { name: '1 May', views: 14500 },
  { name: '2 May', views: 4800 },
  { name: '3 May', views: 4200 },
  { name: '4 May', views: 1800 },
  { name: '5 May', views: 2100 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-900 border border-white/10 px-4 py-2 rounded-xl shadow-xl z-50 relative">
        <p className="text-neutral-400 text-xs mb-1">{label}</p>
        <p className="text-emerald-400 font-bold">{payload[0].value?.toLocaleString()} просмотров</p>
      </div>
    );
  }
  return null;
};

export const AnimatedBarChart: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
          <Bar 
            dataKey="views" 
            radius={[4, 4, 0, 0]}
            isAnimationActive={true}
            animationDuration={1500}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.views > 10000 ? '#10b981' : '#3b82f6'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
