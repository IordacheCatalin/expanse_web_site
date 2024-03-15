import style from "../../HomeComponents/HomeRight/HomeRight.module.scss";
import { useTranslation } from "react-i18next";

import mapPin from "./../../../../Assets/Images/MapPin.png";

const RightSlide1 = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <div className={style.RightContainer}>
        <h1
          className={`${style.Title} title-xxxlarge60 wheight500 text-center-ic`}
        >
          {t("HomeRight.Text01")}
        </h1>
        <h3
          className={`${style.Title} text-xxlarge wheight200 text-center-ic`}
        >
          {t("HomeRight.Text02")}
        </h3>

        <div className={style.box1}>
          <div className="mb-2 title-xllarge">300Km</div>
          <div className={style.borderSpeed}>
            <div className="mt-2 title-xllarge">100Km/h</div>
          </div>
        </div>

        <div className={`${style.box2}`}>
          <div className={style.mapPinContainer}>
            <div className={style.mapPinLeft}>
              <img src={mapPin} className={style.mapPinLeftImg} alt="map pin" />
              <div className="text-xllarge">City 1</div>
            </div>
            <div className={style.mapPinRight}>
              <img src={mapPin} className={style.mapPinRightImg} alt="map pin" />
              <div className="text-xllarge">City 2</div>
            </div>
          </div>
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

export default RightSlide1;
