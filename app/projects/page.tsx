import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

const ProjectsPage = () => {
  return (
    <div className="flex justify-center">
			<div className="w-2/5 relative flex flex-col">
				<Navbar />
				<main className="mb-8">
					<Projects />
				</main>
			</div>
		</div>
  )
}

export default ProjectsPage