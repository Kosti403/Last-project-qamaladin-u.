import styles from "./about-contact.module.css";

export default function AboutContact() {
  return (
    <div className={styles.contact}>
      <ul className={styles.ulContact}>
        <h1 className={styles.h1}>My contacts</h1>
        <li className={styles.li}>
          <img src="/src/img/png/phone.png" alt="phone" />
          <b>8-708-65-95-598</b>
        </li>
        <li className={styles.li}>
          <img
            src="/src/img/png/sleeping-area.png"
            alt=""
            style={{ width: "40px", height: "32px" }}
          />
          <b>anim.myay@gmail.com</b>
        </li>
        <li className={styles.li}>
          <img
            src="/src/img/png/1658587781instagram-logo-png-white.png"
            alt=""
            style={{ width: "37px", height: "32px" }}
          />
          <b> instagram.com/zuck/</b>
        </li>
      </ul>
    </div>
  );
}
