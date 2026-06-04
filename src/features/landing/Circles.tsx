import React from 'react';

export default function Circles() {
  const circles = [
    { emoji: '🧠', title: 'Neurodivergent Circle', desc: 'A safe and empowering space for neurodivergent individuals to connect, grow, and thrive with people who truly understand.', gradient: 'from-warm-gold to-terracotta' },
    { emoji: '💼', title: 'Entrepreneur Circle', desc: 'A wellness-centered community for entrepreneurs seeking purpose-driven leadership, resilience, and meaningful growth.', gradient: 'from-sage to-warm-gold' },
    { emoji: '✨', title: 'I Am Euphoria Circle', desc: 'A space for personal healing, self-discovery, and cultivating joy — where you meet yourself with radical acceptance.', gradient: 'from-terracotta to-[#e8a87c]' },
  ];

  return (
    <section id="circles" className="py-24 px-8 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.2em] uppercase text-warm-gold mb-3">Community</div>
          <h2 className="font-serif text-4xl md:text-5xl text-deep mb-5">Find Your Circle</h2>
          <p className="text-base text-muted max-w-2xl mx-auto font-light leading-relaxed">
            Three distinct communities — each a safe haven for connection, growth, and belonging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {circles.map((circle, idx) => (
            <div key={idx} className="bg-card-bg border border-warm-gold/20 rounded-2xl p-10 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-deep/10">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${circle.gradient}`} />
              <span className="text-4xl mb-5 block">{circle.emoji}</span>
              <h3 className="font-serif text-2xl font-semibold text-deep mb-3">{circle.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-7">{circle.desc}</p>
              <button className="text-sm text-warm-gold font-medium tracking-wide flex items-center gap-2 hover:gap-3 transition-all">
                Explore Circle &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}