import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './page/About';
import $ from "jquery";
import Contact from './page/Contact';
import Career from './page/Career';
import Hospitality from './page/Hospitality';
import Health from './page/Health';
import Quality from './page/Quality';
import Medical from './page/ITManagement';
import ITManagement from './page/ITManagement';
import Germent from './page/Germent';

function App() {

  
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/health" element={<Health/>} />
        <Route path="/quality" element={<Quality/>} />
        <Route path="/medical" element={<Medical/>} />
        <Route path="/itmanagement" element={<ITManagement/>} />
        <Route path="/germent" element={<Germent/>} />
      </Routes>
    </div>
  );
}

export default App;
