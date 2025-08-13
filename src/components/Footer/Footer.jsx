import React from 'react'
import Logo from '../Logo'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router'

const Footer = () => {
  
  return (
    <footer className='whitespace-nowrap relative w-full bg-zinc-50 flex flex-col items-center justify-between border border-t-gray-200 dark:border-neutral-700' style={{ minHeight: '400px' }}>
      <div className='w-full flex justify-around items-center'>
        <div className='flex flex-col font-poppins gap-6'>
          <div className='flex items-start p-0'><Logo width='150px' /></div>
          <p className=' font-semibold'>More Deals, Less Effort</p>
          <div className='flex gap-4 text-xl '>
            <div><BsGithub /></div>
            <div><BsLinkedin color="#0077B5"/></div>
            <div><FaXTwitter /></div>
          </div>
          <div>&copy; 2025 Dealrize. All rights reserved.</div>
        </div>
        <div>
          <ul className='flex flex-col gap-2 font-poppins'>
            <li><h1 className='text-xl font-bold'>Business Links</h1></li>
            <li><Link to='/feautures'>Feautures</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li><Link to='/faq'>FAQ's</Link></li>
            <li><Link to='/support'>Support</Link></li>
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-2 font-poppins'>
            <li><h1 className='text-xl font-bold'>Company</h1></li>
            <li><Link to='/about-us'>About Us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
          </ul> 
        </div>
      </div>
      <div className='w-full flex justify-center items-baseline flex-shrink-0'>
        <h1 className='font-extrabold text-orange text-[400px] font-footer'>Dealrize</h1>
      </div>
      <div className="z-10 absolute left-0 bottom-0 w-full h-70 pointer-events-none bg-gradient-to-b from-transparent to-gray-800"></div>
    </footer>
  )
}

export default Footer