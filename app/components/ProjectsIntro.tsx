import { ExternalLink, Github, MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const ProjectsIntro = () => {
	const [hoverProjects, setHoverProjects] = useState(false)

	return (
		<div className="flex flex-col">
			<p className="text-xl">Featured Projects:</p>
			<div className="flex flex-row justify-center space-x-4 my-2">
				<div className="flex flex-col space-y-2 bg-slate/25 shadow-lg border-1 border-steel/25 p-4 rounded-2xl">
					<Image 
						src="/K8WalshPortfolio.png"
						alt="K8Walsh Portfolio"
						width={300}
						height={300}
						className="rounded-lg"
					/>
					<div className="flex flex-row justify-between items-center">
						<p className="text-xl">K8 Walsh Portfolio</p>
						<div className="flex flex-row justify-center items-center space-x-2">
							<Link
								href="https://www.k8walsh.com/"
								className="hover:bg-steel/50 p-1 rounded-sm transition-colors duration-300"
							>
								<ExternalLink />
							</Link>
							<Link
								href="https://github.com/corcordan/kw-portfolio"
								className="hover:bg-steel/50 p-1 rounded-sm transition-colors duration-300"
							>
								<Github />
							</Link>
						</div>
					</div>
					<p>Simple, yet elegant, portfolio website</p>
				</div>
				<div className="flex flex-col bg-slate/25 shadow-lg border-1 border-steel/25 p-4 rounded-2xl">
					<Image 
						src="/K8WalshPortfolio.png"
						alt="K8Walsh Portfolio"
						width={300}
						height={300}
					/>
				</div>
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