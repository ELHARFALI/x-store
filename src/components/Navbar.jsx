import React from 'react'
import { navLinks } from '../utils/data'
import { Link, NavLink } from 'react-router-dom'

import { FaBars } from "react-icons/fa";

const Navbar = ({handleNav}) => {
  return (
      <nav className='w-full h-[70px] bg-[#1E2022] text-white'>
          <div className="max-w-[1440px] mx-auto h-full px-4 lg:px-2 xl:px-0 flex justify-between items-center">
              <div>
                  <Link to='/' className='text-[#F0F5F9] text-xl font-semibold lg:text-2xl xl:text-3xl'>X-Store</Link>
              </div>
              <ul className='hidden md:flex gap-x-4'>
                  {navLinks.map((link) => {
                      const { id, title, path } = link
                      return (
                          <li key={id}>
                              <NavLink to={path} className='text-lg font-medium'>
                                  {title}
                              </NavLink>
                          </li>
                      )
                  })}
              </ul>
              <div className='flex md:hidden justify-center items-center'>
                  <button type='button' onClick={handleNav}>
                      <FaBars size={25} />
                  </button>
              </div>
          </div>
    </nav>
  )
}

export default Navbar