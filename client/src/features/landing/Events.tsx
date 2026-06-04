import React from 'react';

export default function Events() {
  const events = [
    { type: 'Retreat', date: '📅 August 15–17, 2025', title: 'Hope. Healing. Happiness. Retreat', location: '📍 Tagaytay, Cavite', banner: 'bg-gradient-to-r from-warm-gold to-terracotta' },
    { type: 'Conference', date: '📅 September 20, 2025', title: 'I Am Euphoria Conference', location: '📍 Manila, Philippines', banner: 'bg-gradient-to-r from-sage to-warm-gold' },
    { type: 'Summit', date: '📅 November 8, 2025', title: 'Happiness Summit PH', location: '📍 Pasay City, Metro Manila', banner: 'bg-gradient-to-r from-terracotta to-[#f5c99d]' },
  ];

  return (
    <section id="events" className="py-24 px-8 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.2em] uppercase text-warm-gold mb-3">Gatherings</div>
          <h2 className="font-serif text-4xl md:text-5xl text-deep mb-5">Upcoming Events</h2>
          <p className="text-base text-muted max-w-2xl mx-auto font-light leading-relaxed">
            Join us in person and online for retreats, circles, conferences, and summits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((evt, idx) => (
            <div key={idx} className="bg-card-bg border border-warm-gold/15 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-deep/5">
              <div className={`h-2 ${evt.banner}`} />
              <div className="p-8">
                <div className="inline-block bg-light-gold text-warm-gold text-xs tracking-wider uppercase py-1 px-3 rounded-full mb-5">
                  {evt.type}
                </div>
                <div className="text-xs text-warm-gold tracking-widest uppercase font-medium mb-2">{evt.date}</div>
                <h3 className="font-serif text-xl font-semibold text-deep mb-2">{evt.title}</h3>
                <div className="text-sm text-muted mb-6 flex items-center gap-1.5">{evt.location}</div>
                <button className="bg-deep text-white px-6 py-2.5 rounded-full text-sm tracking-wide transition hover:bg-warm-gold hover:-translate-y-0.5">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}