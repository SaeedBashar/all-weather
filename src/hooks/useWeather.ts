import axios from "axios";
import { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { useLocation } from ".";
import {
  CurrentWeatherModel,
  DailyWeatherDetailsModel,
  DailyWeatherModel,
  EmptyCurrentWeather,
  EmptyDailyWeatherModel,
  EmptyHourlyWeatherModel,
  HourlyWeatherModel,
} from "../models";
import { fahrenheitToCelcius } from "../utils/utils";

export const useWeather = (
  locationName: string,
  unit: string,
  useMockData: boolean
) => {
  const baseUrl = process.env.REACT_APP_OPENWEATHER_URL;
  const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;
  const { location, setLoc } = useLocation(locationName, useMockData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherModel>(EmptyCurrentWeather);
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherModel>(
    EmptyHourlyWeatherModel
  );
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherModel>(
    EmptyDailyWeatherModel
  );
  const handleError = useErrorHandler();
  useEffect(() => {
    setIsLoading(true);
    axios.get(`${baseUrl}/weather?q=${locationName || 'kumasi'}&appid=${apiKey}`)
    .then(res=>{
      console.log(res)
      console.log(location)
      if(!location.locality) setLoc(res.data.sys.country, res.data.name)
      setCurrent(res.data);
    })
    axios.get(`${baseUrl}/forecast?q=${locationName || 'kumasi'}&appid=${apiKey}`)
    .then(res=>{
      console.log(res)
        setHourly(res.data.list)
    })
    if (location) {
      
      axios
        .get(`./mock-data/weather_${unit}.json`)
        .then((response) => {
          setDaily(response.data.weather.daily);
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(() => {
          setTimeout(() => setIsLoading(false), 100);
        });
    }
  }, [location, unit, useMockData, baseUrl, apiKey, handleError]);

  const setCurrent = (data: any) => {
    console.log(data)
    setCurrentWeather({
      dt: data.dt,
      weather: {
        icon: data.weather[0].icon,
        description: data.weather[0].description,
      },
      temp: unit === 'metric' ? fahrenheitToCelcius(data.main.temp) : data.main.temp,
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
        temp: unit === 'metric' ? fahrenheitToCelcius(item.main.temp) : item.main.temp,
        feels_like: item.main.feels_like,
        details: {
          rain: item.pop * 100,
          visibility: item.visibility / 1000,
          humidity: item.main.humidity,
          pressure: item.main.pressure,
          wind_speed: item.wind.speed,
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
        humidity: item.humidity,
        pressure: item.pressure,
        sunrise: item.sunrise,
        sunset: item.sunset,
        minTemp: item.temp.min,
        maxTemp: item.temp.max,
        uvi: item.uvi,
        weather: {
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        },
        wind_speed: item.wind_speed,
        rain: item.pop * 100,
      });
    });
    setDailyWeather({ daily: daily });
  };

  return {
    isLoading,
    location,
    currentWeather,
    hourlyWeather,
    dailyWeather,
  };
};
