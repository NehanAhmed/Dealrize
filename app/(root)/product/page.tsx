import React from 'react'
import ProductHeroSection from './_components/ProductHero'
import ProductProblemSection from './_components/ProductProblem'
import ProductDemoSection from './_components/ProductDemo'
import ProductHowItWorksSection from './_components/How-it-work'
import ProductAITechSection from './_components/AITechnology'
import ProductIntegrationsSection from './_components/Integration'
import ProductTestimonialsSection from './_components/testimonial'
import ProductComparisonSection from './_components/comparison'
import ProductFinalCTASection from './_components/finalcta'

const Page = () => {
    return (
        <main className='w-full min-h-screen font-hanken'>
            <ProductHeroSection />
            <ProductProblemSection />
            <ProductDemoSection />
            <ProductHowItWorksSection />
            <ProductAITechSection />
            <ProductIntegrationsSection />
            <ProductTestimonialsSection />
            <ProductComparisonSection />
            <ProductFinalCTASection />


        </main>
    )
}

export default Page