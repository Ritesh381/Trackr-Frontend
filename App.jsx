import React from 'react'
import "./App.css"
import Home from './components/Home'
import NavBar from './components/NavBar'
import AOS from 'aos'

import { useEffect } from 'react'


function App() {
  useEffect(() => {
    AOS.init({ duration: 800 , once: true , offset:100 });
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      

    </div>
  );
}

export default App;
