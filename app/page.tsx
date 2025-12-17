'use client'

import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import ProjectsIntro from "./components/ProjectsIntro";
import ExperienceSnapshot from "./components/ExperienceSnapshot";

export default function Home() {
	return (
		<div className="flex justify-center">
			<div className="w-2/5 relative flex flex-col">
				<Navbar />
				<main>
					<Map />
					<Intro />
					<ExperienceSnapshot />
					<ProjectsIntro />
				</main>
			</div>
		</div>
	)  
}
 