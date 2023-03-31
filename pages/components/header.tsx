import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/components/header.module.scss";
import Link from "next/link";
import ArrowUp from "../../public/assets/up-arrow-circle.svg";
import { gsap } from "gsap/dist/gsap";
import { useIsomorphicLayoutEffect } from "@/helpers/IsoMorphicEffect";
import { openMenu, closeMenu } from "@/animations/menuAnimations";
import { useRouter, withRouter } from "next/router";

const Header = (props) => {
  // const router = useRouter();
  // const [menuState, setMenuState] = useState({ menuOpened: false });
 
  // useIsomorphicLayoutEffect(() => {
    
  //   let ctx = gsap.context(() => {
  //     if (menuState.menuOpened === true) {
  //       //Run open animation
  //       openMenu();
  //     } else {
  //       //Run close animation

  //       closeMenu();
  //     }
  //   });
  //   return () => ctx.revert();
  // }, [menuState.menuOpened]);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={`${styles.row} ${styles.vCenter} ${styles.spaceBetween}`}>
          <div className={styles.logo}>
            <Link className={styles.link} href="/">
              EUROPEAN LOGISTICS PARTNERS
            </Link>
          </div>
          <div className={styles.navToggle}>
            <div
              className={`${styles.hamburgerMenu} hamburger-menu`}
              onClick={() => openMenu()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className={`${styles.hamburgerMenuClose} hamburger-menu-close`}
              onClick={() => closeMenu()}
            >
              <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                <g id="Group_1" data-name="Group 1" transform="translate(-152 -439)">
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    y1="14.91"
                    transform="translate(184 463.788)"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M6,9.155,10.949,5"
                    transform="translate(173.051 458.302)"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M10.949,5,15.9,9.155"
                    transform="translate(173.051 458.302)"
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                  <g
                    id="Ellipse_1"
                    data-name="Ellipse 1"
                    transform="translate(152 439)"
                    fill="none"
                    stroke="rgba(0,0,0,0.2)"
                    strokeWidth="2.5"
                  >
                    <circle cx="32" cy="32" r="32" stroke="none" />
                    <circle id="circle" cx="32" cy="32" r="30.75" fill="none" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
