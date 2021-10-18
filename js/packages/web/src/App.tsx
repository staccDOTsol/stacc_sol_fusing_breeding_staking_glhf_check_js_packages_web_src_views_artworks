import React from 'react';
import { Routes } from './routes';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-206705232-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return <Routes />;
}

export default App;
