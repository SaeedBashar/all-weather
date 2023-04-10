
import "./current-weather.scss";

type currentWeatherProp = {
  theme : string
}
export const CurrentWeather = ({ theme } : currentWeatherProp) => {
  const weatherCode = theme === "dark" ? "02d_n" : "02d";
  return (
    <div className="container">
      <div className="current-weather">
        <div className="image">
          <img
            src={require(`../../assets/img/icon_${weatherCode}.png`)}
            className="icon"
            alt=""
          />
        </div>
        <div className="details">
          <div className="temp">
            20°<span>C</span>
          </div>
          <div className="feelslike">
            Feels like: <span>25°</span>
          </div>
          <div className="description">sunny</div>
        </div>
      </div>
      <div className="current-weather-details"></div>
    </div>
  );
};