import AboutContact from "./about-contact/about-contsct"
import styles from './f-s.module.css'
import Location from "./location-about/location"


export default function FirstSeparation() {
  return (
    <div className={styles.firstSeparation}>
    <div className={styles.faceImg}>
      <img src="/src/img/IMG_3395.JPG" alt="face" />
    </div>
    <AboutContact />
    <Location/>
    </div>
  )
}

