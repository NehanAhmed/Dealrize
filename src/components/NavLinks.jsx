import React from 'react'
import GitubStars from './ui/GithubStars'
import { Github, Twitter, X } from 'lucide-react'
import { Button } from './ui/button'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { Link } from 'react-router'
const NavLinks = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            path: 'https://github.com/NehanAhmed',
            icon: <BsGithub  className=' text-xl text-blue transition-all duration-300 ease-in-out'/>
        },
        {
            name: 'Twitter',
            path: 'https://x.com/Nehanahmed988',
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
                <Link target='_blank' rel='noopener noreferrer' to={link.path} key={idx} className='flex items-center gap-2  rounded'>
                    
                    {link.icon}

                    
                </Link>
            ))}
        </div>
        <div>
            <Button className=' text-zinc-50 bg-orange hover:text-white hover:bg-orange/70 transition-all duration-300 ease-in-out px-3 font-semibold text-lg h-[45px]  '>
                Get Started
            </Button>
        </div>
    </div>
  )
}

export default NavLinks