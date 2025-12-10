'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FlipLink } from './FlipLink'
import Link from 'next/link'

const Header = () => {
  const navItems = [
    { id: 1, name: 'How it Works', url: '/how-it-works' },
    { id: 2, name: 'Features', url: '/features' },
    { id: 3, name: 'Pricing', url: '/pricing' }
  ]
  return (
    <header className='w-full px-20 py-5 flex items-center justify-around '>
      <div>
        <Link href='/'>
        <h1 className='text-2xl font-hanken font-extrabold'>Dealrize</h1>
        </Link>
      </div>
      <div className='w-lg flex items-center justify-center gap-4 font-hanken text-lg'>
        {navItems.map((i) => (
          <FlipLink className='' key={i.id} href={`${i.url}`}>
            {i.name}
          </FlipLink>
        ))}
      </div>
      <div className='flex items-center justify-center gap-2'>
        <Button variant={'outline'}><FlipLink href='/login'>
          Login
        </FlipLink></Button>
        <Button><FlipLink href='/get-started'>
          Get Started
        </FlipLink></Button>
      </div>
    </header >
  )
}

export default Header