import React from 'react'
import { Footer, Header, Hero } from './components'
import { Outlet } from 'react-router'

const App = () => {
    
  return (
    <div className='w-full flex flex-col '> 
      <Header />
      <main className='w-full'>
        {/* <Outlet /> */}
        <Hero/>
      </main>
      <Footer />
    </div>
  )
}

export default App
