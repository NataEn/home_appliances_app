
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Home from './pages/homePage/Home/Home';
import Settings from "./pages/settingsPage/Settings";
import Designs from './pages/designsPage/Designs/Designs';
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='container main'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/settings" element={<Settings />}/>
            <Route path="/designs" element={<Designs />}/>
          </Routes>
        </div>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
