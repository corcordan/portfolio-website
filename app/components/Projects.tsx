import React from 'react'
import Dropdown from './Dropdown'
import ProjectTemplate from './ProjectTemplate'
import Bullet from './Bullet'

const Projects = () => {
  return (
    <Dropdown
      text="Projects"
      isOpen={false}
    >
      <Dropdown
        text="Ongoing Projects"
      >
        <ProjectTemplate
          projectName="Portfolio Website"
          techStack={["React", "Tailwind", "TypeScript", "Next.js", "CloudFlare Pages"]}
          webURL="https://corcordan.com"
          githubURL="https://github.com/corcordan/portfolio-website"
        />
        <ProjectTemplate
          projectName="Weather2Go"
          techStack={["React", "Tailwind", "TypeScript", "Next.js", "Supabase", "PostgreSQL", "GeoNames", "Leaflet.js", "OpenStreetMap", "Framer Motion", "WeatherAPI.com", "Vercel"]}
        >
          <Bullet>
            <p>Project solely I am working on at Jibez. In Alpha stage</p>
          </Bullet>
        </ProjectTemplate>
        <ProjectTemplate
          projectName="Neural Network from Scratch"
          techStack={["Python", "NumPy"]}
          githubURL="https://github.com/corcordan/nn-from-scratch"
        />
      </Dropdown>
      <Dropdown
        text="Completed Projects"
      >
        <ProjectTemplate
          projectName="StudyGo"
          techStack={["PHP", "MySQL", "Hostinger", "HTML", "CSS", "JavaScript"]}
          webURL="https://studygoonline.com/"
        >
          <Bullet>
            <p>
              Final capstone project for the Computer Science major. Worked in a group of 3.
              I worked only on the web and database portion even though there was an Android portion as well.
            </p>
          </Bullet>
        </ProjectTemplate>
        <ProjectTemplate
          projectName="Space Invaders Recreation"
          techStack={["Java", "Swing", "UML"]}
        >
          <Bullet>
            <p>Project for Software Engineering class with a team.</p>
          </Bullet>
        </ProjectTemplate>
      </Dropdown>
    </Dropdown>
  )
}

export default Projects