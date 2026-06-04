import React from 'react';

export default function Media() {
  const mediaItems = [
    { thumb: '🎙️', tag: 'Podcast', title: 'The Joy Podcast', desc: 'Conversations with changemakers, healers, and purpose-driven leaders on living a joyful life.', bg: 'bg-gradient-to-br from-[#2b2318] to-[#4a3728] via-[#2b2318]' },
    { thumb: '📖', tag: 'Community Story', title: 'Voices of the Circle', desc: 'Real testimonials from community members sharing their journeys of healing and transformation.', bg: 'bg-gradient-to-br from-sage to-[#4a7a5e] via-sage' },
    { thumb: '🎬', tag: 'Short Documentary', title: 'The Happiness Project', desc: 'A short documentary exploring what joy looks like across different lives and communities in the Philippines.', bg: 'bg-gradient-to-br from-warm-gold to-[#a07028] via-warm-gold' },
  ];

  return (
    <section id="media" className="py-24 px-8 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.2em] uppercase text-warm-gold mb-3">Stories & Media</div>
          <h2 className="font-serif text-4xl md:text-5xl text-deep mb-5">Stories That Inspire Hope</h2>
          <p className="text-base text-muted max-w-2xl mx-auto font-light leading-relaxed">
            Produced by Founders of Joy Production — content that moves, heals, and uplifts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {mediaItems.map((item, idx) => (
            <div key={idx} className="bg-card-bg border border-warm-gold/15 rounded-2xl overflow-hidden transition-transform hover:-translate-y-1 cursor-pointer">
              <div className={`h-40 flex items-center justify-center text-5xl ${item.bg}`}>
                {item.thumb}
              </div>
              <div className="p-6">
                <div className="text-[0.7rem] tracking-[0.14em] uppercase text-warm-gold mb-2">{item.tag}</div>
                <h3 className="font-serif text-lg font-semibold text-deep mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-deep text-white px-8 py-3 rounded-full text-sm tracking-wide transition hover:bg-warm-gold hover:-translate-y-0.5">
            Explore Media
          </button>
        </div>
      </div>
    </section>
  );
}