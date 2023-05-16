import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { useWeather } from "../../hooks";
import {
  CurrentWeatherModel,
  EmptyCurrentWeather,
  HourlyWeatherModel,
  SettingsModel,
} from "../../models";
import CurrentWeather from "../currentWeather/currentWeather";
import CurrentWeatherDetails from "../currentWeatherDetails/currentWeatherDetails";
import Daily from "../daily/daily";
import Header from "../header/header";
import Hourly from "../hourly/hourly";
import "./container.scss";
import Spinner from "../Common/spinner/spinner";
import { Start }from '../Common/start/start';

// type ContainerProps = {
//   settings: SettingsModel;
//   changeSettings: (newSettings: object) => void;
// };

export const Container = () => {
  console.log('[Container] running...')
  const currentLocationName = useSelector((s:any)=>s.settings.currentLocation);
  console.log(currentLocationName)
  // export const Container = ({ settings, changeSettings }: ContainerProps) => {
  // const [currentWeatherSelectedItem, setCurrentWeatherSelectedItem] =
  //   useState(EmptyCurrentWeather);
  // const [currentLocationName, setCurrentLocationName] = useState<string>("Kumasi");
  // const { isLoading, location, currentWeather, hourlyWeather, dailyWeather, changeUnits } =
  //   useWeather(currentLocationName, settings.unit);
  // useEffect(() => {
  //   setCurrentWeatherSelectedItem(currentWeather);
  // }, [currentWeather]);

  // useEffect(()=>{
  //   changeUnits(currentWeather, hourlyWeather, dailyWeather)
  // },[settings.unit])

  // const hourlyItemClickHandler = (current: CurrentWeatherModel) => {
  //   setCurrentWeatherSelectedItem(current);
  // };
 
  // const changeLocationHandler = useCallback((location: string) => {
  //   setCurrentLocationName(location);
  // }, []);

  return (
    <Spinner isLoading={false}>
      {
        currentLocationName.trim() ? 
            <div className="container">
            <div className="grid-container">
              {/* <Header
                locality={location.locality}
                country={location.country}
                data={currentWeatherSelectedItem}
                settings={settings}
                changeSettings={changeSettings}
                changeLocation={changeLocationHandler}
              ></Header> */}
              {/* <CurrentWeather
                settings={settings}
                data={currentWeatherSelectedItem}
              ></CurrentWeather>
              <CurrentWeatherDetails
                data={currentWeatherSelectedItem.details}
              ></CurrentWeatherDetails>
              <Hourly
                settings={settings}
                data={hourlyWeather}
                clickHandler={hourlyItemClickHandler}
              ></Hourly>
              <Daily settings={settings} data={dailyWeather}></Daily> */}
            </div>
          </div>
        : 
        <Start/>
      }
    </Spinner>
  );
};
