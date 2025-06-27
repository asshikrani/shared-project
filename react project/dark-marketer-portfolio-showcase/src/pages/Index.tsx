
import React from "react";
import Navbar from "../components/Navbar";
import ProfileSection from "../components/ProfileSection";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import WorkflowSection from "../components/WorkflowSection";
import FAQSection from "../components/FAQSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <main className="bg-background font-poppins text-foreground">
      <Navbar />
      <ProfileSection />
      <HeroSection />
      <ServicesSection />
      <SkillsSection />
      <WorkflowSection />
      <FAQSection />

      <PortfolioSection />
      <ContactSection />
      <footer className="text-center py-6 mt-12 text-sm text-gray-400 select-none">
  ©  2023
  {" "}
  <a href="https://ahmadsiddique.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
    Ahmad Siddique
  </a>
  . <br />
  All Rights Reserved
</footer>
    </main>
  );
};

export default Index;

