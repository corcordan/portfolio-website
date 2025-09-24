'use client'

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
        <div className="bg-coffee rounded-full w-10 h-10 p-2">
            <button onClick={() => handleBtn()}>Hi</button>
        </div>
    )
}

export default ThemeToggle