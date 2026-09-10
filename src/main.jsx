import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { SmoothScrollProvider } from './motion/SmoothScrollProvider.jsx';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScrollProvider>
      <App />
    </SmoothScrollProvider>
  </React.StrictMode>
);
