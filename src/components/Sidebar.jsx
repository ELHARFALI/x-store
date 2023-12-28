import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../utils/data'

const Sidebar = ({handleNav, navIsOpen}) => {
  return (
      <aside className={`${
          navIsOpen ? 'fixed inset-0 md:hidden bg-[#52616B] p-6 transition-all ease-in-out duration-150 z-[99] translate-x-0': 'fixed inset-0 translate-x-[-100%] transition-all ease-in-out duration-150'
      }`}>
          <div className='flex justify-between items-center mb-12'>
            <div>
                    <Link to='/' className='text-[#F0F5F9] text-2xl font-semibold '>X-Store</Link>
            </div>
              <div className="flex justify-between items-center">
              <button type='button' onClick={handleNav} className='text-white'>
                <FaTimes size={25} />
            </button>
            </div>
          </div>

          <ul className="grid gap-y-4">
              {navLinks.map((link) => {
                  const { id, title, path } = link
                  return (
                      <li key={id} className='text-lg bg-white font-medium pl-1 rounded-md transition-all ease-in-out duration-150 hover:pl-4'>
                          <NavLink to={path} onClick={handleNav}>
                              {title}
                            </NavLink>
                      </li>
                  )
              })}
          </ul>
    </aside>
  )
}

export default Sidebar