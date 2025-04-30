import About from "@/components/home/About";
import HeroSection from "@/components/home/HeroSection";
import OurGallery from "@/components/home/OurGallery";
import PopularItems from "@/components/home/PopularItems";
import PremiumGifts from "@/components/home/PremiumGifts";
import Reviews from "@/components/home/Reviews";
import Trustedby from "@/components/home/Trustedby";

export default function Home() {
  return (
    <div className="w-full mt-5">
      <HeroSection />
      <PremiumGifts />
      <PopularItems />
      <About/>
      <OurGallery/>
      <Reviews/>
      <Trustedby/>
    </div>
  );
}
