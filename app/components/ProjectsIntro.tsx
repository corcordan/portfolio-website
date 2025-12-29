import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ProjectTemplate from './ProjectTemplate'

const ProjectsIntro = () => {
	const [hoverProjects, setHoverProjects] = useState(false)

	return (
		<div className="flex flex-col">
			<p className="text-xl">Featured Projects:</p>
			<div className="flex flex-row justify-center space-x-4 my-2">
				<ProjectTemplate
					imageLink="/K8WalshPortfolio.png"
					title="K8 Walsh Portfolio"
					siteURL="https://www.k8walsh.com/"
					githubURL="https://github.com/corcordan/kw-portfolio"
				/>
				<ProjectTemplate
					imageLink="/MovieEDA.png"
					title="Movie EDA"
					siteURL="https://movie-eda.streamlit.app/"
					githubURL="https://github.com/corcordan/movie-eda/"
				/>
			</div>
			<Link
				href="/projects" 
				className="flex flex-row items-center"
				onMouseEnter={() => setHoverProjects(true)}
				onMouseLeave={() => setHoverProjects(false)}
			>
				<p className="text-xl">Go to Projects Page</p>
				<MoveRight className={`ml-2 transition-all duration-300 ease-in-out ${hoverProjects && "translate-x-4 text-lush"}`} />
			</Link>
		</div>
	)
}

export default ProjectsIntro