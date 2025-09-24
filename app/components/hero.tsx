import { Briefcase, Lightbulb, MapPin } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col space-y-1 border-2 p-4 rounded-2xl shadow-lg">
      <p className="text-4xl">Daniel Corcoran</p>
      <div className="flex space-x-1">
        <Briefcase />
        <p className="text-xl">Software Engineer</p>
      </div>
      <div className="flex space-x-1">
        <Lightbulb />
        <p className="text-xl">AI, Geo, and Web</p>
      </div>
      <div className="flex space-x-1">
        <MapPin />
        <p className="text-xl">Salem, Massachusetts</p>
      </div>
    </div>
  )
}

export default Hero