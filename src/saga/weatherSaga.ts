import { delay, put } from "redux-saga/effects";
import axios from "axios";
import { openWeatherApiUrl, openWeatherApiKey } from "../utils/config";
import { getFormatedCurrentWeather } from "../utils/utils";


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

