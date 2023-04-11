import { Current } from "../current/current";
import { Daily } from "../daily/daily";
import { Header } from "../header/header";
import { Hourly } from "../hourly/hourly";

import { useWeather } from "../../hooks";

import "./container.scss";

type containerProps = {
  theme : string,
  setTheme : (arg:string)=>void
}

export const Container = ({ theme, setTheme }: containerProps) => {
  const [] = useWeather(45.7634188, 21.2397304, "metric");

  return (
    <div className="container">
      <div className="grid-container">
        <Header theme={theme} setTheme={setTheme}></Header>
        <Current theme={theme}></Current>
        <Hourly theme={theme}></Hourly>
        <Daily theme={theme}></Daily>
      </div>
    </div>
  );
};
