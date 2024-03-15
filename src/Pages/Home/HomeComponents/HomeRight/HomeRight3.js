import style from "../../HomeComponents/HomeRight/HomeRight.module.scss";
import { useTranslation } from "react-i18next";

import SuperCargoFly from "../../../../Assets/Images/CargoFly.png";

const RightSlide3 = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <div className={style.RightContainer}>
        <h1
          className={`${style.RightTitle} title-xxxlarge55 wheight500 text-justify-ic`}
        >
          {t("HomeRight.Text04")}
        </h1>
        <h3
          className={`${style.RightTitle} text-xxlarge wheight200 text-justify-ic`}
        >
          {t("HomeRight.Text05")}
        </h3>

        <div className={`${style.box1} ${style.Slide3}`}>
          <img
            src={SuperCargoFly}
            alt="cargo fly"
            className={style.cargoFlyimage}
          />
        </div>

        <div className={`${style.box3}`}>
          <p className="text-regular text-justify-ic">
            {t("HomeRight.Text03")}
          </p>
        </div>
      </div>
    </>
  );
};

export default RightSlide3;
