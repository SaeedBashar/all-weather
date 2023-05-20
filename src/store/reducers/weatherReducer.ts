import { createSlice } from "@reduxjs/toolkit";
import { 
    EmptyCurrentWeather, 
    EmptyDailyWeatherModel, 
    EmptyHourlyWeatherModel, 
    EmptyLocationModel } from "../../models";

const initialState = {
    location : EmptyLocationModel,
    isLoading: true,
    currentWeather : EmptyCurrentWeather,
    dailyWeather : EmptyDailyWeatherModel,
    hourlyWeather : EmptyHourlyWeatherModel
}
const weatherSlice = createSlice({
    name: 'weather',
    initialState: initialState,
    reducers : {
        getCurrentWeather : (state, { payload })=>{
            return {
                ...state,
                location : {...payload.location},
                currentWeather: {...payload.currentWeather}
            }
        },
        getDailyWeather : (state, { payload }) => {
            return {...state, dailyWeather: payload.daily}
        },
        getHourlyWeather : (state, { payload }) => {
            return {...state, hourlyWeather: payload.hourly, isLoading: false}
        }
    }
})

export const { getCurrentWeather, getDailyWeather, getHourlyWeather } = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer
