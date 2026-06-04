import React from 'react';

export default function JoyFeed() {
  const testimonials = [
    { type: 'Reflection', quote: '"Today I realized healing is not linear. I\'m grateful for the people who remind me that growth takes time."', author: 'Maria R.', role: 'Neurodivergent Circle', initials: 'MR', gradient: 'bg-gradient-to-br from-warm-gold to-terracotta' },
    { type: 'Gratitude Post', quote: '"Gratitude is my daily anchor. This community showed me how beautiful it is to simply be alive and present."', author: 'James L.', role: 'I Am Euphoria Circle', initials: 'JL', gradient: 'bg-gradient-to-br from-sage to-[#4a7a5e]' },
    { type: 'Entrepreneur Insight', quote: '"Leading with wellness first changed everything in my business. Purpose and profit can truly coexist."', author: 'Ana C.', role: 'Entrepreneur Circle', initials: 'AC', gradient: 'bg-gradient-to-br from-terracotta to-[#e8a87c]' },
    { type: 'Healing Story', quote: '"Finding this community was the turning point. For the first time, I felt truly seen and deeply understood."', author: 'Sofia K.', role: 'Neurodivergent Circle', initials: 'SK', gradient: 'bg-gradient-to-br from-[#b784a7] to-[#8a5a9e]' },
  ];

  return (
    <section className="bg-cream py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.2em] uppercase text-warm-gold mb-3">Community Voices</div>
          <h2 className="font-serif text-4xl md:text-5xl text-deep mb-5">Voices of Joy</h2>
          <p className="text-base text-muted max-w-2xl mx-auto font-light">
            Real stories, reflections, and insights from our beautiful community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-card-bg border border-warm-gold/15 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="text-[0.7rem] tracking-[0.15em] uppercase text-warm-gold mb-4">{item.type}</div>
                <blockquote className="font-serif text-lg italic text-deep leading-relaxed mb-5">
                  {item.quote}
                </blockquote>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-medium shrink-0 ${item.gradient}`}>
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-deep">{item.author}</div>
                  <div className="text-xs text-muted">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-deep text-white px-8 py-3 rounded-full text-sm tracking-wide transition hover:bg-warm-gold hover:-translate-y-0.5">
            Join the Conversation
          </button>
        </div>
      </div>
    </section>
  );
}