import React from 'react'
import { ChartScatter, DiamondIcon, HandshakeIcon, MailIcon } from 'lucide-react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { GiLightningArc } from 'react-icons/gi'
import { BiPaperPlane } from 'react-icons/bi'
import {ComparisonCard} from './index'
const FeauturedSection = () => {
    
    const LogoInfo = [
        {
            name: 'Filter Deals',
            icon: <FaMagnifyingGlass className='text-blue' size={24} style={{ position: 'relative', left: 20 }} />
        },
        {
            name: 'Close Faster',
            icon: <GiLightningArc className='text-blue' size={24} style={{ position: 'relative', left: 30 }} />
        },
        {
            name: 'Boost Outreach',
            icon: <BiPaperPlane className='text-blue' size={24} />
        },
        {
            name: 'Track Collabs',
            icon: <ChartScatter className='text-blue' size={24} style={{ position: 'relative', left: 4 }} />
        },
        {
            name: 'Secure Brands',
            icon: <HandshakeIcon className='text-blue' size={24} />
        },
    ]
    return (
        <div className='flex flex-col justify-center items-center w-full mt-20'>
            <div className='flex flex-col justify-center items-center '>
                <div className='w-full flex justify-center items-center text-center my-10'>
                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-700 ring-1 ring-blue hover:ring-lue">
                        <span className='text-light-blue font-semibold  text-lg flex items-center gap-2 font-poppins '><DiamondIcon  color='orange'/>Collabrate Faster</span>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center text-center'>
                    <h1 className='text-7xl font-extrabold text-orange w-[700px] font-poppins my-5 '>Never Miss a Deal</h1>
                    <p className='w-3xl text-xl font-poppins tracking-tight'>With AI filtering, brand detection, and fast-response tools, influencers can secure more collaborations without the daily grind.</p>
                </div>

            </div>
            <div className='w-full flex flex-col justify-center items-center mt-20'>
                <div>
                    
                        <div className='flex justify-center items-center gap-10 flex-wrap mt-10'>
                            {LogoInfo.map((item, index) => (
                            <div key={index} className='flex flex-col items-start gap-3'>
                                {item.icon}
                                <span className='text-2xl font-semibold'>{item.name}</span>
                            </div>
                            ))}
                        </div>
                    
                </div>
                <div>
                    <ComparisonCard />
                </div>
            </div>
        </div>
    )
}

export default FeauturedSection