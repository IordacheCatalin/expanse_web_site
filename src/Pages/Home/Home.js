import React, { useEffect, useState, useRef } from "react";
import style from "./Home.module.scss";

import { useTranslation } from "react-i18next";

import HomeLeftSlide1 from "./HomeComponents/HomeLeft.js";
import HomeRightSlide1 from "./HomeComponents/HomeRight/HomeRight.js";
import HomeRightSlide2 from "./HomeComponents/HomeRight/HomeRight2.js";
import HomeRightSlide3 from "./HomeComponents/HomeRight/HomeRight3.js";

// import HomeRightSlide4 from "./HomeComponents/HomeRight/HomeRight4.js";

const HomePage = () => {
  const { t } = useTranslation("global");
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = 3; 
  const [timer, setTimer] = useState(null);

  useEffect(() => {
  
    const handleWheel = (event) => {
      if (event.deltaY > 0) {       
        setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, slideCount - 1));
      } else {       
        setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <React.Fragment>
      <div className={`${style.HomeContainer} ${style.HomePage}`}>
        <div className={`${style.LeftSide} ${style.HomePage}`}>
          <HomeLeftSlide1 />
        </div>        
          {currentSlide === 0 && <div className={`${style.RightSide} ${style.HomePage} ${style.FirstSlide}`}><HomeRightSlide1 /> </div> }
          {currentSlide === 1 && <div className={`${style.RightSide} ${style.HomePage} ${style.SecoundSlide}`}><HomeRightSlide2 /> </div> }
          {currentSlide === 2 && <div className={`${style.RightSide} ${style.HomePage} ${style.ThirdSlide}`}><HomeRightSlide3 /> </div> }
              
      </div>
    </React.Fragment>
  );
};

export default HomePage;