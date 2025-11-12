import { DollarSign, ArrowRight } from 'lucide-react';

export default function FeeClaims() {
  return (
    <section className="py-16 px-6 bg-black/40">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900/50 border border-gray-800 p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
              Fee Claims
            </h2>
          </div>

          <div className="bg-black/60 border border-cyan-500/30 p-8 mb-6">
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
              Creator Fee Claims:
            </div>
            <div className="text-5xl font-bold text-cyan-400 font-mono mb-6">
              0.048112 <span className="text-3xl">SOL</span>
            </div>

            <button className="w-full bg-green-500 text-black font-bold py-4 px-6 hover:bg-green-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
              <span className="uppercase tracking-wider">Claim Rewards</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/40 border border-gray-800 p-6">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                Pending Rewards
              </div>
              <div className="text-2xl font-bold text-yellow-400 font-mono">
                +0.020376 <span className="text-lg">SOL</span>
              </div>
            </div>

            <div className="bg-black/40 border border-gray-800 p-6">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                Total Claimed
              </div>
              <div className="text-2xl font-bold text-green-400 font-mono">
                0.324891 <span className="text-lg">SOL</span>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-black/40 border border-gray-700 p-4">
            <p className="text-xs text-gray-400">
              <span className="text-cyan-400 font-bold">Note:</span> Rewards are automatically
              calculated based on campaign performance and engagement thresholds. Claims are
              processed instantly to your connected Solana wallet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
