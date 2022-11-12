import React, { useState } from 'react'
import Main from './component/main/Main';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';

import './reset.module.scss'
import './base.module.scss'

function App() {

  const [theme, setTeme] = useState('light')

  function changeThemeHandler() {
    if (theme === 'light') {
      setTeme('dark')
    } else {
      setTeme('light')
    }
  }
  return (
    <div className='App' datatheme={theme}>
      <Header changeTheme={changeThemeHandler} />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
