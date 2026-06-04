import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-deep text-cream/70 pt-16 pb-8 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1.5">
            <span className="font-serif text-2xl font-semibold text-white tracking-wide block mb-4">
              Founders <span className="text-warm-gold">of Joy</span>
            </span>
            <p className="text-sm leading-relaxed text-cream/50 max-w-sm">
              A holistic wellness community supporting neurodivergent individuals, entrepreneurs, and people seeking healing, purpose, and happiness.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-warm-gold mb-5">About</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-warm-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-warm-gold transition-colors">Mission & Vision</a></li>
              <li><a href="#" className="hover:text-warm-gold transition-colors">Leadership</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-warm-gold mb-5">Community</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-warm-gold transition-colors">Circles</a></li>
              <li><a href="#" className="hover:text-warm-gold transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-warm-gold transition-colors">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-warm-gold mb-5">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-warm-gold transition-colors">Media</a></li>
              <li><a href="#" className="hover:text-warm-gold transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-warm-gold transition-colors">Donate</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <div>© 2025 Founders of Joy · A community initiative under <span className="text-warm-gold/70">La Pasion Solutions</span></div>
          <div>Made with 💛 for every mind</div>
        </div>
      </div>
    </footer>
  );
}