import { CurrentWeather } from "../current-weather/current-weather";
import { Header } from "../header/header";
import "./container.scss";

type containerProps = {
  theme : string,
  setTheme : (arg:string)=>void
}

export const Container = ({ theme, setTheme }: containerProps) => {
  return (
    <div className="container">
      <div className="grid-container">
        <Header theme={theme} setTheme={setTheme}></Header>
        <CurrentWeather theme={theme}></CurrentWeather>
      </div>
    </div>
  );
};
