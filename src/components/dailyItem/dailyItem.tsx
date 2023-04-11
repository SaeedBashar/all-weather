import "./dailyItem.scss";

type dailyItemProps = {
  theme : string
}
export const DailyItem = ({ theme } : dailyItemProps) => {
  const weatherCode = theme === "dark" ? "04d_n" : "04d";
  return (
    <div className="daily-item">
      <img
        src={require(`../../assets/img/icon_${weatherCode}.png`)}
        className="icon-small"
        alt=""
      />
      <label className="day">Tommorow</label>
      <label className="min-max">15°/16°</label>
    </div>
  );
};
export default DailyItem;
