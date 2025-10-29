import React from 'react'
import Dropdown from './Dropdown'
import Bullet from './Bullet'

type SkillSectionProps = {
    sectionName: string
    skills: string[]
}

const SkillSection = ({ sectionName, skills }: SkillSectionProps) => {
  return (
    <Dropdown
        text={sectionName}
    >
        {skills.map((skill, i) => (
            <div key={i}>
                <Bullet>
                    <p>{skill}</p>
                </Bullet>
            </div>
        ))}
    </Dropdown>
  )
}

export default SkillSection