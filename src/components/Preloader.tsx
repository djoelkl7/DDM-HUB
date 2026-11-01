import React, { useEffect, useState } from 'react';
import { SITE_CONFIG } from '../data/siteData';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isFading, setIsFading] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const logs = [
      '> Initializing DDM-HUB core environment...',
      '> Loading creative assets & typography...',
      '> Mounting vector graphic renderers...',
      '> Connecting real-time traffic telemetry...',
      '> DDM-HUB ready. We Decorate The World.',
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < logs.length) {
        const nextLog = logs[current];
        setTerminalLogs((prev) => [...prev, nextLog]);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            setIsRemoved(true);
            onComplete?.();
          }, 600);
        }, 400);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [onComplete]);

  const dismissImmediately = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsRemoved(true);
      onComplete?.();
    }, 200);
  };

  if (isRemoved) return null;

  return (
    <div
      onClick={dismissImmediately}
      title="Click anywhere to skip loading"
      className={`fixed inset-0 z-[100] cursor-pointer bg-red-950 flex flex-col items-center justify-center transition-opacity duration-700 ease-out overflow-hidden ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Terminal background text */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 overflow-hidden p-6 md:p-12 font-mono text-xs md:text-sm text-red-400/30 z-0 flex flex-col justify-end items-start pointer-events-none select-none space-y-1">
        {terminalLogs.map((log, index) => (
          <div key={index} className="transition-all duration-200">
            {log}
          </div>
        ))}
      </div>

      {/* Central spinning animation & Logo */}
      <div className="relative flex items-center justify-center z-10 flex-col gap-6">
        <div className="relative flex items-center justify-center">
          {/* Animated rings */}
          <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-white/10" />
          <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full border-t-2 border-red-500 animate-spin" />
          
          {/* Center User Logo */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-2 bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl">
            <img
              src={SITE_CONFIG.logoUrl}
              onError={(e) => {
                (e.target as HTMLImageElement).src = SITE_CONFIG.fallbackLogo;
              }}
              alt="DDM-HUB"
              className="w-full h-full object-contain animate-spin-slow"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-white font-extrabold tracking-widest text-lg md:text-xl uppercase">
            DDM-HUB
          </h2>
          <p className="text-red-400 text-xs tracking-wider uppercase mt-1">
            We Decorate The World
          </p>
        </div>
      </div>
    </div>
  );
};
