
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
import {addClassNames} from "./Utils/mainUtils"

function App() {
  const [settings,setSettings]=useState(initialSettings)
  const settingsMainClassNames=Object.entries(settings).map(([key,value])=>`${key}-${value}`)
  console.log(settingsMainClassNames)

  return (
    
    <Router>
      <SettingsContext.Provider value={{settings, setSettings}}>
      {/* <AuthContext.Provider value={currentUser}> */}
      <div className={addClassNames(["App", ...settingsMainClassNames])}>
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
