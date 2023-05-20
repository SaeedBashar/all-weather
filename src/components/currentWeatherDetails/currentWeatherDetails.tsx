import { useSelector } from "react-redux";
import { CurrentWeatherDetailsModel } from "../../models/";
import "./currentWeatherDetails.scss";


export const CurrentWeatherDetails = () => {
  const { details } = useSelector((s:any)=>({
    details: s.weather.currentWeather.details
  }))
  return (
    <div className="current-weather-details">
      <div className="current-weather-details-grid">
        <div className="current-weather-details-grid-item">
          <label>Rain:</label>
          <label>{details?.rain}%</label>
        </div>
        <div className="current-weather-details-grid-item">
          <label>Pressure:</label>
          <label>{details?.pressure}hPa</label>
        </div>
        <div className="current-weather-details-grid-item">
          <label>Humidity:</label>
          <label>{details?.humidity}%</label>
        </div>
        <div className="current-weather-details-grid-item">
          <label>Visibility:</label>
          <label>{details?.visibility} km</label>
        </div>
        <div className="current-weather-details-grid-item">
          <label>Wind speed:</label>
          <label>{details ? Math.round(details.wind_speed) : ""} m/s</label>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherDetails;
