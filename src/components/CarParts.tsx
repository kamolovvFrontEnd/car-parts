import styles from "./CarParts.module.css";

function CarParts() {
  return (
    <div className="p-5 m-auto mt-16">
      <div className="mb-12">
        <div className="flex justify-between mb-7">
          <h3 className={styles.h3}>Автомасла</h3>
          <button className={styles.alloil}>
            Все автомасла
            <img src="src/cardsvg/arrowRight.svg" className="ms-2 mt-0.5" />
          </button>
        </div>
        <div className="scroll">
          <div className={`flex justify-around ${styles.scrollsize}`}>
            <img src="src/cardsvg/oil.svg" className="mr-3" />
            <div className={styles.card}>
              <img src="src/cardsvg/motor.svg" className="mb-4 m-auto" />
              <div className="flex justify-between mb-3">
                <p>Артикул: 153789</p>
                <img src="src/cardsvg/stars.svg" />
              </div>
              <p className="font-bold mb-4">
                Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
              </p>
              <div className="flex justify-between">
                <div className="flex">
                  <p className="text-3xl  text-black font-bold">2 334 ₽</p>
                  <p className={styles.discount}>2 864 ₽</p>
                </div>
                <img src="src/cardsvg/cart.svg" className={styles.cart} />
              </div>
            </div>
            <div className={styles.card}>
              <img src="src/cardsvg/cylinder.svg" className="mb-4 m-auto" />
              <div className="flex justify-between mb-3">
                <p>Артикул: 153789</p>
                <img src="src/cardsvg/stars.svg" />
              </div>
              <p className="font-bold mb-4">
                Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
              </p>
              <div className="flex justify-between">
                <div className="flex">
                  <p className="text-3xl  text-black font-bold">2 334 ₽</p>
                  <p className={styles.discount}>2 864 ₽</p>
                </div>
                <img src="src/cardsvg/cart.svg" className={styles.cart} />
              </div>
            </div>
            <div className={styles.card}>
              <img src="src/cardsvg/disks.svg" className="mb-4 m-auto" />
              <div className="flex justify-between mb-3">
                <p>Артикул: 153789</p>
                <img src="src/cardsvg/stars.svg" />
              </div>
              <p className="font-bold mb-4">
                Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
              </p>
              <div className="flex justify-between">
                <div className="flex">
                  <p className="text-3xl  text-black font-bold">2 334 ₽</p>
                  <p className={styles.discount}>2 864 ₽</p>
                </div>
                <img src="src/cardsvg/cart.svg" className={styles.cart} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll2">
        <div className="flex justify-between">
          <div className={styles.maindiv}>
            <div className={styles.background}></div>
            <h1 className="absolute top-0 left-4">
              Моторные масла <br /> Genesis
            </h1>
            <button className={styles.button}>
              <p className="mt-0.5 text-white">Перейти</p>
              <img src="src/cardsvg/arrowWhite.svg" className="ms-2 mt-0.5" />
            </button>
            <img
              src="src/cardsvg/oils.svg"
              className="absolute bottom-0 left-2/4 w-2/5"
            />
          </div>
          <div className={styles.maindiv}>
            <div className={styles.background}></div>
            <h1 className="absolute top-0 left-4">
              Шины зимные <br /> дешевле
            </h1>
            <button className={styles.button}>
              <p className="mt-0.5 text-white">Выбрать</p>
              <img src="src/cardsvg/arrowWhite.svg" className="ms-2 mt-0.5" />
            </button>
            <img
              src="src/cardsvg/cylinder2.svg"
              className="absolute bottom-0 left-1/2 w-1/2"
            />
          </div>
          <div className={styles.maindiv}>
            <div className={styles.background}></div>
            <h1 className="absolute top-0 left-4">
              Запчасти для <br /> ТО
            </h1>
            <button className={styles.button}>
              <p className="mt-0.5 text-white">Смотреть</p>
              <img src="src/cardsvg/arrowWhite.svg" className="ms-2 mt-0.5" />
            </button>
            <img
              src="src/cardsvg/motor2.svg"
              className="absolute bottom-0 left-1/2 w-1/2"
            />
          </div>
        </div>
      </div>
      <div className="mb-12 mt-10">
        <h3 className={`${styles.h3} mb-5 ms-10`}>Рекомендуем</h3>
        <div className="scroll">
          <div className={`flex justify-around ${styles.scrollsize}`}>
            <div className={styles.card}>
              <img src="src/cardsvg/oneoil.svg" className="mb-10 m-auto" />
              <div className="flex justify-between mb-3">
                <span>Артикул: 153789</span>
                <img src="src/cardsvg/stars.svg" />
              </div>
              <p className="font-bold mb-4">
                Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
              </p>
              <div className="flex justify-between">
                <div className="flex">
                  <p className="text-3xl  text-black font-bold">2 334 ₽</p>
                  <p className={styles.discount}>2 864 ₽</p>
                </div>
                <img src="src/cardsvg/cart.svg" className={styles.cart} />
              </div>
            </div>
            <div className={styles.card}>
              <img src="src/cardsvg/motor.svg" className="mb-4 m-auto" />
              <div className="flex justify-between mb-3">
                <p>Артикул: 153789</p>
                <img src="src/cardsvg/stars.svg" />
              </div>
              <p className="font-bold mb-4">
                Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
              </p>
              <div className="flex justify-between">
                <div className="flex">
                  <p className="text-3xl  text-black font-bold">2 334 ₽</p>
                  <p className={styles.discount}>2 864 ₽</p>
                </div>
                <img src="src/cardsvg/cart.svg" className={styles.cart} />
              </div>
            </div>
            <div className={styles.card}>
              <img src="src/cardsvg/cylinder.svg" className="mb-4 m-auto" />
              <div className="flex justify-between mb-3">
                <p>Артикул: 153789</p>
                <img src="src/cardsvg/stars.svg" />
              </div>
              <p className="font-bold mb-4">
                Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
              </p>
              <div className="flex justify-between">
                <div className="flex">
                  <p className="text-3xl  text-black font-bold">2 334 ₽</p>
                  <p className={styles.discount}>2 864 ₽</p>
                </div>
                <img src="src/cardsvg/cart.svg" className={styles.cart} />
              </div>
            </div>
            <div className={styles.card}>
              <img src="src/cardsvg/disks.svg" className="mb-4 m-auto" />
              <div className="flex justify-between mb-3">
                <p>Артикул: 153789</p>
                <img src="src/cardsvg/stars.svg" />
              </div>
              <p className="font-bold mb-4">
                Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
              </p>
              <div className="flex justify-between">
                <div className="flex">
                  <p className="text-3xl  text-black font-bold">2 334 ₽</p>
                  <p className={styles.discount}>2 864 ₽</p>
                </div>
                <img src="src/cardsvg/cart.svg" className={styles.cart} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <h3 className={`${styles.h3} mb-5 ms-10`}>Часто продаваемые</h3>
        <div className="scroll">
          <div className={`flex justify-around ${styles.scrollsize}`}>
            <div className={styles.card}>
              <img src="src/cardsvg/oneoil.svg" className="mb-10 m-auto" />
              <div className="flex justify-between mb-3">
                <span>Артикул: 153789</span>
                <img src="src/cardsvg/stars.svg" />
              </div>
              <p className="font-bold mb-4">
                Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
              </p>
              <div className="flex justify-between">
                <div className="flex">
                  <p className="text-3xl  text-black font-bold">2 334 ₽</p>
                  <p className={styles.discount}>2 864 ₽</p>
                </div>
                <img src="src/cardsvg/cart.svg" className={styles.cart} />
              </div>
            </div>
            <div className={styles.card}>
              <img src="src/cardsvg/motor.svg" className="mb-4 m-auto" />
              <div className="flex justify-between mb-3">
                <p>Артикул: 153789</p>
                <img src="src/cardsvg/stars.svg" />
              </div>
              <p className="font-bold mb-4">
                Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
              </p>
              <div className="flex justify-between">
                <div className="flex">
                  <p className="text-3xl  text-black font-bold">2 334 ₽</p>
                  <p className={styles.discount}>2 864 ₽</p>
                </div>
                <img src="src/cardsvg/cart.svg" className={styles.cart} />
              </div>
            </div>
            <div className={styles.card}>
              <img src="src/cardsvg/cylinder.svg" className="mb-4 m-auto" />
              <div className="flex justify-between mb-3">
                <p>Артикул: 153789</p>
                <img src="src/cardsvg/stars.svg" />
              </div>
              <p className="font-bold mb-4">
                Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
              </p>
              <div className="flex justify-between">
                <div className="flex">
                  <p className="text-3xl  text-black font-bold">2 334 ₽</p>
                  <p className={styles.discount}>2 864 ₽</p>
                </div>
                <img src="src/cardsvg/cart.svg" className={styles.cart} />
              </div>
            </div>
            <div className={styles.card}>
              <img src="src/cardsvg/disks.svg" className="mb-4 m-auto" />
              <div className="flex justify-between mb-3">
                <p>Артикул: 153789</p>
                <img src="src/cardsvg/stars.svg" />
              </div>
              <p className="font-bold mb-4">
                Mobil SUPER 3000 X1 5W-40, 1 л. Масло моторное.
              </p>
              <div className="flex justify-between">
                <div className="flex">
                  <p className="text-3xl  text-black font-bold">2 334 ₽</p>
                  <p className={styles.discount}>2 864 ₽</p>
                </div>
                <img src="src/cardsvg/cart.svg" className={styles.cart} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarParts;
