import React from 'react'
import Hero from './_components/HeroSection'
import FeaturesSection from './_components/FeaturesSection'
import HowitWorks from './_components/How-it-works'
import Integrations from './_components/Integrations'
import Testimonials from './_components/Testimonials'
import PricingSection from './_components/PricingSection'

const page = () => {
  return (
    <main className='w-full min-h-screen font-hanken'>
        <Hero />
        <FeaturesSection />
        <HowitWorks />
        <Integrations />
        <Testimonials />
        <PricingSection />
    </main>
  )
}

export default page