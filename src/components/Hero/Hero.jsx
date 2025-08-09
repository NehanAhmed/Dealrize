import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { CgProductHunt } from 'react-icons/cg'
import Dashboardimage from '../../assets/Images/Dashboardimage.jpg'
import FlipText from './StaggeringText'
const Hero = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center h-full w-full mt-20'>
                <div className='flex flex-col justify-center items-center gap-8 text-center h-full'>
                    <div className='mb-3'>

                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-700 ring-1 ring-blue hover:ring-lue">
                            <span className='text-zinc-950 font-semibold  text-lg flex items-center gap-2'>#20 on Product Hunt <CgProductHunt className='text-red-500 text-3xl'/></span>
                        </div>


                    </div>
                    <div className='flex justify-center items-center text-center'>
                        <h1 className='relative text-blue text-7xl font-poppins font-extrabold w-6xl leading-25 tracking-tighter text-center'>More Wins, Less Work — The AI Edge for Every <span className='mr-[30%]'><FlipText className='bg-light-blue'>Influencer</FlipText></span>.</h1>
                    </div>
                    <div className='flex justify-center items-center text-center w-3xl'>
                        <p className='font-poppins text-2xl text-blue  '>AI that clears the clutter, finds the brands, and closes your next deal — all while you focus on creating.</p>
                    </div>
                    <div className='flex justify-center items-center text-center'>

                        <Link to='/get-started'><Button className='hover:-translate-y-2 p-4 text-xl py-7 rounded-2xl bg-orange font-semibold cursor-pointer' variant='HeroVariant'>Grow Now</Button></Link>
                    </div>

                </div>
                <div className='h-full w-[70%] mt-20 '>
                    <div className=''>
                        <img src={Dashboardimage} className='w-[100%] rounded-3xl' alt="Hero Image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero