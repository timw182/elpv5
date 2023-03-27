import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/components/header.module.scss";
import Link from "next/link";
import ArrowUp from "../../public/assets/up-arrow-circle.svg";
import { gsap } from "gsap";

let tl = gsap.timeline();

const Header = () => {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    if (menuState.menuOpened === true) {
      //Run open animation
      tl.to("nav", { duration: 0, css: { display: "block" } })
        .to("body", { duration: 0, css: { overflow: "hidden" } })
        .to(".App", { duration: 1, y: "50vh", ease: "expo.inOut" })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: 0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#Path_2", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#Line_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", 0.6, {
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
          ease: "expo.inOut",
        })
        .to(".hamburger-menu-close", 0.6, {
          delay: -0.8,
          css: { display: "block" },
        });
    } else {
      // Run closing animation
      tl.to(".App", 1, {
        y: 0,
        ease: "expo.inOut",
      })
        .to("#circle", 0.6, {
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to("#Path_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Path_2", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Line_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to(".hamburger-menu span", 0.6, {
          delay: -0.6,
          scaleX: 1,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to(".hamburger-menu-close", 0, {
          delay: -0.1,
          css: { display: "none" },
        })
        .to("body", 0, { css: { overflow: "auto" } })
        .to("nav", 0, {
          css: { display: "none" },
        });
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
            <div
              className={`${styles.hamburgerMenu} hamburger-menu`}
              onClick={() => setMenuState({ menuOpened: true })}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className={`${styles.hamburgerMenuClose} hamburger-menu-close`}
              onClick={() => setMenuState({ menuOpened: false })}
            >
              <ArrowUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
