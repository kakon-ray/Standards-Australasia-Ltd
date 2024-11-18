import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './page/About';
import $ from "jquery";
import Contact from './page/Contact';
import Career from './page/Career';

function App() {

  
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;
