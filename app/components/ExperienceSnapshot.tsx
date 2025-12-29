'use client'

import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const ExperienceSnapshot = () => {
	const [hoverResume, setHoverResume] = useState(false)

	const toolClass = "bg-lush p-1.5 rounded shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-1 text-sm cursor-default mb-2"

	const tools = ["TypeScript", "Python", "React", "Next.js", "Supabase", " PostgreSQL", "Tailwind", "Framer Motion"]

	return (
		<div className="flex flex-col my-8">
			<p className="text-xl">Currently:</p>
			<div className="flex flex-col bg-slate/25 shadow-lg border-1 border-steel/25 p-4 rounded-2xl my-2">
				<p className="text-3xl">Software Engineer - Jibez</p>
				<p className="text-sm text-steel">Feb 2025 - Present</p>

				<ul className="text-xl list-disc pl-5 my-4">
					<li className="">Building Weather2Go, a dynamic geographical weather app</li>
				</ul>

				<div className="flex flex-row space-x-2 mb-4">
					<p className="text-xl">Tech:</p>
					<div className="flex flex-row flex-wrap space-x-2">
						{tools.map((tool, index) => (
							<div key={index} className={toolClass}>{tool}</div>
						))}
					</div>
				</div>
			</div>

			<Link
				href="/resume" 
				className="flex flex-row items-center"
				onMouseEnter={() => setHoverResume(true)}
				onMouseLeave={() => setHoverResume(false)}
			>
				<p className="text-xl">Go to Resume Page</p>
				<MoveRight className={`ml-2 transition-all duration-300 ease-in-out ${hoverResume && "translate-x-4 text-lush"}`} />
			</Link>
		</div>
	)
}

export default ExperienceSnapshot