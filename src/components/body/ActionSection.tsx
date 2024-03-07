import styles from "./ActionSection.module.css";

function ActionSection() {
  return (
    <>
      <div className={`${styles.mainaction} actionoilcomp`}>
        <div className={styles.action}></div>
        <div className={styles.actioncontent}>
          <img src="src/assets/oil.svg" className={styles.imgsize} />
          <h1 className={`${styles.actionheader}`}>
            Оригинальные автомасла <br /> со скидкой{" "}
            <span className={styles.spanaction}>15%</span>
          </h1>
          <p className={styles.actionheader2}>
            Акция действует с 1 по 30 июня 2021
          </p>
          <img src="src/assets/arrowLeft.svg" className={styles.arrowleft} />
          <img src="src/assets/arrowRight.svg" className={styles.arrowright} />
          <img src="src/assets/pages.svg" className={styles.pages} />
        </div>
      </div>

      <div className={`${styles.mainaction} actionoilmob`}>
        <div className={styles.actionmob}></div>
        <div className={styles.actioncontent}>
          <img src="src/assets/carparts.svg" className={styles.imgsize} />
          <h3 className={`${styles.actionheadermob}`}>
            Оригинальные автомасла со скидкой{" "}
            <span className={styles.spanactionmob}>15%</span>
          </h3>
          <p className={styles.actionheader2mob}>
            Акция действует с <br /> 1 по 30 июня 2021
          </p>
          <img src="src/assets/arrowLeft.svg" className={styles.arrowleftmob} />
          <img
            src="src/assets/arrowRight.svg"
            className={styles.arrowrightmob}
          />
          <img src="src/assets/pagesmob.svg" className={styles.pagesmob} />
        </div>
      </div>
    </>
  );
}

export default ActionSection;
