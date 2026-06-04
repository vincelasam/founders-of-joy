import React from 'react';

export default function Volunteer() {
  const ways = [
    { icon: '🙌', title: 'Volunteer', desc: 'Offer your time and talents to support our programs, events, and community initiatives.' },
    { icon: '🤝', title: 'Partner With Us', desc: 'Align your organization with a mission that touches hearts and transforms lives.' },
    { icon: '⭐', title: 'Sponsor Programs', desc: 'Fund initiatives that bring healing, wellness, and joy to underserved communities.' },
    { icon: '💛', title: 'Donate', desc: 'Every contribution directly supports the people and programs at the heart of our mission.' },
  ];

  return (
    <section id="volunteer" className="bg-deep text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.2em] uppercase text-warm-gold/80 mb-3">Get Involved</div>
          <h2 className="font-serif text-4xl md:text-5xl mb-5">Be Part of the Movement</h2>
          <p className="text-base text-cream/60 max-w-2xl mx-auto font-light leading-relaxed">
            There are many ways to join hands and extend the reach of joy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ways.map((way, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-colors hover:bg-warm-gold/10 cursor-pointer">
              <span className="text-3xl mb-4 block">{way.icon}</span>
              <h3 className="font-serif text-xl font-semibold mb-2">{way.title}</h3>
              <p className="text-sm text-cream/55 leading-relaxed">{way.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <button className="bg-warm-gold text-white px-8 py-3 rounded-full text-sm tracking-wide transition hover:bg-terracotta hover:-translate-y-0.5">
            Volunteer Now
          </button>
          <button className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-full text-sm transition hover:border-warm-gold hover:text-warm-gold">
            Become a Partner
          </button>
          <button className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-full text-sm transition hover:border-warm-gold hover:text-warm-gold">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
}