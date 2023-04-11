import HourlyItem from "../hourlyItem/hourlyItem";
import "./hourly.scss";

type hourProps = {
  theme : string
}

export const Hourly = ({ theme } : hourProps) => {
  const hourlyWeather = [
    {
      isActive: true,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
  ];
  return (
    <>
      <div className="hourly">
        <label className="title">Hourly</label>
        <div className="hourly-items-container">
          {hourlyWeather.map((h) => (
            <div
              className={
                h.isActive
                  ? "hourly-item-container active"
                  : "hourly-item-container"
              }
            >
              <HourlyItem theme={theme}></HourlyItem>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};