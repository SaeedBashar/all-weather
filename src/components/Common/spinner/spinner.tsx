import { ReactElement } from 'react';
import './spinner.css';

type spinnerProps = {
  children: ReactElement;
  isLoading: boolean;
};
const Spinner = ({ children, isLoading }: spinnerProps) => {
  <>{isLoading ? <div className="loading">Loading...</div> : children}</>
  return (
    <>{isLoading ?
      <div className="loader">
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </div>
      : children}</>
  );
};
export default Spinner;
