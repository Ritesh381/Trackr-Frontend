import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Landing from './components/Landing';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css';
import Signup from './components/Signup';
import Announcements from './components/Announcements';
import Footer from './components/Footer';
import Search from './components/Search';
import DeadlineWindow from './components/DeadlineWindow';
import Landing from './components/Landing'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/deadline" element={<DeadlineWindow />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/announcements' element={<Announcements/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path="/landing" element={<Landing/>}></Route>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
