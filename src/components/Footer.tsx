import { Twitter, Github, MessageCircle, Hexagon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black/60 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center rounded">
                <Hexagon className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-2xl font-bold tracking-wider text-white">CHROMA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolutionizing social promotion through blockchain technology and engagement-based
              rewards.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">
              Platform
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                How It Works
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Campaigns</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Leaderboard
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Rewards</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">
              Resources
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                Documentation
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">API</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Support</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">
              Community
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 border border-gray-700 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 border border-gray-700 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 border border-gray-700 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Chroma. Built on Solana. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
