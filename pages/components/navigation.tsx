import React from "react";
import styles from "../../styles/components/navigation.module.scss";
import Link from "next/link";
import { useIsomorphicLayoutEffect } from "@/helpers/IsoMorphicEffect";
import { gsap } from "gsap";
import { useRouter } from "next/router";

const Navigation = () => {

  return (
    <nav className={styles.navCont}>
      <div className={styles.containerNav}>
        <div className={styles.navColumns}>
          <div className={styles.navColumn}>
            <ul className={styles.navLinks}>
              <li>
                <Link className={styles.linkItem} href="/about" >
                  About.
                </Link>
              </li>
              <li>
                <Link className={styles.linkItem} href="/references">
                  References.
                </Link>
              </li>
              <li>
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
