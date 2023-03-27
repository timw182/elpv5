import React, { useState, useEffect } from "react";
import styles from "@/styles/components/header.module.scss";
import Link from "next/link";
import ArrowUp from "../../public/assets/arrowup";
import { gsap } from "gsap";

let tl = gsap.timeline();

const Header = () => {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    if (menuState.menuOpened === true) {
      //Run open animation
      gsap.to("nav", { css: { display: "block" } });
      gsap.to("body", { css: { overflow: "hidden" } });

      tl.to(".App", {
        duration: 1,
        y: "50vh",
        ease: "expo.inOut",
      }).to(".hamburger-menu", {
        duration: 0.6,
        delay: -1,
        scaleX: 0,
        transformOrigin: "50% 0%",
        ease: "expo.inOut",
      });
    } else {
      // Run closing animation
    }
  }, [menuState.menuOpened]);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={`${styles.row} ${styles.vCenter} ${styles.spaceBetween}`}>
          <div className={styles.logo}>
            <Link href="/">EUROPEAN LOGISTICS PARTNERS</Link>
          </div>
          <div className={styles.navToggle}>
            <div className={`${styles.hamburgerMenu} hamburger-menu`} onClick={() => setMenuState({ menuOpened: true })}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={styles.hamburgerMenuClose} onClick={() => setMenuState({ menuOpened: false })}>
              <ArrowUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
