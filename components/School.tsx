import React from 'react'

type SchoolProps = {
    name: string;
    location: string;
    degree: string;
    major: string;
    minor: string[];
    graduation: string;
    gpa: string;
    honors: string;
    programs: string[];
    courses: string[];
}

const School = ({name, location, degree, major, minor, graduation, gpa, honors, programs, courses}: SchoolProps) => {
  return (
    <div className="p-5 my-10 mx-5 bg-blue-950 text-white rounded-lg">
        <h1>{name}, {location}</h1>
        <h2>{degree} in {major}, ({graduation})</h2>
        <h3>{minor}, {gpa}, {honors}, {programs}, {courses}</h3>
    </div>
  )
}

export default School