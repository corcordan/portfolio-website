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
                title="Software Developer"
                company="Jibez"
                location="Remote"
                dates="02/2025 - Current"
                responsibilities={[
                    "Created the main web page for Jibez using Next.js",
                    "Currently working on a web app called Weather2Go that is a dynamic weather app specifically for trips. Creating it with Next.js and Supabase"
                ]}
            />
            <Job
                title="Consultant"
                company="Broadleaf Services"
                location="Remote"
                dates="06/2024 - 12/2024"
                responsibilities={[
                    "Spearheaded the creation and refinement of ISO 9001-compliant quality management processes using Office 365, enhancing efficiency, consistency, and quality of deliverables, leading to successful certification.",
                    "Partnered with senior leadership across departments to design and implement CMMI Level 3 processes within a DevOps environment, leveraging Azure DevOps for sprint planning and execution, ensuring alignment with organizational goals and process improvements.",
                    "Facilitated the company-wide adoption of new processes through comprehensive training sessions, communication strategies, and performance measurement tools, ensuring seamless integration and operational improvement.",
                    "Worked closely with application development leaders to embed CMMI best practices in continuous integration and delivery (CI/CD) environments, improving software development workflows.",
                    "Developed and standardized CMMI process artifacts, including process models, templates, and measurement tools to track performance and compliance.",
                    "Played a critical role in ISO 9001 and CMMI certification audits, developing necessary documentation, ensuring compliance, and directly contributing to the organization's successful certification milestones."
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