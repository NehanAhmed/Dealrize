import { Button } from '@/components/ui/button'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import React from 'react'
import { FlipLink } from './FlipLink'
import Image from 'next/image'

const Integrations = () => {
    return (
        <section className='w-full mt-40 flex items-center justify-center'>
            <div className='max-w-6xl py-10 border border-neutral-400 flex p-10 rounded-xl shadow-lg  items-center justify-center gap-5'>
                <div className='w-1/2 flex flex-col items-start justify-start gap-5'>
                    <HoverBorderGradient
                        containerClassName="rounded-full "
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center py-1 mx-auto"
                    >

                        <span>Integration</span>
                    </HoverBorderGradient>
                    <div>

                        <h1 className='text-5xl font-extrabold'>Seamless Integrations</h1>
                        <p className='my-2 text-neutral-700 dark:text-neutral-600'>Connect the platforms you already use. One-click authentication syncs your Gmail and YouTube—so DealFlow AI can start finding opportunities in seconds, not hours.</p>
                    </div>
                    <Button className='py-5 '><FlipLink className='shadow-lg text-lg font-hanken' href='/get-started'>Get Started for Free</FlipLink></Button>
                </div>
                <div className='w-1/2 rounded-xl '>
                <Image src='/dashboard.webp' width={100} height={100} alt='Image' className='w-full h-full rounded-xl' />
                </div>
            </div>
        </section>
    )
}

export default Integrations