import { Navbar } from "@/components/ui/navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventInfoSection from "@/components/EventInfoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-[#00175D] to-[#92D7FF]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventInfoSection />
      <Footer />
    </div>
  );
}
