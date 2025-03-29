import React from 'react'
import churchBg from '../assets/img/home-hero.jpg'

export default function HeroSection() {
  return (
    <section className='h-[90vh] bg-black relative'>
        <div className='absolute inset-0 w-full h-full'>
            <img 
                src={churchBg} 
                alt="Church background" 
                className='w-full h-full object-cover opacity-20'
            />
        </div>
        <div className='container mx-auto h-full relative z-10'>
            <div className='flex flex-col items-center justify-center h-full gap-6'>
                <h1 className='text-white text-5xl font-bold text-center'>Welcome to Grace Community Church</h1>
                <p className='text-white text-xl font-medium text-center max-w-2xl'>We are a community of believers who are passionate about Jesus Christ and the Bible.</p>
                <a href="#" role="button" className='bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors'>Join Us</a>
            </div>
        </div>
    </section>
  )
}
