import { clusters } from "./data";
import { Cluster } from "../components/Cluster";

const Connector = () => (
  <div className="hidden md:flex justify-center w-full py-8">
    <div className="h-32 w-px border-l-[3px] border-gray-400 border-dotted opacity-50" />
  </div>
);

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
             {index !== clusters.length - 1 && <Connector />}
          </div>
        ))}
      </div>

      <div className="pb-32" />
    </main>
  );
}
