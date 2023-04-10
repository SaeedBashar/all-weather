
import "./header.scss";

type headerProps = {
  theme : string,
  setTheme : (arg:string)=>void
}

export const Header = ({ theme, setTheme } : headerProps) => {
  const getCurrentDate = () => {
    var date = new Date().toLocaleString("en", {
      weekday: "long",
      day: "2-digit",
      month: "long",
    });

    var year = new Date().toLocaleString("en", {
      year: "numeric",
    });

    var hour = new Date().toLocaleString("en", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return `${date} ${year} ${hour}`;
  };

  return (
    <>
      <div>
        <div className="city">Kumasi</div>
        <div className="country">Ghana</div>
        <div className="date">{getCurrentDate()}</div>
      </div>
      <div>
        <button
          onClick={() => {
            if (theme === "dark") setTheme("light");
            else setTheme("dark");
          }}
        >
          {theme}
        </button>
      </div>
    </>
  );
};