import { Workflow, Target, Zap, Coins } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Workflow,
      title: 'Connect Wallet',
      description:
        'Link your Solana wallet to start participating in verified campaigns and track your earnings in real-time.',
    },
    {
      icon: Target,
      title: 'Find Campaigns',
      description:
        'Browse verified campaigns from legitimate projects. Each campaign has clear engagement thresholds and reward structures.',
    },
    {
      icon: Zap,
      title: 'Promote & Engage',
      description:
        'Retweet campaigns with the required hashtag. Your engagement is tracked automatically and verified every 5 minutes.',
    },
    {
      icon: Coins,
      title: 'Earn Rewards',
      description:
        'When campaigns hit engagement thresholds, rewards are distributed automatically. Claim your SOL directly to your wallet.',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Four simple steps to start earning SOL for promoting verified campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 p-8 hover:border-cyan-500/50 transition-all duration-300 group relative"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-cyan-500 text-black font-bold flex items-center justify-center text-xl">
                {index + 1}
              </div>

              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-all">
                <step.icon className="w-8 h-8 text-cyan-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">
              Engagement Thresholds
            </h3>
            <p className="text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Not all promotions earn rewards. Campaigns must meet minimum engagement requirements
              to unlock payouts. This ensures quality promotion and protects against spam.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/40 border border-gray-700 p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">1000+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  Minimum Views
                </div>
              </div>

              <div className="bg-black/40 border border-gray-700 p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Minimum Likes</div>
              </div>

              <div className="bg-black/40 border border-gray-700 p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  Minimum Reposts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
