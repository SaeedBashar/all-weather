import DarkModeToggle from 'react-dark-mode-toggle';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from "../search/searchElement";
import "./header.scss";


export const Header = () => {

  const { 
    currentWeather, 
    location, theme, unit
  } = useSelector((s:any)=>(
    {
    currentWeather : s.weather.currentWeather,
    location: s.weather.location,
    theme: s.settings.theme,
    unit: s.settings.unit
  }));
  const dispatch = useDispatch()

  const getFormatedDate = () => {
    const selectedDate = new Date(currentWeather.dt * 1000);
    var date = selectedDate.toLocaleString("en-GB", {
      day: "numeric",
      weekday: "long",
      month: "long",
    });
    var year = selectedDate.toLocaleString("en-GB", {
      year: "numeric",
    });
    var hour = selectedDate.toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${date} ${year} ${hour}`;
  };
  return (
    <>
      <div className="location">
        <label className="city">{location.locality}</label>
        <label className="country">{location.country}</label>
        <label className="date">{getFormatedDate()}</label>
      </div>
      <div className="settings">
        <div className="units">
          <span
            className={unit === "metric" ? "active" : ""}
            onClick={() => {
              // changeSettings({ unit: "metric" });
              dispatch({ type: "init_setUnit", unit: "metric"})
            }}
          >
            °C
          </span>
          <span
            className={unit !== "metric" ? "active" : ""}
            onClick={() => {
              // changeSettings({ unit: "imperial" });
              dispatch({ type: "init_setUnit", unit: "imperial"})
            }}
          >
            °F
          </span>
        </div>
        <DarkModeToggle 
            checked={theme === 'dark'} 
            onChange={() => {
                theme === 'dark' ?
                    dispatch({ type: "init_setTheme", theme: "light"}) :
                    dispatch({ type: "init_setTheme", theme: "dark"})
            }} 
        size={60} />
      </div>
      {/* <Search changeLocation={(value)=>changeLocation(value)} /> */}
      <Search changeLocation={(value)=>{ dispatch({ type: "init_setCurrentLocation", location: value}) }}/>
    </>
  );
};

export default Header;
