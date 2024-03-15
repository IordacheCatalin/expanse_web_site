import React, { useEffect, useRef } from "react";
import style from "../HomeComponents/HomeLeft.module.scss";
import Background from "./../../../Assets/Images/background.svg";

import SuperDrone from "./../../../Assets/Images/cargo.png";

const LeftSlide1 = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Function to handle wheel event
    const handleWheel = (event) => {
      const scaleDelta = event.deltaY * 0.01; // Adjust the scaling factor as needed
      const currentScale = parseFloat(
        backgroundRef.current.style.transform
          .replace("scale(", "")
          .replace(")", "")
      );
      const newScale = Math.max(0.1, currentScale + scaleDelta); // Ensure the scale doesn't go below 0.1
      backgroundRef.current.style.transition = "transform 0.3s ease"; // Adjust transition duration and timing function as needed
      backgroundRef.current.style.transform = `scale(${newScale})`;
      console.log("mouse move");
    };

    // Attach wheel event listener
    window.addEventListener("wheel", handleWheel);

    // Clean up event listener
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className={style.LeftContainer}>
      <img
        ref={backgroundRef}
        className={style.backgroundImage}
        src={Background}
        alt="background animation"
      />
      <img  className={style.cargoImage} src={SuperDrone} alt="cargo" />
    </div>
  );
};

export default LeftSlide1;
