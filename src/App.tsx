import { Container } from "./components/container/container";
import { ErrorBoundary } from "react-error-boundary";
import { useSelector } from 'react-redux';
import { Error, ErrorHandler } from "./components/Common/error/error";
import "./App.scss";
// import { useSettings } from "./hooks";
// import { setTheme } from './store/reducers/settings';

export const App = () => {
  // const { settings, changeSettings } = useSettings();
  const theme = useSelector((s:any)=>s.settings.theme)
  return (
    <main className={theme}>
      <div className="main-container">
        <ErrorBoundary FallbackComponent={Error} onError={ErrorHandler}>
          <Container/>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default App;
