import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ColorContextProvider } from './context/ColorContext';
import './global.scss';

ReactDOM.render(
  <React.StrictMode>
    <ColorContextProvider>
      <App />
    </ColorContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

