import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <nav className={styles.navFooter}>
        <div>
          <h3>L.K.S</h3>
        </div>
        <div>
          <h1>QAMALADIN UNIVERSITY</h1>
        </div>
        <div className="pngContact">
          <ul>
            <li>instagram</li>
            <li>email</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
