import styles from "./OrderOlacement.module.css";

function OrderPlacement() {
  return (
    <div className={styles.container}>
      <h2 className="font-bold text-2xl mb-4">Оформление заказа</h2>
      <div className={styles.order}>
        <div>
          <div className="px-10 py-6 rounded bg-white mb-4">
            <button className={styles.buttonstyle1}>
              <span className={styles.buttonspan}>Физическое лицо</span>
            </button>
            <button className={styles.buttonstyle}>Юридическое лицо</button>
          </div>
          <div className="px-10 py-5 bg-white rounded noflex flex flex-col">
            <h4 className="text-xl mb-4">Данные получателя</h4>
            <input
              placeholder="Фамилия и имя"
              required
              className="p-4 py-2 border-2 mb-4 rounded w-2/5"
            />
            <input
              placeholder="Телефон"
              required
              className="p-4 py-2 border-2 mb-4 rounded w-2/5"
            />
            <input
              placeholder="Электронная почта"
              required
              className="p-4 py-2 border-2 mb-4 rounded w-2/5"
            />
          </div>
          <div className="px-10 py-5 bg-white rounded mt-4 mb-4">
            <h4 className="text-xl mb-4">Способ доставки</h4>
            <div className="noflex flex gap-4">
              <div className="p-4 border-2 rounded h-auto">
                <label className="flex">
                  <input
                    type="radio"
                    className={styles.radiostyle}
                    value="1"
                    name="a"
                  />
                  <p className="text-black">
                    Курьерская доставка{" "}
                    <span className="block my-grey">
                      СДЭК, Boxberry, Деловые Линии — от 349 руб.
                    </span>
                  </p>
                </label>
              </div>
              <div className="p-4 border-2 margin rounded h-auto">
                <label className="flex">
                  <input
                    type="radio"
                    className={styles.radiostyle}
                    value="2"
                    name="a"
                  />
                  <p className="text-black">
                    Самовывоз из магазина{" "}
                    <span className="block my-grey">
                      C29.04.2021 (четверг) — бесплатно
                    </span>
                  </p>
                </label>
              </div>
              <div className="p-4 border-2 rounded h-auto">
                <label className="flex">
                  <input
                    type="radio"
                    className={styles.radiostyle}
                    value="3"
                    name="a"
                  />
                  <p className="text-black">
                    Самовывоз из пункта выдачи{" "}
                    <span className="block my-grey">
                      СДЭК, Boxberry — от 0 руб.
                    </span>
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div className="px-10 py-5 bg-white rounded noflex flex flex-col">
            <h4 className="text-xl mb-4">Адрес получателя</h4>
            <input
              placeholder="Город"
              required
              className="p-4 py-2 border-2 mb-4 rounded w-2/5"
            />
            <input
              placeholder="Улица"
              required
              className="p-4 py-2 border-2 mb-4 rounded w-2/5"
            />
            <div className="flex w-2/5 mb-4">
              <input
                placeholder="Дом"
                required
                className="p-1 border-2 rounded w-2/5 me-1"
              />
              <input
                placeholder="Корпус"
                required
                className="p-4 py-2 border-2 rounded w-2/5 me-1"
              />
              <input
                placeholder="Квартира"
                required
                className="p-4 py-2 border-2  rounded w-2/5"
              />
            </div>
            <input
              placeholder="Коментарии к доставке"
              required
              className="p-4 py-2 border-2 mb-4 rounded w-2/5"
            />
          </div>
          <div className="px-10 py-5 bg-white rounded mt-4 mb-4">
            <h4 className="text-xl mb-4">Способ доставки</h4>
            <div className="gap-4">
              <div className="p-4 border-2 rounded h-auto w-full lg:w-3/5 mb-3">
                <label className="flex justify-between ">
                  <div className="flex w-1/2">
                    <img
                      src="src/pages/orderplacement/assets/card.svg"
                      className="me-4"
                    />
                    <span className="text-black block">Оплата картой</span>
                  </div>
                  <input
                    type="radio"
                    className={styles.radiostyle2}
                    value="1"
                    name="a"
                  />
                </label>
              </div>
              <div className="p-4 border-2 rounded h-auto w-full lg:w-3/5 mb-3">
                <label className="flex justify-between ">
                  <div className="flex w-1/2">
                    <img
                      src="src/pages/orderplacement/assets/cash.svg"
                      className="me-4"
                    />
                    <span className="text-black block">
                      Безналичная оплата по счету
                    </span>
                  </div>
                  <input
                    type="radio"
                    className={styles.radiostyle2}
                    value="1"
                    name="a"
                  />
                </label>
              </div>
              <div className="p-4 border-2 rounded h-auto w-full lg:w-3/5 mb-3">
                <label className="flex justify-between">
                  <div className="flex w-1/2">
                    <img
                      src="src/pages/orderplacement/assets/courier.svg"
                      className="me-4"
                    />
                    <span className="text-black block">Оплата курьеру</span>
                  </div>
                  <input
                    type="radio"
                    className={styles.radiostyle2}
                    value="1"
                    name="a"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.total}>
          <p className="text-black font-bold p-3 px-6">Ваш заказ</p>
          <hr />
          <div className="flex justify-between p-3 px-6">
            <p className="text-black font-bold">Товары</p>
            <p className="text-black font-bold">6</p>
          </div>
          <div className="flex justify-between px-6">
            <p className="text-black font-bold">Доставка</p>
            <p className="text-black font-bold">870 ₽</p>
          </div>
          <div className={styles.searchcontainer}>
            <input
              type="text"
              placeholder="Промокод"
              className={styles.search}
            />
            <img
              src="src/pages/orderplacement/assets/arrowRight.svg"
              className="h-4/5 m-auto cursor-pointer"
            />
          </div>
          <hr className="mb-4" />
          <div className="flex flex-col">
            <div className="flex justify-between p-3 px-6">
              <p className="text-black font-bold">Итого</p>
              <p className="text-black font-bold text-xl">23 870 ₽</p>
            </div>
            <button className={styles.toorder}>Оформление заказа</button>
            <p className="w-4/5 m-auto text-xs mt-3 p">
              Цена зависит от типа клиента. После регистрации возможна ее
              корректировка.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPlacement;
