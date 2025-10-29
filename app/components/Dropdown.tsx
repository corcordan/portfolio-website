'use client'

import { ChevronDown, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

type DropdownProps = {
    children: React.ReactNode
    text: string
    isOpen?: boolean
}

const Dropdown = ({ children, text, isOpen = false }: DropdownProps) => {
    const [open, setOpen] = useState(isOpen)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="flex flex-col space-y-2">
            <div className="flex flex-row justify-start items-start space-x-4">
                {open ? (
                    <button
                        onClick={handleOpen}
                        className="mt-1"
                    >
                        <ChevronDown />
                    </button>
                ) : (
                    <button
                        onClick={handleOpen}
                        className="mt-1"
                    >
                        <ChevronRight />
                    </button>
                )}
                <p className="text-2xl">•</p>
                <p className="text-2xl">{text}{!open && (<span className="text-lg ml-4">...</span>)}</p>
            </div>
            {open &&
                <div className="pl-5 ml-11 border-l-2 border-salt flex flex-col space-y-2">
                    {children}
                </div>
            }
        </div>
    )
}

export default Dropdown