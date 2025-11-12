import { useState, useEffect } from 'react';
import { CheckCircle2, Clock } from 'lucide-react';

interface FeedItem {
  id: string;
  username: string;
  action: string;
  amount: string;
  status: 'verified' | 'pending';
  campaign: string;
}

export default function LiveFeed() {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([
    {
      id: '1',
      username: '@sofiamint',
      action: 'reward distributed',
      amount: '+0.0214',
      status: 'verified',
      campaign: '#CHROMA',
    },
    {
      id: '2',
      username: '@nft_dan',
      action: 'shared promotion',
      amount: '+0.0180',
      status: 'verified',
      campaign: '#CHROMA',
    },
    {
      id: '3',
      username: '@jason_dev',
      action: 'posted about',
      amount: '+0.0118',
      status: 'verified',
      campaign: '#CHROMA',
    },
    {
      id: '4',
      username: '@alex_crypt',
      action: 'verified tweet',
      amount: '+0.0107',
      status: 'verified',
      campaign: '#CHROMA',
    },
    {
      id: '5',
      username: '@solana_pro',
      action: 'shared promotion',
      amount: '+0.0165',
      status: 'verified',
      campaign: '#CHROMA',
    },
  ]);

  const pendingItems = [
    {
      id: 'p1',
      username: '@user319',
      action: 'Posting about #CHROMA...',
      status: 'pending' as const,
    },
    {
      id: 'p2',
      username: '@user578',
      action: 'Posting about #CHROMA...',
      status: 'pending' as const,
    },
    {
      id: 'p3',
      username: '@user242',
      action: 'Posting about #CHROMA...',
      status: 'pending' as const,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedItems((prev) => {
        const newItem: FeedItem = {
          id: Date.now().toString(),
          username: `@user${Math.floor(Math.random() * 1000)}`,
          action: ['shared promotion', 'reward distributed', 'verified tweet'][
            Math.floor(Math.random() * 3)
          ],
          amount: `+0.0${Math.floor(Math.random() * 300 + 100)}`,
          status: 'verified',
          campaign: '#CHROMA',
        };
        return [newItem, ...prev.slice(0, 9)];
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-900/30 border border-gray-800 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Live Feed</h2>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          </div>

          <div className="space-y-3">
            {feedItems.map((item) => (
              <div
                key={item.id}
                className="bg-black/40 border border-gray-800 p-4 hover:border-cyan-500/30 transition-all duration-300 animate-fade-in"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-cyan-400 font-mono text-sm">{item.username}</span>
                      <span className="text-gray-500 text-xs">→</span>
                      <span className="text-gray-400 text-sm">{item.action}</span>
                    </div>
                    <div className="text-xs text-gray-600">{item.campaign}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono text-sm font-bold">
                      {item.amount} SOL
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 p-8">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-6">
            Pending Verifications
          </h2>

          <div className="space-y-3 mb-8">
            {pendingItems.map((item) => (
              <div
                key={item.id}
                className="bg-black/40 border border-gray-800 p-4 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-cyan-400 font-mono text-sm">{item.username}</span>
                    </div>
                    <div className="text-sm text-gray-400">{item.action}</div>
                  </div>
                  <Clock className="w-4 h-4 text-yellow-400 animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-black/60 border border-gray-700 p-6 rounded">
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">
              How It Works
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>Must include #CHROMA or campaign tag in tweet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>Verification runs every 5 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>Rewards flow automatically when threshold is met</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>
                  Engagement tracked: likes, views, reposts
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
