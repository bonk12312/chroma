import { Hexagon, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center rounded">
            <Hexagon className="w-6 h-6 text-cyan-400" />
          </div>
          <span className="text-2xl font-bold tracking-wider text-white">CHROMA</span>
          <a
            href="https://twitter.com/your-account"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center rounded hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 group"
          >
            <Twitter className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-xs text-gray-400 uppercase tracking-wider">System Online</span>
          </div>

          <button
            onClick={handleConnect}
            className={`px-6 py-2 border-2 font-mono text-sm tracking-wider transition-all duration-300 ${
              isConnected
                ? 'border-green-400 text-green-400 bg-green-400/10 hover:bg-green-400/20'
                : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
            }`}
          >
            {isConnected ? 'WALLET CONNECTED' : 'CONNECT WALLET'}
          </button>
        </div>
      </div>
    </header>
  );
}
