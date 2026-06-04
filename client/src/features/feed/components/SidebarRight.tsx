import React from 'react';

export default function SidebarRight() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-warm-gold/15">
      <h3 className="font-serif text-lg font-semibold text-deep mb-4">Trending Topics</h3>
      <ul className="flex flex-col gap-3">
        {['#HolisticHealing', '#Neurodiversity', '#EntrepreneurJoy', '#MindfulLiving'].map((tag) => (
          <li key={tag} className="text-sm text-warm-gold cursor-pointer hover:underline">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}