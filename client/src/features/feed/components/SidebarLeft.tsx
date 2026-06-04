import React from 'react';
import Link from 'next/link';

export default function SidebarLeft() {
  const menuItems = [
    { name: 'My Feed', path: '/feed', icon: '🏠' },
    { name: 'My Circles', path: '/circles', icon: '🤝' },
    { name: 'Profile', path: '/profile', icon: '👤' },
    { name: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-warm-gold/15">
      <ul className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.path} className="flex items-center gap-3 text-sm font-medium text-deep hover:text-warm-gold transition-colors p-2 rounded-lg hover:bg-light-gold/30">
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}