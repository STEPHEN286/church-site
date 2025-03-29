import React from 'react'

export default function Card() {
  return (
    <div className=' overflow-hidden '>
      <div className='overflow-hidden h-48 bg-red-500 mb-2'>
        <img src="" alt="" />
      </div>
      <div className='space-y-2'>
        <p className='text-xs'>March 29, 2025</p>
        <h1 className='text-xl font-bold'>Your Night</h1>
        <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <button className='bg-black block w-full text-white px-4 py-2'>Register Now</button>
      </div>
    </div>
  )
}
