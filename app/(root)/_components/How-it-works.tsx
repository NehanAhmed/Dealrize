import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import Image from 'next/image';
import React from 'react'

const howItWorksSteps = [
    {
        id: 1,
        name: "Connect & Scan",
        para: "Link inbox. AI scans 90 days instantly.",
        image: "/images/step-connect-scan.png"
    },
    {
        id: 2,
        name: "Discover Hidden Deals",
        para: "AI finds real opportunities. Filters spam automatically.",
        image: "/images/step-discover-deals.png"
    },
    {
        id: 3,
        name: "Close & Earn",
        para: "Respond smart. Track visually. Never miss deals.",
        image: "/images/step-close-earn.png"
    }
];

const HowitWorks = () => {
    return (
        <section id='process' className='w-full mt-20 flex flex-col items-center justify-start gap-10 font-hanken'>
            <div className='w-xl text-center'>
                <HoverBorderGradient
                    containerClassName="rounded-full mx-auto my-5"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center py-1 mx-auto"
                >

                    <span>Just Simple as One Click</span>
                </HoverBorderGradient>
                <h1 className='text-5xl font-extrabold '>Get clear answers in 3 simple steps</h1>
                <p className='my-5 text-neutral-700'>From data to clarity—uncover insights, take action, and grow smarter in three simple steps.</p>
            </div>
            <div className='w-8xl flex items-center justify-center gap-10'>
                {howItWorksSteps.map((i) => (
                    <div key={i.id} className='w-md h-[448px]  p-5 rounded-xl border border-neutral-400 '>
                        <div className='flex flex-col items-start justify-start'>
                            <h1 className='text-2xl font-semibold  '>{i.name}</h1>
                            <p className='text-neutral-700 '>{i.para}</p>
                        </div>
                        <div className='mt-5 w-full  rounded-xl'>
                            <Image src={i.image} alt={i.name} width={100} height={80} className='rounded-xl w-full  '/>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default HowitWorks