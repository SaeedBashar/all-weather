import { put } from "redux-saga/effects";
import axios from "axios";
import { openWeatherApiUrl, openWeatherApiKey } from "../utils/config";
import { getFormatedCurrentWeather, getFormatedDailyWeather, getFormatedHourlyWeather } from "../utils/utils";


const baseUrl = openWeatherApiUrl;
const apiKey = openWeatherApiKey;

export function* handleCurrentWeather(action:any){
    try{
        const res: {data:any} = yield axios.get(`${baseUrl}/weather?q=${action.locationName}&appid=${apiKey}`)
        console.log(res)
        yield put({
            type: 'weather/getCurrentWeather',
            payload: {
                currentWeather : getFormatedCurrentWeather(res.data, action.unit),
                location : {
                    position: {
                      latitude: res.data.coord.lat,
                      longitude: res.data.coord.lon,
                    },
                    locality: res.data.name,
                    country: res.data.sys.country
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}


export function* handleDailyWeather(action:any){
    try{
        const res : { // Returned Type To Suppress Error
            data: {
                weather: {
                    daily:[]
                }
            }
        } = yield axios.get(`./mock-data/weather_${action.unit}.json`)

        const daily : [] = yield getFormatedDailyWeather(res.data.weather.daily)

        yield put({type: 'weather/getDailyWeather', payload: {daily}})
    }catch(e){
        console.log(e)
    }
}

export function* handleHourlyWeather(action:any){
    try{
        const res : { // Returned Type To Suppress Error
            data: {
                list: []
            }
        } = yield axios.get(`${baseUrl}/forecast?q=${action.locationName}&appid=${apiKey}`)

        const hourly : [] = yield getFormatedHourlyWeather(res.data.list, action.unit)
        yield put({type: 'weather/getHourlyWeather', payload: {hourly}})
    }catch(e){
        console.log(e)
    }
}