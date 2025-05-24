import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Landing from './components/Landing';
import Home from './components/Home';
// import Deadline from './components/Deadline';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/home" element={<Home />} />
        {/* <Route path="/deadline" element={<Deadline />} /> */}
      </Routes>
    </>
  );
}

export default App;
