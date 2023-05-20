import { useDispatch, useSelector } from "react-redux";
import { useEffect,  } from "react";

import CurrentWeather from "../currentWeather/currentWeather";
import CurrentWeatherDetails from "../currentWeatherDetails/currentWeatherDetails";
import Daily from "../daily/daily";
import Header from "../header/header";
import Hourly from "../hourly/hourly";
import "./container.scss";
import Spinner from "../Common/spinner/spinner";
import { Start }from '../Common/start/start';

// type ContainerProps = {
//   settings: SettingsModel;
//   changeSettings: (newSettings: object) => void;
// };

export const Container = () => {
  console.log('[Container] running...')
  const {
    currentLocationName, 
    unit, isLoading
  } = useSelector((s:any)=>(
    {
    currentLocationName : s.settings.currentLocation,
    currentWeatherSelectedItem : s.weather.currentWeather,
    isLoading: s.weather.isLoading,
    unit: s.settings.unit,
    theme: s.settings.theme
  }));
  const dispatch = useDispatch()
  
  useEffect(()=>{
    if(currentLocationName){
      dispatch({
        type: 'init_setCurrentWeather', 
        locationName: currentLocationName, 
        unit: unit,
        hourlySelection: null})
      dispatch({
        type: 'init_setDailyWeather',  
        unit: unit})
      dispatch({
        type: 'init_setHourlyWeather', 
        locationName: currentLocationName, 
        unit: unit})
    }
  }, [currentLocationName, dispatch, unit])
  
  // export const Container = ({ settings, changeSettings }: ContainerProps) => {
  // const [currentWeatherSelectedItem, setCurrentWeatherSelectedItem] =
  //   useState(EmptyCurrentWeather);
  // const [currentLocationName, setCurrentLocationName] = useState<string>("Kumasi");
  // const { isLoading, location, currentWeather, hourlyWeather, dailyWeather, changeUnits } =
  //   useWeather(currentLocationName, settings.unit);
  // useEffect(() => {
  //   setCurrentWeatherSelectedItem(currentWeather);
  // }, [currentWeather]);

  // useEffect(()=>{
  //   changeUnits(currentWeather, hourlyWeather, dailyWeather)
  // },[settings.unit])

  // const changeLocationHandler = useCallback((location: string) => {
  //   setCurrentLocationName(location);
  // }, []);

  return (
    <Spinner isLoading={isLoading}>
      {
        currentLocationName.trim() ? 
            <div className="container">
            <div className="grid-container">
              <Header/>
              <CurrentWeather/>
              <CurrentWeatherDetails/>
              <Hourly/>
              <Daily/>
            </div>
          </div>
        : 
        <Start/>
      }
    </Spinner>
  );
};
