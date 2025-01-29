import React from 'react'
import School from './School'

const Education = () => {
  return (
    <div>
        <div>
            <h1 className="text-blue-950 p-5 underline text-xl font-bold uppercase">Education</h1>
        </div>
        <div>
            <School
                name="Christopher Newport University"
                location="Newport News, VA"
                degree="B.S."
                major="Computer Science"
                minor={[
                    "Business Administration",
                    "Leadership Studies"
                ]}
                graduation="December 2024"
                gpa="3.53"
                honors="Cum Laude"
                programs={[
                    "Honors Program"
                ]}
                courses={[
                   "Software Egnineering",
                   "Data Manipulation",
                   "Database Management",
                   "Applied Artificial Intelligence",
                   "Algorithms",
                   "Operating Systems",
                   "Enterprise Management",
                   "Managerial Finance" 
                ]} />
        </div>
    </div>
  )
}

export default Education