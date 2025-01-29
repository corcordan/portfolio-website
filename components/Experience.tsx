import React from 'react'
import Job from './Job'

const Experience = () => {
  return (
    <div>
        <div>
            <h1 className="text-blue-950 p-5 underline text-xl font-bold uppercase">Work Experience</h1>
        </div>
        <div>
            <Job
                title="Consultant"
                company="Broadleaf Services"
                location="Remote"
                dates="06/2024 - 12/2024"
                responsibilities={[
                    "Spearheaded the creation of ISO 9001-compliant quality management processes using Office 365, enhancing efficiency, consistency, and quality of deliverables, and successful certification.",
                    "Collaborated with senior leaders to design and implement CMMI Level 3 processes within a DevOps environment, leveraging Azure DevOps for sprint planning and execution, directly contributing to the organization's successful CMMI certification.",
                    "Facilitated company-wide adoption of new processes through training sessions, communication strategies, and performance measurement tools.",
                    "Played a critical role in ISO and CMMI certification audits by developing artifacts, ensuring compliance, and achieving organizational certification milestones."
                ]} 
            />
            <Job
                title="Student Ambassador"
                company="Christopher Newport University"
                location="Newport News, VA"
                dates="05/2023 - 12/2024"
                responsibilities={[
                    "Increased university applications by 33% through effective communication and engagement strategies.",
                    "Conducted campus tours, simplifying complex information for prospective students and their families.",
                    "Collaborated with a team of 50 ambassadors to execute events, demonstrating strong teamwork."
                ]} 
            />
            <Job
                title="Intern"
                company="Xgility"
                location="Remote"
                dates="05/2021 - 2/2022"
                responsibilities={[
                    "Conducted audits and provided project administration support for DoD contracts, ensuring smooth Azure and Office 365 implementations.",
                    "Utilized ERP systems to track and resolve discrepancies, resulting in process optimizations that saved the company $40,000 through meticulous analysis and attention to detail."
                ]} 
            />        
        </div>
    </div>
  )
}

export default Experience