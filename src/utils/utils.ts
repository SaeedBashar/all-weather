import { SettingsModel } from "../models";

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