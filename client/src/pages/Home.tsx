/*
  Design: Editorial Minimalism meets Japanese Wabi-Sabi
  Main page — assembles all sections in order
*/
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Resume from "@/components/Resume.tsx";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Resume />
      <ContactSection />

    </div>
  );
}
