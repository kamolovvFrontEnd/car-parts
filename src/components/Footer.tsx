import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footermob}>
        <div className="flex justify-between">
          <div>
            <h6 className="text-white">Меню компании</h6>
            <p className="mt-4 p">Что такое Oner</p>
            <p className="p">Реквизиты и информация</p>
            <p className="p">Новости</p>
            <p className="p">Вакансии</p>
            <p className="p">Поставщикам</p>
            <p className="p">Контакты</p>
          </div>
          <div>
            <h6 className="text-white">Каталоги</h6>
            <p className="mt-4 p">Оригинальные запчасти</p>
            <p className="p">Неоригинальные запчасти</p>
            <p className="p">Запчасти для ТО</p>
            <p className="p">Автомасла</p>
            <p className="p">Аккумуляторы</p>
            <p className="p">Распродажа</p>
          </div>
          <div>
            <h6 className="text-white">Помощь</h6>
            <p className="mt-4 p">Часто задаваемые вопросы</p>
            <p className="p">Консультация Online</p>
            <p className="p">Оплата заказа</p>
            <p className="p">Доставка заказа</p>
            <p className="p">Возврат товара</p>
            <p className="p">Забыл пароль</p>
          </div>
          <div>
            <h6 className="text-white">Товары и бренды</h6>
            <p className="mt-4 p">Список брендов</p>
            <p className="p">Популярные товары</p>
            <p className="p">Наличие на складах</p>
          </div>
          <div>
            <div className={styles.consultation}>
              <img
                src="src/assetsfooter/message.svg"
                className="me-2 mt-2 w-6 h-6 float-start"
              />
              <h4 className={styles.onlineconsultation}>Консультация Online</h4>
              <p className="p">Задавайте вопросы</p>
            </div>
            <div className="mt-6 flex">
              <div className="h-10 w-5">
                <img
                  src="src/assetsfooter/online.svg"
                  className="float-start me-2"
                />
              </div>
              <h4 className="text-white ms-2">
                Сервис работает в <br /> обычном режиме
              </h4>
            </div>
          </div>
        </div>
        <hr className="mt-10 mb-6 opacity-20" />
        <div className="flex justify-between">
          <p className="text-white mt-2">
            Copyright © ООО «Oner.ru» 2021. All rights reserved.
          </p>
          <div className="flex">
            <span className="text-white me-5 mt-2">Принимаем к оплате</span>
            <img src="src/assetsfooter/visa.svg" />
            <img src="src/assetsfooter/mastercard.svg" className="ms-2 me-2" />
            <img src="src/assetsfooter/mir.svg" />
          </div>
          <div>
            <span className="mt-2 me-16 text-white">Оферта</span>
            <span className="mt-2 text-white">Конфиденциальность</span>
          </div>
        </div>
      </footer>
      <footer className={styles.footercomp}>
        <div className="flx justify-between">
          <div className="flex justify-between mb-4">
            <h6 className="text-white">Меню компании</h6>
            {/* <p className="mt-4">Что такое Oner</p>
            <p>Реквизиты и информация</p>
            <p>Новости</p>
            <p>Вакансии</p>
            <p>Поставщикам</p>
            <p>Контакты</p> */}
            <img src="src/assetsfooter/arrowdown.svg" />
          </div>
          <div className="mb-4">
            <h6 className="text-white flex justify-between">
              Каталоги <img src="src/assetsfooter/arrowup.svg" />
            </h6>
            <p className="mt-4 p">Оригинальные запчасти</p>
            <p className="p">Неоригинальные запчасти</p>
            <p className="p">Запчасти для ТО</p>
            <p className="p">Автомасла</p>
            <p className="p">Аккумуляторы</p>
            <p className="p">Распродажа</p>
          </div>
          <div className="mb-4 flex justify-between">
            <h6 className="text-white">Помощь</h6>
            {/* <p className="mt-4">Часто задаваемые вопросы</p>
            <p>Консультация Online</p>
            <p>Оплата заказа</p>
            <p>Доставка заказа</p>
            <p>Возврат товара</p>
            <p>Забыл пароль</p> */}
            <img src="src/assetsfooter/arrowdown.svg" />
          </div>
          <div className="mb-4 flex justify-between">
            <h6 className="text-white">Товары и бренды</h6>
            {/* <p className="mt-4">Список брендов</p>
            <p>Популярные товары</p>
            <p>Наличие на складах</p> */}
            <img src="src/assetsfooter/arrowdown.svg" />
          </div>
        </div>
        <div className={styles.consultationmob}>
          <img
            src="src/assetsfooter/message.svg"
            className="me-2 mt-2 w-6 h-6 float-start m-auto"
          />
          <h4 className={styles.onlineconsultation}>Консультация Online</h4>
          <p className="p">Задавайте вопросы</p>
        </div>
        <div className="mt-6">
          <div className="flex">
            <img src="src/assetsfooter/online.svg" className="me-2" />
            <h4 className="text-white">Сервис работает в обычном режиме</h4>
          </div>
          <div className={styles.center}>
            <p className="mt-2 me-16 text-white">Оферта</p>
            <p className="mt-2 text-white">Конфиденциальность</p>
          </div>
        </div>
        <hr className="mt-10 mb-6 opacity-20" />
        <div className={styles.center}>
          <p className="text-white me-5 mt-2">Принимаем к оплате</p>
          <div className="flex">
            <img src="src/assetsfooter/visa.svg" />
            <img src="src/assetsfooter/mastercard.svg" className="ms-2 me-2" />
            <img src="src/assetsfooter/mir.svg" />
          </div>
        </div>
        <p className="text-white mt-2">
          Copyright © ООО «Oner.ru» 2021. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
