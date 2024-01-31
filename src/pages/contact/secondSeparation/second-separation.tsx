import styles from "./second-separation.module.css";
export default function SecondSeparation() {
  return (
    <div className={styles.secondSeparation}>
      <div className={styles.GeneralInformation}>
        <div className={styles.name}>Lazykin Konstantin</div>
        <div className={styles.prof}>Frontend developer</div>
      </div>
      <div className={styles.profile}>
        <h1>Profile</h1>
        <p>Genius, philanthropist, playboy, billionaire </p>
      </div>
      <div className={styles.workExperience}>
        <h1>Work Experience</h1>
        <p>
          {" "}
          -- There is no work experience. <br />
          --There are three training projects, for 1 js and two for react js.
          <br />
          -- I am graduating from the University of Fast Professions at
          QAMALADIN UNIVERSITY
        </p>
      </div>
    </div>
  );
}
