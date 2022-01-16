import './App.css';
import { useState, useEffect} from 'react'
import { init, subscribe } from './SocketApi'

import Palette from './Components/Palette'

function App() {
  const [activeColor, setActiveColor] = useState('#223345') 

  useEffect(() => {
    init()
    subscribe((color) => {
      setActiveColor(color)
    })
  })

  return (
    <div className="App" style={{backgroundColor: activeColor}}>
      <h2>{activeColor}</h2>
      <Palette activeColor={activeColor}/>
    </div>
  );
}

export default App;
