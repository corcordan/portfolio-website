import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col px-40 py-10 bg-blue-950">
      <h1 className="text-3xl text-center p-5 text-blue-300 font-bold">PROJECTS</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        <Project
          title="Feedforward Neural Network From Scratch"
          weblink="https://www.github.com/corcordan/nn-from-scratch"
          desc="Creating an FNN from scratch using only Python and NumPy, no other libraries. Anything else is for importing data and visualization."
          tech={[
            "Python",
            "NumPy",
            "pandas",
            "Matplotlib",
            "MNIST Dataset"
          ]}
        />
        <Project 
          title="Retrieval-Based Chatbot"
          weblink="https://www.github.com/corcordan/chatbot-nlp"
          desc="A basic chatbot that matches the prompt with the best possible output from a fixed dictionary. Want to build this out though."
          tech={[
            "Python",
            "Sentence Transformers"
          ]}
        />
        <Project
          title="Weather2Go"
          weblink="https://weather2go.net/"
          desc="Weather app that dynamically changes as your set trip progresses. Log trips you go on as well as track the places you've been. WORK IN PROGRESS."
          tech={[
            "TypeScript",
            "JavaScript",
            "React",
            "Next.js",
            "Supabase",
            "PostgreSQL",
            "SQL",
            "GeoNames database",
            "WeatherAPI",
            "Leaflet.js",
            "GoDaddy"
          ]}
        />
        <Project
          title="Portfolio Website"
          weblink="https://www.github.com/corcordan/portfolio-website"
          desc="The website you are on currently. WORK IN PROGRESS."
          tech={[
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "Github",
            "Cloudflare"
          ]}
        />
        <Project
          title="StudyGo: Academic Social Media"
          weblink="https://www.studygoonline.com"
          desc="An academic social media web app & Android app my team of 3 made in our capstone class. I worked mostly on the database and the web app."
          tech={[
            "HTML",
            "CSS",
            "PHP",
            "MySQL",
            "JavaScript",
            "Python",
            "Hostinger"
          ]}
        />
        <Project
          title="Snake Reinforcement Learning"
          desc="Casual snake game with reinforcement learning to optimize the game."
          tech={[
            "Python",
            "Pygame",
            "PyTorch",
            "VSCode"
          ]}
        />
        <Project
          title="Sudoku Solver"
          desc="Used backtracking to solve a given sudoku board using Python."
          tech={[
            "Python",
            "Backtracking",
            "PyCharm"
          ]}
        /> 
        <Project
          title="Space Invaders Recreation"
          desc="Classic Space Invaders game using Java & Agile Development."
          tech={[
            "Java",
            "Swing",
            "UML",
            "Eclipse"
          ]}
        />
      </div>
      <h1 className="text-xl text-center p-5 text-blue-300 font-bold">Other</h1>
      <div className="bg-blue-300 rounded-lg mx-40 flex justify-center items-center h-16">
        <a href="https://www.youtube.com/live/RNyDDbqyPWs" className="text-blue-950 text-xl font-bold">TEDx Talk: &quot;Divided We Talk, United We Grow&quot;</a>
      </div>     
    </div>
  )
}

export default Projects