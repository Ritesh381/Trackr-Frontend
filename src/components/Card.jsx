import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card() {
    const navigate = useNavigate()
   
     function nav(){
        navigate('/info')
     } 

  return (
    <div className='border-2 border-blue-200 h-[262px] w-[333px] rounded-2xl place-items-center bg-gradient-to-br from-white to-blue-50 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white hover:cursor-pointer'
     onClick={nav}
    >
      <div className='border-2 border-blue-300 w-[330px] h-[122px] rounded-xl place-items-center bg-gradient-to-r from-gray-100 to-gray-200 shadow-inner flex items-center justify-center text-gray-500 font-semibold text-lg'>
        <p>Image</p>
      </div>
      <div className='m-2'>
      <p className='text-2xl font-bold mt-4 text-blue-800 drop-shadow-sm'>Nirma University</p>
      </div>
      <div className='text-xl text-wrap m-2 p-2'>
        <p className='text-gray-700 font-medium bg-blue-50 px-3 py-1 rounded-lg inline-block'>Type: Private</p>
      </div>
    </div>
  )
}

export default Card