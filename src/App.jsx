import React from 'react'
import Main from './component/main/Main';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import { useTheme } from './context/ThemeContext';

import './reset.module.scss'
import './base.module.scss'

function App() {

  const theme = useTheme()


  return (
    <div className='App' datatheme={theme}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
