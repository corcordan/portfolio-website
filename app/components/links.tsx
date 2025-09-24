'use client'

import { ClipboardCheck, ClipboardPlus, File, Send } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Links = () => {
    const [isCopied, setIsCopied] = useState(false)

    const textToCopy = "corcordan@gmail.com"

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy)
            setIsCopied(true)
        } catch (err) {
            console.error("Failed to copy text:", err)
        }
    }

    return (
        <div className="absolute flex flex-col right-[15%] border-2 p-4 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-1">
                <Send />
                <p>{textToCopy}</p>
                <div className="flex flex-col justify-center items-center">
                    <button
                        className=""
                        type="button"
                        onClick={handleCopy}
                    >
                        {isCopied ? <ClipboardCheck /> : <ClipboardPlus />}
                    </button>
                    <p className="text-xs">{isCopied ? "Copied!" : "Copy to Clipboard"}</p>
                </div>
            </div>
            <div className="flex space-x-1">
                <File />
                <a
                    href="/Daniel Corcoran Resume.pdf"
                    download="Daniel Corcoran Resume"
                >
                    Resume
                </a>
            </div>
            <div>
                <Link 
                    href="https://www.linkedin.com/in/corcordan/"
                    target="_blank"
                >
                    LinkedIn
                </Link>
            </div>
            <div>
                <Link 
                    href="https://github.com/corcordan"
                    target="_blank"
                >
                    Github
                </Link>
            </div>
        </div>
    )
}

export default Links