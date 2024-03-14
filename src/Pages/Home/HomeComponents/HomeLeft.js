import React, { useEffect } from "react";
import style from "../HomeComponents/HomeLeft.module.scss";

import Background from "./../../../Assets/Images/background.svg";

const LeftSlide1 = () => {
    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
      console.log(`Scroll`)
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Initial scaling on page load
        document.getElementById('background').style.transform = 'scale(10)';

        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
    <div className={style.LeftContainer}>
      <img
        id="background"
        className={style.backgroundImage}
        src={Background}
        alt="background animation"
      />
    </div>
  );
};

export default LeftSlide1;
