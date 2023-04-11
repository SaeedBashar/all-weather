import "./hourlyItem.scss";

type hourItemProps = {
  theme : string
}
export const HourlyItem = ({ theme } : hourItemProps) => {
  const weatherCode = theme === "dark" ? "03d_n" : "03d";
  return (
    <div className={"hourly-item"}>
      <label className="hour">18:00</label>
      <img
        src={require(`../../assets/img/icon_${weatherCode}.png`)}
        className="icon-small"
        alt=""
      />
      <label className="temp">24°</label>
    </div>
  );
};
export default HourlyItem;
