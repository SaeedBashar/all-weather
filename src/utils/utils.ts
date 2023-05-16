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
