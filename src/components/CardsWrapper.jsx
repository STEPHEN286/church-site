import React from 'react'
import Card from './ui/Card'
export default function CardsWrapper() {
  return (
    <div className='bg-[#F9F9F9]'>
     <div className='max-w-7xl px-8 py-24  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <Card />
          <Card />
          <Card />
     </div>
     
    </div>
  )
}
