import React from 'react'
import Dropdown from './Dropdown'
import Bullet from './Bullet'

const Experience = () => {
  return (
    <Dropdown
      text="Experience"
    >
      <Dropdown
        text="Jibez: Software Engineer (02/20205 - Current)"
      >
        <Bullet>
          <p>
            Using Next.js, TypeScript, React, and Tailwind CSS, deployed via Vercel
          </p>
        </Bullet>
        <Bullet>
          <p>
            PostgreSQL/Supabase backend, secure user authentication, profile picture uploads via Supabase Storage, trip creation with geospatial data, and interactive maps using Leaflet.js
            and OpenStreetMap
          </p>
        </Bullet>
        <Bullet>
          <p>
            Transformed GeoNames city/country data with Python, cleaning and restructuring JSON
          </p>
        </Bullet>
        <Bullet>
          <p>
            Implemented Row-Level Security (RLS) policies, role-based permissions, and email-based account management
          </p>
        </Bullet>
        <Bullet>
          <p>
            Managed Git/GitHub version control with branching, semantic versioning, and alpha testing processes
          </p>
        </Bullet>
      </Dropdown>
      <Dropdown
        text="Broadleaf Services: IT Consultant (06/2024 - 12/2024)"
      >
        <Bullet>
          <p>
            Creation of ISO 9001-compliant quality management processes using Office 365
          </p>
        </Bullet>
        <Bullet>
          <p>
            Designed and implemented CMMI Level 3 processes within a DevOps environment, leveraging
            Azure DevOps for sprint planning and execution, contributing to the organization&apos;s successful CMMI certification
          </p>
        </Bullet>
        <Bullet>
          <p>
            Critical in ISO and CMMI certification audits by developing artifacts, ensuring compliance, and achieving certification milestones
          </p>
        </Bullet>
      </Dropdown>
      <Dropdown
        text="Xgility: Intern (05/2021 - 02/2022)"
      >
        <Bullet>
          <p>
            Conducted audits and provided project administration support for DoD contracts, ensuring smooth Azure and Office 365
            implementations
          </p>
        </Bullet>
        <Bullet>
          <p>
            Utilized ERP systems to track and resolve discrepancies, resulting in process optimizations
          </p>
        </Bullet>
      </Dropdown>
    </Dropdown>
  )
}

export default Experience