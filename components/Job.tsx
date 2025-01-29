import React from 'react'

type JobProps = {
    title: string;
    company: string;
    location: string;
    dates: string;
    responsibilities: string[];
}

const Job = ({title, company, location, dates, responsibilities}: JobProps) => {
  return (
    <div className="p-5 my-10 mx-5 bg-blue-950 text-white rounded-lg">
        <h2>{title} at {company}</h2>
        <p>{location}, {dates}</p>
        <ul>
            {responsibilities.map(o => <li key={o}>- {o}</li>)}
        </ul>
    </div>
  )
}

export default Job