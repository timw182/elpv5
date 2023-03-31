import React from "react";
import styles from "@/styles/components/banner.module.scss";
import Link from "next/link";
import Rightarrow from "@/public/assets/arrowright";

const Banner = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.row}>
          <h2>
            <div className={`${styles.line} line`}>
              <span> Moving your business forward,</span>
            </div>
            <div className={`${styles.line} line`}>
              <span>one shipment at a time.</span>
            </div>
          </h2>
          <div className={styles.btnRow}>
            <Link className={styles.link} href="/about">
              More About Us.
              <Rightarrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
