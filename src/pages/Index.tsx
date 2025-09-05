import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { FeatureCards } from "@/components/FeatureCards";
import { UploadSection } from "@/components/UploadSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeatureCards />
        <UploadSection />
      </main>
    </div>
  );
};

export default Index;
