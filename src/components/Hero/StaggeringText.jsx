import React from 'react'
import { motion } from 'motion/react'


const FlipText = ({ children }) => {
    return (
        <motion.a initial='initial' whileHover='hovered' className={`rounded-lg absolute overflow-hidden whitespace-nowrap uppercase w-fit`}>
            <motion.div
                variants={{
                    initial: { y: 0 },
                    hovered: { y: "-100%" },
                }}
                className={`text-zinc-50 bg-light-blue w-fit p-2`}
            >
                {children}
            </motion.div>
            <motion.div
            
                variants={{
                    initial: { y: "100%" },
                    hovered: { y: 0 },
                }}
                className={`text-zinc-50 bg-orange absolute inset-0`}
            >
                {children}
            </motion.div>
        </motion.a>

    )
}
export default FlipText