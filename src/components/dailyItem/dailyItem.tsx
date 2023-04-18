import { SettingsModel } from "../../models";
import { DailyWeatherDetailsModel } from "../../models/DailyWeatherDetailsModel";
import "./dailyItem.scss";

type DailyItemProps = {
  settings: SettingsModel;
  data: DailyWeatherDetailsModel;
  onClick: () => void;
};

export const DailyItem = ({ settings, data, onClick }: DailyItemProps) => {
  const weatherCode =
    settings.theme === "dark"
      ? `${data.weather.icon}_n`
      : `${data.weather.icon}`;
  const unitSymbol = settings.unit === "metric" ? "C" : "F";
  return (
    <div className="daily-item" onClick={onClick}>
      <img
        src={require(`../../assets/img/icon_${weatherCode}.png`)}
        className="icon-small"
        alt=""
      />
      <label className="day">
        {new Date(data.dt * 1000).toLocaleString("en-GB", {
          weekday: "long",
        })}
      </label>
      <label className="description">{data.weather.description}</label>
      <label className="min-max">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21"><path d="M20,15H15V3a1,1,0,0,0-1-1H10A1,1,0,0,0,9,3V15H4l8,8,8-8Z" transform="translate(20 23) rotate(180)"/></svg>
        {Math.round(data.minTemp)}°{unitSymbol} 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21"><path  d="M20,15H15V3a1,1,0,0,0-1-1H10A1,1,0,0,0,9,3V15H4l8,8,8-8Z" transform="translate(-4 -2)"/></svg>
        {Math.round(data.maxTemp)}°
        {unitSymbol}
      </label>
    </div>
  );
};

export default DailyItem;
