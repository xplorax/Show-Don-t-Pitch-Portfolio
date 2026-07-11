import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SdfGuideSection } from './components/SdfGuideSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppChat } from './components/WhatsAppChat';

export default function App() {
  return (
    <div className="min-h-screen text-emerald-950 bg-[#faf9f5] font-sans selection:bg-gold-200 selection:text-emerald-950 relative">
      {/* Background grain texture overlay for luxury tactile feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.012] bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80')] mix-blend-overlay z-50" />
      
      {/* Shared Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Section (Home) */}
        <Hero />

        {/* Services Section */}
        <ServicesSection />

        {/* Projects Case Gallery Section */}
        <ProjectsSection />

        {/* SDF Authority Guide Section */}
        <SdfGuideSection />

        {/* FAQ Accordion Section */}
        <FaqSection />

        {/* Form Contact Section */}
        <ContactSection />
      </main>

      {/* Shared Footer & Pre-footer CTA */}
      <Footer />

      {/* Floating Interactive WhatsApp Chat */}
      <WhatsAppChat />
    </div>
  );
}

