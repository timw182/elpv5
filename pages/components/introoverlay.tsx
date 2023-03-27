import React from "react";
import styles from "../../styles/components/introoverlay.module.scss";
const IntroOverlay = () => {
  return (
    <>
      <div className={`${styles.introOverlay} introOverlay`}>
        <div className={styles.top}>
          <div className={`${styles.overlayTop} overlay-top`}></div>
          <div className={`${styles.overlayTop} overlay-top`}></div>
          <div className={`${styles.overlayTop} overlay-top`}></div>
        </div>
        <div className={styles.bottom}>
          <div className={`${styles.overlayBottom} overlay-bottom`}></div>
          <div className={`${styles.overlayBottom} overlay-bottom`}></div>
          <div className={`${styles.overlayBottom} overlay-bottom`}></div>
        </div>
      </div>
    </>
  );
};
export default IntroOverlay;
