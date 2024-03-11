
import React, {useState} from 'react';
import {SettingsContext, initialSettings} from "./Contexts"
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
import mockSettings from "./pages/settingsPage/mockData.json"

function App() {
  const [settings,setSettings]=useState(initialSettings)

  return (
    
    <Router>
      <SettingsContext.Provider value={{settings, setSettings}}>
      {/* <AuthContext.Provider value={currentUser}> */}
      <div className="App dark">
        <Navbar />
        <div className='container main'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/settings" element={<Settings settings={mockSettings}/>}/>
            <Route path="/designs" element={<Designs />}/>
          </Routes>
        </div>
        <Footer />
      </div>
      {/* </AuthContext.Provider> */}
      </SettingsContext.Provider>
    </Router>
  );
}

export default App;
