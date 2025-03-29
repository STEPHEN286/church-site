import React from 'react'
import pastor from "../assets/img/pastor.jpg"

export default function ShortInfo() {
  return (
    <section className='bg-white'>
        <div className='max-w-7xl px-2 gap-5  items-center sm:px-6 lg:px-8 py-8 mx-auto grid grid-cols-2  '>
            <div className=' rounded-lg overflow-hidden'>
                <img src={pastor} alt={pastor} className='' />
            </div>

            <div>
                <div    className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold'>"Finding Peace Troubled Time"</h1>
                    <p className='text-gray-400'>Join Pastor Michael Thomson as he explores how we can findtrue peace through faith, even in life's most challenging momemnts</p>
                    <span className='flex gap-2'>
                        <button className='bg-black text-white px-4 py-2'>
                            join us
                            </button>
                            <button className='border px-4 py-2'>Learn More</button>
                    </span>
                </div>
            </div>
        </div>

    </section>
  )
}
