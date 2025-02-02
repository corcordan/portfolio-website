import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header id="#home" className="flex flex-row justify-between py-5 md:px-10 px-2 bg-blue-950 flex-none">
      <div className="md:text-4xl text-lg font-bold text-blue-300">|corcordan|</div>
      <div className="flex flex-row md:text-lg text-sm md:gap-5 gap-2 items-center text-blue-300 font-bold">   
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#resume">Resume</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </header>
  )
}

export default Header