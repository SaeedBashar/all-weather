import { useSelector } from "react-redux";
import { CurrentWeatherModel } from "../../models";
import "./hourlyItem.scss";

type HourlyItemProps = {
  data: CurrentWeatherModel;
};

export const HourlyItem = ({data }: HourlyItemProps) => {
  const { theme, unit } = useSelector((s:any)=>({
    theme: s.settings.theme,
    unit : s.settings.unit
  }))
  const weatherCode =
    theme === "dark"
      ? `${data.weather.icon}_n`
      : `${data.weather.icon}`;
  const unitSymbol = unit === "metric" ? "C" : "F";
  return (
    <div className="hourly-item">
      <label className="hour">{new Date(data.dt * 1000).getHours()}:00</label>
      <img
        src={require(`../../assets/img/icon_${weatherCode}.png`)}
        className="icon-small"
        alt=""
      />
      <label className="temp">
        {Math.round(data.temp)}°{unitSymbol}
      </label>
    </div>
  );
};
export default HourlyItem;
