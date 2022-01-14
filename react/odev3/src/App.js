import './App.css';

import Header from './components/Header';
import WeatherList from './components/WeatherList';

import { CityProvider } from './context/CityContext';

function App() {
  return (
    <CityProvider>
      <Header />
      <WeatherList />
    </CityProvider>
  );
}

export default App;
