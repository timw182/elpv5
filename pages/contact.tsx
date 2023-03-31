import { useRouter } from "next/router";
import styles from "../styles/components/contact.module.scss";

const ContactPage = () => {
  
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.content}>
            <h1>Drop Us A Message</h1>
            <div className={styles.inputRow}>
              <input className={styles.input} name="inputName" placeholder="Name" />
              <input className={styles.input} name="inputEmail" placeholder="E-mail" />
            </div>
            <textarea rows={20} placeholder="Write us a message.." />
            <button className={styles.btnSend}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
