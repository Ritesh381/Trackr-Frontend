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
import Announcements from './components/Announcements';
import Footer from './components/Footer';
import Search from './components/Search';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/deadlines" element={<Deadline />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/announcements' element={<Announcements/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
