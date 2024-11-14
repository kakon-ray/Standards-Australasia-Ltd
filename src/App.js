import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './page/About';
import $ from "jquery";

function App() {

  
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
