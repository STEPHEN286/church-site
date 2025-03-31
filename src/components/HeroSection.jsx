import React from 'react'

const HeroSection = ({ 
  image, 
  title, 
  description, 
  buttons = [], 
  height = "70vh",
  opacity = "30"
}) => {
  return (
    <section className={`h-[${height}] bg-black relative`}>
      <div className='absolute inset-0 w-full h-full'>
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover opacity-${opacity}`}
        />
      </div>
      <div className='container mx-auto h-full relative z-10'>
        <div className='flex flex-col items-center justify-center h-full gap-6'>
          <h1 className='text-white text-5xl font-bold text-center'>{title}</h1>
          <p className='text-white text-xl font-medium text-center max-w-2xl'>
            {description}
          </p>
          {buttons.length > 0 && (
            <div className='flex gap-4'>
              {buttons.map((button, index) => (
                <a 
                  key={index}
                  href={button.href} 
                  className={`${
                    button.variant === 'outline' 
                      ? 'border-2 border-white text-white hover:bg-white/10' 
                      : 'bg-white text-black hover:bg-gray-100'
                  } px-8 py-3 rounded-md font-medium transition-colors`}
                >
                  {button.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
