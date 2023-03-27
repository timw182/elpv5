import React from "react";
import styles from "../../styles/components/navigation.module.scss";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className={styles.navCont}>
      <div className={styles.containerNav}>
        <div className={styles.navColumns}>
          <div className={styles.navColumn}>
            <div className={styles.navLabel}>Menu</div>
            <ul className={styles.navLinks}>
              <li>
                <Link className={styles.linkItem} href="/about">
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
          <div className={styles.navColumn}>
            <div className={styles.navLabel}>Contact</div>
            <div className={styles.navInfos}>
              <ul className={styles.navInfo}>
                <li className={styles.navInfoLabel}>Email</li>
                <li>
                  <Link className={styles.linkItem} href="/">
                    Get In Touch with Us.
                  </Link>
                </li>
                <li>
                  <Link className={styles.linkItem} href="/t">
                    Placeholder.
                  </Link>
                </li>
              </ul>
            </div>
            <ul className={styles.navInfo}>
              <li className={styles.navInfoLabel}>Headquarters</li>
              <li> CargoCenter East</li>
              <li> L-1655 Senningerberg</li>
              <li> Luxembourg</li>
            </ul>
            <ul className={styles.navInfo}>
              <li className={styles.navInfoLabel}>Email</li>
              <li> +352 26 34 251</li>
            </ul>
            <ul className={styles.navInfo}>
              <li className={styles.navInfoLabel}>Legal</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
