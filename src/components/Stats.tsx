export default function Stats() {
  const stats = [
    {
      value: '0.5952',
      label: 'TOTAL UNCLAIMED FEES',
      unit: 'SOL',
    },
    {
      value: '0.3720',
      label: 'TOTAL CREATOR REWARDS',
      unit: 'SOL',
    },
    {
      value: '247',
      label: 'TOTAL TRANSACTIONS',
      unit: '',
    },
    {
      value: '0.1190',
      label: 'TOTAL PAID OUT',
      unit: 'SOL',
    },
  ];

  return (
    <section className="py-16 px-6 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">
                {stat.value}
                {stat.unit && <span className="text-2xl ml-1">{stat.unit}</span>}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
