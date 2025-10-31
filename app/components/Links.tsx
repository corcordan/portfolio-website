'use client'

import { Copy, CopyCheck, EllipsisVertical, FileCheck, FileDown, Github, Linkedin, PanelLeftClose, PanelTopClose } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

type LinksProps = {
    vertFunc: (bool: boolean) => void;
    isVert: boolean;
}

const Links = ({ vertFunc, isVert }: LinksProps) => {
    const [isCopied, setIsCopied] = useState(false)
    const [isDown, setIsDown] = useState(false)
    const [openPopUp, setOpenPopUp] = useState(false)

    const popupRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const textToCopy = "corcordan@gmail.com"

    const linksFlex = isVert ? "flex-col space-y-4" : "flex-row space-x-4"

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy)
            setIsCopied(true)
        } catch (err) {
            console.error("Failed to copy text:", err)
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node
            if (popupRef.current && !popupRef.current.contains(target) && buttonRef.current && !buttonRef.current.contains(target)) {
                setOpenPopUp(false)
            }
        }

        if (openPopUp) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openPopUp]);
    

    return (
        <div className={`flex ${linksFlex} p-2 h-full w-full text-lg`}>
            <div className="text-lush text-3xl flex flex-row justify-between items-center relative">
                corcordan
                <button
                    ref={buttonRef}
                    onClick={() => setOpenPopUp(!openPopUp)}
                >
                    <EllipsisVertical />
                </button>
                {openPopUp &&
                    <div ref={popupRef} className={`absolute bg-salt text-lush rounded-2xl shadow-2xl grid grid-cols-2 p-4 ${isVert ? "top-10" : "top-20"} -right-10`}>
                        <button
                            onClick={() => vertFunc(true)}
                        >
                            <PanelLeftClose />
                        </button>
                        <button
                            onClick={() => vertFunc(false)}
                        >
                            <PanelTopClose />
                        </button>
                    </div>
                }
            </div>

            <button
                className="flex space-x-1 w-fit items-center hover:cursor-pointer"
                type="button"
                onClick={handleCopy}
            >
                {isCopied ? <CopyCheck /> : <Copy />}
                <p>{textToCopy}</p>
            </button>

            <a
                href="/Daniel Corcoran Resume.pdf"
                download="Daniel Corcoran Resume"
                onClick={() => setIsDown(true)}
                className="flex space-x-1 items-center w-fit"
            >
                {isDown ? <FileCheck /> : <FileDown />}
                <p>Resume</p>
            </a>

            <a 
                href="https://www.linkedin.com/in/corcordan/"
                target="_blank"
                className="flex space-x-1 items-center w-fit"
            >
                <Linkedin />
                <p>LinkedIn</p>
            </a>
            
            <a 
                href="https://github.com/corcordan"
                target="_blank"
                className="flex space-x-1 items-center w-fit"
            >
                <Github />
                <p>GitHub</p>
            </a>
        </div>
    )
}

export default Links