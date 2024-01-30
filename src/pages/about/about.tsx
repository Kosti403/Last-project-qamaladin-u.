import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

import styles from "./about.module.css";
import FirstSeparation from "./first-separation/first-separation";
import SecondSeparation from "./secondSeparation/second-separation";

export default function About() {
  return (
    <div className={styles.aboutBackground}>
      <Header />
      <div className={styles.aboutWrapper}>
        <FirstSeparation />
        <SecondSeparation/>
      </div>
      <Footer />
    </div>
  );
}
