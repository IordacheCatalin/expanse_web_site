import style from "../../HomeComponents/HomeRight/HomeRight.module.scss";
import { useTranslation } from "react-i18next";

import superLanding from "../../../../Assets/Images/Landing.png";

const RightSlide2 = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <div className={`${style.RightContainer} ${style.Slide2}`}>
        <h1
          className={`${style.RightTitle} title-xxxlarge55 wheight500 text-center-ic`}
        >
          {t("HomeRight.Text06")}
        </h1>
        <h3
          className={`${style.RightTitle} text-xxlarge wheight200 text-center-ic`}
        >
          {t("HomeRight.Text07")}
        </h3>

        <div className={`${style.box1} ${style.Slide2}`}>
          <img
            src={superLanding}
            alt="cargo fly"
            className={style.cargoFlyimage}
          />
        </div>

        <div className={`${style.box3}`}>
          <p className="mt-5 text-regular text-justify-ic">
            {t("HomeRight.Text03")}
          </p>
        </div>
      </div>
    </>
  );
};

export default RightSlide2;
