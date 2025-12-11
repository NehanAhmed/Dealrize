'use client'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import React from 'react'

const Testimonials = () => {
    return (
        <section className='w-full mt-40 flex flex-col justify-center items-center gap-5'>
            <div className='w-full text-center flex flex-col items-center justify-center gap-5'>
                <HoverBorderGradient
                    containerClassName="rounded-full "
                    as="button"
                    className="dark:bg-black bg-white  text-black dark:text-white flex items-center py-1 mx-auto"
                >

                    <span>People with ❤️</span>
                </HoverBorderGradient>
                <h1 className='text-5xl font-extrabold font-montserrat '>Hear What our Costumer Says</h1>
                <p className="text-gray-800 dark:text-neutral-600 max-w-2xl mx-auto ">
                    Join thousands of satisfied customers who've transformed their business with our cutting-edge solutions. Discover how our platform drives growth, streamlines operations, and delivers exceptional results every single day.
                </p>
            </div>
            <div>
                <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
        </section>
    )
}
const testimonials = [
    {
        quote:
            "Finally found deals I didn't even know existed in my inbox. Closed three partnerships in the first week—this is a game-changer for creators.",
        name: "@TechWithTim",
        designation: "Tech Creator • 1.2M Subscribers",
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "DealFlow AI saved me 10+ hours weekly. The AI response suggestions are so good, brands think I have a full management team.",
        name: "@SarahDiAvola",
        designation: "Lifestyle Influencer • 450K Subscribers",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "I was missing 30% of my brand deals buried in spam. Now every opportunity is organized and tracked—my revenue literally doubled.",
        name: "@MattDAvella",
        designation: "Documentary Creator • 3.8M Subscribers",
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "The visual pipeline is brilliant. I can see exactly where each brand deal stands and never let opportunities go cold. Absolute must-have.",
        name: "@AliAbdaal",
        designation: "Productivity YouTuber • 5.2M Subscribers",
        src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Setup took 2 minutes and I immediately found $15K worth of deals I'd overlooked. Every creator needs this—it's like having a personal agent.",
        name: "@ImanGadzhi",
        designation: "Business & Finance • 4.5M Subscribers",
        src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
export default Testimonials