import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-row justify-between py-5 px-10 bg-blue-950 flex-none">
      <div className="text-4xl font-bold text-blue-300">|corcordan|</div>
      <div className="flex flex-row text-lg gap-5 items-center text-blue-300 font-bold">
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