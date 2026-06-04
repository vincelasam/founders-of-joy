import React from 'react';

export default function Mission() {
  const missions = [
    { icon: '🌿', title: 'Wellness', desc: 'Nurturing the whole person — body, mind, and spirit — through holistic practices.' },
    { icon: '💛', title: 'Compassion', desc: 'Creating safe, judgment-free spaces where every person is met with kindness.' },
    { icon: '🔥', title: 'Empowerment', desc: 'Equipping individuals with the tools, knowledge, and community to thrive.' },
    { icon: '🌱', title: 'Growth', desc: 'Embracing continuous growth as the foundation of a purposeful, joyful life.' },
  ];

  return (
    <section id="about" className="bg-light-gold py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.2em] uppercase text-warm-gold mb-3">Our Mission</div>
          <h2 className="font-serif text-4xl md:text-5xl text-deep mb-5">
            Making Happiness Accessible<br />for Every Mind
          </h2>
          <p className="text-base text-muted max-w-2xl mx-auto font-light leading-relaxed">
            We believe in holistic wellness, genuine mental well-being, and building a compassionate community where everyone belongs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((item, idx) => (
            <div key={idx} className="text-center p-8 bg-white/60 rounded-2xl">
              <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-deep mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}