'use client'

import React, { useState } from 'react'
import Links from './Links'

const Intro = () => {
    const [openLinks, setOpenLinks] = useState(false)
    return (
        <div 
            onMouseEnter={() => setOpenLinks(true)}
            className="flex flex-col w-full my-4"
        >
            <p className="text-3xl">Hello,</p>
            <div className="flex flex-row justify-between items-center text-nowrap">
                <p className="text-3xl">I'm Daniel</p>
                <Links 
                    openLinks={openLinks}
                />
            </div>
            <p className="text-xl">I'm a software engineer interested in web development & AI/ML</p>
        </div>
    )
}

export default Intro