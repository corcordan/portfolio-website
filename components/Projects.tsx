import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col px-40 py-10 bg-blue-950">
      <h1 className="text-3xl text-center p-5 text-blue-300 font-bold">PROJECTS</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        <Project
          title="Stock Market Data Analysis"
          link="https://www.github.com/corcordan/stock-data"
          desc="A data analysis of difference metrics in the stock market. WORK IN PROGRESS."
          tech={[
            "Python",
            "yfinance",
            "pandas",
            "Matplotlib"
          ]}
        />
        <Project
          title="Portfolio Website"
          link="https://www.github.com/corcordan/portfolio-website"
          desc="The website you are on currently. WORK IN PROGRESS."
          tech={[
            "TypeScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "Github",
            "Cloudflare"
          ]}
        />
        <Project
          title="StudyGo: Academic Social Media"
          link="https://www.studygoonline.com"
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
          title="Handwritten Digit Classification"
          desc="CNN using PyTorch to classify MNIST dataset."
          tech={[
            "Python",
            "Pycharm",
            "PyTorch",
            "MNIST"
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