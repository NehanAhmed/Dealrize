import React from 'react'
import GitubStars from './ui/GithubStars'
import { Github, Twitter, X } from 'lucide-react'
import { Button } from './ui/button'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
const NavLinks = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            path: 'https://github.com/NehanAhmed',
            icon: <BsGithub  className=' text-xl text-blue transition-all duration-300 ease-in-out'/>
        },
        {
            name: 'Twitter',
            path: 'https://www.linkedin.com',
            icon: <BsTwitterX className='text-xl text-blue hover: transition-all duration-300 ease-in-out'/>
        },
        {

        }
    ]
  return (
    <div className='flex justify-center items-center gap-4 '>
        <GitubStars />
        <div className='flex gap-4 items-center'>
            {socialLinks.map((link,idx) => (
                <a href={link.path} key={idx} className='flex items-center gap-2 cursor-pointer rounded'>
                    
                    {link.icon}

                    
                </a>
            ))}
        </div>
        <div>
            <Button className='border border-orange  text-zinc-50 bg-orange hover:text-white transition-all duration-300 ease-in-out px-3 font-semibold text-lg h-[45px] cursor-pointer '>
                Get Started
            </Button>
        </div>
    </div>
  )
}

export default NavLinks