import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from './layout/navbar';
import Home from './Components/Home';
import Apropos from './Components/Apropos';
import Business from './Components/Business';
import Contact from './Components/Contact';
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      {/* <Apropos />
      <Business />
      <Contact /> */}


    </div>
  );
}

export default App;
