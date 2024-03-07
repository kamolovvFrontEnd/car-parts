import styles from "./Menu.module.css";

function Menu({ data } : {data: (bool: boolean) => void}) {
  return (
    <>
      <div className={styles.menu}>
        <button
          className="ms-auto h-8 text-red-600 hover:border-2 border-red-600 pb-1 ps-2 pe-2 animate-bounce"
          onClick={() => data(false)}
        >
          Закрыть
        </button>
        <button className={styles.button}>
          <img src="src/assetsMenu/disk.svg" className="float-start ms-6" />
          <p className="me-10 mt-1">Оригинальные запчасти</p>
        </button>
        <button className={styles.button}>
          <img src="src/assetsMenu/parts.svg" className="float-start ms-6" />
          <p className="me-10 mt-1">Кузовные части</p>
        </button>
        <button className={styles.button}>
          <img src="src/assetsMenu/oil.svg" className="float-start ms-6" />
          <p className="me-10 mt-1">Автомасла</p>
        </button>
        <button className={styles.button}>
          <img
            src="src/assetsMenu/accumulator.svg"
            className="float-start ms-6"
          />
          <p className="me-10 mt-1">Аккумуляторы</p>
        </button>
        <button className={styles.button}>
          <img
            src="src/assetsMenu/unoriginalparts.svg"
            className="float-start ms-6"
          />
          <p className="me-10 mt-1">Неоригинальные запчасти</p>
        </button>
        <button className={styles.button}>
          <img src="src/assetsMenu/toparts.svg" className="float-start ms-6" />
          <p className="me-10 mt-1">Запчасти для ТО</p>
        </button>
        <button className={styles.button}>
          <img src="src/assetsMenu/chemist.svg" className="float-start ms-6" />
          <p className="me-10 mt-1">Автохимия</p>
        </button>
        <button className={styles.button}>
          <img src="src/assetsMenu/lamps.svg" className="float-start ms-6" />
          <p className="me-10 mt-1">Автолампы</p>
        </button>
        {/* <button className={styles.button}>
          <img src="src/assetsMenu/vazparts.svg" className="float-start ms-6" />
          <p className="me-10 mt-1">Запчасти ВАЗ, ГАЗ, КАМАЗ</p>
        </button>
        <button className={styles.button}>
          <img src="src/assetsMenu/styokla.svg" className="float-start ms-6" />
          <p className="me-10 mt-1">Автостёкла</p>
        </button>
        <button className={styles.button}>
          <img src="src/assetsMenu/disks.svg" className="float-start ms-6" />
          <p className="me-10 mt-1">Диски</p>
        </button> */}
      </div>
    </>
  );
}

export default Menu;
