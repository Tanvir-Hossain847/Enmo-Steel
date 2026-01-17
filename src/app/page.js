import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickDiscovery from "@/components/QuickDiscovery";
import FeaturedPlants from "@/components/FeaturedPlants";
import LearnSection from "@/components/LearnSection";
import PlantCareGuides from "@/components/PlantCareGuides";
import SearchByCharacteristics from "@/components/SearchByCharacteristics";
import InteractiveSection from "@/components/InteractiveSection";
import AboutSection from "@/components/AboutSection";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <QuickDiscovery />
      <FeaturedPlants />
      <LearnSection />
      <PlantCareGuides />
      <SearchByCharacteristics />
      <InteractiveSection />
      <AboutSection />
      <CTAFooter />
    </div>
  );
}
