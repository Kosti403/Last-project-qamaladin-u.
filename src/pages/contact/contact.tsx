import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

import styles from "./contact.module.css";
import FirstSeparation from "./first-separation/first-separation";
import SecondSeparation from "./secondSeparation/second-separation";

export default function Contact() {
  return (
    <div className={styles.aboutBackground}>
      <Header />
      <div className={styles.aboutWrapper}>
        <FirstSeparation />
        <SecondSeparation />
      </div>
      <Footer />
    </div>
  );
}
