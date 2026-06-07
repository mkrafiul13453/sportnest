import BookingSteps from "@/components/BookingSteps";
import HeroSection from "@/components/HeroSection";
import PlayerReviews from "@/components/PlayerReviews";
import SportsShowcase from "@/components/SportsShowcase";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <SportsShowcase></SportsShowcase>
      <BookingSteps></BookingSteps>
      <PlayerReviews></PlayerReviews>
    </div>
  );
}
