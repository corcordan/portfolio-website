import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div className="flex flex-col px-40 py-10 bg-blue-950">
      <h1 className="text-3xl text-center p-5 text-blue-300 font-bold">PROJECTS</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        <Project
          title="Portfolio Website"
          link="https://www.github.com/corcordan/portfolio-website"
          desc="The website you are on currently"
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
          desc="A little academic social media web app and android app I made with two partners in our capstone class."
          tech={[
            "HTML",
            "CSS",
            "PHP",
            "MySQL",
            "JavaScript",
            "Hostinger"
          ]}
        />
        <Project
          title="Handwritten Digit Classification"
          desc="CNN using PyTorch to classify MNIST dataset"
          tech={[
            "Python",
            "Pycharm",
            "PyTorch",
            "MNIST"
          ]}
        /> 
        <Project
          title="Snake Reinforcement Learning"
          desc="Casual snake game with reinforcement learning to optimize the game"
          tech={[
            "Python",
            "Pygame",
            "PyTorch",
            "VSCode"
          ]}
        />
        <Project
          title="Sudoku Solver"
          desc="Used backtracking to solve a given sudoku board using Python"
          tech={[
            "Python",
            "Backtracking",
            "PyCharm"
          ]}
        /> 
        <Project
          title="Space Invaders Recreation"
          desc="Typical Space Invaders using Java"
          tech={[
            "Java",
            "Swing",
            "UML",
            "Eclipse"
          ]}
        />
      </div>     
    </div>
  )
}

export default Projects