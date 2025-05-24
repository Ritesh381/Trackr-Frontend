import React from 'react'

function Search() {
  return (
    <div className='flex-row'> 
      <h1 className='text-2xl font-bold mb-4'>Search Colleges</h1>
      <form className='flex gap-4 justify-center'>
        <input 
          type="text" 
          placeholder="Search by college name" 
          className='p-2 w-200 border border-gray-300 rounded'
        />
        <button 
          type="submit" 
          className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default Search