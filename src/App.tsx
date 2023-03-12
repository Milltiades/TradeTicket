import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import HeaderComponent from './components/HeaderComponent';
import { ThemeData } from './components/ThemeComponent';
import ConcertsPage from './Pages/ConcertsPage';
import HomePage from './Pages/HomePage';



function App() {

  

  return (
    <div className="App">
      <GlobalStyles/>
      <HeaderComponent />
      <Routes>
        <Route path='/'>
        <Route index={true} element={<HomePage/>}/>
        <Route path='concerts' element={<ConcertsPage/>}/>
        </Route>
      </Routes>
    
    </div>
  )
}

export default App;


const GlobalStyles = createGlobalStyle`
  :root {
 text-rendering: optimizeLegibility;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 -webkit-text-size-adjust: 100%;
}

*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body {
 min-width: 320px;
 min-height: 100vh;
 background: ${ThemeData.colors.silver};
}

.slick-initialized{
width: 120%;
@media (width > 1740px) {
  width: 100%;
}
}

.slick-slide {
  width: 50%;
  padding: 0;
}

`
