"use client";

import { Bounded } from "../ui/Bounded";
import Image from "next/image";
import { TextSplitter } from "../ui/TextSplitter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero(): JSX.Element {
  useGSAP(() => {
    const introTl = gsap.timeline();

    introTl
      .set(".hero", { opacity: 1 })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        ease: "power4.in",
        delay: 0.2,
        stagger: 1,
      })
      .from(
        ".hero-subheading",
        {
          opacity: 0,
          y: 30,
        },
        "+=0.5",
      )
      .from(".hero-body", {
        opacity: 0,
        y: 10,
      })
      .from(".hero-button", {
        opacity: 0,
        y: 10,
        duration: 0.6,
      });
  });

  return (
    <Bounded className="hero opacity-0">
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <h1 className="hero-header text-center text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem]">
            <TextSplitter
              text="Live gutsy"
              wordDisplayStyle="block"
              className="hero-header-word"
            />
          </h1>
          <p className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
            Soda Perfected
          </p>
          <p className="hero-body text-2xl font-normal text-sky-950">
            3-5g sugar, 9g fiber, 5 delicious flavors
          </p>
          <button
            className="main-btn-style hero-button mt-12"
            aria-label="hero button to shop now"
          >
            shop now
          </button>
        </div>

        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <Image
            src="/assets/all-cans-bunched.png"
            alt="all cans hero img"
            width={400}
            height={400}
            className="w-full md:hidden"
          />
          <div>
            <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
              <TextSplitter text="Try all five flavors" />
            </h2>
            <p className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
              Our soda is made with real fruit juice and a touch of cane sugar.
              We never use artificial sweeteners or high fructose corn syrup.
              Try all five flavors and find your favorite!
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
