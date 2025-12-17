import React from 'react'

type LinkPillProps = {
    icon: React.ReactNode
    text: string
    active: boolean
    onHover: () => void
}

const LinkPill = ({ icon, text, active, onHover}: LinkPillProps) => {
    return (
        <div 
            onMouseEnter={onHover}
            className="bg-lush rounded-full p-2 flex flex-row items-center overflow-hidden cursor-default transition-all duration-300 ease-out"
        >
            {icon}
            <span
                className={`whitespace-nowrap transition-all duration-700 ease-in-out ${active ? "max-w-[200px] opacity-100 ml-2" : "max-w-0 opacity-0 ml-0"}`}
            >
                {text}
            </span>
        </div>
    )
}

export default LinkPill