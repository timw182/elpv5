import { useState, useLayoutEffect, useEffect } from "react";
import Banner from "./components/banner";
import Cases from "./components/cases";
import IntroOverlay from "./components/introoverlay";
import { gsap } from "gsap/dist/gsap";
import { useIsomorphicLayoutEffect } from "@/helpers/IsoMorphicEffect";

const homeAnimation = (completeAnimation: () => void) => {
  // starter animation
  const tl = gsap.timeline();
  tl.from(".line span", {
    opacity: 0,
    duration: 0.5,
    skewX: 7,
    stagger: { amount: 0.4 },
  })
    .to(".overlay-top", {
      duration: 1.1,
      height: 0,
      ease: "expo.inOut",
      stagger: { amount: 0.4 },
    })
    .to(".overlay-bottom", {
      duration: 1.1,
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: { amount: 0.4 },
    })
    .to(".introOverlay", { duration: 0, css: { display: "none" } })
    .to(".imageAni", {
      scale: 1,
      duration: 1.8,
      ease: "expo.in",
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
    let ctx = gsap.context(() => {
      homeAnimation(completeAnimation);
    });
    return () => ctx.revert(); // cleanup
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
