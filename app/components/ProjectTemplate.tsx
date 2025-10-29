import React from 'react'
import Dropdown from './Dropdown'
import Bullet from './Bullet'

type ProjectTemplateProps = {
    children?: React.ReactNode
    projectName: string
    techStack: string[]
    webURL?: string
    githubURL?: string
}   

const ProjectTemplate = ({ children, projectName, techStack, webURL, githubURL }: ProjectTemplateProps) => {
  return (
    <Dropdown
        text={projectName}
    >
        {children}
        {webURL &&
            <Bullet>
                <a
                    href={webURL}
                    target="_blank"
                >
                   To Web Page 
                </a>
            </Bullet>
        }
        {githubURL &&
            <Bullet>
                <a
                    href={githubURL}
                    target="_blank"
                >
                   To GitHub Page 
                </a>
            </Bullet>
        }
        <Dropdown
            text="Tech Stack"
        >
            {techStack.map((tech, i) => (
                <div key={i}>
                    <Bullet>
                        <p>{tech}</p>
                    </Bullet>
                </div>
            ))}
        </Dropdown>
    </Dropdown>
  )
}

export default ProjectTemplate