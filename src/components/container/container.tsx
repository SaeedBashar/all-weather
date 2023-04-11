import { useWeather } from "../../hooks";
import { CurrentWeather } from "../currentWeather/currentWeather";
import { CurrentWeatherDetails } from "../currentWeatherDetails/currentWeatherDetails";
import { Daily } from "../daily/daily";
import { Header } from "../header/header";
import { Hourly } from "../hourly/hourly";


import "./container.scss";

type ContainerProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const Container = ({ theme, setTheme }: ContainerProps) => {
  const unit = "metric";
  const { isLoading, currentWeather, hourlyWeather, dailyWeather } = useWeather(
    44.34,
    10.99,
    unit
  );

  return (
    <div className="container">
      {!isLoading ? (
        <div className="grid-container">
          <Header theme={theme} setTheme={setTheme}></Header>
          <CurrentWeather
            theme={theme}
            unit={unit}
            data={currentWeather}
          ></CurrentWeather>
          <CurrentWeatherDetails
            data={currentWeather.details}
          ></CurrentWeatherDetails>
          <Hourly theme={theme} unit={unit} data={hourlyWeather}></Hourly>
          <Daily theme={theme} unit={unit} data={dailyWeather}></Daily>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};
