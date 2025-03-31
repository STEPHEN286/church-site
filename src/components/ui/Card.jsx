import { ClockIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Card({image, title, date, description}) {
  return (
    <div className=' overflow-hidden shadow'>
      <div className='overflow-hidden h-48 bg-red-500 mb-2'>
        <img src={image} alt="" />
      </div>
      <div className='space-y-2 p-4'>
        <p className='text-xs'>{date}</p>
            <h1 className='text-xl font-bold'>{title}</h1>
        <p className='text-gray-400 text-sm'>{description}</p>
        {/* <p className='text-gray-400 text-sm'>&#x1F552</p> */}
        <p className='text-gray-400 text-sm flex items-center gap-2'>
        <ClockIcon className='w-4 h-4' />
        <span>10:00 AM</span></p>
        {/* <button className='bg-black block w-full text-white px-4 py-2'>Register Now</button> */}
      </div>
    </div>
  )
}
