'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const [dark, setDark] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const handleBtn = () => {
        if (dark) {
            setTheme('light')
            setDark(false)
        }
        else if (!dark) {
            setTheme('dark')
            setDark(true)
        }
    }

    return (
        <div className="rounded-full w-16 h-16 m-4 flex justify-center items-center transition-colors duration-1000" style={{ backgroundColor: "var(--background)" }}>
            <button onClick={() => handleBtn()}>
                {dark ? (
                    <Sun width={40} height={40} />
                ) : (
                    <Moon width={40} height={40}/>
                )}
            </button>
        </div>
    )
}

export default ThemeToggle