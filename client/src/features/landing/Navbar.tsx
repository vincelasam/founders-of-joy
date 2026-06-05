import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-warm-gold/20 flex items-center justify-between px-4 md:px-12 h-[70px]">

      <Link href="/" className="flex items-center gap-3">
        <Image 
          src="/Founders of Joy (2).png"   
          alt="Founders of Joy Logo" 
          width={40}         
          height={40} 
          className="w-10 h-auto"
        />
        <div className="font-serif text-2xl font-semibold text-deep tracking-wide">
          Founders <span className="text-warm-gold">of Joy</span>
        </div>
      </Link>
      
      <ul className="hidden md:flex gap-7 list-none">
        {['Home', 'About', 'Circles', 'Programs', 'Events', 'Media', 'Volunteer', 'Donate'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="text-sm text-muted uppercase tracking-wider transition-colors hover:text-warm-gold">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <Link 
          href="/login" 
          className="border border-warm-gold text-warm-gold bg-transparent px-5 py-2 rounded-full text-sm font-sans tracking-wide transition-all hover:bg-warm-gold hover:text-white"
        >
          Login
        </Link>
        <Link 
          href="/register" 
          className="bg-warm-gold text-white border-none px-5 py-2 rounded-full text-sm font-sans tracking-wide transition-colors hover:bg-terracotta"
        >
          Join Community
        </Link>
      </div>
    </nav>
  );
}