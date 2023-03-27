import React from "react";
import styles from "@/styles/components/banner.module.scss";
import Link from "next/link";
import Rightarrow from "@/public/assets/arrowright";

const Banner = ({title}) => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.row}>
          <h2 className={styles.hazwee}>
            <div className={styles.line}>
              <span ref={title}> Moving your business forward,</span>
            </div>
            <div className={`${styles.line}`}>
              <span className="spanTwo">one shipment at a time.</span>
            </div>
          </h2>
          <div className={styles.btnRow}>
            <Link className={styles.link} href="/">
              More About Us.
              <Rightarrow className={styles.svg} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
