import React from 'react';

export default function StoryHighlights() {
  const categories = [
    { name: 'Joy Reflection', icon: '✨', color: 'border-warm-gold text-warm-gold' },
    { name: 'Gratitude Post', icon: '🙏', color: 'border-terracotta text-terracotta' },
    { name: 'Entrepreneur Insight', icon: '💼', color: 'border-deep text-deep' },
    { name: 'Healing Journey', icon: '🌿', color: 'border-sage text-sage' },
    { name: 'Morning Affirmation', icon: '☀️', color: 'border-yellow-500 text-yellow-600' },
  ];

  return (
    <div className="flex gap-6 mb-8 overflow-x-auto pb-4 scrollbar-hide px-2">
      {categories.map((cat, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group min-w-[70px]">
          <div className={`w-14 h-14 rounded-full border-2 ${cat.color} flex items-center justify-center text-2xl bg-white group-hover:scale-105 transition-transform shadow-sm`}>
            {cat.icon}
          </div>
          <span className="text-[10px] font-medium text-muted text-center leading-tight group-hover:text-deep transition-colors">
            {cat.name.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br/></React.Fragment>)}
          </span>
        </div>
      ))}
    </div>
  );
}