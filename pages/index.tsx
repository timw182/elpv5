import Head from "next/head";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import AboutPage from "./about";
//components
import Header from "./components/header";
import Navigation from "./components/navigation";

//pages
import HomePage from "./home";
import { useIsomorphicLayoutEffect } from "@/helpers/IsoMorphicEffect";
import { useRouter } from "next/router";

const routes = [
  { path: "/", name: "home", Component: HomePage },
  { path: "/about", name: "about", Component: AboutPage },
];
function debounce(fn: { (): void; apply?: any }, ms: number) {
  let timer: string | number | NodeJS.Timeout | null | undefined;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, function () {});
    }, ms);
  };
}

export default function Home() {
  const [dimensions, setDimensions] = useState({
    height: null,
    width: null,
  });
  useIsomorphicLayoutEffect(() => {
    // prevents flashing
    gsap.to("body", { duration: 0, css: { visibility: "visible" } });
    // inner height of mobile devices
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <main>
      <div className="App">
        <HomePage />
      </div>
    </main>
  );
}
