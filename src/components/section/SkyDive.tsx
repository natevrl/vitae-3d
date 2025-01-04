"use client";

import { Section } from "@/components/ui/Section";
import SkyDiveScene from "../ui/3d/SkyDiveScene";
import { View } from "@react-three/drei";

function SkyDive(): JSX.Element {
  return (
    <Section className="skydive h-screen">
      <h2 className="sr-only">dive into better health</h2>
      <View className="h-screen w-screen">
        <SkyDiveScene />
      </View>
    </Section>
  );
}

export default SkyDive;
