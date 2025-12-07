import { clusters } from "./data";
import { Cluster } from "../components/Cluster";

const Connector = ({ variant = 0 }: { variant?: number }) => {
  const paths = [
    // Smooth flowing S-curve
    "M 300,0 Q 300,80 220,160 Q 140,240 220,320 Q 300,400 300,480",
    // Dynamic wave
    "M 300,0 Q 380,120 300,240 Q 220,360 300,480",
    // Elegant double curve
    "M 300,0 Q 220,120 300,240 Q 380,360 300,480",
    // Spiral descent
    "M 300,0 Q 340,100 260,200 Q 340,300 300,400 Q 260,440 300,480",
  ];

  const selectedPath = paths[variant % paths.length];

  return (
    <div className="hidden md:flex justify-center w-full py-4">
      <svg
        width="600"
        height="480"
        viewBox="0 0 600 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-50"
      >
        <defs>
          <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D1D5DB" stopOpacity="0" />
            <stop offset="10%" stopColor="#9CA3AF" stopOpacity="0.3" />
            <stop offset="25%" stopColor="#6B7280" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#6B7280" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#6B7280" stopOpacity="0.6" />
            <stop offset="90%" stopColor="#9CA3AF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D1D5DB" stopOpacity="0" />
          </linearGradient>
          <filter id={`glow-${variant}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d={selectedPath}
          stroke={`url(#gradient-${variant})`}
          strokeWidth="4"
          strokeDasharray="12,8"
          strokeLinecap="round"
          filter={`url(#glow-${variant})`}
        />
      </svg>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen py-32 overflow-x-hidden bg-background relative">
      
      <header className="mb-32 px-6 text-center relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-tr from-white via-accent-blue/30 to-accent-pink/30 rounded-full blur-[120px] opacity-70 -z-10" />
        
        <div className="mb-8 flex items-center justify-center text-sm font-medium tracking-widest text-gray-500 uppercase">
           Built by Micah, Matthew, Adam and Aruneem
        </div>

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-gray-900 font-sans mb-8 drop-shadow-sm">
          synthesis.
        </h1>
      </header>

      <div className="space-y-0 relative z-10 max-w-7xl mx-auto">
        {clusters.map((cluster, index) => (
          <div key={cluster.id}>
             <Cluster cluster={cluster} index={index} />
             {index !== clusters.length - 1 && <Connector variant={index} />}
          </div>
        ))}
      </div>

      <div className="pb-32" />
    </main>
  );
}
