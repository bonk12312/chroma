import { Zap, TrendingUp, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">PROMOTE.</span>
            <br />
            <span className="text-white">EARN.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              EVOLVE.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every retweet tagged with <span className="text-cyan-400 font-mono">#CHROMA</span> strengthens the network.
            <br />
            Rewards flow back to you — directly in <span className="text-cyan-400">SOL</span>.
          </p>

          <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto">
            Real impact, measurable influence. Only campaigns that pass engagement thresholds earn rewards.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button className="px-8 py-4 bg-cyan-500 text-black font-bold text-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
              CONNECT WALLET →
            </button>
            <button className="px-8 py-4 border-2 border-gray-700 text-white font-bold text-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="bg-gray-900/50 border border-gray-800 p-8 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-all">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Verified Campaigns</h3>
            <p className="text-gray-400 leading-relaxed">
              Retweet verified campaigns and watch your points accumulate. Each interaction is tracked and verified on-chain.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 p-8 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-all">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Engagement Threshold</h3>
            <p className="text-gray-400 leading-relaxed">
              Rewards unlock when campaigns reach minimum engagement: likes, views, and reposts must meet the threshold.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 p-8 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-all">
              <Award className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Earn SOL & Points</h3>
            <p className="text-gray-400 leading-relaxed">
              Get paid in Solana directly to your wallet. Points unlock exclusive perks and higher reward multipliers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
