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
        }
    }
})

export const { getCurrentWeather } = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer
