"use client";
import React from 'react';


export default function NewsletterCTA() {
  return (
    <>
      {/* NEWSLETTER */}
      <section className="bg-light-gold py-24 px-8 text-center">
        <div className="max-w-2xl mx-auto bg-white rounded-[24px] p-10 md:p-16 shadow-[0_10px_40px_rgba(201,151,58,0.1)]">
          <div className="text-xs tracking-[0.2em] uppercase text-warm-gold mb-3">Stay Connected</div>
          <h2 className="font-serif text-3xl md:text-4xl text-deep mb-4">Stay Connected to the Joy</h2>
          <p className="text-sm text-muted mb-8 font-light leading-relaxed">
            Receive insights, events, and wellness resources from Founders of Joy — delivered with warmth to your inbox.
          </p>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="w-full px-5 py-3.5 border border-warm-gold/30 rounded-full bg-cream text-sm text-deep outline-none transition-colors focus:border-warm-gold placeholder:text-muted" />
            <input type="email" placeholder="Your Email Address" className="w-full px-5 py-3.5 border border-warm-gold/30 rounded-full bg-cream text-sm text-deep outline-none transition-colors focus:border-warm-gold placeholder:text-muted" />
            <button type="submit" className="bg-deep text-white px-10 py-3.5 rounded-full text-sm tracking-wide transition hover:bg-warm-gold hover:-translate-y-0.5 w-fit mx-auto mt-2">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,#f5e9d3,var(--color-cream))] text-center py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight text-deep mb-6">
            You Deserve <em className="text-warm-gold italic">Joy.</em><br />You Deserve Healing.<br />You Belong Here.
          </h2>
          <p className="text-lg text-muted mb-10 font-light">
            Take the first step toward the community, purpose, and happiness you deserve.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <button className="bg-deep text-white px-8 py-3 rounded-full text-sm tracking-wide transition hover:bg-warm-gold hover:-translate-y-0.5">
              Join the Community
            </button>
            <button className="bg-transparent border border-deep text-deep px-8 py-3 rounded-full text-sm transition hover:border-warm-gold hover:text-warm-gold">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>
    </>
  );
}