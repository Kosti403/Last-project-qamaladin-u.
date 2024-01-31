import styles from "./location.module.css";

export default function Location() {
  return (
    <div className={styles.location}>
      <ul className={styles.ulContact}>
        <h1 className={styles.h1}>Location</h1>
        <li className={styles.li}>
          <img src="/src/img/png/pin.png" alt="" />
          <b>Almaty</b>
        </li>
        <li className={styles.li}>
          <img src="/src/img/png/pin.png" alt="" />
          <b>Kazakhstan</b>
        </li>
      </ul>
    </div>
  );
}
