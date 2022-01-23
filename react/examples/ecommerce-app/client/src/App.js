import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Content/>}/>
      </Routes>
    </Router>
  );
}

export default App;
