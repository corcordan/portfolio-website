import ProjectTemplate from "./ProjectTemplate"

const Projects = () => {
	// Might move project data to a separate file or an array later

	return (
		<div className="flex flex-col space-y-8">
			<div className="flex flex-col space-y-4">
				<p className="text-xl">Current Projects:</p>
				<ProjectTemplate 
					imageLink="/"
					title="EpiShowed"
					siteURL="https://epishowed.vercel.app/"
					githubURL="https://github.com/corcordan/epishowed"
					desc="Web app to view character data in TV series. Coming soon!"
					tools={["React", "Next.js", "TypeScript", "Tailwind CSS", "TMDB API", "Lucide"]}
				/>
				<ProjectTemplate 
					imageLink="/CorcordanPortfolio.png"
					title="My Portfolio Website"
					siteURL="https://www.corcordan.com/"
					githubURL="https://github.com/corcordan/portfolio-website"
					desc="My personal portfolio website to showcase my projects and experience. Blog to be added in the future."
					tools={["React", "Next.js", "TypeScript", "Tailwind CSS", "Maplibre GL", "Lucide"]}
				/>
				<ProjectTemplate 
					imageLink="/MNISTData.jpg"
					title="MNIST Digit Classifier from Scratch"
					githubURL="https://github.com/corcordan/nn-from-scratch"
					desc="Built a CNN from scratch to pick a number based on images provided by the MNIST Digit dataset. Only Python and NumPy were used, pandas was used for data handling."
					tools={["Python", "NumPy", "Pandas"]}

				/>
			</div>
			<div className="flex flex-col space-y-4">
				<p className="text-xl">Past Projects:</p>
				<ProjectTemplate 
					imageLink="/MovieEDA.png"
					title="Movie EDA"
					siteURL="https://movie-eda.streamlit.app/"
					githubURL="https://github.com/corcordan/movie-eda/"
					desc="An interactive web app for exploratory data analysis on movies data"
					tools={["Python", "Pandas", "Matplotlib", "Streamlit"]}
				/>
				<ProjectTemplate 
					imageLink="/K8WalshPortfolio.png"
					title="K8 Walsh Portfolio"
					siteURL="https://www.k8walsh.com/"
					githubURL="https://github.com/corcordan/kw-portfolio"
					desc="A clean portfolio website for Kate Walsh"
					tools={["React", "Next.js", "TypeScript", "Tailwind CSS", "Lucide"]}
				/>
				<ProjectTemplate 
					imageLink="/StudyGo.png"
					title="StudyGo"
					siteURL="https://studygoonline.com/"
					desc="Academic social media web app for university students. University capstone project"
					tools={["PHP", "MySQL", "JavaScript", "HTML", "CSS"]}
				/>
			</div>
		</div>
	)
}

export default Projects