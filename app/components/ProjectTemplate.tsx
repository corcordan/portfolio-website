import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ProjectTemplateProps = {
    imageLink: string
	title: string
	siteURL?: string
	githubURL?: string
	desc?: string
	tools?: string[]
}   

const ProjectTemplate = ({ imageLink, title, siteURL, githubURL, desc, tools }: ProjectTemplateProps) => {
	const toolClass = "bg-lush p-1.5 rounded shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-1 text-sm cursor-default mb-2"

	return (
		<div className="flex flex-col space-y-2 bg-slate/25 hover:bg-slate/75 transition-colors duration-500 shadow-lg border-1 border-steel/25 p-4 rounded-2xl">
			<Image 
				src={imageLink}
				alt="Project Image"
				width={300}
				height={100}
				className="rounded-lg"
			/>
			<div className="flex flex-row justify-between items-center">
				<p className="text-xl">{title}</p>
				<div className="flex flex-row justify-center items-center space-x-2">
					{siteURL &&
						<Link
							href={siteURL}
							className="hover:bg-steel/50 p-1 rounded-sm transition-colors duration-300"
						>
							<ExternalLink />
						</Link>
					}
					{githubURL &&
						<Link
							href={githubURL}
							className="hover:bg-steel/50 p-1 rounded-sm transition-colors duration-300"
						>
							<Github />
						</Link>
					}
				</div>
			</div>
			{desc &&
				<p>{desc}</p>
			}
			{tools &&
				<div className="flex flex-row flex-wrap space-x-2">
					{tools.map((tool, index) => (
						<div key={index} className={toolClass}>{tool}</div>
					))}
				</div>
			}
		</div>
	)
}

export default ProjectTemplate