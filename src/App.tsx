
import React from 'react';
import { UseTranslationOptions, useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/homePage/Home/Home'


function App() {
  const {t}=useTranslation()
  return (
    <div className="App">
      <Navbar/>
      <div className='container main'>
      <Home/>
      </div>
      {t('learn')}
    </div>
  );
}

export default App;
