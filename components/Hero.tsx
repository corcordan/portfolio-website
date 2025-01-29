import React from 'react'
import Header from './Header'

const Hero = () => {
  return (
    <div className="h-dvh flex flex-col">
      <Header />
      <div className="py-40 px-20 bg-blue-300 flex text-blue-950 flex-grow ">
        <div className="content-center">
          <h2 className="text-5xl">Hi, I am</h2>
          <h1 className="text-7xl font-bold">Daniel Corcoran</h1>
          <h2 className="text-4xl">Software Engineer</h2>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero