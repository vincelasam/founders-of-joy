import React from 'react';

export default function Programs() {
  const programs = [
    { tag: 'Wellness', title: 'Happy New Me', desc: 'A transformative program helping individuals reshape their mindset and embrace a joyful new chapter.' },
    { tag: 'Community', title: 'Project JOY', desc: 'Spreading joy across communities through acts of kindness, connection, and shared celebration.' },
    { tag: 'Healing', title: 'Hope. Healing. Happiness.', desc: 'A holistic retreat-based program weaving hope, healing practices, and pathways to lasting happiness.' },
    { tag: 'Entrepreneurship', title: 'The CEO University', desc: 'Equipping purpose-driven leaders with the tools, mindset, and community to lead with wellness at the core.' },
  ];

  return (
    <section id="programs" className="bg-deep text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="text-xs tracking-[0.2em] uppercase text-warm-gold/80 mb-3">Programs & Initiatives</div>
          <h2 className="font-serif text-4xl md:text-5xl mb-5">
            Programs That Inspire<br />Healing, Growth & Purpose
          </h2>
          <p className="text-base text-cream/60 max-w-2xl font-light leading-relaxed">
            Each program is thoughtfully designed to meet you where you are and walk with you toward where you want to be.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all hover:bg-warm-gold/10 hover:-translate-y-1 cursor-pointer">
              <span className="inline-block bg-warm-gold/20 text-warm-gold text-xs tracking-wider uppercase py-1 px-3 rounded-full mb-4">
                {prog.tag}
              </span>
              <h3 className="font-serif text-xl font-semibold mb-2">{prog.title}</h3>
              <p className="text-sm text-cream/50 leading-relaxed mb-5">{prog.desc}</p>
              <button className="text-sm text-warm-gold bg-transparent border-none flex items-center gap-1.5 hover:gap-2.5 transition-all">
                Learn More &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}