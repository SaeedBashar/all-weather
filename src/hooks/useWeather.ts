import { useCallback } from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import {
  CurrentWeatherModel,
  DailyWeatherDetailsModel,
  DailyWeatherModel,
  EmptyCurrentWeather,
  EmptyDailyWeatherModel,
  EmptyHourlyWeatherModel,
  EmptyLocationModel,
  HourlyWeatherModel,
  LocationModel,
} from "../models";
import { celciusToFahrenheit, fahrenheitToCelcius } from "../utils/utils";
import { openWeatherApiUrl, openWeatherApiKey } from '../utils/config';

export const useWeather = (
  locationName: string,
  unit: string
) => {
  const baseUrl = openWeatherApiUrl;
  const apiKey = openWeatherApiKey;
  const [location, setLocation] = useState<LocationModel>(EmptyLocationModel);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherModel>(EmptyCurrentWeather);
  const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherModel>(
    EmptyHourlyWeatherModel
  );
  const [dailyWeather, setDailyWeather] = useState<DailyWeatherModel>(
    EmptyDailyWeatherModel
  );
  const handleError = useErrorHandler();
  const setCurrent = useCallback((data: any) => {
    setCurrentWeather({
      dt: data.dt,
      weather: {
        icon: data.weather[0].icon,
        description: data.weather[0].description,
      },
      temp: unit === 'metric' ? 
      fahrenheitToCelcius(data.main.temp) : data.main.temp,
      feels_like: unit === 'metric' ? 
      fahrenheitToCelcius(data.main.feels_like) :data.main.feels_like,
      details: {
        rain: 0,
        visibility: data.visibility / 1000,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        wind_speed: data.wind.speed,
      },
    });
  },[])

  const setHourly = (data: any) => {
    let hourly: CurrentWeatherModel[] = [];
    data.slice(0, 24).forEach((item: any) => {
      hourly.push({
        dt: item.dt,
        weather: {
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        },
        temp: 
          unit === 'metric' ? 
            fahrenheitToCelcius(item.main.temp) : 
            item.main.temp,
        feels_like: unit === 'metric' ? fahrenheitToCelcius(item.main.feels_like) : item.main.feels_like,
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

  const setDaily = useCallback((data: any) => {
    let daily: DailyWeatherDetailsModel[] = [];
    data.forEach((item: any) => {
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
  }, []);

  const changeUnits = 
    (cw:CurrentWeatherModel, hw:HourlyWeatherModel, dw:DailyWeatherModel)=>{
    if(unit === 'metric'){
      setCurrentWeather({
        ...cw,
        temp : fahrenheitToCelcius(cw.temp),
        feels_like : fahrenheitToCelcius(cw.feels_like)
      })

      hw.hourly.forEach((item: CurrentWeatherModel, i:any, arr:any)=>{
        item.temp = fahrenheitToCelcius(item.temp)
        item.feels_like = fahrenheitToCelcius(item.feels_like)
      })
    }else{
      setCurrentWeather({
        ...currentWeather,
        temp : celciusToFahrenheit(currentWeather.temp),
        feels_like : celciusToFahrenheit(currentWeather.feels_like)
      })

      hourlyWeather.hourly.forEach((item: CurrentWeatherModel, i:any, arr:any)=>{
        item.temp = celciusToFahrenheit(item.temp)
        item.feels_like = celciusToFahrenheit(item.feels_like)
      })
    }
  }

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${baseUrl}/weather?q=${locationName}&appid=${apiKey}`)
    .then(res=>{
      setLocation({
        position: {
          latitude: res.data.coord.lat,
          longitude: res.data.coord.lon,
        },
        locality: res.data.name,
        country: res.data.sys.country
      });
      setCurrent(res.data);
    })
    .catch((error) => {
      handleError(error);
    })

    axios.get(`${baseUrl}/forecast?q=${locationName}&appid=${apiKey}`)
      .then(res=>{
          setHourly(res.data.list)
      })
      .catch((error) => {
        handleError(error);
      })

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

  }, [locationName, baseUrl, setCurrent, apiKey]);

  return {
    isLoading,
    location,
    currentWeather,
    hourlyWeather,
    dailyWeather,
    changeUnits
  };
};
