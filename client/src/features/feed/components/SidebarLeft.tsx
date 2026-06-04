import React from 'react';
import Link from 'next/link';

export default function SidebarLeft() {
  const menuItems = [
    { name: 'Home Feed', path: '/feed', icon: '🏠', active: true },
    { name: 'Circles', path: '/circles', icon: '⭕' },
    { name: 'Learning', path: '/learning', icon: '📚' },
    { name: 'Events', path: '/events', icon: '📅' },
    { name: 'Media', path: '/media', icon: '🎬' },
    { name: 'Joy Journal', path: '/journal', icon: '📓' },
    { name: 'Volunteer', path: '/volunteer', icon: '🤝' },
    { name: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  const myCircles = [
    { name: 'Neurodivergent Circle', color: 'bg-sage' },
    { name: 'Entrepreneur Circle', color: 'bg-warm-gold' },
    { name: 'I Am Euphoria Circle', color: 'bg-terracotta' },
  ];

  return (
    <div className="py-2 pr-4">
      {/* Main Menu */}
      <div className="mb-8">
        <h4 className="text-xs font-semibold text-muted tracking-widest uppercase mb-4 px-3">Menu</h4>
        <ul className="flex flex-col gap-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.path} 
                className={`flex items-center gap-4 text-sm font-medium px-4 py-3 rounded-xl transition-colors ${
                  item.active 
                    ? 'bg-light-gold text-deep shadow-sm' 
                    : 'text-muted hover:text-warm-gold hover:bg-light-gold/30'
                }`}
              >
                <span className="text-lg opacity-80">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Your Circles */}
      <div>
        <h4 className="text-xs font-semibold text-muted tracking-widest uppercase mb-4 px-3">Your Circles</h4>
        <ul className="flex flex-col gap-2">
          {myCircles.map((circle) => (
            <li key={circle.name}>
              <Link href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-deep hover:text-warm-gold transition-colors">
                <span className={`w-2 h-2 rounded-full ${circle.color}`}></span>
                {circle.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}