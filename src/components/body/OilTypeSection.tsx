import styles from "./OilTypeSection.module.css";

function OilTypeSection() {
  return (
    <>
      <table
        className={`w-4/5 m-auto ${styles.hd} bg-white mt-16 oiltypesectioncomp`}
      >
        <tr>
          <td>
            <img src="src/assetsTable/spare.svg" className="float-start me-4" />
            <p className="font-bold mt-1">Оригинальные запчасти</p>
            <span className="text-xs">730 товаров</span>
          </td>
          <td>
            <img
              src="src/assetsTable/noOriginalSpare.svg"
              className="float-start me-4"
            />
            <p className="font-bold mt-1">Неоригинальные запчасти</p>
            <span className="text-xs">278 товаров</span>
          </td>
          <td>
            <img
              src="src/assetsTable/spareVAZ.svg"
              className="float-start me-4"
            />
            <p className="font-bold mt-1">Запчасти ВАЗ, ГАЗ, КАМАЗ</p>
            <span className="text-xs">730 товаров</span>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="src/assetsTable/carPart.svg"
              className="float-start me-4"
            />
            <p className="font-bold mt-1">Кузовые запчасти</p>
            <span className="text-xs">730 товаров</span>
          </td>
          <td>
            <img
              src="src/assetsTable/spareTO.svg"
              className="float-start me-4"
            />
            <p className="font-bold mt-1">Запчасти для ТО</p>
            <span className="text-xs">730 товаров</span>
          </td>
          <td>
            <img
              src="src/assetsTable/carGlass.svg"
              className="float-start me-4"
            />
            <p className="font-bold mt-1">Автостёкла</p>
            <span className="text-xs">730 товаров</span>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="src/assetsTable/motorOil.svg"
              className="float-start me-4"
            />
            <p className="font-bold mt-1">Автомасла</p>
            <span className="text-xs">730 товаров</span>
          </td>
          <td>
            <img
              src="src/assetsTable/autoChemicalGoods.svg"
              className="float-start me-4"
            />
            <p className="font-bold mt-1">Автохимия</p>
            <span className="text-xs">730 товаров</span>
          </td>
          <td>
            <img src="src/assetsTable/disks.svg" className="float-start me-4" />
            <p className="font-bold mt-1">Диски</p>
            <span className="text-xs">730 товаров</span>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="src/assetsTable/battery.svg"
              className="float-start me-4"
            />
            <p className="font-bold mt-1">Аккумуляторы</p>
            <span className="text-xs">730 товаров</span>
          </td>
          <td>
            <img
              src="src/assetsTable/carLamps.svg"
              className="float-start me-4"
            />
            <p className="font-bold mt-1">Автолампы</p>
            <span className="text-xs">730 товаров</span>
          </td>
          <td className="relative p-0">
            <div className={styles.backImage}></div>
            <img
              src="src/assetsTable/provider.svg"
              className="float-start me-4 absolute bottom-6 left-8"
            />
            <p className="font-bold absolute text-white bottom-8 left-24">
              Поставщикам
            </p>
            <img
              src="src/assetsTable/arrowRight.svg"
              className="absolute bottom-3 mt-8 right-4"
            />
          </td>
        </tr>
      </table>

      <div className="m-auto bg-white mt-16 oiltypesectionmob">
        <div className="flex justify-between gap-5 mb-5">
          <div className={styles.tdsize}>
            <img src="src/assetsTable/spare.svg" />
            <p className="font-bold mt-1 mb-2">Оригинальные запчасти</p>
            <p>730 товаров</p>
          </div>
          <div className={styles.tdsize}>
            <img src="src/assetsTable/noOriginalSpare.svg" />
            <p className="font-bold mt-1 mb-2">Неоригинальные запчасти</p>
            <p>278 товаров</p>
          </div>
        </div>
        <div className="flex justify-between gap-5 mb-5">
          <div className={styles.tdsize}>
            <img src="src/assetsTable/spareVAZ.svg" />
            <p className="font-bold mt-1 mb-2">Запчасти ВАЗ, ГАЗ, КАМАЗ</p>
            <p>730 товаров</p>
          </div>
          <div className={styles.tdsize}>
            <img src="src/assetsTable/carPart.svg" />
            <p className="font-bold mt-1 mb-2">Кузовые запчасти</p>
            <p>730 товаров</p>
          </div>
        </div>
        <div className="flex justify-between gap-5 mb-5">
          <div className={styles.tdsize}>
            <img src="src/assetsTable/spareTO.svg" />
            <p className="font-bold mt-1 mb-2">Запчасти для ТО</p>
            <p>730 товаров</p>
          </div>
          <div className={styles.tdsize}>
            <img src="src/assetsTable/disks.svg" />
            <p className="font-bold mt-1 mb-2">Диски</p>
            <p>730 товаров</p>
          </div>
        </div>
        <div className="flex justify-between gap-5 mb-5">
          <div className={styles.tdsize}>
            <img src="src/assetsTable/carGlass.svg" />
            <p className="font-bold mt-1 mb-2">Автостёкла</p>
            <p>730 товаров</p>
          </div>
          <div className={styles.tdsize}>
            <img src="src/assetsTable/battery.svg" />
            <p className="font-bold mt-1 mb-2">Аккумуляторы</p>
            <p>730 товаров</p>
          </div>
        </div>
        <div className="flex justify-between gap-5 mb-5">
          <div className={styles.tdsize}>
            <img src="src/assetsTable/motorOil.svg" />
            <p className="font-bold mt-1 mb-2">Автомасла</p>
            <p>730 товаров</p>
          </div>
          <div className={styles.tdsize}>
            <img src="src/assetsTable/carLamps.svg" />
            <p className="font-bold mt-1 mb-2">Автолампы</p>
            <p>730 товаров</p>
          </div>
        </div>
        <div className="flex justify-between gap-5 mb-5">
          <div className={styles.tdsize}>
            <img src="src/assetsTable/autoChemicalGoods.svg" />
            <p className="font-bold mt-1 mb-2">Автохимия</p>
            <p>730 товаров</p>
          </div>
          <div className={`${styles.tdsize} relative p-0`}>
            <div className={styles.backImage}></div>
            <img
              src="src/assetsTable/provider.svg"
              className="float-start me-4 absolute top-6 left-8"
            />
            <p className="font-bold absolute w-1/3 text-white top-24 left-4">
              Поставщикам
            </p>
            <img
              src="src/assetsTable/arrowRight.svg"
              className="absolute bottom-3 mt-8 right-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OilTypeSection;
