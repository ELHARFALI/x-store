import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='min-h-[calc(100vh-70px)] flex justify-center items-center bg-[#F0F5F9]'>
      <div className='px-4 text-center lg:px-1 xl:px-0'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-4'>
          We make shopping easy for you !
        </h1>
        <p className='md:text-lg'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ullam consequatur porro <br className='hidden md:block' /> adipisci voluptate animi quis accusantium voluptas repellendus. At.
        </p>
        <div className='max-w-[500px] mx-auto flex items-center gap-x-4 justify-center md:gap-x-6 lg:gap-x-10 mt-4 lg:mt-6 '>
          <Link to='/products' className=' capitalize md:text-lg lg:text-xl font-medium px-4 py-2 rounded-xl bg-[#00ADB5] transition-all ease-in-out duration-150 hover:bg-white hover:border-2 border-black '>
            Shope from here! 
          </Link>
          <Link to='/about' className=' capitalize md:text-lg lg:text-xl font-medium px-4 py-2 rounded-xl bg-white transition-all ease-in-out duration-150 hover:bg-[#00ADB5] border-2 border-black hover:border-none '>
            Read more about us!
            </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero