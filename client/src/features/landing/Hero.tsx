import React from 'react';
import Link from 'next/link'; // <-- Added the Link import

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center text-center p-8 md:p-20 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,#f5e9d3_0%,#fdf8f2_70%)] overflow-hidden">
      
      {/* Floating decorative elements */}
      <div className="absolute w-[400px] h-[400px] bg-warm-gold rounded-full opacity-10 -top-[100px] -right-[100px] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-sage rounded-full opacity-10 -bottom-[80px] -left-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-up">
        {/* Badge */}
        <div className="inline-block border border-warm-gold/50 text-warm-gold text-xs tracking-widest uppercase py-2 px-5 rounded-full mb-8">
          ✦ A Holistic Wellness Community
        </div>

        {/* Heading */}
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight text-deep mb-6">
          Where Every Mind<br />Deserves <em className="text-warm-gold italic">Joy</em>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-muted max-w-xl mx-auto mb-10 leading-relaxed font-light">
          A holistic wellness community supporting neurodivergent individuals, entrepreneurs, and people seeking healing, purpose, and happiness.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          
          {/* Changed to Link pointing to /register */}
          <Link 
            href="/register" 
            className="bg-deep text-white px-8 py-3 rounded-full text-sm tracking-wide transition hover:bg-warm-gold hover:-translate-y-0.5"
          >
            Join the Community
          </Link>
          
          {/* Changed to an anchor tag pointing to the programs section */}
          <a 
            href="#programs" 
            className="bg-transparent border border-deep text-deep px-8 py-3 rounded-full text-sm transition hover:border-warm-gold hover:text-warm-gold"
          >
            Explore Programs
          </a>
          
          <button className="flex items-center gap-2 bg-transparent border-none text-muted text-sm transition hover:text-warm-gold ml-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
            Watch Our Story
          </button>
        </div>
      </div>
    </section>
  );
}