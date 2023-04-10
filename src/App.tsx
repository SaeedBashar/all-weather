import { useState } from 'react';

import { Container } from './components/container/container';
import './App.scss';

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <main className={theme}>
      <div className="main-container">
        <Container theme={theme} setTheme={setTheme}></Container>
      </div>
    </main>
  );
}

export default App;
