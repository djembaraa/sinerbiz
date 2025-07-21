// app/page.tsx
import HeroSection from "@/components/HeroSection"; // Import komponen HeroSection
import FeaturedServices from "@/components/FeaturedServices"; // Import komponen FeaturedServices yang baru
import AboutSection from "@/components/AboutSection";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-gray-200">
      <HeroSection />
      <FeaturedServices />
      <AboutSection />
    </div>
  );
}
