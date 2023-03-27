import React from "react";
import styles from "@/styles/components/cases.module.scss";
import Rightarrow from "@/public/assets/arrowright";
import Leftarrow from "@/public/assets/arrowleft";
import Link from "next/link";
import Image from "next/image";
import PlaneImg from "../../public/plane2.jpeg";
import CustomsImg from "../../public/customs.png";
import TruckImg from "../../public/truck.png";

const caseStudies = [
  { id: 1, subTitle: "Airfreight", content: "Lorem Ipsum", img: PlaneImg },
  { id: 2, subTitle: "Trucking", content: "Lorem Ipsum", img: TruckImg },
  { id: 3, subTitle: "Customs", content: "Lorem Ipsum", img: CustomsImg },
];
const Cases = () => {
  return (
    <section className={styles.cases}>
      <div className={styles.containerFluid}>
        <div className={styles.casesNavigation}>
          <div className={`${styles.casesArrow} ${styles.prev} ${styles.disabled}`}>
            <Leftarrow className={styles.svg} />
          </div>
          <div className={`${styles.casesArrow} ${styles.next}`}>
            <Rightarrow className={styles.svg} />
          </div>
        </div>
        <div className={styles.row}>
          {caseStudies.map((caseItem) => (
            <div className={styles.case} key={caseItem.id}>
              <div className={styles.caseDetails}>
                <div className={`${styles.caseImage}`}>
                  <Image className={` ${styles.image} imageAni`} src={caseItem.img} alt="planeimage" />
                </div>
                <span>{caseItem.subTitle}</span>
                <h2>{caseItem.content}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
