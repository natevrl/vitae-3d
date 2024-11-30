import React from "react";
import { Bounded } from "../ui/Bounded";
import Image from "next/image";

export default function Hero(): JSX.Element {
  return (
    <Bounded>
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <h1 className="hero-header text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem]">
            Live Gutsy
          </h1>
          <p className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
            Soda Perfected
          </p>
          <p  className="hero-body text-2xl font-normal text-sky-950">3-5g sugar, 9g fiber, 5 delicious flavors</p>
          <button className="main-btn-style hero-button mt-12" aria-label="hero button to shop now">shop now</button>
        </div>

        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <Image
            src="/assets/all-cans-bunched.png"
            alt="all cans hero img"
            width={400}
            height={400}
          />
          <h2>Try all five flavors</h2>
          <p>
            Our soda is made with real fruit juice and a touch of cane sugar. We
            never use artificial sweeteners or high fructose corn syrup. Try all
            five flavors and find your favorite!
          </p>
        </div>
      </div>
    </Bounded>
  );
}
