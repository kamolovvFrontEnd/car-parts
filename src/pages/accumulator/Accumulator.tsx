import styles from "./Accumulator.module.css";

function Accumulator() {
  return (
    <>
      <div className={styles.maindiv}>
        <h2 className="font-bold text-2xl mb-8">Каталог аккумуляторов</h2>
        <button className={`${styles.filter}`}>
          <div className="m-auto flex justify-center">
            <img
              src="src/pages/accumulator/assets/filter.svg"
              className="me-3"
            />
            <span className="block text-black font-bold">Фильтры</span>
          </div>
        </button>
        <div className={styles.secondmaindiv}>
          <div className="grid-cols-1 p-4 me-5 bg-white rounded-lg h-full comphidden">
            <div className="border-b-2">
              <div className="flex justify-between">
                <p className="text-black font-bold">Бренд</p>
                <img src="src/pages/accumulator/assets/arrowdown.svg" />
              </div>
              <input
                type="text"
                placeholder="Быстрый поиск"
                className={styles.search}
              />
              <div className="flex flex-col">
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />
                  Bosh <span className="my-grey">(1450)</span>
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />
                  Varta
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />
                  Ac Delco
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />
                  Banner
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />
                  Berga
                </label>
                <p className="my-violet mt-2 mb-4">Показать все</p>
              </div>
            </div>
            <div className="mt-4 mb-4">
              <div className="flex justify-between">
                <p className="text-black font-bold">Емкость батареи, А/ч</p>
                <img src="src/pages/accumulator/assets/arrowdown.svg" />
              </div>
              <div className="flex border-b-2 pb-6">
                <input
                  type="text"
                  placeholder="от 30"
                  className={styles.search2}
                />
                <input
                  type="text"
                  placeholder="до 430"
                  className={styles.search3}
                />
              </div>
            </div>
            <div className="border-b-2 mb-4">
              <div className="flex justify-between">
                <p className="text-black font-bold">Клуммы</p>
                <img src="src/pages/accumulator/assets/arrowdown.svg" />
              </div>
              <div className="flex flex-col">
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />1
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />
                  1/3
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />
                  21 <span className="my-grey">(234)</span>
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />3 (JIS)
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />8
                </label>
                <p className="my-violet mt-2 mb-4">Показать все</p>
              </div>
            </div>
            <div className="border-b-2 mb-4">
              <div className="flex justify-between">
                <p className="text-black font-bold">Крепление аккумулятора</p>
                <img src="src/pages/accumulator/assets/arrowdown.svg" />
              </div>
              <div className="flex flex-col">
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />
                  B00
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />
                  B03
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />
                  B06
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />
                  B09
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />
                  B13
                </label>
                <p className="my-violet mt-2 mb-4">Показать все</p>
              </div>
            </div>
            <div className="border-b-2 mb-4">
              <div className="flex justify-between">
                <p className="text-black font-bold">Напряжение, B</p>
                <img src="src/pages/accumulator/assets/arrowdown.svg" />
              </div>
              <div className="flex flex-col">
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />
                  12
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4 mb-6" />6
                </label>
              </div>
            </div>
            <div className="mt-4 mb-4">
              <div className="flex justify-between">
                <p className="text-black font-bold">Номинальная мощность, Вт</p>
                <img src="src/pages/accumulator/assets/arrowdown.svg" />
              </div>
              <div className="flex border-b-2 pb-6">
                <input
                  type="text"
                  placeholder="от 290"
                  className={styles.search2}
                />
                <input
                  type="text"
                  placeholder="до 2400"
                  className={styles.search3}
                />
              </div>
            </div>
            <div className="border-b-2 mb-4">
              <div className="flex justify-between">
                <p className="text-black font-bold">
                  Расположение полюсных выводов{" "}
                </p>
                <img src="src/pages/accumulator/assets/arrowdown.svg" />
              </div>
              <div className="flex flex-col">
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />0
                  (обратная) <span className="my-grey">(1450)</span>
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />1
                  (прямая)
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />3
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />6
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />9
                </label>
                <p className="my-violet mt-2 mb-4">Показать все</p>
              </div>
            </div>
            <div className="border-b-2 mb-4">
              <div className="flex justify-between">
                <p className="text-black font-bold">Серия</p>
                <img src="src/pages/accumulator/assets/arrowdown.svg" />
              </div>
              <div className="flex flex-col">
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />0
                  (обратная) <span className="my-grey">(1450)</span>
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />1
                  (прямая)
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />3
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />6
                </label>
                <label>
                  <input type="checkbox" name="" className="me-2 mt-4" />9
                </label>
                <p className="my-violet mt-4 mb-4">Показать все</p>
              </div>
            </div>
            <div className="mt-4 mb-4">
              <div className="flex justify-between">
                <p className="text-black font-bold">
                  Ток холодной прокрутки DIN, А
                </p>
                <img src="src/pages/accumulator/assets/arrowdown.svg" />
              </div>
              <div className="flex border-b-2 pb-6">
                <input
                  type="text"
                  placeholder="от 8"
                  className={styles.search2}
                />
                <input
                  type="text"
                  placeholder="до 680"
                  className={styles.search3}
                />
              </div>
            </div>
            <div className="mt-4 mb-4">
              <div className="flex justify-between">
                <p className="text-black font-bold">
                  Ток холодной прокрутки EN, А
                </p>
                <img src="src/pages/accumulator/assets/arrowdown.svg" />
              </div>
              <div className="flex border-b-2 pb-6">
                <input
                  type="text"
                  placeholder="от 0"
                  className={styles.search2}
                />
                <input
                  type="text"
                  placeholder="до 1450"
                  className={styles.search3}
                />
              </div>
            </div>
            <button className={styles.reset}>Сбросить фильтры</button>
          </div>
          <div className="grid-cols-4">
            <div className={`${styles.cards} compgrid`}>
              <div className={styles.card}>
                <img
                  src="src/pages/accumulator/assets/box.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
              <div className={styles.card}>
                <img
                  src="src/pages/accumulator/assets/box2.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
              <div className={styles.card}>
                <img
                  src="src/pages/accumulator/assets/box3.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
              <div className={styles.card}>
                <img
                  src="src/pages/accumulator/assets/box3.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
              <div className={styles.card}>
                <img
                  src="src/pages/accumulator/assets/box.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
              <div className={styles.card}>
                <img
                  src="src/pages/accumulator/assets/box2.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
              <div className={`${styles.card} comphidden`}>
                <img
                  src="src/pages/accumulator/assets/box2.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
              <div className={`${styles.card} comphidden`}>
                <img
                  src="src/pages/accumulator/assets/box3.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
              <div className={`${styles.card} comphidden`}>
                <img
                  src="src/pages/accumulator/assets/box.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
              <div className={`${styles.card} comphidden`}>
                <img
                  src="src/pages/accumulator/assets/box3.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
              <div
                className={`${styles.card} ${styles.comphidden2} comphidden`}
              >
                <img
                  src="src/pages/accumulator/assets/box.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
              <div
                className={`${styles.card} ${styles.comphidden2} comphidden`}
              >
                <img
                  src="src/pages/accumulator/assets/box2.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
              <div
                className={`${styles.card} ${styles.comphidden2} comphidden`}
              >
                <img
                  src="src/pages/accumulator/assets/box3.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
              <div
                className={`${styles.card} ${styles.comphidden2} comphidden`}
              >
                <img
                  src="src/pages/accumulator/assets/box.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
              <div
                className={`${styles.card} ${styles.comphidden2} comphidden`}
              >
                <img
                  src="src/pages/accumulator/assets/box2.svg"
                  className="m-auto"
                />
                <p className="font-bold text-black">Bosh</p>
                <p className="text-black">
                  Батарея аккумуляторная "S4 Silver", 12в 60а/ч
                </p>
                <p>
                  Артикул: <span className={styles.number}>0092S40240</span>
                </p>
                <button className={styles.price}>Цены от 12 739 ₽</button>
              </div>
            </div>
            <div className={`${styles.zeropadding} flex justify-between`}>
              <img
                src="src/pages/accumulator/assets/arrowleft.svg"
                className={styles.page}
              />
              <div>
                <button className={styles.page}>1</button>
                <button className={styles.page}>2</button>
                <button className={styles.page}>3</button>
                <button className={styles.page}>...</button>
                <button className={styles.page}>10</button>
              </div>
              <img
                src="src/pages/accumulator/assets/arrowright.svg"
                className={`${styles.page} ${styles.zeromargin}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accumulator;
