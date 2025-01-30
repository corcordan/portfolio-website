import React from 'react'
import Education from './Education'
import Experience from './Experience'

const Resume = () => {
  return (
    <div className="flex flex-col px-40 py-10 bg-blue-300">
      <h1 className="text-3xl text-center p-5 text-blue-950 font-bold">RESUME</h1>
      <div className="flex justify-center">
        <button className="bg-blue-950 text-white py-5 px-10 rounded-3xl text-xl font-bold hover:underline">
          <a href="Daniel_Corcoran_Resume.pdf" download="Daniel_Corcoran_Resume">Download</a>
        </button>
      </div>
      <Education />
      <Experience />
    </div>
  )
}

export default Resume