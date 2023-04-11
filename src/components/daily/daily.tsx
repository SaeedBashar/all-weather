import { useState } from "react";
import DailyItem from "../dailyItem/dailyItem";
import "./daily.scss";

type dailyProps = {
  theme: string
}
export const Daily = ({ theme } : dailyProps) => {
  const dailyWeather = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const clickHandler = (h:any) => {
    if (h.id === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(h.id);
    }
  };
  return (
    <>
      <div className="daily">
        <label className="title">Daily</label>
        <div className="daily-items-container">
          {dailyWeather.map((h) => (
            <>
              <DailyItem
                key={h.id}
                theme={theme}
                onClick={() => clickHandler(h)}
              ></DailyItem>
              <div
                className={
                  activeIndex === h.id
                    ? "daily-item-header active"
                    : "daily-item-header"
                }
              >
                <div className="daily-item-details">
                  <div className="daily-item-details-item">
                    <label>Rain:</label>
                    <label>0%</label>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
