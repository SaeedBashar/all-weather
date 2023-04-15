import { useEffect, useState } from "react";
import { useWeather } from "../../hooks";
import {
  CurrentWeatherModel,
  EmptyCurrentWeather,
  SettingsModel,
} from "../../models";
import MockData from "../Common/mockData/mockData";
import CurrentWeather from "../currentWeather/currentWeather";
import CurrentWeatherDetails from "../currentWeatherDetails/currentWeatherDetails";
import Daily from "../daily/daily";
import Header from "../header/header";
import Hourly from "../hourly/hourly";
import "./container.scss";
import Spinner from "../Common/spinner/spinner";

type ContainerProps = {
  settings: SettingsModel;
  changeSettings: (newSettings: object) => void;
};

export const Container = ({ settings, changeSettings }: ContainerProps) => {
  const useMockData: boolean = true;
  const [currentWeatherSelectedItem, setCurrentWeatherSelectedItem] =
    useState(EmptyCurrentWeather);
  const [currentLocationName, setCurrentLocationName] = useState<string>("");

  const { isLoading, location, currentWeather, hourlyWeather, dailyWeather } =
    useWeather(currentLocationName, settings.unit, useMockData);

  useEffect(() => {
    setCurrentWeatherSelectedItem(currentWeather);
  }, [currentWeather]);

  const hourlyItemClickHandler = (current: CurrentWeatherModel) => {
    setCurrentWeatherSelectedItem(current);
  };

  const changeLocationHandler = (location: string) => {
    setCurrentLocationName(location);
  };

  return (
    <MockData useMockData={useMockData}>
      <div className="container">
        <Spinner isLoading={isLoading}>
          <div className="grid-container">
            <Header
              locality={location.locality}
              country={location.country}
              data={currentWeatherSelectedItem}
              settings={settings}
              changeSettings={changeSettings}
              changeLocation={changeLocationHandler}
            ></Header>
            <CurrentWeather
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
            <Daily settings={settings} data={dailyWeather}></Daily>
          </div>
        </Spinner>
      </div>
    </MockData>
  );
};
