import React from 'react'
import "./App.css"
import Home from './components/Home'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
function App() {
  useEffect(() => {
    AOS.init({ duration: 800 , once: true , offset:100 });
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <Landing></Landing>
    </div>
  )
}

export default App