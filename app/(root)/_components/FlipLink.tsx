'use client'
import { motion } from 'motion/react'

export const FlipLink = ({ children, href, className }: { children: string; href: string; className?: string }) => {
    return <motion.a
        initial='initial'
        whileHover="hovered"
        href={href}
        className={`relative block overflow-hidden  whitespace-nowrap ${className}`}

    >
        <motion.div
            variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" }
            }}
        >

            {children}
        </motion.div>
        <motion.div
            className='absolute inset-0'
            variants={{
                initial: { y: "100%" },
                hovered: { y: 0 }
            }}
        >

            {children}
        </motion.div>
    </motion.a>
}