import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "./useLocation";
import {
  CurrentWeatherModel,
  DailyWeatherDetailsModel,
  DailyWeatherModel,
  EmptyCurrentWeather,
  EmptyDailyWeatherModel,
  EmptyHourlyWeatherModel,
  HourlyWeatherModel,
} from "../models";

export const useWeather = (units: string, useMockData: boolean) => {
  const baseUrl = process.env.REACT_APP_OPENWEATHER_API_BASEURL;
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const { location } = useLocation();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherModel>(EmptyCurrentWeather);
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherModel>(
    EmptyHourlyWeatherModel
  );
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherModel>(
    EmptyDailyWeatherModel
  );

  useEffect(() => {
    setIsLoading(true);
    if (location) {
      const url = useMockData
        ? "./mock-data/weather.json"
        : `${baseUrl}?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=${units}&exclude=minutely,alerts&appid=${apiKey}`;
      axios
        .get(url)
        .then((response) => {
          let list = response.data.list
          setCurrent(list[0]);
          setHourly(list);
          setDaily(list);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [location, units, useMockData, baseUrl, apiKey]);

  const setCurrent = (data: any) => {
    setCurrentWeather({
      dt: data.dt,
      weather: {
        icon: data.weather[0].icon,
        description: data.weather[0].description,
      },
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      details: {
        rain: 0,
        visibility: data.visibility / 1000,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind_speed: data.wind.speed,
      },
    });
  };

  const setHourly = (data: any) => {
    let hourly: CurrentWeatherModel[] = [];
    data.slice(0, 24).forEach((item: any) => {
      hourly.push({
        dt: item.dt,
        weather: {
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        },
        temp: item.temp,
        feels_like: item.feels_like,
        details: {
          rain: item.pop * 100,
          visibility: item.visibility / 1000,
          humidity: item.humidity,
          pressure: item.pressure,
          wind_speed: item.wind_speed,
        },
      });
    });
    setHourlyWeather({ hourly: hourly });
  };

  const setDaily = (data: any) => {
    let daily: DailyWeatherDetailsModel[] = [];
    data.slice(1).forEach((item: any) => {
      daily.push({
        dt: item.dt,
        clouds: item.clouds,
        humidity: item.main.humidity,
        pressure: item.main.pressure,
        sunrise: item.sunrise,
        sunset: item.sunset,
        minTemp: item.main.temp_min,
        maxTemp: item.main.temp_max,
        uvi: item.uvi,
        weather: {
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        },
        wind_speed: item.wind.speed,
        rain: item.pop * 100,
      });
    });
    setDailyWeather({ daily: daily });
  };

  return { isLoading, currentWeather, hourlyWeather, dailyWeather };
};
