import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import React from 'react'
import { BentoFeatures } from './BentoFeatures'

const FeaturesSection = () => {
    return (
        <section id='features' className='w-full flex flex-col items-center justify-start gap-14 '>
            <div className='w-xl text-center'>
                <HoverBorderGradient
                    containerClassName="rounded-full mx-auto my-5"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center py-1 mx-auto"
                >

                    <span>Unique Features</span>
                </HoverBorderGradient>
                <h1 className='font-montserrat text-5xl font-extrabold'>Everything You Need to Close More Deals</h1>
                <p className='text-md font-hanken text-neutral-800 dark:text-neutral-600 my-5 w-lg mx-auto'>AI detects opportunities, organizes visually, suggests responses—turning inbox chaos into closed partnerships instantly.</p>
            </div>
            <div>
                <BentoFeatures />

            </div>
        </section>
    )
}

export default FeaturesSection