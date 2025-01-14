import AlternatingText from "@/components/section/AlternativeText";
import BigText from "@/components/section/BigText";
import Carousel from "@/components/section/Carousel";
import Hero from "@/components/section/Hero";
import SkyDive from "@/components/section/SkyDive";

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <SkyDive />
      <Carousel />
      <AlternatingText />
      <BigText />
    </>
  );
}
