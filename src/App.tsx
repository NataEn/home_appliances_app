
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/homePage/Home/Home'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container main'>
      <Home/>
      </div>
    </div>
  );
}

export default App;
