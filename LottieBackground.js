import React from "react";
import Lottie from "lottie-react";
import animationData from "./public/lottie-background.json";

const LottieBackground = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    >
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};

export default LottieBackground;
