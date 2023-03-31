import styles from "../styles/components/about.module.scss";
import { useRouter, withRouter } from "next/router";

const AboutPage = () => {
  const router = useRouter();
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.row}>
          <h2>
            <div className={styles.line}>
              <span>About Us</span>
            </div>
          </h2>
          <div className={styles.btnRow}></div>
        </div>
      </div>
    </section>
  );
};
export default withRouter(AboutPage);
