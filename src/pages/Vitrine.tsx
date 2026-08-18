import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { QuickServices } from '../components/QuickServices';
import { About } from '../components/About';
import { Exames } from '../components/Exames';
import { Convenios } from '../components/Convenios';
import { Testimonials } from '../components/Testimonials';
import { InstagramFeed } from '../components/InstagramFeed';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { WhatsAppFloat } from '../components/WhatsAppFloat';

export const Vitrine: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickServices />
        <About />
        <Exames />
        <Convenios />
        <Testimonials />
        <InstagramFeed />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};
