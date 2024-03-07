import styles from "./OriginalParts.module.css";

function OriginalParts() {
  return (
    <>
      <div className={styles.comp}>
        <div className={`flex ${styles.pad} px-20 py-5`}>
          <img
            src="src/pages/originalParts/assets/mayak.svg"
            className="float-start me-6 h-full"
          />
          <div>
            <h3>Запчасти Маяк</h3>
            <p className="text-black mb-2">Страна: Россия</p>
            <p className="text-black mb-2">
              Сайт производителя:{" "}
              <a href="www.automayak.com" className="text-red-600 block">
                www.automayak.com
              </a>
            </p>
            <p className="text-black">
              Успешный старт торговой марки «Маяк» на российском рынке
              автомобильных аксессуаров даёт компании уверенность, что их работа
              была сделана не зря. Наличие практически всех популярных типов
              ламп и их высокое качество, без сомнения, вплотную приближают
              «Маяк» к уровню продукции всемирно известных производителей
              автомобильных ламп. При этом цены на лампы «Маяк» заметно
              отличаются в сторону доступности для широкого круга автолюбителей
              и профессионалов, ценящих качество и последние достижения в
              области технологий производства автомобильных ламп, но не желающих
              переплачивать за торговые марки, ставшие известными во многом
              благодаря огромным средствам, потраченным на их рекламу. Хорошо
              знакомое русское слово «Маяк» точно отражает суть автомобильной
              лампы, разработанной и произведённой на уровне мировых достижений
              в науке и технике.
            </p>
          </div>
        </div>
        <hr className="mb-8 mt-8" />
        <div className={styles.list}>
          <div className={`bg-white w-4/5 m-auto mb-8`}>
            <div className="flex justify-between w-3/4 ps-5 mb-8">
              <p className="my-grey">Номер</p>
              <p className="my-grey">Наименование</p>
              <p className="my-grey">Наличие на складе</p>
            </div>
            <div className="flex justify-between p-5 border-t-2">
              <p className="text-black pt-2">52120Blister</p>
              <p className="text-black pt-2">
                Лампа накаливания H8 12V 35W Маяк
              </p>
              <p className="text-black pt-2">107 шт.</p>
              <button className="flex px-4 py-2 border border-purple-950 rounded-lg">
                <img src="src/pages/originalParts/assets/cart.svg" />
                Купить
              </button>
            </div>
            <div className="flex justify-between p-5 border-t-2">
              <p className="text-black pt-2">52120Blister</p>
              <p className="text-black pt-2">
                Лампа накаливания H8 12V 35W Маяк
              </p>
              <p className="text-black pt-2">87 шт.</p>
              <button className="flex px-4 py-2 border border-purple-950 rounded-lg">
                <img src="src/pages/originalParts/assets/cart.svg" />
                Купить
              </button>
            </div>
            <div className="flex justify-between p-5 border-t-2">
              <p className="text-black pt-2">52120Blister</p>
              <p className="text-black pt-2">
                Лампа накаливания H8 12V 35W Маяк
              </p>
              <p className="text-black pt-2">168 шт.</p>
              <button className="flex px-4 py-2 border border-purple-950 rounded-lg">
                <img src="src/pages/originalParts/assets/cart.svg" />
                Купить
              </button>
            </div>
            <div className="flex justify-between p-5 border-t-2">
              <p className="text-black pt-2">52120Blister</p>
              <p className="text-black pt-2">
                Лампа накаливания H8 12V 35W Маяк
              </p>
              <p className="text-black pt-2">903 шт.</p>
              <button className="flex px-4 py-2 border border-purple-950 rounded-lg">
                <img src="src/pages/originalParts/assets/cart.svg" />
                Купить
              </button>
            </div>
            <div className="flex justify-between p-5 border-t-2">
              <p className="text-black pt-2">52120Blister</p>
              <p className="text-black pt-2">
                Лампа накаливания H8 12V 35W Маяк
              </p>
              <p className="text-black pt-2">289 шт.</p>
              <button className="flex px-4 py-2 border border-purple-950 rounded-lg">
                <img src="src/pages/originalParts/assets/cart.svg" />
                Купить
              </button>
            </div>
            <div className="flex justify-between p-5 border-t-2">
              <p className="text-black pt-2">52120Blister</p>
              <p className="text-black pt-2">
                Лампа накаливания H8 12V 35W Маяк
              </p>
              <p className="text-black pt-2">7389 шт.</p>
              <button className="flex px-4 py-2 border border-purple-950 rounded-lg">
                <img src="src/pages/originalParts/assets/cart.svg" />
                Купить
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mob}>
        <div className="mb-10 bg-white">
          <img src="src/pages/originalParts/assets/mayak.svg" />
          <div>
            <h3>Запчасти Маяк</h3>
            <p className="text-black mb-2">Страна: Россия</p>
            <p className="text-black mb-2 flex">
              Сайт производителя:{" "}
              <a href="www.automayak.com" className="text-red-600 block ms-4">
                www.automayak.com
              </a>
            </p>
            <p className="text-black">
              Успешный старт торговой марки «Маяк» на российском рынке
              автомобильных аксессуаров даёт компании уверенность, что их работа
              была сделана не зря. Наличие практически всех популярных типов
              ламп и их высокое качество, без сомнения, вплотную приближают
              «Маяк» к уровню продукции всемирно известных производителей
              автомобильных ламп. При этом цены на лампы «Маяк» заметно
              отличаются в сторону доступности для широкого круга автолюбителей
              и профессионалов, ценящих качество и последние достижения в
              области технологий производства автомобильных ламп, но не желающих
              переплачивать за торговые марки, ставшие известными во многом
              благодаря огромным средствам, потраченным на их рекламу. Хорошо
              знакомое русское слово «Маяк» точно отражает суть автомобильной
              лампы, разработанной и произведённой на уровне мировых достижений
              в науке и технике.
            </p>
          </div>
        </div>
        <div className="px-8 py-4 rounded mb-6 bg-white">
          <div className="mb-2">
            <p>Номер</p>
            <p className="text-black">52120Blister</p>
          </div>
          <div className="mb-2">
            <p>Наименование</p>
            <p className="text-black">Лампа накаливания H8 12V 35W Маяк</p>
          </div>
          <div className="mb-2">
            <p>Наличие на складе</p>
            <p className="text-black">107 шт.</p>
          </div>
          <button className="flex px-4 py-2 mt-8 border border-purple-950 rounded-lg">
            <img src="src/pages/originalParts/assets/cart.svg" />
            Купить
          </button>
        </div>
        <div className="px-8 py-4 rounded mb-6 bg-white">
          <div className="mb-2">
            <p>Номер</p>
            <p className="text-black">52120Blister</p>
          </div>
          <div className="mb-2">
            <p>Наименование</p>
            <p className="text-black">Лампа накаливания H8 12V 35W Маяк</p>
          </div>
          <div className="mb-2">
            <p>Наличие на складе</p>
            <p className="text-black">107 шт.</p>
          </div>
          <button className="flex px-4 py-2 mt-8 border border-purple-950 rounded-lg">
            <img src="src/pages/originalParts/assets/cart.svg" />
            Купить
          </button>
        </div>
        <div className="px-8 py-4 rounded mb-6 bg-white">
          <div className="mb-2">
            <p>Номер</p>
            <p className="text-black">52120Blister</p>
          </div>
          <div className="mb-2">
            <p>Наименование</p>
            <p className="text-black">Лампа накаливания H8 12V 35W Маяк</p>
          </div>
          <div className="mb-2">
            <p>Наличие на складе</p>
            <p className="text-black">107 шт.</p>
          </div>
          <button className="flex px-4 py-2 mt-8 border border-purple-950 rounded-lg">
            <img src="src/pages/originalParts/assets/cart.svg" />
            Купить
          </button>
        </div>
        <div className="px-8 py-4 rounded mb-6 bg-white">
          <div className="mb-2">
            <p>Номер</p>
            <p className="text-black">52120Blister</p>
          </div>
          <div className="mb-2">
            <p>Наименование</p>
            <p className="text-black">Лампа накаливания H8 12V 35W Маяк</p>
          </div>
          <div className="mb-2">
            <p>Наличие на складе</p>
            <p className="text-black">107 шт.</p>
          </div>
          <button className="flex px-4 py-2 mt-8 border border-purple-950 rounded-lg">
            <img src="src/pages/originalParts/assets/cart.svg" />
            Купить
          </button>
        </div>
      </div>
    </>
  );
}

export default OriginalParts;
