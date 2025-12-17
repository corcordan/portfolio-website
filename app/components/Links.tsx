'use client'

import { Copy, CopyCheck, EllipsisVertical, FileCheck, FileDown, FileUser, Github, Linkedin, Mail, PanelLeftClose, PanelTopClose, Phone } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import LinkPill from './LinkPill'

type LinksProps = {
    openLinks: boolean
}

const Links = ({ openLinks }: LinksProps) => {
    const [linkOpened, setLinkOpened] = useState("")
    const [isCopied, setIsCopied] = useState(false)
    const [isDown, setIsDown] = useState(false)

    useEffect(() => {
        if (openLinks) setLinkOpened("Resume")
    }, [openLinks])

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
        <div className={`flex flex-row h-full text-sm space-x-2`}>
            <LinkPill 
                icon={<FileUser />}
                text="Check out my resume!"
                active={linkOpened === "Resume"}
                onHover={() => setLinkOpened("Resume")}
            />

            <LinkPill 
                icon={<Mail />}
                text="Feel free to email me!"
                active={linkOpened === "Email"}
                onHover={() => setLinkOpened("Email")}
            />

            <LinkPill 
                icon={<Linkedin />}
                text="Go to my LinkedIn!"
                active={linkOpened === "LinkedIn"}
                onHover={() => setLinkOpened("LinkedIn")}
            />

            <LinkPill 
                icon={<Github />}
                text="Look at my GitHub!"
                active={linkOpened === "GitHub"}
                onHover={() => setLinkOpened("GitHub")}
            />

            {/*
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
            */}
        </div>
    )
}

export default Links