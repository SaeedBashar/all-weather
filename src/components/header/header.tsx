import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.scss";

type headerProps = {
  theme : string,
  setTheme : (arg:string)=>void
}

export const Header = ({ theme, setTheme } : headerProps) => {
  const getCurrentDate = () => {
    var date = new Date().toLocaleString("en-GB", {
      day: "2-digit",
      weekday: "long",
      month: "long",
    });

    var year = new Date().toLocaleString("en-GB", {
      year: "numeric",
    });

    var hour = new Date().toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return `${date} ${year} ${hour}`;
  };

  return (
    <>
      <div className="location">
        <div className="city">Kumasi</div>
        <div className="country">Ghana</div>
        <div className="date">{getCurrentDate()}</div>
      </div>
      <div className="settings">
        <div
          className="button-theme"
          onClick={() => {
            if (theme === "dark") setTheme("light");
            else setTheme("dark");
          }}
        >
          <FontAwesomeIcon
            icon={theme === "dark" ? faSun : faMoon}
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="search">
        <input className="input" placeholder="Enter your location"></input>
      </div>
    </>
  );
};