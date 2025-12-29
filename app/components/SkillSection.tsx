import Bullet from './Bullet'

type SkillSectionProps = {
    sectionName: string
    skills: string[]
}

const SkillSection = ({ sectionName, skills }: SkillSectionProps) => {
    const skillClass = "bg-lush p-1.5 rounded shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-1 text-sm cursor-default mb-2"
    
    return (
        <div>
            <p>{sectionName}</p>
            <div className="flex flex-row flex-wrap space-x-2">
				{skills.map((skill, index) => (
					<div key={index} className={skillClass}>{skill}</div>
				))}
			</div>
        </div>
    )
}

export default SkillSection