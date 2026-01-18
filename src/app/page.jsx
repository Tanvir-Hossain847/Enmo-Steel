import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickDiscovery from "@/components/QuickDiscovery";
import LearnSection from "@/components/LearnSection";
import PlantCareGuides from "@/components/PlantCareGuides";
import AboutSection from "@/components/AboutSection";
import CTAFooter from "@/components/CTAFooter";
import FeaturedPlants from "@/components/FeaturedPlants";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuickDiscovery />
      <FeaturedPlants />
      <LearnSection />
      <PlantCareGuides />
      <AboutSection />
    </div>
  );
}
