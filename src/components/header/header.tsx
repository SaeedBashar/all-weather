import DarkModeToggle from 'react-dark-mode-toggle';

import { CurrentWeatherModel, SettingsModel } from "../../models";
import { Search } from "../search/searchElement";
import "./header.scss";

type HeaderProps = {
  locality?: string;
  country?: string;
  data: CurrentWeatherModel;
  settings: SettingsModel;
  changeSettings: (newSettings: object) => void;
  changeLocation: (location: string) => void;
};

export const Header = ({
  locality,
  country,
  data,
  settings,
  changeSettings,
  changeLocation,
}: HeaderProps) => {
  const getFormatedDate = () => {
    const selectedDate = new Date(data.dt * 1000);
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
        <label className="city">{locality}</label>
        <label className="country">{country}</label>
        <label className="date">{getFormatedDate()}</label>
      </div>
      <div className="settings">
        <div className="units">
          <span
            className={settings.unit === "metric" ? "active" : ""}
            onClick={() => {
              changeSettings({ unit: "metric" });
            }}
          >
            °C
          </span>
          <span
            className={settings.unit !== "metric" ? "active" : ""}
            onClick={() => {
              changeSettings({ unit: "imperial" });
            }}
          >
            °F
          </span>
        </div>
        <DarkModeToggle checked={settings.theme === "dark"} onChange={() => {
          if (settings.theme === "dark") changeSettings({ theme: "light" });
          else changeSettings({ theme: "dark" });
        }} size={60} />
      </div>
      <Search changeLocation={(value)=>changeLocation(value)} />
    </>
  );
};

export default Header;
