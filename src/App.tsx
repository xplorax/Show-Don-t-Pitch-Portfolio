import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AgencyTeamSection } from './components/AgencyTeamSection';
import { SdfGuideSection } from './components/SdfGuideSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppChat } from './components/WhatsAppChat';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen text-emerald-950 bg-[#faf9f5] font-sans selection:bg-gold-200 selection:text-emerald-950 relative">
      {/* Website Loading Screen */}
      <LoadingScreen onComplete={() => setLoading(false)} />

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

        {/* Agency Profile & Core Team Section */}
        <AgencyTeamSection />

        {/* SDP Authority Guide Section */}
        <SdfGuideSection />

        {/* Verified Client Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Accordion Section */}
        <FaqSection />

        {/* Form Contact Section */}
        <ContactSection />
      </main>

      {/* Shared Footer & Pre-footer CTA */}
      <Footer />

      {/* Floating Interactive WhatsApp Chat */}
      <WhatsAppChat />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}


