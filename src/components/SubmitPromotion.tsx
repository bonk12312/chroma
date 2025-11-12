import { useState } from 'react';
import { Send } from 'lucide-react';

export default function SubmitPromotion() {
  const [twitterHandle, setTwitterHandle] = useState('');
  const [tweetUrl, setTweetUrl] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ twitterHandle, tweetUrl, walletAddress });
  };

  return (
    <section className="py-16 px-6 bg-black/40">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900/50 border border-gray-800 p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-white uppercase tracking-wider mb-8">
            Submit Promotion
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 uppercase tracking-wider mb-2">
                Twitter Handle
              </label>
              <input
                type="text"
                value={twitterHandle}
                onChange={(e) => setTwitterHandle(e.target.value)}
                placeholder="@username"
                className="w-full bg-black/60 border border-gray-700 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors font-mono"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 uppercase tracking-wider mb-2">
                Tweet URL
              </label>
              <input
                type="url"
                value={tweetUrl}
                onChange={(e) => setTweetUrl(e.target.value)}
                placeholder="https://twitter.com/..."
                className="w-full bg-black/60 border border-gray-700 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors font-mono"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 uppercase tracking-wider mb-2">
                Solana Wallet Address
              </label>
              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="Your Solana wallet address (auto-filled if connected)"
                className="w-full bg-black/60 border border-gray-700 px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors font-mono text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 text-black font-bold py-4 px-6 hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              <span className="uppercase tracking-wider">Submit Promotion</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="bg-black/60 border border-gray-700 p-4 mt-6">
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-cyan-400 font-bold">•</span> Must include #CHROMA or campaign tag in tweet
                <br />
                <span className="text-cyan-400 font-bold">•</span> Verification runs every 5 minutes
                <br />
                <span className="text-cyan-400 font-bold">•</span> Rewards flow automatically when engagement threshold is met
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
