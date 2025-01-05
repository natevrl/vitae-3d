"use client";

import { Section } from "@/components/ui/Section";
import SkyDiveScene from "../ui/3d/SkyDiveScene";
import { View } from "@react-three/drei";

function SkyDive(): JSX.Element {
  const text = "dive into better health";

  return (
    <Section className="skydive h-screen">
      <h2 className="sr-only">{text}</h2>
      <View className="h-screen w-screen">
        <SkyDiveScene text={text}/>
      </View>
    </Section>
  );
}

export default SkyDive;
