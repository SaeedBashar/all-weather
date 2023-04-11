import { useEffect, useState } from "react";
import { useWeather } from "../../hooks";
import { CurrentWeather } from "../currentWeather/currentWeather";
import { CurrentWeatherDetails } from "../currentWeatherDetails/currentWeatherDetails";
import { Daily } from "../daily/daily";
import { Header } from "../header/header";
import { Hourly } from "../hourly/hourly";

import {
  CurrentWeatherModel,
  EmptyCurrentWeather,
  ThemeType,
} from "../../models";
import "./container.scss";

type ContainerProps = {
  theme: string;
  changeTheme: (theme: ThemeType) => void;
};

export const Container = ({ theme, changeTheme }: ContainerProps) => {
  const unit = "metric";
  const { isLoading, currentWeather, hourlyWeather, dailyWeather } = useWeather(
    unit,
    false
  );
  const [currentWeatherSelectedItem, setCurrentWeatherSelectedItem] =
    useState(EmptyCurrentWeather);

  useEffect(() => {
    setCurrentWeatherSelectedItem(currentWeather);
  }, [currentWeather]);

  const hourlyItemClickHandler = (current: CurrentWeatherModel) => {
    setCurrentWeatherSelectedItem(current);
  };

  console.log(isLoading, currentWeather, hourlyWeather, dailyWeather)
  console.log(currentWeatherSelectedItem)
  return (
    <div className="container">
      {!isLoading? (
        <div className="grid-container">
          <Header
            data={currentWeatherSelectedItem}
            theme={theme}
            changeTheme={changeTheme}
          ></Header>
          <CurrentWeather
            theme={theme}
            unit={unit}
            data={currentWeatherSelectedItem}
          ></CurrentWeather>
          <CurrentWeatherDetails
            data={currentWeatherSelectedItem.details}
          ></CurrentWeatherDetails>
          <Hourly
            theme={theme}
            unit={unit}
            data={hourlyWeather}
            clickHandler={hourlyItemClickHandler}
          ></Hourly>
          <Daily theme={theme} unit={unit} data={dailyWeather}></Daily>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};
