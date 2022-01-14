import './App.css';

import Header from './components/Header';
import WeatherList from './components/WeatherList';

import { CityProvider } from './context/CityContext';

function App() {
  return (
    <div className='App'>
      <CityProvider>
        <Header />
        <WeatherList />
      </CityProvider>
    </div>
    
  );
}

export default App;
