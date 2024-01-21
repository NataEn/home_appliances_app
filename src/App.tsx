
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/homePage/Home/Home'
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container main'>
      <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
