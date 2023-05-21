import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  CurrentWeatherModel,
} from "../../models";
import HourlyItem from "../hourlyItem/hourlyItem";
import "./hourly.scss";
import { useDispatch, useSelector } from "react-redux";

export const Hourly = () => {

  const { hourly, currentLocationName } = useSelector((s:any)=>({
    hourly: s.weather.hourlyWeather,
    currentLocationName : s.settings.currentLocation,
  }))
  const dispatch = useDispatch()
  const [activeIndex, setActiveIndex] = useState(
    hourly[0] ? hourly[0].dt : 0
  );
  const onClickHandler = (h: CurrentWeatherModel) => {
    dispatch({
      type: 'init_setCurrentWeather', 
      locationName: currentLocationName, 
      unit: 'metric',
      hourlySelection: h})
    setActiveIndex(h.dt);
  };

  return (
    <div className="hourly">
      <label className="title">Hourly</label>
      <div className="hourly-items-container">
        <ScrollContainer horizontal>
          {hourly.map((h:any) => (
            <div
              key={h.dt}
              className={
                activeIndex === h.dt
                  ? "hourly-item-container active"
                  : "hourly-item-container"
              }
              onClick={() => onClickHandler(h)}
            >
              <HourlyItem data={h}></HourlyItem>
            </div>
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
};

export default Hourly;
