import React from 'react'
import { Logo,NavLinks } from '../index'
import { useSelector } from 'react-redux'

const Header = () => {
  const navItems = [
    {
      name: 'Pricing',
      path: '/pricing'
    },
    {
      name: 'Products',
      path: '/products'
    },
    {
      name: 'Docs',
      path: '/docs'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
    
  ]
  return (
    <div className='flex justify-around items-center bg-zinc-50 border border-b-zinc-2  00'>
      <div className='flex justify-center items-center px-5'>
        <Logo width='130px'/>
      </div>
      <div className='flex justify-center items-center p-4 '>
        <ul className='flex gap-8 items-center text-xl font-medium font-poppins '>
          {
            navItems.map((item) => (
              <a href={item.path} key={item.name}><li className='text-blue'>{item.name}</li></a>
            ))
          }
        </ul>
      </div>
      <div>
        <NavLinks />
      </div>
    </div>
  )
}

export default Header