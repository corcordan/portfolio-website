import React from 'react'
import Education from './Education'
import Experience from './Experience'

const Resume = () => {
  return (
    <div className="flex flex-col px-40 py-10 bg-blue-300">
      <h1 className="text-3xl text-center p-5 text-blue-950 font-bold">RESUME</h1>
      <div>

      </div>
      <Education />
      <Experience />
    </div>
  )
}

export default Resume