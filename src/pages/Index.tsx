import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CodingProfiles } from "@/components/CodingProfiles";
import { SkillsSection } from "@/components/SkillsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CodingProfiles />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
