import React from 'react'
import { FeauturedSection, FeauturedSection2, Footer, Header, Hero, LogoDiv, PricingSection, RichText, Statistic, Testimonial } from './components'
import { Outlet } from 'react-router'

const App = () => {    
  
  return (
    <> 
      <Header />
      <main className='w-full bg-zinc-50 overflow-x-hidden'>
        {/* <Outlet /> */}
        <Hero/>
        <LogoDiv />
        <RichText />
        <FeauturedSection />
        <FeauturedSection2  />
        <PricingSection />
        <Statistic />
        <Testimonial />
      </main>
      <Footer />
    </>
  )
}

export default App
