import { useEffect } from 'react';
import type { Screen } from '../App';

type Props = { navigate: (s: Screen) => void };

export default function SplashScreen({ navigate }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => navigate('login'), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(160deg, #1B1F4B 0%, #2D3280 50%, #5B67FA 100%)' }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo icon */}
        <div
          className="w-24 h-24 rounded-3xl flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
        >
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <rect x="6" y="12" width="40" height="34" rx="5" stroke="white" strokeWidth="2.5"/>
            <path d="M6 22H46" stroke="white" strokeWidth="2.5"/>
            <path d="M16 6V18M36 6V18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M14 31H22M14 37H28M30 31H38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="39" cy="38" r="7" fill="#5B67FA" stroke="white" strokeWidth="2"/>
            <path d="M36 38L38.5 40.5L43 36" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-white tracking-tight">PlanWise</h1>
          <p className="text-white/60 text-sm mt-2 font-medium">Smart Scheduling, powered by AI</p>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white/40"
              style={{
                animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
