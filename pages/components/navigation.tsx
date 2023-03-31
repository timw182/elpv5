import React from "react";
import styles from "../../styles/components/navigation.module.scss";
import Link from "next/link";
import { useIsomorphicLayoutEffect } from "@/helpers/IsoMorphicEffect";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import { openMenu, closeMenu } from "@/animations/menuAnimations";

const Navigation = () => {
  const handleclick = () => {
    closeMenu();
  };

  return (
    <nav className={styles.navCont}>
      <div className={styles.containerNav}>
        <div className={styles.navColumns}>
          <div className={styles.navColumn}>
            <div className={styles.navLabel}>Menu</div>
            <ul className={styles.navLinks}>
              <li onClick={closeMenu} onClick={handleclick}>
                <Link className={styles.linkItem} href="/about">
                  About.
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link className={styles.linkItem} href="/references">
                  References.
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link className={styles.linkItem} href="/contact">
                  Contact.
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.navColumn}>
            <div className={styles.navLabel}>Menu</div>
            <ul className={styles.navLinks}>
              <li onClick={closeMenu}>
                <Link className={styles.linkItem} href="/about" onClick={handleclick}>
                  About.
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link className={styles.linkItem} href="/references">
                  References.
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link className={styles.linkItem} href="/contact">
                  Contact.
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
