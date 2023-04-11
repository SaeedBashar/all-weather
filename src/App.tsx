import { useEffect, useState } from "react";
import { Container } from "./components/container/container";
import { ThemeType } from "./models";
import "./App.scss";

const App = () => {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const existingTheme = localStorage.getItem("theme");
    if (
      existingTheme &&
      (existingTheme === "light" || existingTheme === "dark")
    ) {
      setTheme(existingTheme);
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeThemeHandler = (theme: ThemeType) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <main className={theme}>
      <div className="main-container">
        <Container theme={theme} changeTheme={changeThemeHandler}></Container>
      </div>
    </main>
  );
};

export default App;
