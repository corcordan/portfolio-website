import React from 'react'
import Dropdown from './Dropdown'
import SkillSection from './SkillSection'

const Skills = () => {
  return (
    <Dropdown
        text="Skills"
    >
        <SkillSection
            sectionName="Programming"
            skills={["Python", "Java", "C++", "TypeScript", "JavaScript", "SQL", "PHP", "R"]}
        />
        <SkillSection
            sectionName="Web & Frameworks"
            skills={["React", "Next.js", "Node.js", "HTML", "CSS", "Tailwind", "Leaflet.js", "OpenStreetMap"]}
        />
        <SkillSection
            sectionName="APIs & Data Sources"
            skills={["REST APIs", "WeatherAPI", "JSON", "GeoNames"]}
        />
        <SkillSection
            sectionName="AI/Data"
            skills={["PyTorch", "scikit-learn", "TensorFlow", "Keras", "NumPy", "Pandas", "MatPlotLib", "Huggingface Transformers"]}
        />
        <SkillSection
            sectionName="Database/Tools"
            skills={["MySQL", "PostgreSQL", "Supabase", "AWS", "Git", "Github", "Linux", "Unix"]}
        />
        <SkillSection
            sectionName="Other"
            skills={["Microsoft Office", "Excel", "macOs"]}
        />
        <SkillSection
            sectionName="Soft"
            skills={["Leadership", "Hard-working", "Problem-solving", "Detail-oriented", "Communication", "Adaptability", "Teamwork", "Organized", "Critical Thinking"]}
        />
    </Dropdown>
  )
}

export default Skills