import React from 'react'
import Position from './Position'

const Leadership = () => {
  return (
    <div>
        <div>
            <h1 className="text-blue-950 p-5 underline text-xl font-bold uppercase">Leadership</h1>
        </div>
        <div>
            <Position
                title="Vice President of Member Development"
                organization="Sigma Phi Epsilon: Virginia Pi"
                location="Newport News, VA"
                dates="04/2023-04/2024"
                responsibilities={[
                    "Led a cabinet of 15 members, delegating tasks and overseeing fraternity-wide development initiatives.",
                    "Organized and planned brotherhood events, including one with the highest attendance in three years.",
                    "Managed the Balanced Man Program, guiding members through three stages: fraternity growth, personal development, and leadership training.",
                    "Coordinated speaker events and Sound Mind & Sound Body programs in collaboration with the university.",
                    "Worked with SigEp National Headquarters to ensure smooth chapter operations.",
                    "Hosted weekly development meetings to track progress and maintain chapter engagement."
                ]}
            />
        </div>
    </div>
  )
}

export default Leadership