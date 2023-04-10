import { useState } from 'react';

import { CurrentWeather } from './components/currentWeather/current-weather';
import { Header } from './components/header/header';
import './App.scss';

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <main className={theme}>
      <div className="main-container">
        <Header theme={theme} setTheme={setTheme}></Header>
        <CurrentWeather theme={theme}></CurrentWeather>
      </div>
    </main>
  );
}

export default App;
