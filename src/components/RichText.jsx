import React from 'react'
import { CardSpotlight } from './ui/CardApotlight'

const RichText = () => {
    return (
        <CardSpotlight radius='50' color='#219EBC' className=' w-[825px] h-60 flex justify-center items-center m-auto my-20 border rounded-4xl'>
            <div className='w-4xl m-auto flex justify-center items-center text-center my-30 px-4 py-10 border border-gray-200 bg-white  rounded-4xl'>
                <div className='w-full flex flex-col justify-between items-center gap-3 text-center p-3'>
                    <div className='w-2xl flex gap-4 wrap-break-word'>
                        <h1 className='text-3xl font-semibold tracking-tight font-poppins'>For 🏝️ individuals, 🎨 independent creators and 💼 Influencers</h1>
                    </div>
                    <div className='w-3xl'>
                        <p className='text-xl font-poppins tracking-tight'>Empowering individuals, creators, and tech innovators with cutting-edge AI solutions.</p>
                    </div>
                </div>
            </div>
        </CardSpotlight>
    )
}

export default RichText