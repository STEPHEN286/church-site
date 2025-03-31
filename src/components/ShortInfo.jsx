import React from 'react'


export default function ShortInfo({image,children, bgColor}) {
  return (
    <section className={`${bgColor ? `bg-[${bgColor}]` : "bg-[#F9F9F9]"}`}>
        <div className='max-w-7xl px-2 gap-5  items-center sm:px-6 lg:px-8 py-8 mx-auto grid grid-cols-2  '>
            <div className=' rounded-lg overflow-hidden'>
                <img src={  image} alt={image} className='w-full h-full object-cover' />
            </div>

           
               {children}
        </div>

    </section>
  )
}
