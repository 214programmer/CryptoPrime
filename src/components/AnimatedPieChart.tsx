import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const data = [
  { name: 'Русский', value: 92 },
  { name: 'Другие', value: 8 },
];

const COLORS = ['#3b82f6', '#1e3a8a'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-900 border border-white/10 px-4 py-2 rounded-xl shadow-xl">
        <p className="text-white font-medium">{payload[0].name}: <span className="text-blue-400 font-bold">{payload[0].value}%</span></p>
      </div>
    );
  }
  return null;
};

export const AnimatedPieChart: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
            animationDuration={1500}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-2xl font-bold text-white">92%</span>
      </div>
    </div>
  );
};
