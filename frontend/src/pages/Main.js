import React, { useEffect, useState } from "react";
import ApiManager from '../utilities/ApiManager';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "../Themes/Themes";
import MainBackground from "../components/Main/Background/MainBackground";
import Loading from "../components/Main/Loading/Loading";
import LeftMainInfo from "../components/Main/Left/LeftMainInfo";
import RightMainInfo from "../components/Main/Right/RightMainInfo";
import FlexWrapper from "../styledComponents/FlexWrapper";
import MenuSide from "../components/Main/Menu/MenuSide";
import BottomWeather from "../components/Main/BottomWeather/BottomWeather";
import { GET_CURRENT_WEATHER } from "../actions/index";
import { ToastContainer } from 'react-toastify';
import Navbar from "../components/Main/Navbar/Navbar";
import Widgets from "../components/Main/Widgets/Widgets";
import Cookies from "js-cookie";
import Alert from "../components/Main/Alert/Alert";
require('dotenv').config();


const Main = () => {
  const isGuest = useSelector(
    ({ appStatesReducer }) => appStatesReducer.isGuest
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        let data;
        if(!isGuest){
          const res = await ApiManager.call('checkAuth',{
            jwt: Cookies.get("jwt")
        })
           data = await res.json();
           
        } else {
          data = {isAuth: true}
        }
        
        if (data.isAuth === true) {
          let cords;
          if (Cookies.get("lon") && Cookies.get("lat")) {
            cords = {
              lat: Cookies.get("lat"),
              lon: Cookies.get("lon"),
            };
          } else {
            cords = {
              lat: "52,2297",
              lon: "21,0122",
            };
          }
               
          
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${cords.lat}&lon=${cords.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
          );
          const data = await res.json();
          console.log(data)
          //START
          let rain = 0;
          if (data.rain !== undefined) {
            rain = data.rain["1h"];
          }
          dispatch(
            GET_CURRENT_WEATHER({
              city: data.name,
              temp: Math.round(data.main.temp * 10) / 10,
              rain: rain,
              feels_like: Math.round(data.main.feels_like * 10) / 10,
              wind: Math.round(data.wind.speed * 10) / 10,
              humidity: data.main.humidity,
              pressure: data.main.pressure,
              main: data.weather[0].main,
            })
          );
          Cookies.set("currentCity", data.name, { path: "/" });
          //END/////
          setIsAuth(true);
        } else {
          history.push("/login");
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkAuth();
  }, []);

  // start coding
  if (isAuth === false) return <Loading />;
  if (isAuth === true)
    return (
      <ThemeProvider theme={theme}>
        <FlexWrapper position="relative" width="100%">
          <MainBackground>
            <Navbar />
            <LeftMainInfo />
            <RightMainInfo />
            <BottomWeather />
          </MainBackground>
          <MenuSide />
          <Widgets  />
          <Alert/>
          <ToastContainer />
        </FlexWrapper>
      </ThemeProvider>
    );
};

export default Main;
