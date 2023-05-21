import { useDispatch, useSelector } from "react-redux";
import { ReactElement, useEffect, useState,  } from "react";

import CurrentWeather from "../currentWeather/currentWeather";
import CurrentWeatherDetails from "../currentWeatherDetails/currentWeatherDetails";
import Daily from "../daily/daily";
import Header from "../header/header";
import Hourly from "../hourly/hourly";
import "./container.scss";
import Spinner from "../Common/spinner/spinner";
import { Start }from '../Common/start/start';
import { setIsLoading } from "../../store/reducers/weatherReducer";

export const Container = () => {
  const {
    currentLocationName, 
    unit, isLoading,
    daily, hourly
  } = useSelector((s:any)=>(
    {
    currentLocationName : s.settings.currentLocation,
    isLoading: s.weather.isLoading,
    unit: s.settings.unit,
    hourly: s.weather.hourlyWeather,
    daily: s.weather.dailyWeather
  }));
  const dispatch = useDispatch()
  
  useEffect(()=>{
    if(currentLocationName){
      // if(isLoading) dispatch(setIsLoading({isLoading: true}))
      dispatch({
        type: 'init_setCurrentWeather', 
        locationName: currentLocationName, 
        unit: unit,
        hourlySelection: null})
      dispatch({
        type: 'init_setDailyWeather',  
        unit: unit})
      dispatch({
        type: 'init_setHourlyWeather', 
        locationName: currentLocationName, 
        unit: unit})
    }
  }, [currentLocationName, dispatch, unit])

  let shouldLoad = currentLocationName.trim() &&
                  hourly.length > 0 &&
                  daily.length > 0
  return (
    <>
    <Spinner isLoading={false}>
      {
         shouldLoad  ? (
              <div className="container">
                <div className="grid-container">
                  <Header/>
                  <CurrentWeather/>
                  <CurrentWeatherDetails/>
                  <Hourly/>
                  <Daily/>
                </div>
              </div>
        ) : <Start/>
      }
    </Spinner>
    </>
  );
};
