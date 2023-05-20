import { useSelector} from 'react-redux';
import "./currentWeather.scss";

export const CurrentWeather = () => {
  const { unit, theme, currentWeather } = useSelector((s:any)=>({
    unit : s.settings.unit,
    theme : s.settings.theme,
    currentWeather : s.weather.currentWeather,
  }))
  const weatherCode =
    currentWeather.weather.icon !== ""
      ? theme === "dark"
        ? `${currentWeather.weather.icon}_n`
        : `${currentWeather.weather.icon}`
      : "01d";
  const unitSymbol = unit === "metric" ? "C" : "F";
  return (
    <div className="current-weather">
      <div className="image">
        <img
          src={require(`../../assets/img/icon_${weatherCode}.png`)}
          className="icon"
          alt=""
        />
      </div>
      <div className="details">
        <label className="temp">
          {Math.round(currentWeather.temp)}°<span>{unitSymbol}</span>
        </label>
        <label className="feelslike">
          Feels like: <span>{Math.round(currentWeather.feels_like)}°</span>
        </label>
        <label className="description">{currentWeather.weather.description}</label>
      </div>
    </div>
  );
};

export default CurrentWeather;
