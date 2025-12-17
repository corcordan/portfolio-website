'use client'

import Link from 'next/link'
import React from 'react'

type NavLinkProps = {
    text: string
    href: string
}

const NavLink = ({text, href}: NavLinkProps) => {
    return (
        <Link
            href={href}
            className="p-2 rounded-lg transition-all hover:bg-slate duration-300 active:duration-100 active:scale-90"
        >
            {text}
        </Link>
    )
}

export default NavLink