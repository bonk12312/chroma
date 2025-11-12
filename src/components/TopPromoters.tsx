import { Trophy, TrendingUp } from 'lucide-react';

export default function TopPromoters() {
  const promoters = [
    { rank: 1, user: '@defi_expert', posts: 23, earned: '0.0923' },
    { rank: 2, user: '@crypto_master', posts: 21, earned: '0.0877' },
    { rank: 3, user: '@token_hunter', posts: 19, earned: '0.0869' },
    { rank: 4, user: '@web3_king', posts: 18, earned: '0.0771' },
    { rank: 5, user: '@solana_pro', posts: 17, earned: '0.0646' },
    { rank: 6, user: '@nft_whale', posts: 16, earned: '0.0612' },
    { rank: 7, user: '@blockchain_dev', posts: 15, earned: '0.0598' },
    { rank: 8, user: '@metaverse_fan', posts: 14, earned: '0.0554' },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900/30 border border-gray-800 p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
              Top Promoters
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-4 text-xs text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="text-left py-4 px-4 text-xs text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="text-center py-4 px-4 text-xs text-gray-500 uppercase tracking-wider">
                    Posts
                  </th>
                  <th className="text-right py-4 px-4 text-xs text-gray-500 uppercase tracking-wider">
                    Earned (SOL)
                  </th>
                </tr>
              </thead>
              <tbody>
                {promoters.map((promoter) => (
                  <tr
                    key={promoter.rank}
                    className={`border-b border-gray-800/50 hover:bg-cyan-500/5 transition-colors ${
                      promoter.rank === 1 ? 'bg-cyan-500/5' : ''
                    }`}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {promoter.rank === 1 && (
                          <div className="w-1 h-8 bg-cyan-400 absolute left-0"></div>
                        )}
                        <span
                          className={`font-bold ${
                            promoter.rank === 1
                              ? 'text-cyan-400 text-lg'
                              : promoter.rank <= 3
                              ? 'text-gray-400'
                              : 'text-gray-600'
                          }`}
                        >
                          #{promoter.rank}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-cyan-400 font-mono">{promoter.user}</span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-gray-300">{promoter.posts}</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="text-green-400 font-mono font-bold">{promoter.earned}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-black/60 border border-gray-700 p-6 flex items-start gap-4">
            <TrendingUp className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-bold mb-2 uppercase tracking-wider">
                Climb The Rankings
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The more campaigns you promote with genuine engagement, the higher you rank. Top
                promoters unlock exclusive perks, higher reward multipliers, and early access to
                premium campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
