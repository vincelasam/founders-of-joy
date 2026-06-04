import React from 'react';
import Navbar from "../../features/landing/Navbar";
import Hero from "../../features/landing/Hero";
import Mission from "../../features/landing/Mission";
import Circles from "../../features/landing/Circles";
import Programs from "../../features/landing/Programs";
import JoyFeed from "../../features/landing/JoyFeed";
import Learning from "../../features/landing/Learning";
import Events from "../../features/landing/Events";
import Impact from "../../features/landing/Impact";
import Media from "../../features/landing/Media";
import Volunteer from "../../features/landing/Volunteer";
import NewsletterCTA from "../../features/landing/NewsletterCTA";
import Footer from "../../features/landing/Footer";

export default function Home() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Mission />
      <Circles />
      <Programs />
      <JoyFeed />
      <Learning />
      <Events />
      <Impact />
      <Media />
      <Volunteer />
      <NewsletterCTA />
      <Footer />
    </div>
  );
}