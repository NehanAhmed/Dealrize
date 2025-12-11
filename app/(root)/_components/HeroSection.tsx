'use client'
import { IconBrandYcombinator } from '@tabler/icons-react';

import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import Image from 'next/image'
import React from 'react'
import { CreditCard } from 'lucide-react'
import { FlipLink } from './FlipLink'
import { HeroImage } from './HeroImage'

const Hero = () => {
    return (
        <section className='w-full font-hanken min-h-screen flex flex-col items-center justify-start mt-20'>
            <div className='w-1/2 text-center'>
                <HoverBorderGradient
                    containerClassName="rounded-full mx-auto my-5"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center py-1 mx-auto"
                >

                    <span>Not Backed by</span>
                    <IconBrandYcombinator className='text-orange-500 mx-1' stroke={2} />
                </HoverBorderGradient>
                <h1 className='font-montserrat my-5 text-6xl font-extrabold '>Turn Inbox Chaos Into Closed Deals</h1>
                <p className='text-lg w-120 text-neutral-700 mx-auto'>AI-powered detection that turns inbox chaos into organized opportunities—automatically.</p>
                <Button className='mt-8 py-5 '><FlipLink className='shadow-lg text-lg font-hanken' href='/get-started'>Get Started for Free</FlipLink></Button>
                <p className='flex items-center justify-center mx-auto mt-5 gap-2'><CreditCard className='' /> No credit card Required </p>
            </div>
            <div className='w-full mx-auto flex items-start justify-center '>
                <HeroImage />
            </div>
        </section>
    )
}



export default Hero