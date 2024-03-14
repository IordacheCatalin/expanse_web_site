import React from "react";
import style from "./Home.module.scss";

import { useTranslation } from "react-i18next";

import HomeLeftSlide1 from "./HomeComponents/HomeLeft.js";
import HomeRightSlide1 from "./HomeComponents/HomeRight.js";

const HomePage = () => {
  const { t } = useTranslation("global");
  return (
    <React.Fragment>
      <div className={`${style.HomeContainer} ${style.HomePage}`}>
        <div className={`${style.LeftSide} ${style.HomePage}`}>
          <HomeLeftSlide1 />
        </div>
        <div className={`${style.RightSide} ${style.HomePage}`}>
          <HomeRightSlide1 />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
