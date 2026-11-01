import React, { useState, useEffect } from 'react';

export const TrafficMonitor: React.FC = () => {
  const [onlineCount, setOnlineCount] = useState<number>(7);
  const [todayCount, setTodayCount] = useState<number>(38);
  const [weekCount] = useState<number>(1420);
  const [monthCount] = useState<number>(5890);

  // Simulate realistic traffic fluctuation like bookfua
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
        const next = Math.max(4, Math.min(14, prev + delta));
        return next;
      });

      // Occasionally bump today's count
      if (Math.random() > 0.6) {
        setTodayCount((prev) => prev + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="traffic-monitor" className="py-10 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-6 md:p-10 shadow-sm backdrop-blur-sm">
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <h3 className="text-xs font-bold tracking-[0.2em] text-neutral-500 dark:text-neutral-400 uppercase text-center">
              Real-Time Traffic Monitor
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Card 1: Currently Online */}
            <div className="bg-white dark:bg-neutral-800/90 rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-neutral-200/60 dark:border-neutral-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div
                id="online-count"
                className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white tabular-nums tracking-tight"
              >
                {onlineCount}
              </div>
              <div className="text-[10px] md:text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-2 flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Currently Online</span>
              </div>
            </div>

            {/* Card 2: Today */}
            <div className="bg-white dark:bg-neutral-800/90 rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-neutral-200/60 dark:border-neutral-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div
                id="today-count"
                className="text-3xl md:text-4xl font-black text-red-600 dark:text-red-500 tabular-nums tracking-tight"
              >
                {todayCount}
              </div>
              <div className="text-[10px] md:text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-2">
                Today's Visitors
              </div>
            </div>

            {/* Card 3: This Week */}
            <div className="bg-white dark:bg-neutral-800/90 rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-neutral-200/60 dark:border-neutral-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div
                id="week-count"
                className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white tabular-nums tracking-tight"
              >
                {weekCount.toLocaleString()}
              </div>
              <div className="text-[10px] md:text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-2">
                This Week
              </div>
            </div>

            {/* Card 4: This Month */}
            <div className="bg-white dark:bg-neutral-800/90 rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-neutral-200/60 dark:border-neutral-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div
                id="month-count"
                className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white tabular-nums tracking-tight"
              >
                {monthCount.toLocaleString()}
              </div>
              <div className="text-[10px] md:text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-2">
                This Month
              </div>
            </div>
          </div>

          <div className="text-center mt-6 text-[11px] text-neutral-400 dark:text-neutral-500">
            Telemetry streamed securely · Global node latency: <span className="font-mono text-neutral-600 dark:text-neutral-300">14ms</span>
          </div>
        </div>
      </div>
    </section>
  );
};
