import React from 'react'
import { CardSpotlight } from './CardApotlight'

const PinButton = ({
    children,
    className="",
    color = "#fb8500",
    radius = 350,
    ...props
}) => {
    return (
        <CardSpotlight className={`${className} bg-transparent p-0 w-66 flex items-center justify-center`} {...props} color={color} radius={radius}>
            <div className="flex items-center justify-center w-66 h-8 relative rounded-full px-3 py-1 text-sm/6 text-gray-700 ring-1 ring-blue hover:ring-lue">
                <span className='text-zinc-950 font-semibold  text-lg flex items-center gap-2'>{children}</span>
            </div>
        </CardSpotlight>
    )
}

export default PinButton