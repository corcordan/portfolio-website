import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-row justify-between py-5">
        <div className="text-4xl font-bold">|corcordan|</div>
        <div className="flex flex-row text-lg gap-5">
            <div className="">Home</div>
            <div className="">About</div>
            <div>Resume</div>
            <div>Projects</div>
            <div>Contact</div>
        </div>
    </header>
  )
}

export default Header