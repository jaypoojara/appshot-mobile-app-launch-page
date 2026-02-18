import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import FeatureShowcase from "@/components/FeatureShowcase";
import HowItWorks from "@/components/HowItWorks";
import VideoDemo from "@/components/VideoDemo";
import Reviews from "@/components/Reviews";
import QRDownload from "@/components/QRDownload";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsCounter />
        <FeatureShowcase />
        <HowItWorks />
        <VideoDemo />
        <Reviews />
        <QRDownload />
      </main>
      <Footer />
    </>
  );
}
