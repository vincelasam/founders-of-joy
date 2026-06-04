import React from 'react';
import Link from 'next/link';

export default function TopNav() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-warm-gold/20 h-16 flex items-center justify-between px-6 shadow-sm">
      <Link href="/feed" className="font-serif text-xl font-semibold text-deep">
        Founders <span className="text-warm-gold">of Joy</span>
      </Link>
      
      <button 
        onClick={handleLogout}
        className="text-sm text-muted hover:text-terracotta transition-colors"
      >
        Log Out
      </button>
    </nav>
  );
}