import AlternatingText from "@/components/section/AlternativeText";
import Carousel from "@/components/section/Carousel";
import Hero from "@/components/section/Hero";
import SkyDive from "@/components/section/SkyDive";
import AltTextScene from "@/components/ui/3d/AltTextScene";

export default function Home(): JSX.Element {
  return (
    <>
      {/* <Hero /> */}
      {/* <SkyDive /> */}
      <Carousel />
      <AlternatingText />
    </>
  );
}
