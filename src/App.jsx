import React, { use } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css';
import Signup from './components/Signup';
import Announcements from './components/Announcements';
import Footer from './components/Footer';
import Search from './components/Search';
import DeadlineWindow from './components/DeadlineWindow';
import Landing from './components/Landing'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
      <Routes>
        <Route path="/deadline" element={<DeadlineWindow />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/announcements' element={<Announcements/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path="/" element={<Landing/>}></Route>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
