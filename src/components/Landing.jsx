import React from 'react'
import banner from '../assets/banner.jpg'
import StatsChart from './StatsChart'
import { useEffect } from 'react';
import AOS from 'aos'

function Landing() {
    useEffect(() => {
  AOS.refresh();
}, []);
   
   return (
       <div className='relative w-full h-[66vh] bg-gradient-to-b from-blue-50 to-white'>
      <img src={banner} alt='banner' className='w-full h-[66vh] opacity-90 object-cover shadow-2xl'></img>
      <div className='w-full h-[25vh] bg-gradient-to-r from-blue-50 via-white to-blue-50 py-8'>
        <h1 className='text-4xl text-blue-600 flex justify-center font-extrabold m-4 tracking-wide drop-shadow-lg'>Welcome To Trackr</h1>
        <p className='text-4xl text-blue-900 flex justify-center font-bold px-4 text-center leading-tight drop-shadow-md'>From entrance exams to enrollment — we've got you covered</p>
      </div>
      <div data-aos='fade-up' data-aos-offset="0" className='bg-gradient-to-b from-white to-blue-50 py-8'>
      <div className='flex m-4 items-center'> 
        <span className="inline-block w-[6px] h-8 bg-gradient-to-b from-blue-500 to-blue-700 mr-3 rounded-full shadow-lg ml-2"></span>
        <h1 className='text-4xl font-bold text-blue-500 animate-bounce drop-shadow-lg'>Did You Know?</h1>
      </div>
      <div className='flex justify-center mr-3 px-4'>
        <div className='max-w-4xl bg-white rounded-2xl shadow-2xl p-8 border border-blue-100'>
         <p className="text-2xl text-blue-900 mb-6 mt-9 text-justify m-2 ml-3 text-wrap leading-relaxed">
    Every year, over <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">5 lakh</span> students appear for A Group exams, 
    and more than <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">3 lakh</span> for B Group exams.
  </p>
   <p className="text-2xl text-blue-800 mb-6 text-justify m-2 ml-3 text-wrap leading-relaxed">
     But many students miss important deadlines due to a lack of organized tracking. <span className="font-semibold text-blue-600">Trackr is here to fix that.</span>
    </p>
    </div>
  <StatsChart  />
      </div>
      <div className='bg-gradient-to-r from-blue-50 to-white py-8 mt-8'>
        <p className='text-3xl text-blue-900 font-bold text-wrap m-3 text-center drop-shadow-md'>Explore the key features that help students stay organized and informed.</p>
      </div>
     <div className="flex gap-8 justify-center m-6 px-4">
  <div
    className="w-72 h-52 bg-gradient-to-br from-white to-blue-50 text-xl text-blue-800 font-semibold border-2 border-blue-200 rounded-2xl shadow-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
    data-aos="zoom-in"
  >
    🎓 Find Your Perfect College Match — Tailored Just for Your Stream!
  </div>
   
  <div
    className="w-72 h-52 bg-gradient-to-br from-white to-green-50 text-xl text-blue-800 font-semibold border-2 border-green-200 rounded-2xl shadow-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-green-300 hover:bg-gradient-to-br hover:from-green-50 hover:to-white"
    data-aos="zoom-in"
    data-aos-delay="100"
  >
    📅 Stay Ahead — Get Notified Before Every Exam & Application Deadline!
  </div>
   
  <div
    className="w-72 h-52 bg-gradient-to-br from-white to-purple-50 text-xl text-blue-800 font-semibold border-2 border-purple-200 rounded-2xl shadow-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-purple-300 hover:bg-gradient-to-br hover:from-purple-50 hover:to-white"
    data-aos="zoom-in"
    data-aos-delay="200"
  >
    ⚡ Apply in a Click — Let Autofill Handle the Boring Stuff!
  </div>
   
  <div
    className="w-72 h-52 bg-gradient-to-br from-white to-orange-50 text-xl text-blue-800 font-semibold border-2 border-orange-200 rounded-2xl shadow-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-orange-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white"
    data-aos="zoom-in"
    data-aos-delay="300"
  >
    🔔 Never Miss a Beat — Get Instant College Announcements as They Drop!
  </div>
</div>
      <div className='flex gap-6 m-4 justify-center py-8'>
        <button className='text-xl text-white font-semibold shadow-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-wrap m-4 rounded-xl border-2 border-blue-300 transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:from-sky-600 hover:to-blue-700 hover:shadow-3xl w-[194px] h-[43px] place-items-center'>Explore Colleges</button>
        <button className='text-xl font-semibold shadow-2xl text-blue-700 bg-gradient-to-r from-white to-blue-50 rounded-xl transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:from-blue-50 hover:to-white hover:shadow-3xl text-wrap m-4 w-[198px] h-[43px] border-2 border-solid border-blue-300 hover:border-blue-400'>Important Deadlines</button>
      </div>
      </div>
    </div>
       
   )
}

export default Landing