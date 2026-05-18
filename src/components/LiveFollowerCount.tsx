import React, { useState, useEffect } from 'react';

export const LiveFollowerCount = () => {
  const [followers, setFollowers] = useState(30542);

  useEffect(() => {
    // Simulate real-time follower gain on the dashboard
    const interval = setInterval(() => {
      setFollowers(prev => prev + (Math.random() > 0.6 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const baseFollowers = 30000;
  const gain = followers - baseFollowers;
  const percentage = (gain / baseFollowers * 100).toFixed(2);

  return (
    <div className="absolute top-6 left-6 z-10 w-full pr-12 pointer-events-none">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-3xl font-display font-bold text-white flex items-center gap-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            {(followers / 1000).toFixed(1)}K 
            <span className="text-sm font-semibold text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 px-2 py-0.5 rounded-md drop-shadow-none shadow-[0_0_15px_rgba(16,185,129,0.3)]">+{gain} ({percentage}%)</span>
          </p>
          <p className="text-sm text-neutral-300 font-medium mt-1 uppercase tracking-wider">Аудитория канала LIVE</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
          <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Live</span>
        </div>
      </div>
    </div>
  );
};
