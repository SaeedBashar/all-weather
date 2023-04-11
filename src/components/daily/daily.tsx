import DailyItem from "../dailyItem/dailyItem";
import "./daily.scss";

type dailyProps = {
  theme: string
}
export const Daily = ({ theme } : dailyProps) => {
  const dailyWeather = [...Array(6).keys()];
  return (
    <>
      <div className="daily">
        <label className="title">Daily</label>
        <div className="daily-items-container">
          {dailyWeather.map((h) => (
            <div className="hourly-item-container">
              <DailyItem theme={theme}></DailyItem>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
