import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/about' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>
}

export default App;
