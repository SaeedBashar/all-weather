import { CurrentWeatherModel, DailyWeatherDetailsModel, SettingsModel } from "../models";

export {}

export function celciusToFahrenheit(c: number) {
    return Math.round(c * (9 / 5) + 32);
  }
  
export function fahrenheitToCelcius(f: number) {
    return Math.round(((f - 32) * 5) / 9);
}

export const getInitialSettingsState = () : SettingsModel=>{
  const state = localStorage.getItem('settings')

  return state ? JSON.parse(state) : {
      theme: "light",
      unit: "metric",
      currentLocation: ""
  }
}

export const getFormatedCurrentWeather = (data:any, unit:string) => {
  return {
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
  };
}

export const getFormatedDailyWeather = (data: any) => {
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
  return daily
}

export const getFormatedHourlyWeather = (data:any, unit:string)=>{
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
          rain: +(item.pop * 100).toFixed(2),
          visibility: item.visibility / 1000,
          humidity: item.main.humidity,
          pressure: item.main.pressure,
          wind_speed: item.wind.speed,
        },
      });
    });
    return hourly
}