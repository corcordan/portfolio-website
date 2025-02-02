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
    <div className="p-5 md:my-10 my-5 mx-5 bg-blue-950 text-white rounded-lg">
        <h1>{name}, {location}</h1>
        <h2>{degree} in {major}, ({graduation})</h2>
        <h3>{programs.join(", ")}, {honors}, {gpa}</h3>
        <h3>Minors: {minor.join(", ")}</h3>
        <h3>Courses: {courses.join(", ")}</h3>
    </div>
  )
}

export default School