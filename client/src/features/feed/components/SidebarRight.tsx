import React from 'react';

export default function SidebarRight() {
  const trending = [
    { rank: 1, title: 'Top Reflection Today', author: 'Maria Santos', circle: 'Entrepreneur Circle' },
    { rank: 2, title: 'Top Entrepreneur Insight', author: 'Ana Cruz', circle: 'I Am Euphoria' },
    { rank: 3, title: 'Top Gratitude Post', author: 'James Lim', circle: 'Neurodivergent Circle' },
  ];

  const events = [
    { month: 'AUG', day: '15', title: 'Hope. Healing. Happiness. Retreat', location: 'Tagaytay, Cavite', color: 'bg-warm-gold' },
    { month: 'SEP', day: '20', title: 'I Am Euphoria Conference', location: 'Manila, PH', color: 'bg-sage' },
    { month: 'NOV', day: '8', title: 'Happiness Summit PH', location: 'Pasay City, Metro Manila', color: 'bg-terracotta' },
  ];

  return (
    <div className="py-2 pl-4 flex flex-col gap-6">
      
      {/* Trending Insights */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-warm-gold/15">
        <h4 className="text-xs font-semibold text-warm-gold tracking-widest uppercase mb-5">Trending Insights</h4>
        <ul className="flex flex-col gap-5">
          {trending.map((item) => (
            <li key={item.rank} className="flex gap-4 items-start cursor-pointer group">
              <span className="text-sm font-serif text-warm-gold/50 font-bold pt-1">{item.rank}</span>
              <div>
                <p className="text-sm font-medium text-deep group-hover:text-warm-gold transition-colors">{item.title}</p>
                <p className="text-xs text-muted mt-1">{item.author} · {item.circle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-warm-gold/15">
        <h4 className="text-xs font-semibold text-warm-gold tracking-widest uppercase mb-5">Upcoming Events</h4>
        <ul className="flex flex-col gap-5">
          {events.map((event, idx) => (
            <li key={idx} className="flex gap-4 items-center group cursor-pointer">
              <div className={`${event.color} text-white rounded-xl w-12 h-12 flex flex-col items-center justify-center shrink-0 shadow-sm`}>
                <span className="text-[10px] font-bold tracking-wider">{event.month}</span>
                <span className="text-lg font-bold leading-none">{event.day}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-deep group-hover:text-warm-gold transition-colors leading-tight">{event.title}</p>
                <p className="text-xs text-muted flex items-center gap-1 mt-1">📍 {event.location}</p>
              </div>
              <button className="text-xs font-medium text-warm-gold border border-warm-gold/30 rounded-full px-3 py-1 hover:bg-warm-gold hover:text-white transition-colors">
                Join
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}