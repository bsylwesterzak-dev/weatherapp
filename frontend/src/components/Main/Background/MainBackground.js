import React from "react";
import { useSelector } from "react-redux";
import Background from "../../../styledComponents/Background";

const MainBackground = (props) => {
  const isSidebar = useSelector(
    ({ appStatesReducer }) => appStatesReducer.isSidebar
  );
  // set background blur
  const blur = () => {
    if (isSidebar === true) {
      return "blur(20px)";
    } else {
      return null;
    }
  };
  // set background image
  const main = useSelector(
    ({ weatherDataReducer }) => weatherDataReducer.data.main
  );
  const changeBackgroundImage = () => {
    switch (main) {
      case "Clouds":
        return "clouds.jpg";
      case "Clear":
        return "clear_sky.jpg";
      case "Snow":
        return "snow.jpg";
      case "Rain":
        return "rain2.jpg";
      case "Drizzle":
        return "drizzle.jpg";
      case "Thunderstorm":
        return "thunderstorm.jpg";
      case "Mist":
        return "mist.jpg";
      case "Smoke":
        return "Smoke.jpg";
      case "Haze":
        return "Haze.jpg";
      case "Fog":
        return "Fog.jpg";
      case "Sand":
        return "Sand.jpg";
      case "Ash":
        return "Ash.jpg";
      case "Squall":
        return "Squall.jpg";
      case "Tornado":
        return "tornado.jpg";
      case "Dust":
        return "Dust.jpg";
      default:
        return "test.jpg" 
    }
  };
  return (
    <Background
      blur={blur}
      bgPosition="top"
      url={process.env.PUBLIC_URL + changeBackgroundImage()}
      mainbackground
    >
      {props.children}
    </Background>
  );
};

export default MainBackground;
