import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Landing from './components/Landing';
import Home from './components/Home';
import Deadline from './components/Deadline';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/deadlines" element={<Deadline />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </>
  );
}

export default App;
