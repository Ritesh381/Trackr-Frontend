// Search.js
import React from 'react'
import Card from './Card'

function Search() {
  return (
    <div className='flex-row bg-gradient-to-b from-blue-50 to-white min-h-screen'>
      <div className='flex justify-center py-8'>
       <h1 className='text-4xl font-bold mb-4 text-blue-700 m-5 drop-shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>Explore Colleges</h1>
      </div>
      <form className='flex gap-4 justify-center mb-8'>
        <input
           type="text"
           placeholder="Search colleges..."
           className='p-4 w-200 border-2 border-blue-200 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 text-lg placeholder-gray-400 bg-white hover:shadow-xl'
        />
      </form>
      <div className='flex m-5 flex-wrap gap-8 justify-center px-4'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Search