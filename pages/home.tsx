import { useEffect, useState } from "react";
import Banner from "./components/banner";
import Cases from "./components/cases";
import IntroOverlay from "./components/introoverlay";
import { gsap } from "gsap";
import { useIsomorphicLayoutEffect } from "@/helpers/helper/IsoMorphicEffect";

const tl = gsap.timeline();

const homeAnimation = (completeAnimation: () => void) => {
  // starter animation
  const tl = gsap.timeline();
  tl.to(".overlay-top", {
    duration: 1.6,
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
      ease: "expo.In",
      delay: -2,
      stagger: { amount: 0.4 },
      onComplete: completeAnimation,
    });
};

const HomePage = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };
  useIsomorphicLayoutEffect(() => {
    homeAnimation(completeAnimation);
  }, []);
  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Banner />
      <Cases />
    </>
  );
};
export default HomePage;
