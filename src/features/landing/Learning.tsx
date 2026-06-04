import React from 'react';

export default function Learning() {
  const courses = [
    { icon: '🌟', name: 'Happy New Me', meta: 'Self-paced · 8 modules' },
    { icon: '💡', name: 'Entrepreneur Wellness', meta: 'Live sessions · 6 weeks' },
    { icon: '🤝', name: 'Life Coaching Foundations', meta: 'Self-paced · 10 modules' },
    { icon: '🧘', name: 'Mindfulness & Resilience', meta: 'Workshop series · 4 weeks' },
  ];

  return (
    <section className="bg-light-gold py-24 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-warm-gold mb-3">Learning & Development</div>
          <h2 className="font-serif text-4xl md:text-5xl text-deep mb-5">Learn, Grow,<br />and Thrive</h2>
          <p className="text-base text-muted mb-8 font-light leading-relaxed">
            Access courses, workshops, and personal development programs designed to support mental wellness and purpose-driven living.
          </p>
          <button className="bg-deep text-white px-8 py-3 rounded-full text-sm tracking-wide transition hover:bg-warm-gold hover:-translate-y-0.5">
            Explore Learning
          </button>
        </div>
        
        <div className="flex flex-col gap-4">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 px-6 flex items-center gap-4 transition-transform hover:translate-x-2 cursor-pointer">
              <div className="w-11 h-11 bg-light-gold rounded-lg flex items-center justify-center text-xl shrink-0">
                {course.icon}
              </div>
              <div>
                <div className="text-sm font-medium text-deep">{course.name}</div>
                <div className="text-xs text-muted">{course.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}