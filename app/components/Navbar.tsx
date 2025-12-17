import React from 'react'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between text-lg items-center my-4">
        <p className="text-3xl">corcordan</p>
        <div className="flex flex-row space-x-4">
			<NavLink 
				text="Resume"
				href="/resume"
			/>

			<NavLink 
				text="Projects"
				href="/projects"
			/>

			<NavLink 
				text="Blog"
				href="/blog"
			/>
        </div>
    </nav>
  )
}

export default Navbar