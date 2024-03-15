import React, { useEffect, useState } from "react";
import style from "../HomeComponents/HomeLeft.module.scss";
import Background from "./../../../Assets/Images/background.svg";
import SuperDrone from "./../../../Assets/Images/cargo.png";

const LeftSlide1 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleWheel = (event) => {
      const { deltaY } = event;

      if (deltaY > 0) {
        setScrollPosition(prevPosition => Math.min(prevPosition + 1, 2));
      } else if (deltaY < 0) {
        setScrollPosition(prevPosition => Math.max(prevPosition - 1, 0));
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const mapImage = document.getElementById("mapImage");

    if (scrollPosition === 1) {
      mapImage.classList.add(style.locationOne);
      mapImage.classList.remove(style.locationTwo);
    } else if (scrollPosition === 2) {
      mapImage.classList.remove(style.locationOne);
      mapImage.classList.add(style.locationTwo);
    } else if (scrollPosition === 0) {
      mapImage.classList.remove(style.locationTwo);
      mapImage.classList.remove(style.locationOne);
    }
  }, [scrollPosition]);

  return (
    <div className={style.LeftContainer}>
      <img
        id="mapImage"
        className={style.backgroundImage}
        src={Background}
        alt="background animation"
      />
      <img className={style.cargoImage} src={SuperDrone} alt="cargo" />
    </div>
  );
};

export default LeftSlide1;
