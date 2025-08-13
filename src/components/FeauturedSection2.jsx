import React from 'react'
import FeauturedImage from '../assets/Images/67c6841f88ec93875169eaca_Image.svg'
import { Link } from 'react-router'
import { FaArrowRightLong } from 'react-icons/fa6' 
const FeauturedSection2 = () => {
  return (
    <div className='h-3/5 w-full flex justify-center items-center my-10'>
      <div className='w-3/5 h-[100%] flex justify-center items-center border rounded-2xl'>
        <div className='w-1/2 '>
          <img src={FeauturedImage} alt="Feautured Image" className='w-full' />
        </div>
        {/* <div className="border border-zinc-500 h-full w-1"></div> */}
                

        <div className='w-1/2 p-6 flex flex-col justify-center items-start gap-4'>
          <h1 className='text-3xl font-poppins font-bold'>Handle multiple inboxes seamlessly</h1>
          <p className='text-lg font-poppins'>Built for busy influencers, our AI scans every email, finds real brand deals, and helps you close them faster — so you never miss an opportunity.</p>
          <div className='font-poppins text-light-blue text-lg flex my-8'><Link className='flex items-center gap-' to='/get-started'>Let’s Close Deals <FaArrowRightLong /></Link></div>
        </div>
        
      </div>
    </div>
  )
}

export default FeauturedSection2