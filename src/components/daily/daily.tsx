import { useState } from "react";
import DailyItem from "../dailyItem/dailyItem";
import { DailyItemDetails } from "../dailyItemDetails/dailyItemDetails";
import "./daily.scss";
import { useSelector } from "react-redux";

export const Daily = () => {

  const { daily } = useSelector((s:any)=>({
    daily: s.weather.dailyWeather
  }))
  const [activeIndex, setActiveIndex] = useState(null);

  const clickHandler = (d: any) => {
    if (d.dt === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(d.dt);
    }
  };
  return (
    <div className="daily">
      <label className="title">Daily</label>
      <div className="daily-items-container">
        {daily.map((d:any) => (
          <div key={d.dt}>
            <DailyItem
              data={d}
              onClick={() => clickHandler(d)}
            ></DailyItem>
            <div
              className={
                activeIndex === d.dt
                  ? "daily-item-header active"
                  : "daily-item-header"
              }
            >
              <DailyItemDetails data={d}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Daily;
