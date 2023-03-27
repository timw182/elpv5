import Head from "next/head";
import { useIsomorphicLayoutEffect } from "@/helpers/helper/IsoMorphicEffect";
import React, { useRef, useEffect } from "react";
import Header from "./components/header";

import { gsap } from "gsap";

export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    // inner height of mobile devices
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  useEffect(() => {
    gsap.to("body", { duration: 0, css: { visibility: "visible" } });
    //animation
    const tl = gsap.timeline();
    tl.to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
      .to(".overlay-bottom", {
        duration: 1.6,
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: { amount: 0.4 },
      })
      .to(".introOverlay", { duration: 0, css: { display: "none" } })
      .to(".imageAni", {
        scale: 1,
        duration: 1.8,
        ease: "expo.inOut",
        delay: -2,
        stagger: { amount: 0.4 },
      });
  }, []);
  return (
    <>
      <Head>
        <title>ELP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      
  
          <Header />

      </main>
    </>
  );
}
