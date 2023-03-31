import styles from "../styles/components/about.module.scss";


const AboutPage = () => {
  return (
    <>
      <div className={styles.app}>
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.row}>
              <h2>About Us</h2>
              <p>
                European Logistics Partners (ELP) is an entirely neutral and independent customs and forwarding agent,
                located at the Cargo Center of the Luxembourg Airport. The company was founded in 2001 by Theo Weirig
                and has earned since then a solid reputation as being the specialist of handling most sensitive
                consignments (like valuable cars, musical equipment, animals, perishables, etc.). We always accorded
                highest priority to offer a highly professional, flexible and reliable service at one of the most
                important gateways in Europe. Our highly dedicated staff has many years of experience in various fields
                of the transportation industry, always assuring that your requirements are fulfilled to your entire
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutPage;
