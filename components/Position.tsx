import React from 'react'

type PositionProps = {
    title: string;
    organization: string;
    location: string;
    dates: string;
    responsibilities: string[];
}

const Position = ({title, organization, location, dates, responsibilities}: PositionProps) => {
  return (
    <div className="p-5 md:my-10 my-5 mx-5 bg-blue-950 text-white rounded-lg">
        <h2>{title} at {organization}</h2>
        <p>{location}, {dates}</p>
        <ul>
            {responsibilities.map(o => <li key={o}>- {o}</li>)}
        </ul>
    </div>
  )
}

export default Position