import React from 'react';

export default function Impact() {
  const stats = [
    { icon: '🌍', number: '50K+', label: 'People Reached' },
    { icon: '👥', number: '12K+', label: 'Community Members' },
    { icon: '📚', number: '30+', label: 'Programs Delivered' },
    { icon: '🏘️', number: '15+', label: 'Communities Supported' },
  ];

  return (
    <section className="bg-gradient-to-br from-warm-gold to-terracotta text-white py-24 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-xs tracking-[0.2em] uppercase text-white/70 mb-3">Our Impact</div>
        <h2 className="font-serif text-4xl md:text-5xl mb-12">Joy That Ripples Outward</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <span className="text-3xl mb-3 block">{stat.icon}</span>
              <div className="font-serif text-5xl md:text-6xl font-light leading-none text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/75 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}