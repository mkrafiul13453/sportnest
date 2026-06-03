import BookingSteps from "@/components/BookingSteps";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SportsShowcase from "@/components/SportsShowcase";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      {/* <SportsShowcase></SportsShowcase> */}
      <BookingSteps></BookingSteps>
      <Footer></Footer>
    </div>
  );
}
