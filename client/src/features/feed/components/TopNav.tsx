import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Avatar from "@/components/ui/Avatar"; // Ensure this path is correct

export default function TopNav() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-warm-gold/20 h-[70px] flex items-center justify-between px-6 shadow-sm">
      {/* Use the exact same block here! */}
      <Link href="/feed" className="flex items-center gap-3 w-64">
        <Image 
          src="/Founders of Joy (2).png" 
          alt="Founders of Joy Logo" 
          width={32} 
          height={32} 
          className="w-8 h-auto"
        />
        <div className="font-serif text-xl font-semibold text-deep hidden sm:block">
          Founders <span className="text-warm-gold">of Joy</span>
        </div>
      </Link>
      
      {/* Center: Search Bar */}
      <div className="hidden md:flex flex-1 max-w-2xl mx-auto">
        <div className="relative w-full">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">🔍</span>
          <input 
            type="text" 
            placeholder="Search people, posts, circles..." 
            className="w-full bg-light-gold/50 border border-warm-gold/20 rounded-full py-2.5 pl-12 pr-4 text-sm text-deep outline-none focus:border-warm-gold transition-colors placeholder:text-muted/70"
          />
        </div>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-5 justify-end w-64">
        <button className="text-warm-gold hover:text-terracotta transition text-lg">🔔</button>
        <button className="text-muted hover:text-warm-gold transition text-lg">✉️</button>
        
        <button className="hidden lg:flex bg-warm-gold text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide transition hover:bg-terracotta items-center gap-2">
          <span>+</span> Create Post
        </button>
        
        <div className="flex items-center gap-3 border-l border-warm-gold/20 pl-5 ml-1 cursor-pointer">
          <Avatar initials="JS" size="sm" className="bg-terracotta text-white" />
        </div>
      </div>
    </nav>
  );
}